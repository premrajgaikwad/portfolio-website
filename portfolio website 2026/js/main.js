/* ==========================================================================
   MAIN: loader, cursor, nav, magnetic buttons, tilt, content rendering
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initLoader();
  initCursor();
  initNav();
  initMagnetic();
  initTilt();
  initRoleSwap();
  renderAbout();
  renderSkills();
  renderProjects();
  renderExperience();
  renderServices();
  renderWhyHireMe();
  renderCertificates();
  renderOrbit();
  renderGithub();
  renderLeetcodeStats();
  renderTestimonials();
  initContactForm();
  document.getElementById('year').textContent = new Date().getFullYear();

  if (window.lucide) lucide.createIcons();
});

/* ---------------- Loader ---------------- */
function initLoader() {
  const loader = document.getElementById('loader');
  const bar = document.getElementById('loaderBar');
  const percent = document.getElementById('loaderPercent');
  let p = 0;
  const interval = setInterval(() => {
    p += Math.random() * 18;
    if (p >= 100) {
      p = 100;
      clearInterval(interval);
      setTimeout(() => loader.classList.add('done'), 300);
    }
    bar.style.width = p + '%';
    percent.textContent = Math.floor(p) + '%';
  }, 140);
}

/* ---------------- Custom Cursor ---------------- */
function initCursor() {
  const dot = document.getElementById('cursorDot');
  const glow = document.getElementById('cursorGlow');
  if (!dot || window.matchMedia('(hover: none)').matches) return;

  let mx = 0, my = 0, gx = 0, gy = 0;
  window.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    dot.style.left = mx + 'px';
    dot.style.top = my + 'px';
  });

  function animateGlow() {
    gx += (mx - gx) * 0.15;
    gy += (my - gy) * 0.15;
    glow.style.left = gx + 'px';
    glow.style.top = gy + 'px';
    requestAnimationFrame(animateGlow);
  }
  animateGlow();

  document.querySelectorAll('a, button, [data-magnetic], input, textarea').forEach(el => {
    el.addEventListener('mouseenter', () => glow.classList.add('hover'));
    el.addEventListener('mouseleave', () => glow.classList.remove('hover'));
  });
}

/* ---------------- Nav ---------------- */
function initNav() {
  const nav = document.getElementById('siteNav');
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  });

  toggle.addEventListener('click', () => {
    toggle.classList.toggle('open');
    links.classList.toggle('open');
  });

  links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    toggle.classList.remove('open');
    links.classList.remove('open');
  }));
}

/* ---------------- Magnetic buttons ---------------- */
function initMagnetic() {
  if (window.matchMedia('(hover: none)').matches) return;
  document.querySelectorAll('[data-magnetic]').forEach(el => {
    el.addEventListener('mousemove', e => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - r.left - r.width / 2;
      const y = e.clientY - r.top - r.height / 2;
      el.style.transform = `translate(${x * 0.25}px, ${y * 0.35}px)`;
    });
    el.addEventListener('mouseleave', () => { el.style.transform = ''; });
  });
}

/* ---------------- 3D Tilt ---------------- */
function initTilt() {
  if (window.matchMedia('(hover: none)').matches) return;
  document.addEventListener('mousemove', () => {}); // noop to keep listener light
  function bindTilt(el) {
    el.addEventListener('mousemove', e => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      el.style.transform = `perspective(800px) rotateY(${px * 10}deg) rotateX(${-py * 10}deg) translateZ(0)`;
    });
    el.addEventListener('mouseleave', () => {
      el.style.transform = 'perspective(800px) rotateY(0) rotateX(0)';
    });
  }
  document.querySelectorAll('[data-tilt]').forEach(bindTilt);
  // project cards get tilt after render
  document.addEventListener('projectsRendered', () => {
    document.querySelectorAll('.project-card').forEach(bindTilt);
  });
}

/* ---------------- Hero role swap ---------------- */
function initRoleSwap() {
  const el = document.getElementById('roleSwap');
  if (!el) return;
  const roles = SITE_DATA.roles;
  let i = 0;
  function show() {
    el.style.opacity = 0;
    setTimeout(() => {
      el.textContent = roles[i % roles.length];
      el.style.transition = 'opacity .4s ease';
      el.style.opacity = 1;
      i++;
    }, 350);
  }
  show();
  setInterval(show, 2600);
}

/* ---------------- Render: About timeline ---------------- */
function renderAbout() {
  const track = document.getElementById('aboutTimeline');
  track.innerHTML = SITE_DATA.education.map(e => `
    <div class="timeline-item reveal-up">
      <span class="timeline-date">${e.date}</span>
      <h4 class="timeline-title">${e.title}</h4>
      <p class="timeline-sub">${e.sub}</p>
      <p class="timeline-desc">${e.desc}</p>
    </div>
  `).join('');
}

