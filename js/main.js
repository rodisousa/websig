const swiper = new Swiper('.swiper', {
    slidesPerView: 5, // Display 4 elements fully
    spaceBetween: 30,
    centeredSlides: true, // Center the active slide
    loop: true, // Infinite loop
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination', // Dots for navigation
      clickable: true, // Make the dots clickable
    },
    breakpoints: {
      768: {
        slidesPerView: 2, // Adjust for smaller screens
      },
      1024: {
        slidesPerView: 5,
      },
    },
});
// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
  // Get the navigation bar and the hero section
  const navbar = document.querySelector('.navbar');
  const hero = document.querySelector('#hero');

  // Add a scroll event listener to the window
  window.addEventListener('scroll', function () {
      // Get the height of the hero section
      const heroHeight = hero.offsetHeight;

      // Check if the scroll position is beyond the hero section
      if (window.scrollY > heroHeight) {
          navbar.classList.add('transparent-navbar'); // Add transparency class
      } else {
          navbar.classList.remove('transparent-navbar'); // Remove transparency class
      }
  });
});
document.addEventListener('DOMContentLoaded', function () {
  // Get all anchor links in the navbar
  const navLinks = document.querySelectorAll('.navbar a[href^="#"]');
  

  // Add a click event listener to each link
  navLinks.forEach(link => {
      link.addEventListener('click', function (e) {
          e.preventDefault(); // Prevent default anchor behavior

          // Get the target section id from the link's href
          const targetId = this.getAttribute('href').substring(1);
          const targetSection = document.getElementById(targetId);

          // Scroll to the section with a small offset for the fixed navbar
          if (targetSection) {
              const offset = targetSection.offsetTop - document.querySelector('.navbar').offsetHeight;
              window.scrollTo({
                  top: offset,
                  behavior: 'smooth' // Smooth scrolling
              });
          }
      });
  });
});