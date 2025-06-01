window.addEventListener('DOMContentLoaded', () => {
    const navBar = document.querySelector('.nav-bar');
    const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.nav-bar ul');
    const navItems = document.querySelectorAll('.nav-bar ul li a');

    // Toggle mobile menu
    menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Close mobile menu on link click
    navItems.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // Change navbar on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navBar.classList.add('scrolled');
        } else {
            navBar.classList.remove('scrolled');
        }
    });
});