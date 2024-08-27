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

// Configuración del Intersection Observer
let observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible'); // Añade la clase 'visible' cuando el elemento está en vista
      } else {
        entry.target.classList.remove('visible'); // Opcional: remueve la clase cuando el elemento sale de vista
      }
    });
  });
  
  // Selecciona todos los elementos que deseas observar
  let elementos = document.querySelectorAll('.elementoanim');
  
  // Observa cada elemento
  elementos.forEach(elementoanim => {
    observer.observe(elementoanim);
  });