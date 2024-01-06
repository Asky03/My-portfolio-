$(document).ready(function() {
    // Initialize Slick slider
    $('.slider').slick({
      arrows: false,
      dots: true,
      appendDots: '.slider-dots',
      dotsClass: 'dots'
    });
  
    // Mobile navigation toggle
    const hamburger = document.querySelector('.hamburger'); // Use const for variables that don't change
    const times = document.querySelector('.times');
    const mobileNav = document.querySelector('.mobile-nav');
  
    hamburger.addEventListener('click', () => { // Use arrow function for concise syntax
      mobileNav.classList.toggle('open'); // Use toggle for simpler toggling
    });
  
    times.addEventListener('click', () => {
      mobileNav.classList.remove('open');
    });
  });
  