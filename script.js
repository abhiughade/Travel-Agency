// Initialize Swiper
const swiper = new Swiper('.swiper', {
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },
});

// Navbar shadow on scroll
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
      header.classList.add('shadow');
  } else {
      header.classList.remove('shadow');
  }
});

// Mobile menu toggle
const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
  navbar.classList.toggle('active');
  menuIcon.classList.toggle('bx-x');
});

// Smooth scrolling
navbar.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      targetSection.scrollIntoView({ behavior: 'smooth' });
      
      // Close the menu
      navbar.classList.remove('active');
      menuIcon.classList.remove('bx-x');
  });
});