/* ---------------- Render: Skills ---------------- */
function renderSkills() {
  const grid = document.getElementById('skillsGrid');
  const svgDefs = `<svg width="0" height="0"><defs><linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
    <stop offset="0%" stop-color="#4d7fff"/><stop offset="55%" stop-color="#9b5cff"/><stop offset="100%" stop-color="#35e6d6"/>
  </linearGradient></defs></svg>`;
  grid.innerHTML = svgDefs + SITE_DATA.skills.map((s, idx) => `
    <div class="skill-card glass-card reveal-up" style="--delay:${(idx % 6) * 0.06}s">
      <div class="skill-ring" data-level="${s.level}">
        <svg viewBox="0 0 80 80">
          <circle class="ring-bg" cx="40" cy="40" r="33"></circle>
          <circle class="ring-fg" cx="40" cy="40" r="33"></circle>
        </svg>
        <div class="skill-icon"><i data-lucide="${s.icon}"></i></div>
      </div>
      <div class="skill-name">${s.name}</div>
      <div class="skill-level">${s.level}%</div>
    </div>
  `).join('');
}

/* ---------------- Render: Projects ---------------- */
function renderProjects() {
  const grid = document.getElementById('projectsGrid');
  grid.innerHTML = SITE_DATA.projects.map((p, idx) => `
    <article class="project-card glass-card reveal-up" data-tilt style="--delay:${idx * 0.08}s">
      <div class="project-media">
        <span class="project-tag">${p.tag}</span>
        <img src="${p.image}" alt="${p.title} preview" loading="lazy">
      </div>
      <div class="project-body">
        <h3 class="project-title">${p.title}</h3>
        <p class="project-desc">${p.description}</p>
        <ul class="project-features">
          ${p.features.map(f => `<li><i data-lucide="check-circle-2"></i>${f}</li>`).join('')}
        </ul>
        <div class="project-stack">
          ${p.stack.map(t => `<span class="stack-pill">${t}</span>`).join('')}
        </div>
        <div class="project-actions">
          <a href="${p.github}" target="_blank" rel="noopener" class="btn btn-outline" data-magnetic><i class="fa-brands fa-github"></i><span>Code</span></a>
          <a href="${p.demo}" target="_blank" rel="noopener" class="btn btn-primary" data-magnetic><i data-lucide="external-link"></i><span>Live Demo</span></a>
        </div>
      </div>
    </article>
  `).join('');
  if (window.lucide) lucide.createIcons();
  document.dispatchEvent(new Event('projectsRendered'));
  initMagnetic();
}

/* ---------------- Render: Experience ---------------- */
function renderExperience() {
  const track = document.getElementById('expTimeline');
  track.innerHTML = SITE_DATA.experience.map((e, idx) => `
    <div class="exp-item reveal-up" style="--delay:${idx * 0.1}s">
      <div class="exp-card glass-card">
        <div class="exp-head">
          <div>
            <h3 class="exp-role">${e.role}</h3>
            <span class="exp-company">${e.company}</span>
          </div>
          <span class="exp-date">${e.date}</span>
        </div>
        <ul class="exp-list">
          ${e.points.map(pt => `<li><i data-lucide="chevron-right"></i>${pt}</li>`).join('')}
        </ul>
      </div>
    </div>
  `).join('');
}

/* ---------------- Render: Services ---------------- */
function renderServices() {
  const grid = document.getElementById('servicesGrid');
  grid.innerHTML = SITE_DATA.services.map((s, idx) => `
    <div class="service-card glass-card reveal-up" style="--delay:${idx * 0.08}s">
      <div class="service-icon"><i data-lucide="${s.icon}"></i></div>
      <h4>${s.title}</h4>
      <p>${s.desc}</p>
    </div>
  `).join('');
}

/* ---------------- Render: Why Hire Me ---------------- */
function renderWhyHireMe() {
  const grid = document.getElementById('whyGrid');
  grid.innerHTML = SITE_DATA.whyHireMe.map((w, idx) => `
    <div class="why-card glass-card reveal-up" style="--delay:${idx * 0.08}s">
      <div class="why-num">${w.num}</div>
      <h4>${w.title}</h4>
      <p>${w.desc}</p>
    </div>
  `).join('');
}

/* ---------------- Render: Certificates ---------------- */
function renderCertificates() {
  const grid = document.getElementById('certGrid');
  grid.innerHTML = SITE_DATA.certificates.map((c, idx) => `
    <div class="cert-card glass-card reveal-up" style="--delay:${idx * 0.06}s">
      <div class="cert-icon"><i data-lucide="${c.icon}"></i></div>
      <div>
        <h4>${c.title}</h4>
        <p>${c.issuer}</p>
        <span>${c.date}</span>
      </div>
    </div>
  `).join('');
}

