// ============================================================================
// Pushpendra Singh — Personal Website
// Minimal interactive enhancements
// ============================================================================

document.addEventListener('DOMContentLoaded', () => {

  // ------------------------------------------------------------------
  // Nav: hide on scroll down, show on scroll up
  // ------------------------------------------------------------------
  const nav = document.querySelector('.nav');
  let lastScroll = 0;
  let ticking = false;

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const currentScroll = window.pageYOffset;

        if (currentScroll <= 80) {
          nav.style.transform = 'translateY(0)';
          nav.style.boxShadow = 'none';
        } else if (currentScroll > lastScroll && currentScroll > 200) {
          // scrolling down
          nav.style.transform = 'translateY(-100%)';
        } else {
          // scrolling up
          nav.style.transform = 'translateY(0)';
          nav.style.boxShadow = '0 1px 0 var(--rule-soft)';
        }

        lastScroll = currentScroll;
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });

  // Smooth transition for the nav hide/show
  nav.style.transition = 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease';

  // ------------------------------------------------------------------
  // Intersection-observer scroll reveals for sections
  // ------------------------------------------------------------------
  const reveal = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  };

  const observer = new IntersectionObserver(reveal, {
    threshold: 0.08,
    rootMargin: '0px 0px -40px 0px'
  });

  // Observe every section (except the hero, which has its own staggered reveal)
  document.querySelectorAll('.section').forEach((section) => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(24px)';
    section.style.transition = 'opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1), transform 0.9s cubic-bezier(0.16, 1, 0.3, 1)';
    observer.observe(section);
  });

  // ------------------------------------------------------------------
  // Current year in footer (if the footer has a year placeholder)
  // ------------------------------------------------------------------
  const yearEl = document.querySelector('[data-year]');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

});
