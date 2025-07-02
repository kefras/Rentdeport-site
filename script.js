// ===== Mobile menu toggle =====
const hamburger = document.getElementById('hamburger');
const navMenu   = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => navMenu.classList.toggle('open'));

// Close menu when link is clicked (mobile)
navMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navMenu.classList.remove('open'));
});

// ===== Smooth scroll (optional) =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    if (this.getAttribute('href') !== '#') {
      e.preventDefault();
      document.querySelector(this.getAttribute('href'))
              .scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ===== Current year in footer =====
document.getElementById('year').textContent = new Date().getFullYear();
