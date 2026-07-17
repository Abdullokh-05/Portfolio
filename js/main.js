// ============================================================
// main.js — Core JavaScript
// Abdullokh Tashpulatov Portfolio
// ============================================================

// ── Wait for DOM ─────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initLoader();
  initTheme();
  initLanguage();
  initMobileMenu();
  initHeader();
  renderPortfolio();
  loadDynamicPortfolio();
  renderTestimonials();
  renderSkills();
  renderServices();
  initPortfolioFilter();
  initModal();
  initTestimonialsSlider();
  initContactForm();
  initScrollAnimations();
  initActiveNav();
  initReviewModal();
});

// ============================================================
// LOADER
// ============================================================
function initLoader() {
  const loader = document.getElementById('loader');
  if (!loader) return;

  window.addEventListener('load', () => {
    setTimeout(() => {
      loader.classList.add('hidden');
      document.body.style.overflow = '';
      // Start hero animations after load
      animateHero();
    }, 600);
  });

  document.body.style.overflow = 'hidden';
}

function animateHero() {
  if (typeof gsap === 'undefined') return;
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
  tl.fromTo('.hero__label',       { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7 }, 0.1)
    .fromTo('.hero__title',       { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.9 }, 0.25)
    .fromTo('.hero__subtitle',    { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8 }, 0.5)
    .fromTo('.hero__description', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7 }, 0.7)
    .fromTo('.hero__cta',         { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7 }, 0.9)
    .fromTo('.hero__scroll',      { opacity: 0 },        { opacity: 1, duration: 0.5 }, 1.2)
    .fromTo('.hero__frame',       { opacity: 0, scale: 1.02 }, { opacity: 1, scale: 1, duration: 1 }, 0);
}

// ============================================================
// THEME (Dark / Light)
// ============================================================
function initTheme() {
  const toggle = document.getElementById('themeToggle');
  const saved = localStorage.getItem('theme') || 'dark';
  setTheme(saved);

  toggle?.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    setTheme(current === 'dark' ? 'light' : 'dark');
  });
}

function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
}

// ============================================================
// LANGUAGE SWITCHER
// ============================================================
let currentLang = localStorage.getItem('lang') || 'uz';

function initLanguage() {
  setLanguage(currentLang);

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      currentLang = lang;
      localStorage.setItem('lang', lang);
      setLanguage(lang);
      // Re-render dynamic sections
      renderPortfolio();
      renderTestimonials();
      renderSkills();
      renderServices();
      initPortfolioFilter();
      initModal();
      initTestimonialsSlider();
    });
  });
}

function setLanguage(lang) {
  const t = i18nData[lang];
  if (!t) return;

  // Update active button
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
    btn.setAttribute('aria-pressed', btn.dataset.lang === lang);
  });

  // Update all [data-i18n] elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const value = getNestedValue(t, key);
    if (value !== undefined) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = value;
      } else {
        el.textContent = value;
      }
    }
  });

  // Update html lang attribute
  document.documentElement.lang = lang === 'uz' ? 'uz' : lang === 'ru' ? 'ru' : 'en';
}

function getNestedValue(obj, key) {
  return key.split('.').reduce((acc, k) => acc?.[k], obj);
}

// ============================================================
// MOBILE MENU
// ============================================================
function initMobileMenu() {
  const toggle = document.getElementById('menuToggle');
  const mobileNav = document.getElementById('mobileNav');
  const backdrop = document.getElementById('navBackdrop');
  if (!toggle || !mobileNav) return;

  const openMenu = () => {
    toggle.classList.add('open');
    mobileNav.classList.add('active');
    backdrop?.classList.add('active');
    toggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  };

  const closeMenu = () => {
    toggle.classList.remove('open');
    mobileNav.classList.remove('active');
    backdrop?.classList.remove('active');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };

  toggle.addEventListener('click', () => {
    toggle.classList.contains('open') ? closeMenu() : openMenu();
  });

  // Close on backdrop click
  backdrop?.addEventListener('click', closeMenu);

  // Close on nav link click
  mobileNav.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', closeMenu);
  });
}


// ============================================================
// HEADER (scroll effect + active nav)
// ============================================================
function initHeader() {
  const header = document.querySelector('.header');
  if (!header) return;

  const onScroll = () => {
    header.classList.toggle('scrolled', window.scrollY > 80);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav__link[data-section]');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach(link => {
          link.classList.toggle('active', link.dataset.section === id);
        });
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });

  sections.forEach(s => observer.observe(s));
}

