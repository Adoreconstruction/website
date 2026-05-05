/* ============================================
   ADORE CONSTRUCTIONS — Main Script
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Custom Cursor ── */
  const cursorDot = document.querySelector('.cursor-dot');
  const cursorRing = document.querySelector('.cursor-ring');
  if (cursorDot && cursorRing) {
    let mx = 0, my = 0, rx = 0, ry = 0;
    document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
    const animCursor = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      cursorDot.style.left = mx + 'px'; cursorDot.style.top = my + 'px';
      cursorRing.style.left = rx + 'px'; cursorRing.style.top = ry + 'px';
      requestAnimationFrame(animCursor);
    };
    animCursor();
    document.querySelectorAll('a,button,.btn,.t-btn,.filter-btn,.hamburger,.back-to-top,.notification-close').forEach(el => {
      el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
      el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
    });
  }

  /* ── Topbar height offset for sticky nav ── */
  const topbar = document.querySelector('.topbar');
  const navbar = document.querySelector('.navbar');
  const mobileMenu = document.getElementById('mobileMenu');

  /* ── Navbar Scroll ── */
  window.addEventListener('scroll', () => {
    if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 10);
    const btt = document.querySelector('.back-to-top');
    if (btt) btt.classList.toggle('visible', window.scrollY > 400);
  });

  /* ── Hamburger ── */
  const hamburger = document.getElementById('hamburger');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      mobileMenu.classList.toggle('open');
    });
    document.querySelectorAll('#mobileMenu a').forEach(a => a.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
    }));
  }

  /* ── Back to Top ── */
  const btt = document.querySelector('.back-to-top');
  if (btt) btt.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  /* ── Scroll Reveal ── */
  const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  if (revealEls.length) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(el => observer.observe(el));
  }

  /* ── Testimonials Slider ── */
  const testimonialWrap = document.querySelector('.testimonials-wrap');
  if (testimonialWrap) {
    const slides = testimonialWrap.querySelectorAll('.testimonial');
    let cur = 0;
    const go = n => {
      cur = (n + slides.length) % slides.length;
      testimonialWrap.style.transform = `translateX(-${cur * 100}%)`;
    };
    document.querySelector('.t-prev')?.addEventListener('click', () => go(cur - 1));
    document.querySelector('.t-next')?.addEventListener('click', () => go(cur + 1));
    setInterval(() => go(cur + 1), 6000);
  }

  /* ── Counter Animation ── */
  const counters = document.querySelectorAll('[data-count]');
  if (counters.length) {
    const cObserver = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const el = e.target;
          const target = +el.dataset.count;
          const suffix = el.dataset.suffix || '';
          let start = 0; const dur = 2000; const step = 16;
          const inc = target / (dur / step);
          const timer = setInterval(() => {
            start = Math.min(start + inc, target);
            el.textContent = Math.floor(start) + suffix;
            if (start >= target) clearInterval(timer);
          }, step);
          cObserver.unobserve(el);
        }
      });
    }, { threshold: 0.5 });
    counters.forEach(c => cObserver.observe(c));
  }

  /* ── Project Filter ── */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectItems = document.querySelectorAll('.project-list-item');
  if (filterBtns.length && projectItems.length) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.dataset.filter;
        projectItems.forEach(item => {
          const show = filter === 'all' || item.dataset.category === filter;
          item.style.display = show ? 'grid' : 'none';
          if (show) { item.style.opacity = '0'; setTimeout(() => { item.style.transition = 'opacity .4s'; item.style.opacity = '1'; }, 10); }
        });
      });
    });
  }

  /* ── Notification Popup ── */
  setTimeout(() => {
    const notif = document.querySelector('.notification');
    if (notif) {
      notif.classList.add('show');
      document.querySelector('.notification-close')?.addEventListener('click', () => notif.classList.remove('show'));
      setTimeout(() => notif.classList.remove('show'), 6000);
    }
  }, 3000);

  /* ── Contact Form → WhatsApp ── */
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', e => {
      e.preventDefault();
      const name = contactForm.querySelector('[name="name"]')?.value || '';
      const phone = contactForm.querySelector('[name="phone"]')?.value || '';
      const service = contactForm.querySelector('[name="service"]')?.value || '';
      const message = contactForm.querySelector('[name="message"]')?.value || '';
      const location = contactForm.querySelector('[name="location"]')?.value || 'Janakpur';
      const waNum = location === 'Malangawa' ? '9779801665566' : '9779854076050';
      const text = `Hello Adore Constructions,\n\nName: ${name}\nPhone: ${phone}\nService Required: ${service}\n\nMessage: ${message}\n\n(Sent via website contact form)`;
      window.open(`https://wa.me/${waNum}?text=${encodeURIComponent(text)}`, '_blank');
    });
  }

  /* ── Active nav link ── */
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, #mobileMenu a').forEach(a => {
    const href = a.getAttribute('href') || '';
    if (href.includes(currentPage) || (currentPage === '' && href.includes('index'))) {
      a.classList.add('active');
    }
  });
});
