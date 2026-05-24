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

  // Theme switch uses localStorage so the browser remembers the user's choice.
  // CSS variables are updated by adding or removing the body.light-mode class.
  const themeToggle = document.querySelector('.theme-toggle');
  const storedTheme = localStorage.getItem('theme');

  function applyTheme(theme) {
    if (theme === 'light') {
      body.classList.add('light-mode');
      body.classList.remove('dark-mode');
      if (themeToggle) {
        themeToggle.setAttribute('aria-pressed', 'true');
        themeToggle.setAttribute('aria-label', 'Switch to dark mode');
        themeToggle.querySelector('.theme-toggle__icon').textContent = '☀️';
      }
    } else {
      body.classList.remove('light-mode');
      body.classList.add('dark-mode');
      if (themeToggle) {
        themeToggle.setAttribute('aria-pressed', 'false');
        themeToggle.setAttribute('aria-label', 'Switch to light mode');
        themeToggle.querySelector('.theme-toggle__icon').textContent = '🌙';
      }
    }
    localStorage.setItem('theme', theme);
  }

  const initialTheme = storedTheme === 'light' ? 'light' : 'dark';
  applyTheme(initialTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      const nextTheme = body.classList.contains('light-mode') ? 'dark' : 'light';
      applyTheme(nextTheme);
    });
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
          
          // Stagger child cards/elements for layered reveal
          var cards = entry.target.querySelectorAll('.about-card, .timeline-card, .experience-card, .project-card, .skill-card, .achievement-card, .community-card, .resume-card, .contact-card');
          cards.forEach(function (card, index) {
            card.style.animationDelay = (index * 0.12) + 's';
            card.classList.add('card-reveal');
          });
          
          // Special handling for timeline items with alternating animations
          var timelineItems = entry.target.querySelectorAll('.timeline-item');
          timelineItems.forEach(function (item, index) {
            var content = item.querySelector('.timeline-content');
            if (content) {
              var isLeft = item.classList.contains('timeline-item--left');
              content.classList.add(isLeft ? 'timeline-slide-left' : 'timeline-slide-right');
              content.style.animationDelay = (index * 0.15) + 's';
            }
          });
          
          // Special glow effect for contact section
          if (entry.target.id === 'contact') {
            entry.target.classList.add('contact-glow-active');
          }
          
          revealObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: '0px 0px -8% 0px',
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
