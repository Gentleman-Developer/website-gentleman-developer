// script.js – smooth scroll, reveal on scroll, optional tilt effect

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href').substring(1);
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      e.preventDefault();
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

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

// Optional lightweight tilt effect on project cards (vanilla-tilt)
if (typeof VanillaTilt !== 'undefined') {
  const cards = document.querySelectorAll('.project-card');
  cards.forEach(card => {
    VanillaTilt.init(card, {
      max: 8,
      speed: 300,
      glare: true,
      "max-glare": 0.2,
    });
  });
}
