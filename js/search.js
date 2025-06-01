const books = [
    { title: "The Book of Life", author: "Dr. Rajan Pandey", genre: "Classic" },
    { title: "Build The Life You Want", author: "Arthur C. Brooks", genre: "Fantasy" },
    { title: "The Power of Now", author: "Echkart Tolle", genre: "Classic" },
    { title: "The Soul", author: "Paul Ham", genre: "Fantasy" },
    { title: "The Books of Soul", author: "Mark Nepo", genre: "Fantasy" },
    { title: "Journey Souls", author: "Michael Newton", genre: "Fantasy" },
    { title: "All The Lving And The Dead", author: "Hayley Campbell", genre: "Fantasy" },
    { title: "When Breath Comes Air", author: "Paul Kalanithi", genre: "Fantasy" },
    { title: "Things I've Learned From Dying", author: "David R. Dow", genre: "Fantasy" },
    { title: "The Denial of Death", author: "Ernest Becker", genre: "Fantasy" },
    { title: "On Death And Dying", author: "Elizabeth Kiibler-Ross", genre: "Fantasy" },
    { title: "The Good Death", author: "Ann Neumann", genre: "Fantasy" },
    { title: "Love Your Life", author: "Victoria Osteen", genre: "Fantasy" },
    { title: "The Meaning of Life", author: "Nathanael Garret Novosel", genre: "Fantasy" },
    { title: "The Book of Life", author: "Deborah Harkness", genre: "Fantasy" },
    
];

function searchBooks() {
    const query = document.getElementById("searchInput").value.toLowerCase().trim();
    const resultsDiv = document.getElementById("searchResults");

    if (!query) {
        resultsDiv.innerHTML = "";
        return;
    }

    const keywords = query.split(/\s+/); // split by spaces

    const filtered = books.filter(book => {
        const text = `${book.title} ${book.author} ${book.genre}`.toLowerCase();
        return keywords.every(word => text.includes(word));
    });

    resultsDiv.innerHTML = filtered.length
        ? filtered.map(book =>
            `<div class="book-result">
                <h3>${book.title}</h3>
                <p><strong>Author:</strong> ${book.author}</p>
                <p><strong>Genre:</strong> ${book.genre}</p>
            </div>`
          ).join("")
        : "<p>No results found.</p>";
}