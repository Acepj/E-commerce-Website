function sendMail(event) {
    event.preventDefault();
    // const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const feedback = document.getElementById('form-message');

    if (!name || !email || !message) {
        feedback.textContent = "All fields are required.";
        feedback.style.color = "red";
        return;
    }

    feedback.textContent = "Message sent successfully!";
    feedback.style.color = "green";

    document.getElementById('contact-form').reset();
}