// ============================================================
// PORTFOLIO RENDER & FILTER
// ============================================================
function renderPortfolio() {
  const grid = document.getElementById('portfolioGrid');
  if (!grid || typeof portfolioItems === 'undefined') return;

  const t = i18nData[currentLang];
  const lvls = { expert: t.skills.expert, advanced: t.skills.advanced, intermediate: t.skills.intermediate, beginner: t.skills.beginner };

  grid.innerHTML = portfolioItems.map(item => `
    <article
      class="portfolio-card reveal"
      data-category="${item.category}"
      data-id="${item.id}"
      tabindex="0"
      role="button"
      aria-label="${item.title[currentLang]}"
    >
      <div class="portfolio-card__img-wrap">
        <img
          class="portfolio-card__img"
          src="${item.image}"
          alt="${item.title[currentLang]}"
          loading="lazy"
          width="400"
          height="300"
        />
        <div class="portfolio-card__overlay" aria-hidden="true">
          <span class="portfolio-card__view-btn">${t.portfolio.viewProject}</span>
        </div>
      </div>
      <div class="portfolio-card__body">
        <p class="portfolio-card__tag">${item.tags[currentLang]}</p>
        <h3 class="portfolio-card__title">${item.title[currentLang]}</h3>
      </div>
    </article>
  `).join('');

  // Re-attach click events
  grid.querySelectorAll('.portfolio-card').forEach(card => {
    const open = () => openModal(card.dataset.id);
    card.addEventListener('click', open);
    card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); } });
  });

  // Trigger scroll animations
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    grid.querySelectorAll('.portfolio-card').forEach((card, i) => {
      gsap.fromTo(card,
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.6,
          delay: (i % 3) * 0.1,
          scrollTrigger: { trigger: card, start: 'top 90%' }
        }
      );
    });
  }
}

function initPortfolioFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const grid = document.getElementById('portfolioGrid');
  if (!grid) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;

      // Update active state
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const cards = grid.querySelectorAll('.portfolio-card');
      
      if (typeof gsap !== 'undefined') {
        const showCards = [];
        const hideCards = [];
        
        cards.forEach(card => {
          if (filter === 'all' || card.dataset.category === filter) {
            showCards.push(card);
          } else {
            hideCards.push(card);
          }
        });

        // First fade out and shrink matching items
        gsap.to(hideCards, {
          opacity: 0,
          scale: 0.9,
          duration: 0.25,
          ease: 'power2.in',
          onComplete: () => {
            hideCards.forEach(card => card.classList.add('hidden'));
          }
        });

        // Show and fade in matching items
        showCards.forEach(card => {
          card.classList.remove('hidden');
          gsap.fromTo(card, 
            { opacity: 0, scale: 0.9 }, 
            { opacity: 1, scale: 1, duration: 0.4, ease: 'power2.out', clearProps: 'transform' }
          );
        });
      } else {
        // Fallback if GSAP is not loaded
        cards.forEach(card => {
          const show = filter === 'all' || card.dataset.category === filter;
          card.classList.toggle('hidden', !show);
        });
      }
    });
  });
}


// ============================================================
// MODAL LIGHTBOX
// ============================================================
let modalOverlay, modalEl;

function initModal() {
  modalOverlay = document.getElementById('modalOverlay');
  modalEl = document.getElementById('modal');
  if (!modalOverlay) return;

  // Close on overlay click
  modalOverlay.addEventListener('click', e => {
    if (e.target === modalOverlay) closeModal();
  });

  // Close button
  document.getElementById('modalClose')?.addEventListener('click', closeModal);

  // Escape key
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) closeModal();
  });
}

