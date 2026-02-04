// scripts.js
// This script handles the mobile navigation and section switching for the
// Marlborough investor app. It uses vanilla JavaScript to toggle the side
// menu and to show or hide content sections based on user selection.

document.addEventListener('DOMContentLoaded', function () {
  const sideMenu = document.getElementById('sideMenu');
  const menuToggle = document.querySelector('.menu-toggle');
  const closeMenu = document.querySelector('.close-menu');
  const menuLinks = document.querySelectorAll('.menu-link');

  // Open the side menu
  menuToggle.addEventListener('click', () => {
    sideMenu.classList.add('open');
  });

  // Close the side menu
  closeMenu.addEventListener('click', () => {
    sideMenu.classList.remove('open');
  });

  // Handle navigation between sections
  menuLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      // Close menu on selection
      sideMenu.classList.remove('open');
      const targetId = link.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      // Hide all sections
      document.querySelectorAll('.section').forEach((section) => {
        section.classList.remove('active');
      });
      // Show the targeted section
      if (targetSection) {
        targetSection.classList.add('active');
      }
      // Scroll to top smoothly
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });

  // Activate section based on URL hash on initial load. This ensures that
  // when users return from a research document via a hash (e.g., #research),
  // the corresponding section is displayed instead of defaulting to the dashboard.
  const initialHash = window.location.hash;
  if (initialHash) {
    const targetId = initialHash.substring(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      // Hide all sections
      document.querySelectorAll('.section').forEach((section) => {
        section.classList.remove('active');
      });
      // Show the target section
      targetSection.classList.add('active');
      // Scroll to the target section so it is visible on load when returning
      // from a document page. Without scrolling, users may land at the top
      // of the page and think they are on the dashboard.
      targetSection.scrollIntoView({ behavior: 'auto', block: 'start' });
    }
  }
});