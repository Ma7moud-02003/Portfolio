

import { renderSkills, renderProjects, closeProjectDetails, openFullscreenModal, closeFullscreenModal } from './ui.js';

document.addEventListener('DOMContentLoaded', () => {
  renderSkills();
  renderProjects();
  initMobileMenu();
  initNavbarScrollEffect();
  initActiveNavHighlighting();
  initProjectModal();
  initFullscreenImageModal();
});

/* ----------------------------- Mobile menu ----------------------------- */
function initMobileMenu() {
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIcon = document.getElementById('menu-icon');
  if (!menuBtn || !mobileMenu || !menuIcon) return;

  menuBtn.addEventListener('click', () => {
    const willOpen = mobileMenu.classList.contains('hidden');
    mobileMenu.classList.toggle('hidden');
    menuBtn.setAttribute('aria-expanded', String(willOpen));
    menuIcon.classList.toggle('fa-bars', !willOpen);
    menuIcon.classList.toggle('fa-xmark', willOpen);
  });

  mobileMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      menuBtn.setAttribute('aria-expanded', 'false');
      menuIcon.classList.replace('fa-xmark', 'fa-bars');
    });
  });
}

/* --------------------------- Navbar on scroll --------------------------- */
function initNavbarScrollEffect() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      navbar.classList.toggle('py-2', window.scrollY > 50);
      navbar.classList.toggle('shadow-2xl', window.scrollY > 50);
      ticking = false;
    });
  });
}

/* ------------------------ Active section highlight ------------------------ */
function initActiveNavHighlighting() {
  const sections = document.querySelectorAll('main section[id]');
  const navLinks = document.querySelectorAll('.nav-item');
  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((link) => {
          const isActive = link.getAttribute('href') === `#${entry.target.id}`;
          link.classList.toggle('active', isActive);
          if (isActive) {
            link.setAttribute('aria-current', 'page');
          } else {
            link.removeAttribute('aria-current');
          }
        });
      });
    },
    { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
  );

  sections.forEach((section) => observer.observe(section));
}

/* ----------------------------- Project modal ----------------------------- */
function initProjectModal() {
  const closeBtn = document.getElementById('close-project-btn');
  const page = document.getElementById('project-details-page');
  if (closeBtn) closeBtn.addEventListener('click', closeProjectDetails);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && page && !page.classList.contains('hidden')) {
      closeProjectDetails();
    }
  });
}

/* ------------------------- Fullscreen image modal ------------------------- */
function initFullscreenImageModal() {
  const mainImgWrapper = document.getElementById('main-view-img');
  const modal = document.getElementById('fullscreen-modal');
  const modalImg = document.getElementById('modal-img');
  const closeBtn = document.getElementById('close-fullscreen-btn');

  if (mainImgWrapper) {
    mainImgWrapper.addEventListener('click', () => openFullscreenModal(mainImgWrapper.src, mainImgWrapper.alt));
  }
  if (closeBtn) closeBtn.addEventListener('click', closeFullscreenModal);
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeFullscreenModal();
    });
  }
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && !modal.classList.contains('hidden')) {
      closeFullscreenModal();
    }
  });
}
