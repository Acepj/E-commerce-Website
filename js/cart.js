let cartItems = [];

const cartIcon = document.querySelector(".cart-icon");
const modal = document.getElementById("cart-modal");
const closeBtn = document.querySelector(".close-btn");
const cartCount = document.querySelector('.cart-count');

function updateCartUI() {
    const modalContent = document.querySelector(".modal-content");
    const cartBody = document.createElement("div");
    cartBody.innerHTML = "";
    cartBody.style.color = "white";

    let total = 0;
    cartItems.forEach((item, index) => {
        total += item.price * item.quantity;
        cartBody.innerHTML += `
            <div class="cart-row">
                <strong>${item.title}</strong><br>
                Price: $${item.price} | Qty: 
                <button onclick="decreaseQty(${index})">-</button>
                ${item.quantity}
                <button onclick="increaseQty(${index})">+</button>
                <button onclick="removeItem(${index})">Remove</button>
            </div><hr>
        `;
    });

    cartBody.innerHTML += `<h3>Total: $${total.toFixed(2)}</h3><button onclick="checkout()">Checkout</button>`;
    modalContent.innerHTML = `<span class="close-btn">&times;</span><h2 style="color: white;">Your Cart</h2>`;
    modalContent.appendChild(cartBody);

    document.querySelector(".close-btn").addEventListener("click", closeCartModal);
}

function openCartModal() {
    modal.style.display = "flex";
    modal.classList.add("show");
    setTimeout(() => modal.style.opacity = 1, 10);
}

function closeCartModal() {
    modal.style.opacity = 0;
    setTimeout(() => {
        modal.style.display = "none";
        modal.classList.remove("show");
    }, 300);
}

// Click outside modal to close
window.addEventListener("click", (e) => {
    if (e.target === modal) closeCartModal();
});

// Cart icon click opens modal
cartIcon.addEventListener("click", openCartModal);

// Add to cart logic
document.querySelectorAll('.add-to-cart').forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const item = e.target.closest(".book-item");
        const title = item.getAttribute("data-title");
        const price = parseFloat(item.getAttribute("data-price"));

        const existing = cartItems.find(b => b.title === title);
        if (existing) {
            existing.quantity++;
        } else {
            cartItems.push({ title, price, quantity: 1 });
        }

        cartCount.textContent = cartItems.reduce((sum, b) => sum + b.quantity, 0);
        updateCartUI();
        openCartModal();
    });
});

function increaseQty(index) {
    cartItems[index].quantity++;
    updateCartUI();
    cartCount.textContent = cartItems.reduce((sum, b) => sum + b.quantity, 0);
}

function decreaseQty(index) {
    if (cartItems[index].quantity > 1) {
        cartItems[index].quantity--;
    } else {
        cartItems.splice(index, 1);
    }
    updateCartUI();
    cartCount.textContent = cartItems.reduce((sum, b) => sum + b.quantity, 0);
}

function removeItem(index) {
    cartItems.splice(index, 1);
    updateCartUI();
    cartCount.textContent = cartItems.reduce((sum, b) => sum + b.quantity, 0);
}

function checkout() {
    alert("Thank you for your purchase!");
    cartItems = [];
    cartCount.textContent = 0;
    updateCartUI();
}