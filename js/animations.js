/* 
  RunCode IDE - Scroll Entry Animations
  Triggers smooth fades and shifts on scroll via IntersectionObserver.
*/

document.addEventListener('DOMContentLoaded', () => {
  const animateOnScrollElements = document.querySelectorAll('.scroll-fade');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    animateOnScrollElements.forEach(el => {
      // Add standard start position styles
      el.style.opacity = '0';
      el.style.transform = 'translateY(12px)';
      el.style.transition = 'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
      observer.observe(el);
    });
  } else {
    // Fallback if IntersectionObserver not supported
    animateOnScrollElements.forEach(el => {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    });
  }
});
