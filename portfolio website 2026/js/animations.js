/* ==========================================================================
   ANIMATIONS: Lenis smooth scroll, GSAP scroll triggers, counters,
   skill rings, leetcode chart
   ========================================================================== */

window.addEventListener('load', () => {
  initSmoothScroll();
  initScrollReveal();
  initCounters();
  initSkillRings();
  initLeetcodeChart();
});

/* ---------------- Lenis smooth scroll ---------------- */
function initSmoothScroll() {
  if (typeof Lenis === 'undefined') return;
  const lenis = new Lenis({ duration: 1.1, smoothWheel: true });
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
  if (window.gsap && window.ScrollTrigger) {
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);
  }
}

/* ---------------- Scroll reveal via IntersectionObserver ---------------- */
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

  // Observe existing + dynamically injected elements
  function observeAll() {
    document.querySelectorAll('.reveal-up:not(.in-view)').forEach(el => observer.observe(el));
  }
  observeAll();
  // Re-scan shortly after render (data-driven sections inject reveal-up nodes)
  setTimeout(observeAll, 200);
  setTimeout(observeAll, 800);
}

/* ---------------- Animated counters (hero stats) ---------------- */
function initCounters() {
  const counters = document.querySelectorAll('[data-count]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.count, 10);
      let current = 0;
      const step = Math.max(1, Math.ceil(target / 40));
      const timer = setInterval(() => {
        current += step;
        if (current >= target) { current = target; clearInterval(timer); }
        el.textContent = current;
      }, 35);
      observer.unobserve(el);
    });
  }, { threshold: 0.6 });
  counters.forEach(c => observer.observe(c));
}

/* ---------------- Skill progress rings ---------------- */
function initSkillRings() {
  const rings = document.querySelectorAll('.skill-ring');
  const CIRC = 2 * Math.PI * 33; // matches r=33 in SVG
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const ring = entry.target;
      const level = parseFloat(ring.dataset.level) || 0;
      const fg = ring.querySelector('.ring-fg');
      if (fg) {
        const offset = CIRC - (level / 100) * CIRC;
        fg.style.strokeDasharray = CIRC;
        fg.style.strokeDashoffset = CIRC;
        requestAnimationFrame(() => { fg.style.strokeDashoffset = offset; });
      }
      observer.unobserve(ring);
    });
  }, { threshold: 0.4 });
  rings.forEach(r => observer.observe(r));
}

/* ---------------- LeetCode progress chart ---------------- */
function initLeetcodeChart() {
  const canvas = document.getElementById('leetcodeChart');
  if (!canvas || typeof Chart === 'undefined') return;
  const data = SITE_DATA.leetcode.progress;
  new Chart(canvas, {
    type: 'line',
    data: {
      labels: data.map((_, i) => `M${i + 1}`),
      datasets: [{
        label: 'Problems Solved',
        data,
        fill: true,
        borderColor: '#35e6d6',
        backgroundColor: (ctx) => {
          const g = ctx.chart.ctx.createLinearGradient(0, 0, 0, 260);
          g.addColorStop(0, 'rgba(53,230,214,0.35)');
          g.addColorStop(1, 'rgba(53,230,214,0)');
          return g;
        },
        tension: 0.4,
        pointBackgroundColor: '#9b5cff',
        pointBorderColor: '#fff',
        pointRadius: 4,
        borderWidth: 2.5
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        x: { grid: { color: 'rgba(255,255,255,.06)' }, ticks: { color: '#9a9aa2' } },
        y: { grid: { color: 'rgba(255,255,255,.06)' }, ticks: { color: '#9a9aa2' } }
      }
    }
  });
}