/* ---------------- Render: Tech stack orbit ---------------- */
function renderOrbit() {
  const system = document.getElementById('orbitSystem');
  const icons = ['coffee', 'file-code', 'atom', 'layout', 'git-branch', 'database', 'server', 'terminal'];
  const rings = [
    { radius: 90, duration: 18, items: icons.slice(0, 3) },
    { radius: 150, duration: 26, items: icons.slice(3, 6) },
    { radius: 200, duration: 34, items: icons.slice(6, 8) }
  ];
  rings.forEach((ring, ringIdx) => {
    const ringEl = document.createElement('div');
    ringEl.className = 'orbit-ring';
    ringEl.style.width = ring.radius * 2 + 'px';
    ringEl.style.height = ring.radius * 2 + 'px';
    ringEl.style.animationDuration = ring.duration + 's';
    ringEl.style.animationDirection = ringIdx % 2 === 0 ? 'normal' : 'reverse';
    ring.items.forEach((icon, i) => {
      const angle = (360 / ring.items.length) * i;
      // orbit position via rotating wrapper
      const wrapper = document.createElement('div');
      wrapper.style.position = 'absolute';
      wrapper.style.top = '50%';
      wrapper.style.left = '50%';
      wrapper.style.width = '0';
      wrapper.style.height = '0';
      wrapper.style.animation = `spin ${ring.duration}s linear infinite ${ringIdx % 2 === 0 ? '' : 'reverse'}`;
      const positioned = document.createElement('div');
      positioned.className = 'orbit-icon';
      positioned.style.transform = `rotate(${angle}deg) translate(${ring.radius}px)`;
      positioned.innerHTML = `<i data-lucide="${icon}"></i>`;
      wrapper.appendChild(positioned);
      ringEl.appendChild(wrapper);
    });
    system.appendChild(ringEl);
  });
  if (window.lucide) lucide.createIcons();
}

/* ---------------- Render: GitHub stat images ---------------- */
function renderGithub() {
  const u = SITE_DATA.githubUsername;
  const theme = 'theme=radical&bg_color=00000000&hide_border=true&title_color=35e6d6&text_color=c9c9d1&icon_color=9b5cff';
  document.getElementById('ghStatsImg').src = `https://github-readme-stats.vercel.app/api?username=${u}&show_icons=true&${theme}`;
  document.getElementById('ghStreakImg').src = `https://github-readme-streak-stats.herokuapp.com/?user=${u}&${theme}`;
  document.getElementById('ghLangsImg').src = `https://github-readme-stats.vercel.app/api/top-langs/?username=${u}&layout=compact&${theme}`;
}

/* ---------------- Render: LeetCode stats ---------------- */
function renderLeetcodeStats() {
  const c = SITE_DATA.leetcode;
  const wrap = document.getElementById('leetcodeStats');
  wrap.innerHTML = `
    <div class="lc-stat-card glass-card">
      <div><div class="lc-stat-num">${c.solved}</div><div class="lc-stat-label">Total Solved</div></div>
      <i data-lucide="trophy" style="color:var(--cyan);width:26px;height:26px;"></i>
    </div>
    <div class="lc-stat-card easy glass-card">
      <div><div class="lc-stat-num">${c.easy}</div><div class="lc-stat-label">Easy</div></div>
    </div>
    <div class="lc-stat-card medium glass-card">
      <div><div class="lc-stat-num">${c.medium}</div><div class="lc-stat-label">Medium</div></div>
    </div>
    <div class="lc-stat-card hard glass-card">
      <div><div class="lc-stat-num">${c.hard}</div><div class="lc-stat-label">Hard</div></div>
    </div>
  `;
  if (window.lucide) lucide.createIcons();
}

/* ---------------- Render: Testimonials ---------------- */
function renderTestimonials() {
  const grid = document.getElementById('testimonialGrid');
  grid.innerHTML = SITE_DATA.testimonials.map((t, idx) => `
    <div class="testimonial-card glass-card reveal-up" style="--delay:${idx * 0.08}s">
      <i data-lucide="quote" class="quote-icon"></i>
      <p class="testimonial-text">${t.text}</p>
      <div class="testimonial-person">
        <div class="testimonial-avatar">${t.name.split(' ').map(n => n[0]).join('').slice(0,2)}</div>
        <div>
          <div class="testimonial-name">${t.name}</div>
          <div class="testimonial-role">${t.role}</div>
        </div>
      </div>
    </div>
  `).join('');
}

/* ---------------- Contact form ---------------- */
function initContactForm() {
  const form = document.getElementById('contactForm');
  const note = document.getElementById('formNote');
  form.addEventListener('submit', (e) => {
    // Uses FormSubmit.co (no backend needed). Let it submit normally,
    // but show optimistic feedback.
    note.textContent = 'Sending your message…';
    setTimeout(() => {
      note.textContent = 'Thank you! Redirecting…';
    }, 400);
  });
}
