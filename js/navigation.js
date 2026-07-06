/* 
  RunCode IDE - Navigation Controllers
  Manages mobile menu toggles and smooth target anchors.
*/

document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('static-menu-toggle');
  const mobileMenu = document.getElementById('static-mobile-menu');
  const menuIconOpen = document.getElementById('menu-icon-open');
  const menuIconClose = document.getElementById('menu-icon-close');

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
      const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', !isExpanded);
      mobileMenu.classList.toggle('active');
      
      if (isExpanded) {
        // Closed State
        menuIconOpen.style.display = 'block';
        menuIconClose.style.display = 'none';
        mobileMenu.style.maxHeight = '0px';
        mobileMenu.style.opacity = '0';
      } else {
        // Opened State
        menuIconOpen.style.display = 'none';
        menuIconClose.style.display = 'block';
        mobileMenu.style.maxHeight = '400px';
        mobileMenu.style.opacity = '1';
      }
    });
  }

  // Smooth hash scroll handler
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        
        // Close mobile menu if open
        if (mobileMenu && mobileMenu.classList.contains('active')) {
          menuToggle.click();
        }
        
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});
