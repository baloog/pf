/*
  script.js
  Lightweight JavaScript for navigation, smooth scroll, reveal animation,
  and active section highlighting.
*/

document.addEventListener('DOMContentLoaded', function () {
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelectorAll('.nav-links a');
  const sections = document.querySelectorAll('main section[id]');
  const revealItems = document.querySelectorAll('.reveal-on-scroll');
  const body = document.body;
  const heroImage = document.querySelector('.hero-image');

  function toggleNavigation() {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    body.classList.toggle('nav-open');
  }

  if (navToggle) {
    navToggle.addEventListener('click', toggleNavigation);
  }

  navLinks.forEach(function (link) {
    link.addEventListener('click', function (event) {
      const href = link.getAttribute('href');
      if (!href || !href.startsWith('#')) {
        return;
      }

      event.preventDefault();
      const targetElement = document.querySelector(href);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }

      if (body.classList.contains('nav-open')) {
        toggleNavigation();
      }
    });
  });

  const sectionObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        const id = entry.target.id;
        const navLink = document.querySelector(`.nav-links a[href="#${id}"]`);

        if (entry.isIntersecting) {
          navLinks.forEach(function (link) {
            link.classList.remove('active');
          });

          if (navLink) {
            navLink.classList.add('active');
          }
        }
      });
    },
    {
      rootMargin: '0px 0px -40% 0px',
      threshold: 0.2,
    }
  );

  sections.forEach(function (section) {
    sectionObserver.observe(section);
  });

  const revealObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: '0px 0px -10% 0px',
    }
  );

  revealItems.forEach(function (item) {
    revealObserver.observe(item);
  });

  const typedCopy = document.querySelector('.hero__copy--typing');
  const heroTitle = document.querySelector('.hero__title');

  function revealHeroTitle() {
    if (heroTitle) {
      heroTitle.classList.add('hero__title--visible');
    }
  }

  function typeHeroText() {
    if (!typedCopy) {
      return;
    }

    const text = typedCopy.dataset.typingText || typedCopy.textContent.trim();
    typedCopy.textContent = '';
    typedCopy.classList.add('typing-active');

    let index = 0;
    const typeSpeed = 38;

    function typeChar() {
      if (index < text.length) {
        typedCopy.textContent += text[index];
        index += 1;
        window.setTimeout(typeChar, typeSpeed);
      } else {
        typedCopy.classList.remove('typing-active');
      }
    }

    typeChar();
  }

  window.setTimeout(function () {
    revealHeroTitle();
    typeHeroText();
  }, 250);

  if (heroImage) {
    heroImage.addEventListener('error', function () {
      console.log('Hero image failed to load:', heroImage.src);
      heroImage.style.display = 'none';
    });

    heroImage.addEventListener('load', function () {
      console.log('Hero image loaded successfully:', heroImage.src);
    });
  }
});
