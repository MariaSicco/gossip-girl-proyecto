// Obtener todos los elementos de las diapositivas e indicadores
const slides = document.querySelectorAll('.carousel-slide');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const indicators = document.querySelectorAll('.indicator');
let currentIndex = 0;

// Función para mostrar una diapositiva específica
function showSlide(index) {
    // Asegurarse de que el índice esté dentro de los límites
    if (index >= slides.length) currentIndex = 0;  // Volver al principio si es el último
    if (index < 0) currentIndex = slides.length - 1;  // Volver al final si es el primero

    // Mover el carrusel según el índice actual
    const carousel = document.querySelector('.carousel');
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;

    // Actualizar los indicadores (puntos) para reflejar la diapositiva activa
    indicators.forEach((indicator, i) => {
        indicator.classList.toggle('active', i === currentIndex);
    });
}

// Evento para la flecha "Siguiente"
nextBtn.addEventListener('click', () => {
    currentIndex++;  // Aumentar el índice
    showSlide(currentIndex);  // Mostrar la diapositiva correspondiente
});

// Evento para la flecha "Anterior"
prevBtn.addEventListener('click', () => {
    currentIndex--;  // Disminuir el índice
    showSlide(currentIndex);  // Mostrar la diapositiva correspondiente
});

// Evento para los indicadores (puntos)
indicators.forEach((indicator, i) => {
    indicator.addEventListener('click', () => {
        currentIndex = i;  // Cambiar al índice del indicador seleccionado
        showSlide(currentIndex);  // Mostrar la diapositiva correspondiente
    });
});

// Mostrar la primera diapositiva al cargar la página
showSlide(currentIndex);

// Automáticamente deslizar las imágenes cada 5 segundos (opcional)
let autoSlide = setInterval(() => {
    currentIndex++;
    showSlide(currentIndex);
}, 5000);  // Cambia las diapositivas cada 5 segundos

// Detener el carrusel automático al hacer clic en las flechas
prevBtn.addEventListener('click', () => clearInterval(autoSlide));
nextBtn.addEventListener('click', () => clearInterval(autoSlide));

// Detener el carrusel automático al hacer clic en los indicadores
indicators.forEach(indicator => {
    indicator.addEventListener('click', () => clearInterval(autoSlide));
});

