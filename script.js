// Reveal animation using IntersectionObserver
const revealElements = document.querySelectorAll('.reveal');
const observerOptions = {
  threshold: 0.15,
};
const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);
revealElements.forEach(el => revealObserver.observe(el));

// Sliders logic
function initSlider(sliderId) {
  const slider = document.getElementById(sliderId);
  if (!slider) return;
  const slides = slider.querySelectorAll('.slide');
  const prevBtn = slider.querySelector('.prev-btn');
  const nextBtn = slider.querySelector('.next-btn');
  
  if (slides.length === 0) return;
  
  let currentIndex = 0;
  let intervalId;

  function showSlide(index) {
    slides[currentIndex].classList.remove('active');
    currentIndex = index;
    
    if (currentIndex >= slides.length) currentIndex = 0;
    if (currentIndex < 0) currentIndex = slides.length - 1;
    
    slides[currentIndex].classList.add('active');
  }

  function nextSlide() {
    showSlide(currentIndex + 1);
  }

  function prevSlide() {
    showSlide(currentIndex - 1);
  }
  
  function startAutoplay() {
    clearInterval(intervalId);
    intervalId = setInterval(nextSlide, 5000); // Change every 5 seconds
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      nextSlide();
      startAutoplay(); // Reset timer on manual navigation
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      prevSlide();
      startAutoplay(); // Reset timer on manual navigation
    });
  }

  startAutoplay();
}

// Initialize sliders for both apps
document.addEventListener('DOMContentLoaded', () => {
  initSlider('allah-slider');
  initSlider('pasea-slider');
});
