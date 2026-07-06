/* 
  RunCode IDE - Navigation Controller
  Powers smooth navigation tabs, active page highlights, and responsive mobile menu drawers.
*/

document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu selectors
  const menuToggle = document.getElementById('static-menu-toggle');
  const mobileMenu = document.getElementById('static-mobile-menu');
  const menuIconOpen = document.getElementById('menu-icon-open');
  const menuIconClose = document.getElementById('menu-icon-close');

  // Sticky header state updates
  const header = document.querySelector('.header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.style.backgroundColor = 'rgba(13, 13, 18, 0.95)';
      header.style.borderBottomColor = 'rgba(14, 165, 233, 0.2)';
    } else {
      header.style.backgroundColor = 'rgba(13, 13, 18, 0.8)';
      header.style.borderBottomColor = 'rgba(42, 47, 69, 0.6)';
    }
  });

  // Mobile menu click handlers
  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
      const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', !isExpanded);
      mobileMenu.classList.toggle('active');
      
      if (isExpanded) {
        // Toggle closed icons
        menuIconOpen.style.display = 'block';
        menuIconClose.style.display = 'none';
      } else {
        // Toggle opened icons
        menuIconOpen.style.display = 'none';
        menuIconClose.style.display = 'block';
      }
    });
  }

  // Smooth hash routing scrolls
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        
        // Close mobile menu drawer if active
        if (mobileMenu && mobileMenu.classList.contains('active')) {
          menuToggle.click();
        }
        
        // Target offset scroll top computation
        const headerOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // Highlight active header link based on viewport scroll sections
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const highlightNav = () => {
    let scrollY = window.pageYOffset;
    
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');
      
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });

    if (scrollY < 100) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.tagName === 'BUTTON' || link.getAttribute('href') === '#' || link.getAttribute('href') === 'index.html') {
          link.classList.add('active');
        }
      });
    }
  };

  if (sections.length > 0) {
    window.addEventListener('scroll', highlightNav);
    highlightNav();
  }
});
