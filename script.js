let slideIndex = 0;
showSlides(slideIndex);

function changeSlide(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    const slides = document.querySelectorAll('.carousel-slide');
    if (n >= slides.length) {
        slideIndex = 0;
    } 
    if (n < 0) {
        slideIndex = slides.length - 1;
    }
    slides.forEach(slide => slide.style.display = 'none');
    slides[slideIndex].style.display = 'block';
}

document.querySelector('.prev').addEventListener('click', () => changeSlide(-1));
document.querySelector('.next').addEventListener('click', () => changeSlide(1));
