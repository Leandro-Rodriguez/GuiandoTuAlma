document.addEventListener("DOMContentLoaded", function() {
    const header = document.getElementById('main-header');
    const menuHamburguesa = document.querySelector('.menu-hamburguesa');
    const navLinks = document.querySelector('nav ul');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        // Verifica si el menú de hamburguesa no está abierto
        if (!navLinks.classList.contains('open')) {
            if (window.scrollY > lastScrollY) {
                header.style.top = '-100px'; // Desaparece al hacer scroll hacia abajo
            } else {
                header.style.top = '0'; // Reaparece al hacer scroll hacia arriba
            }
        }
        lastScrollY = window.scrollY;
    });

    menuHamburguesa.addEventListener('click', () => {
        navLinks.classList.toggle('open');
        // Si el menú se abre, asegura que la barra de navegación esté visible
        if (navLinks.classList.contains('open')) {
            header.style.top = '0';
        }
    });
});