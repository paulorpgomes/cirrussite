document.addEventListener('DOMContentLoaded', function() {
    // Exemplo de script para adicionar funcionalidade em suas páginas
    console.log('Site carregado com sucesso!');
    
});

let currentSlide = 0;

function showSlide(slideIndex) {
    const slides = document.querySelector(".slides");
    const totalSlides = document.querySelectorAll(".slide").length;

    if (slideIndex >= totalSlides) {
        currentSlide = 0;
    } else if (slideIndex < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = slideIndex;
    }

    const offset = -currentSlide * 100; // Calcula o deslocamento em porcentagem
    slides.style.transform = `translateX(${offset}%)`;
}

function changeSlide(direction) {
    showSlide(currentSlide + direction);
}

// Exibe o primeiro slide ao carregar
showSlide(currentSlide);

// Define uma rotação automática para os slides a cada 5 segundos
setInterval(() => changeSlide(1), 5000);