function openModal(id) {
  const item = portfolioItems.find(p => String(p.id) === String(id));
  if (!item || !modalOverlay) return;

  const lang = currentLang;

  document.getElementById('modalTag').textContent      = item.tags[lang];
  document.getElementById('modalTitle').textContent    = item.title[lang];
  document.getElementById('modalTask').textContent     = item.task[lang];
  document.getElementById('modalSolution').textContent = item.solution[lang];
  document.getElementById('modalResult').textContent   = item.result[lang];

  const img = document.getElementById('modalImage');
  img.src = item.image;
  img.alt = item.title[lang];

  // Labels
  document.getElementById('modalTaskLabel').textContent     = lang === 'uz' ? 'Vazifa'   : lang === 'ru' ? 'Задача'    : 'Task';
  document.getElementById('modalSolutionLabel').textContent = lang === 'uz' ? 'Yechim'   : lang === 'ru' ? 'Решение'   : 'Solution';
  document.getElementById('modalResultLabel').textContent   = lang === 'uz' ? 'Natija'   : lang === 'ru' ? 'Результат' : 'Result';

  modalOverlay.classList.add('active');
  modalOverlay.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';

  // Focus trap
  setTimeout(() => document.getElementById('modalClose')?.focus(), 100);
}

function closeModal() {
  modalOverlay?.classList.remove('active');
  modalOverlay?.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

// ============================================================
// TESTIMONIALS
// ============================================================
function renderTestimonials() {
  const track = document.getElementById('testimonialsTrack');
  const dotsEl = document.getElementById('sliderDots');
  if (!track || typeof testimonials === 'undefined') return;

  const lang = currentLang;

  track.innerHTML = testimonials.map((item, i) => {
    const stars = '★'.repeat(item.stars) + '☆'.repeat(5 - item.stars);
    const initial = item.name.charAt(0);
    return `
      <div class="testimonial-card" role="group" aria-label="Testimonial ${i+1}">
        <div class="testimonial-card__inner">
          <div class="testimonial-card__stars" aria-label="${item.stars} out of 5 stars">
            ${Array.from({ length: item.stars }, () => '<span class="testimonial-card__star" aria-hidden="true">★</span>').join('')}
          </div>
          <blockquote class="testimonial-card__text">"${item.text[lang]}"</blockquote>
          <div class="testimonial-card__author">
            <div class="testimonial-card__avatar" aria-hidden="true">${initial}</div>
            <div>
              <p class="testimonial-card__name">${item.name}</p>
              <p class="testimonial-card__role">${item.role[lang]}</p>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');

  if (dotsEl) {
    dotsEl.innerHTML = testimonials.map((_, i) =>
      `<button class="slider-dot${i === 0 ? ' active' : ''}" data-index="${i}" aria-label="Testimonial ${i+1}"></button>`
    ).join('');
  }

  initTestimonialsSlider();
}

// ============================================================
// TESTIMONIALS SLIDER
// ============================================================
let sliderIndex = 0;
let sliderInterval;

function initTestimonialsSlider() {
  const track = document.getElementById('testimonialsTrack');
  const prevBtn = document.getElementById('sliderPrev');
  const nextBtn = document.getElementById('sliderNext');
  const dotsEl = document.getElementById('sliderDots');

  if (!track) return;

  const total = testimonials?.length || 0;
  if (total === 0) return;

  sliderIndex = 0;
  updateSlider();

  prevBtn?.addEventListener('click', () => {
    sliderIndex = (sliderIndex - 1 + total) % total;
    updateSlider();
    resetInterval();
  });

  nextBtn?.addEventListener('click', () => {
    sliderIndex = (sliderIndex + 1) % total;
    updateSlider();
    resetInterval();
  });

  dotsEl?.addEventListener('click', e => {
    const dot = e.target.closest('.slider-dot');
    if (!dot) return;
    sliderIndex = parseInt(dot.dataset.index);
    updateSlider();
    resetInterval();
  });

  // Auto-advance
  clearInterval(sliderInterval);
  sliderInterval = setInterval(() => {
    sliderIndex = (sliderIndex + 1) % total;
    updateSlider();
  }, 5000);
}

function updateSlider() {
  const track = document.getElementById('testimonialsTrack');
  const dotsEl = document.getElementById('sliderDots');
  if (!track) return;

  track.style.transform = `translateX(-${sliderIndex * 100}%)`;

  dotsEl?.querySelectorAll('.slider-dot').forEach((dot, i) => {
    dot.classList.toggle('active', i === sliderIndex);
  });
}

function resetInterval() {
  clearInterval(sliderInterval);
  sliderInterval = setInterval(() => {
    sliderIndex = (sliderIndex + 1) % (testimonials?.length || 1);
    updateSlider();
  }, 5000);
}

// ============================================================
// SKILLS
// ============================================================
function renderSkills() {
  const grid = document.getElementById('skillsGrid');
  if (!grid || typeof skillsData === 'undefined') return;

  const t = i18nData[currentLang];
  const lang = currentLang;

  const levelLabels = {
    expert:       t.skills.expert,
    advanced:     t.skills.advanced,
    intermediate: t.skills.intermediate,
    beginner:     t.skills.beginner,
  };

  grid.innerHTML = skillsData.map(cat => `
    <div class="skills__category reveal">
      <div class="skills__cat-header">
        <span class="skills__cat-icon" aria-hidden="true">${cat.icon}</span>
        <span class="skills__cat-name">${cat.category[lang]}</span>
      </div>
      <ul class="skills__tools-list">
        ${cat.tools.map(tool => `
          <li class="skill-item">
            <div class="skill-item__left">
              <span class="skill-item__icon" aria-hidden="true">${tool.icon}</span>
              <span class="skill-item__name">${tool.name}</span>
            </div>
            <span class="skill-item__level ${tool.level}">${levelLabels[tool.level]}</span>
          </li>
        `).join('')}
      </ul>
    </div>
  `).join('');
}

// ============================================================
// SERVICES
// ============================================================
function renderServices() {
  const grid = document.getElementById('servicesGrid');
  if (!grid) return;

  const t = i18nData[currentLang];

  grid.innerHTML = t.services.items.map((item, i) => `
    <div class="service-card reveal">
      <p class="service-card__number">0${i + 1}</p>
      <h3 class="service-card__title">${item.title}</h3>
      <p class="service-card__desc">${item.desc}</p>
    </div>
  `).join('');
}

// ============================================================
// CONTACT FORM
// ============================================================
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const t = i18nData[currentLang];
    const btn = form.querySelector('.form-submit-btn');
    const status = document.getElementById('formStatus');

    const name    = document.getElementById('formName').value.trim();
    const contact = document.getElementById('formContact').value.trim();
    const message = document.getElementById('formMessage').value.trim();

    status.className = 'form-status';
    status.textContent = '';

    if (!name || !contact || !message) {
      status.textContent = t.testimonials.reviewFieldsError || 'Please fill in all fields.';
      status.className = 'form-status error';
      return;
    }

    btn.textContent = t.contact.sending;
    btn.disabled = true;
    status.className = 'form-status';

    try {
      const res = await fetch(form.action, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({ name, contact, message }),
      });

      if (res.ok) {
        status.textContent = t.contact.successMsg;
        status.className = 'form-status success';
        form.reset();
      } else {
        throw new Error('Server error');
      }
    } catch {
      status.textContent = t.contact.errorMsg;
      status.className = 'form-status error';
    } finally {
      btn.textContent = t.contact.sendBtn;
      btn.disabled = false;
    }
  });
}

// ============================================================
// GSAP SCROLL ANIMATIONS
// ============================================================
function initScrollAnimations() {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
    // Fallback: show all elements without animation
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach(el => {
      el.style.opacity = 1;
      el.style.transform = 'none';
    });
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  // Generic reveal
  gsap.utils.toArray('.reveal').forEach((el, i) => {
    gsap.fromTo(el,
      { opacity: 0, y: 30 },
      {
        opacity: 1, y: 0,
        duration: 0.7,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 88%',
          once: true,
        }
      }
    );
  });

  gsap.utils.toArray('.reveal-left').forEach(el => {
    gsap.fromTo(el,
      { opacity: 0, x: -40 },
      {
        opacity: 1, x: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 85%', once: true }
      }
    );
  });

  gsap.utils.toArray('.reveal-right').forEach(el => {
    gsap.fromTo(el,
      { opacity: 0, x: 40 },
      {
        opacity: 1, x: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 85%', once: true }
      }
    );
  });

  gsap.utils.toArray('.reveal-scale').forEach(el => {
    gsap.fromTo(el,
      { opacity: 0, scale: 0.92 },
      {
        opacity: 1, scale: 1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 88%', once: true }
      }
    );
  });

  // Stagger for section labels
  gsap.utils.toArray('.section-label').forEach(el => {
    gsap.fromTo(el,
      { opacity: 0, x: -20 },
      {
        opacity: 1, x: 0,
        duration: 0.6,
        scrollTrigger: { trigger: el, start: 'top 90%', once: true }
      }
    );
  });

  // Stagger for section titles
  gsap.utils.toArray('.section-title').forEach(el => {
    gsap.fromTo(el,
      { opacity: 0, y: 20 },
      {
        opacity: 1, y: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 88%', once: true }
      }
    );
  });

  // About section
  const aboutGrid = document.querySelector('.about__grid');
  if (aboutGrid) {
    gsap.fromTo('.about__image-wrap',
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: aboutGrid, start: 'top 80%', once: true }
      }
    );
    gsap.fromTo('.about__content',
      { opacity: 0, x: 40 },
      { opacity: 1, x: 0, duration: 1, ease: 'power3.out', delay: 0.2,
        scrollTrigger: { trigger: aboutGrid, start: 'top 80%', once: true }
      }
    );
  }

  // Stats counter animation
  gsap.utils.toArray('.about__stat-number').forEach(el => {
    const target = parseInt(el.textContent);
    if (isNaN(target)) return;
    gsap.fromTo({ val: 0 }, { val: target },
      {
        duration: 1.5,
        ease: 'power2.out',
        onUpdate: function() { el.textContent = Math.round(this.targets()[0].val) + (el.dataset.suffix || '+'); },
        scrollTrigger: { trigger: el, start: 'top 85%', once: true }
      }
    );
  });

  // Testimonial
  const testimSlider = document.querySelector('.testimonials__slider');
  if (testimSlider) {
    gsap.fromTo(testimSlider,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8,
        scrollTrigger: { trigger: testimSlider, start: 'top 85%', once: true }
      }
    );
  }
}

// ============================================================
// TESTIMONIAL / REVIEW MODAL TO TELEGRAM BOT
// ============================================================
function initReviewModal() {
  const overlay = document.getElementById('reviewModalOverlay');
  const btnOpen = document.getElementById('leaveReviewBtn');
  const btnClose = document.getElementById('reviewModalClose');
  const btnCancel = document.getElementById('reviewCancelBtn');
  const form = document.getElementById('reviewForm');
  const stars = document.querySelectorAll('.star-rating .star-btn');
  const ratingInput = document.getElementById('reviewRating');
  const status = document.getElementById('reviewFormStatus');

  if (!overlay || !btnOpen) return;

  const openModal = () => {
    overlay.classList.add('active');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    form.reset();
    resetStars();
    status.className = 'form-status';
    status.style.display = 'none';
  };

  const closeModal = () => {
    overlay.classList.remove('active');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  btnOpen.addEventListener('click', openModal);
  btnClose?.addEventListener('click', closeModal);
  btnCancel?.addEventListener('click', closeModal);
  overlay.addEventListener('click', e => {
    if (e.target === overlay) closeModal();
  });

  // Star rating hover/click logic
  stars.forEach(star => {
    star.addEventListener('click', () => {
      const val = parseInt(star.dataset.value);
      ratingInput.value = val;
      updateStars(val);
    });
  });

  function updateStars(rating) {
    stars.forEach(star => {
      const val = parseInt(star.dataset.value);
      if (val <= rating) {
        star.textContent = '★';
        star.classList.add('active');
      } else {
        star.textContent = '☆';
        star.classList.remove('active');
      }
    });
  }

  function resetStars() {
    ratingInput.value = '';
    stars.forEach(star => {
      star.textContent = '☆';
      star.classList.remove('active');
    });
  }

  // Form submission
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const t = i18nData[currentLang];
    
    const name = document.getElementById('reviewName').value.trim();
    const role = document.getElementById('reviewRole').value.trim();
    const rating = ratingInput.value;
    const text = document.getElementById('reviewText').value.trim();

    status.className = 'form-status';
    status.textContent = '';

    if (!rating) {
      status.textContent = t.testimonials.starsError || 'Please select a rating.';
      status.className = 'form-status error';
      return;
    }

    if (!name || !role || !text) {
      status.textContent = t.testimonials.reviewFieldsError || 'Please fill in all fields.';
      status.className = 'form-status error';
      return;
    }

    const submitBtn = document.getElementById('reviewSubmitBtn');
    submitBtn.textContent = t.testimonials.reviewSending;
    submitBtn.disabled = true;

    // Check config
    const botToken = typeof TELEGRAM_CONFIG !== 'undefined' ? TELEGRAM_CONFIG.BOT_TOKEN : null;
    const chatIds = typeof TELEGRAM_CONFIG !== 'undefined' ? (TELEGRAM_CONFIG.CHAT_IDS || (TELEGRAM_CONFIG.CHAT_ID ? [TELEGRAM_CONFIG.CHAT_ID] : [])) : [];

    if (!botToken || botToken === 'YOUR_BOT_TOKEN_HERE' || chatIds.length === 0) {
      status.textContent = t.testimonials.reviewConfigError;
      status.className = 'form-status error';
      submitBtn.textContent = t.testimonials.reviewSubmitBtn;
      submitBtn.disabled = false;
      return;
    }

    const starStr = '★'.repeat(rating) + '☆'.repeat(5 - rating);
    const message = `⭐️ <b>YANGI FIKR / TAKLIF (Portfolio)</b>\n\n` +
                    `👤 <b>Ism:</b> ${name}\n` +
                    `💼 <b>Kompaniya/Lavozim:</b> ${role}\n` +
                    `⭐️ <b>Baho:</b> ${starStr} (${rating}/5)\n\n` +
                    `📝 <b>Fikr:</b>\n<i>${text}</i>`;

    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

    try {
      const requests = chatIds.map(chatId =>
        fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chat_id: chatId,
            text: message,
            parse_mode: 'HTML'
          })
        }).then(res => res.json()).catch(() => ({ ok: false }))
      );

      const results = await Promise.all(requests);
      const anyOk = results.some(res => res.ok);

      let supabaseOk = false;
      // Always attempt Supabase insert regardless of Telegram result
      if (typeof window.supabaseClient !== 'undefined') {
        try {
          const { error: sbError } = await window.supabaseClient.from('reviews').insert([
            {
              name,
              role,
              rating: parseInt(rating),
              text,
              created_at: new Date().toISOString()
            }
          ]);
          if (sbError) {
            console.error('Supabase insert error:', sbError);
          } else {
            supabaseOk = true;
          }
        } catch (sbErr) {
          console.error('Supabase exception:', sbErr);
        }
      }

      if (anyOk || supabaseOk) {
        status.textContent = t.testimonials.reviewSuccessMsg;
        status.className = 'form-status success';
        form.reset();
        resetStars();
        setTimeout(closeModal, 1800);
      } else {
        throw new Error('All submission channels failed');
      }
    } catch (err) {
      console.error(err);
      status.textContent = t.testimonials.reviewErrorMsg;
      status.className = 'form-status error';
    } finally {
      submitBtn.textContent = t.testimonials.reviewSubmitBtn;
      submitBtn.disabled = false;
    }
  });
}

// ============================================================
// DYNAMIC PORTFOLIO LOADER (SUPABASE)
// ============================================================
async function loadDynamicPortfolio() {
  if (typeof window.supabaseClient === 'undefined') return;

  try {
    const { data, error } = await window.supabaseClient
      .from('portfolio_items')
      .select('*')
      .order('id', { ascending: false });

    if (error) {
      console.error('Error fetching dynamic projects:', error);
      return;
    }

    if (data && data.length > 0) {
      // Filter out existing dynamic items from portfolioItems to prevent duplicates
      const staticItems = portfolioItems.filter(item => typeof item.id !== 'string' || !item.id.startsWith('db-'));
      
      const dynamicItems = data.map(item => ({
        id: `db-${item.id}`,
        category: item.category,
        image: item.image_url,
        title: { uz: item.title_uz, ru: item.title_ru, en: item.title_en },
        tags: { uz: item.tags_uz, ru: item.tags_ru, en: item.tags_en },
        task: { uz: item.task_uz, ru: item.task_ru, en: item.task_en },
        solution: { uz: item.solution_uz, ru: item.solution_ru, en: item.solution_en },
        result: { uz: item.result_uz, ru: item.result_ru, en: item.result_en },
        type: item.type
      }));

      // Combine dynamic items at the beginning with static items
      portfolioItems.length = 0;
      portfolioItems.push(...dynamicItems, ...staticItems);
      
      // Re-render the grid
      renderPortfolio();
    }
  } catch (err) {
    console.error('Failed to load portfolio items:', err);
  }
}


