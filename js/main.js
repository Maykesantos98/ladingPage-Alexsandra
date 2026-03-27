// Nav behavior: transparent, hide on down scroll, show on up scroll
const nav = document.getElementById('nav');
if (nav) {
  let lastScrollY = window.scrollY;

  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    const scrollingDown = currentScrollY > lastScrollY;
    const pastThreshold = currentScrollY > 80;
    const shouldBeSolid = currentScrollY > 24;

    nav.classList.toggle('solid', shouldBeSolid);

    if (scrollingDown && pastThreshold) {
      nav.classList.add('nav-hidden');
    } else {
      nav.classList.remove('nav-hidden');
    }

    lastScrollY = currentScrollY;
  }, { passive: true });
}

// Hamburger menu
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    const isOpen = hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen);
    mobileMenu.setAttribute('aria-hidden', !isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });
  // Close mobile menu on link click
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
      hamburger.setAttribute('aria-expanded', false);
      mobileMenu.setAttribute('aria-hidden', true);
      document.body.style.overflow = '';
    });
  });
}

// Section-specific reveal flavor for a more editorial feel
document.querySelectorAll('.pain-left, .about-image-area').forEach(el => el.classList.add('reveal-left'));
document.querySelectorAll('.about-text, .modal-card.mc-presencial').forEach(el => el.classList.add('reveal-right'));
document.querySelectorAll('.modal-card.mc-online, .schedule-card, .faq-list').forEach(el => el.classList.add('reveal-zoom'));

// Scroll reveal animation
const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
revealEls.forEach(el => observer.observe(el));

// Active nav link while scrolling
const sectionTargets = ['sobre', 'como-funciona', 'faq']
  .map(id => document.getElementById(id))
  .filter(Boolean);
const navLinks = Array.from(document.querySelectorAll('.nav-menu a[href^="#"]'));

if (sectionTargets.length && navLinks.length) {
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const id = entry.target.getAttribute('id');
      navLinks.forEach(link => {
        const isActive = link.getAttribute('href') === `#${id}`;
        link.style.color = isActive ? 'var(--mint)' : '';
      });
    });
  }, { threshold: 0.45 });

  sectionTargets.forEach(section => sectionObserver.observe(section));
}

// FAQ icon toggle
document.querySelectorAll('.faq').forEach(detail => {
  detail.addEventListener('toggle', () => {
    const icon = detail.querySelector('.faq-arrow');
    if (icon) {
      icon.textContent = detail.open ? '×' : '+';
    }
  });
});

// Smooth anchor scroll
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({
        behavior: prefersReducedMotion ? 'auto' : 'smooth',
        block: 'start'
      });
    }
  });
});

// Back to top button
const backTopBtn = document.getElementById('backTopBtn');
if (backTopBtn) {
  const toggleBackTop = () => {
    backTopBtn.classList.toggle('is-visible', window.scrollY > 320);
  };

  window.addEventListener('scroll', toggleBackTop, { passive: true });
  toggleBackTop();

  backTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? 'auto' : 'smooth'
    });
  });
}
