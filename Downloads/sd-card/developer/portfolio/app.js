(() => {
  const languageButton = document.querySelector('.language-toggle');
  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.site-nav');
  const copyButton = document.querySelector('.copy-button');
  const copyStatus = document.querySelector('.copy-status');
  const currentYear = document.querySelector('#current-year');
  let language = 'en';
  try {
    language = localStorage.getItem('renz-portfolio-language') === 'fil' ? 'fil' : 'en';
  } catch {
    // Language switching still works when browser storage is disabled.
  }

  const setLanguage = (nextLanguage) => {
    language = nextLanguage;
    document.documentElement.lang = language === 'fil' ? 'fil' : 'en';
    document.querySelectorAll('[data-en][data-fil]:not(meta)').forEach((element) => {
      const copy = element.dataset[language];
      if (copy !== undefined) element.innerHTML = copy;
    });
    document.querySelectorAll('meta[data-en][data-fil]').forEach((element) => { element.content = element.dataset[language]; });
    languageButton.setAttribute('aria-pressed', String(language === 'fil'));
    languageButton.setAttribute('aria-label', language === 'fil' ? 'Lumipat sa Ingles' : 'Switch to Filipino');
    menuButton.setAttribute('aria-label', menuButton.dataset[menuButton.getAttribute('aria-expanded') === 'true' ? `close${language === 'fil' ? 'Fil' : 'En'}` : `open${language === 'fil' ? 'Fil' : 'En'}`]);
    document.querySelectorAll('[data-aria-en][data-aria-fil]').forEach((element) => element.setAttribute('aria-label', element.dataset[`aria${language === 'fil' ? 'Fil' : 'En'}`]));
    copyButton.textContent = copyButton.dataset[language];
    document.title = language === 'fil' ? 'Jenren Renz B. Datan — Estudyanteng Developer' : 'Jenren Renz B. Datan — Student Developer';
    try {
      localStorage.setItem('renz-portfolio-language', language);
    } catch {
      // The selected language remains active for this page even without storage.
    }
  };

  const setMenu = (open) => {
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', menuButton.dataset[open ? `close${language === 'fil' ? 'Fil' : 'En'}` : `open${language === 'fil' ? 'Fil' : 'En'}`]);
    nav.classList.toggle('is-open', open);
    document.body.classList.toggle('menu-open', open);
  };

  languageButton.addEventListener('click', () => setLanguage(language === 'en' ? 'fil' : 'en'));
  menuButton.addEventListener('click', () => setMenu(menuButton.getAttribute('aria-expanded') !== 'true'));
  nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
      setMenu(false);
      menuButton.focus();
    }
  });
  window.addEventListener('resize', () => {
    if (window.innerWidth > 700 && menuButton.getAttribute('aria-expanded') === 'true') setMenu(false);
  });

  copyButton.addEventListener('click', async () => {
    const email = copyButton.dataset.copyEmail;
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(email);
      } else {
        throw new Error('Clipboard API unavailable');
      }
      copyStatus.textContent = copyButton.dataset[language === 'fil' ? 'copiedFil' : 'copiedEn'];
    } catch {
      const field = document.createElement('textarea');
      field.value = email;
      field.setAttribute('readonly', '');
      field.style.position = 'fixed';
      field.style.opacity = '0';
      document.body.append(field);
      field.select();
      const copied = document.execCommand('copy');
      field.remove();
      copyStatus.textContent = copied
        ? copyButton.dataset[language === 'fil' ? 'copiedFil' : 'copiedEn']
        : language === 'fil' ? 'Hindi nakopya. Piliin ang email address sa itaas.' : 'Could not copy. Select the email address above.';
    }
  });

  currentYear.textContent = String(new Date().getFullYear());
  document.querySelector('.portfolio-year').textContent = currentYear.textContent;
  setLanguage(language);

  const revealTargets = document.querySelectorAll(
    '.hero-copy, .hero-art, .band-inner > p, .section-heading, .project-card, .direction-heading, .direction-row, .about-copy, .contact-section h2'
  );
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches && 'IntersectionObserver' in window) {
    document.documentElement.classList.add('motion-ready');
    revealTargets.forEach((element, index) => {
      element.dataset.reveal = '';
      element.style.setProperty('--reveal-delay', `${(index % 4) * 85}ms`);
    });
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    revealTargets.forEach((element) => revealObserver.observe(element));
  }
})();
