document.addEventListener('DOMContentLoaded', () => {

    // ===== LÓGICA DEL CARRUSEL PRINCIPAL =====
    const slides = document.querySelectorAll('.carousel-item');
    let currentSlide = 0;

    if (slides.length > 0) {
        slides[0].classList.add('active');
        setInterval(() => {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }, 4000);
    }

    // ===== LÓGICA MENÚ HAMBURGUESA =====
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            
            setTimeout(() => {
                const targetId = link.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            }, 300);
        });
    });

    // ===== LÓGICA DE HEADER INTELIGENTE =====
    let lastScrollTop = 0;
    const header = document.querySelector('.header');
    const scrollThreshold = 100;

    window.addEventListener('scroll', () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop && scrollTop > scrollThreshold) {
            header.classList.add('header-hidden');
        } else {
            header.classList.remove('header-hidden');
        }

        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });

    // ===== LÓGICA CARRUSEL EN TARJETAS =====
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        const images = card.querySelectorAll('.card-img img');

        if (images.length > 1) {
            let imageIndex = 0;
            images[0].classList.add('active');

            setInterval(() => {
                images[imageIndex].classList.remove('active');
                imageIndex = (imageIndex + 1) % images.length;
                images[imageIndex].classList.add('active');
            }, 3000);
        }
    });

    // ===== LÓGICA ANIMACIÓN DE TARJETAS AL SCROLL =====
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.1 });

    cards.forEach(card => {
        card.style.opacity = "0";
        card.style.transform = "translateY(20px)";
        card.style.transition = "all 0.6s ease-out";
        observer.observe(card);
    });

    // ===== LÓGICA EFECTO PARALLAX EN FOTOS =====
    window.addEventListener('scroll', () => {
        const images = document.querySelectorAll('.item-foto img');
        images.forEach(img => {
            const rect = img.getBoundingClientRect();
            if(rect.top < window.innerHeight && rect.bottom > 0) {
                img.style.transform = `scale(${1 + (window.scrollY * 0.00005)})`;
            }
        });
    });

    // ===== LÓGICA BOTÓN DE RESERVAS =====
    const btnReserva = document.querySelector('.btn-tours');
    
    if (btnReserva) {
        setInterval(() => {
            btnReserva.style.transform = "scale(1.05)";
            setTimeout(() => {
                btnReserva.style.transform = "scale(1)";
            }, 200);
        }, 3000);

        btnReserva.addEventListener('click', () => {
            alert("Redirigiendo al sistema de reservas...");
        });
    }

});

document.addEventListener("DOMContentLoaded", function() {
    const items = document.querySelectorAll('.aventura-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.1 });

    items.forEach(item => {
        item.style.opacity = "0";
        item.style.transform = "translateY(20px)";
        item.style.transition = "all 0.6s ease-out";
        observer.observe(item);
    });
});



document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll('.excursion-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.1 });

    cards.forEach(card => {
        card.style.opacity = "0";
        card.style.transform = "translateY(20px)";
        card.style.transition = "all 0.6s ease-out";
        observer.observe(card);
    });
});



const formContacto = document.getElementById('formContacto');

if (formContacto) {
    formContacto.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(this);
        const texto = `Hola, mi nombre es ${formData.get('nombre')} ${formData.get('apellido')}. Mi teléfono es ${formData.get('telefono')}. Mensaje: ${formData.get('mensaje')}`;

        // Opción A: Abrir Email
        window.location.href = `mailto:tucorreo@ejemplo.com?subject=Consulta Web&body=${encodeURIComponent(texto)}`;
    });
}