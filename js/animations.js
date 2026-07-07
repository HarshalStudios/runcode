/* 
  RunCoder IDE - Scroll Entry Animations
  Triggers sleek fade-ins and translates when elements enter the screen.
*/

document.addEventListener('DOMContentLoaded', () => {
  const scrollFadeElements = document.querySelectorAll('.scroll-fade');

  if ('IntersectionObserver' in window) {
    const animationObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
          animationObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.08,
      rootMargin: '0px 0px -40px 0px'
    });

    scrollFadeElements.forEach(element => {
      // Set initial styles for animation entrance
      element.style.opacity = '0';
      element.style.transform = 'translateY(15px)';
      element.style.transition = 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
      animationObserver.observe(element);
    });
  } else {
    // Graceful fallback for legacy browsers without observer support
    scrollFadeElements.forEach(element => {
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    });
  }
});
