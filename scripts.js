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

  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío por defecto del formulario

    emailjs.sendForm('service_mu8jsmj', 'template_2ffh2vd', this)
        .then(function(response) {
            console.log('ENVIADO!', response.status, response.text);
            // Mostrar la alerta de éxito con SweetAlert
            Swal.fire({
                icon: 'success',
                title: '¡Formulario enviado!',
                text: 'Tu mensaje ha sido enviado con éxito. Nos pondremos en contacto contigo pronto.',
                confirmButtonText: 'OK'
            });
        }, function(error) {
            console.log('ERROR', error);
            // Mostrar la alerta de error con SweetAlert
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Hubo un problema al enviar el formulario. Por favor, inténtalo de nuevo.',
                confirmButtonText: 'OK'
            });
        });
});

VanillaTilt.init(document.querySelectorAll(".tarjeta, .tarjeta2, .tarjeta3"), {
    max: 55,
    speed: 400,
    glare: true,
    "max-glare": 0.5,
});

function handleMouseMove(event) {
    const tarjeta = event.currentTarget;
    const { clientX, clientY } = event; // Coordenadas del cursor
    const { offsetWidth, offsetHeight, offsetLeft, offsetTop } = tarjeta;

    const centerX = offsetLeft + offsetWidth / 2; // Centro del elemento en X
    const centerY = offsetTop + offsetHeight / 2; // Centro del elemento en Y

    const deltaX = clientX - centerX; // Diferencia entre el cursor y el centro en X
    const deltaY = clientY - centerY; // Diferencia entre el cursor y el centro en Y

    const rotationX = (deltaY / offsetHeight) * 15; // Calcular la rotación en X
    const rotationY = (deltaX / offsetWidth) * -15; // Calcular la rotación en Y

    tarjeta.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`; // Aplicar transformación
}

function resetTransform(event) {
    event.currentTarget.style.transform = 'rotateX(0deg) rotateY(0deg)';
}

document.querySelectorAll('.tarjeta, .tarjeta2, .tarjeta3').forEach(tarjeta => {
    tarjeta.addEventListener('mousemove', handleMouseMove);
    tarjeta.addEventListener('mouseleave', resetTransform);
});