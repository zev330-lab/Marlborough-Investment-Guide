// scripts.js
// This script handles the mobile navigation and section switching for the
// Marlborough investor app. It uses vanilla JavaScript to toggle the side
// menu and to show or hide content sections based on user selection.

document.addEventListener('DOMContentLoaded', function () {
  // Select all navigation links in the top nav
  const navLinks = document.querySelectorAll('.nav-link');

  // When a nav link is clicked, switch sections
  navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
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
});