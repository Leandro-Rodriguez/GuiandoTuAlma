document.addEventListener("DOMContentLoaded", function() {
    const header = document.getElementById('main-header');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        if (window.scrollY > lastScrollY) {
            header.style.top = '-100px';
        } else {
            header.style.top = '0';
        }
        lastScrollY = window.scrollY;
    });

    const menuHamburguesa = document.querySelector('.menu-hamburguesa');
    const navLinks = document.querySelector('nav ul');

    menuHamburguesa.addEventListener('click', () => {
        navLinks.classList.toggle('open');
    });
});