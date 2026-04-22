    // DOM Elements
    const menuToggle = document.querySelector('.menu-toggle');
    const navbarMenu = document.querySelector('.navbar-menu');
    const dropdowns = document.querySelectorAll('.dropdown');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle Mobile Menu
    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('active');
      navbarMenu.classList.toggle('active');
    });

    // Handle Dropdowns
    dropdowns.forEach(dropdown => {
      const toggle = dropdown.querySelector('.dropdown-toggle');
      
      toggle.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Close other dropdowns when opening a new one
        dropdowns.forEach(otherDropdown => {
          if (otherDropdown !== dropdown && otherDropdown.classList.contains('active')) {
            otherDropdown.classList.remove('active');
          }
        });
        
        dropdown.classList.toggle('active');
      });
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.dropdown')) {
        dropdowns.forEach(dropdown => {
          dropdown.classList.remove('active');
        });
      }
    });

    // Active Link State (for demo purposes)
    navLinks.forEach(link => {
      if (!link.parentElement.classList.contains('dropdown')) {
        link.addEventListener('click', () => {
          navLinks.forEach(otherLink => {
            otherLink.classList.remove('active');
          });
          link.classList.add('active');
        });
      }
    });

    // Close mobile menu when a link is clicked
    document.querySelectorAll('.navbar-menu a').forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 991) {
          menuToggle.classList.remove('active');
          navbarMenu.classList.remove('active');
        }
      });
    });

    // Handle resize events to reset mobile menu state when switching to desktop
    window.addEventListener('resize', () => {
      if (window.innerWidth > 991) {
        if (menuToggle.classList.contains('active')) {
          menuToggle.classList.remove('active');
          navbarMenu.classList.remove('active');
        }
      }
    });