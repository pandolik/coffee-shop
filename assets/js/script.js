
let currentSlide = 2;
const totalSlides = 6;

function changeSlide(n) {
    currentSlide += n;
    if (currentSlide > totalSlides) currentSlide = 1;
    if (currentSlide < 1) currentSlide = totalSlides;
    updateProgress();
}

function updateProgress() {
    const progress = document.querySelector('.testimonial__progress');
    const progressPercentage = (currentSlide / totalSlides) * 100;
    progress.style.width = `${progressPercentage}%`;
    document.querySelector('.testimonial__count-people').textContent = `${currentSlide}/${totalSlides} People`;
}

// Инициализация прогресса
updateProgress();

