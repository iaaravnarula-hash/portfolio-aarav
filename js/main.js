/* ═══════════════════════════════════════════════════════════════════
   AARAV NARULA — PORTFOLIO JS   (clean rewrite)
   Libraries: Lenis, GSAP + ScrollTrigger, SplitType  (via CDN)
═══════════════════════════════════════════════════════════════════ */

/* ── DEFAULT DATA ─────────────────────────────────────────────── */
const DEFAULT = {
  password: 'aarav2026',
  personal: {
    name: 'Aarav Narula', age: '14', class: '10',
    school: 'Manav Mangal Smart World, Zirakpur',
    email: 'aarav13.narula@gmail.com',
    phone: '+91 79860 65340',
    location: 'Chandigarh, India',
    status: 'Open to collabs & hackathons'
  },
  socials: { github: 'https://github.com', linkedin: 'https://linkedin.com', instagram: 'https://instagram.com' },
  bio: [
    "I'm Aarav Narula — a 14-year-old builder from Chandigarh shipping products real teams would be proud of. I compete in major hackathons against adult developers and have earned recognition from NASA, Intel, and IIT Delhi.",
    "My strongest skill is <em>prompt engineering</em> — I treat it as an art form, crafting AI interactions that produce production-ready outputs. Combined with vibe coding, I take an idea from concept to live deployment in hours, not weeks.",
    "I work across the full stack: PHP real estate platforms, Python AI tools, Flutter mobile apps, and hardware prototypes — all shipped as real products used by real people."
  ],
  skills: [
    { name: 'Prompt Engineering', pct: 95, best: true },
    { name: 'Vibe Coding',        pct: 99 },
    { name: 'Flutter / Dart',     pct: 83 },
    { name: 'PHP',                pct: 81 },
    { name: 'Python',             pct: 78 },
    { name: 'HTML / CSS',         pct: 75 },
    { name: 'AI / Machine Learning', pct: 72 },
    { name: 'JavaScript',         pct: 50 }
  ],
  aboutCards: [
    { title: 'Prompt Engineering', desc: '#1 skill. Treating prompts as precision instruments.', pct: 95 },
    { title: 'PHP Full-Stack',     desc: 'Real estate CRMs — 500+ clients, 100+ live properties.', pct: 81 },
    { title: 'Python & AI',        desc: 'Flask, CNNs, LLM fine-tuning, computer vision.', pct: 78 },
    { title: 'Vibe Coding',        desc: 'Idea to deployed product in hours — not weeks.', pct: 99 },
    { title: 'AI / ML',            desc: 'Neural nets, NLP, GRPO fine-tuning, satellite data.', pct: 72 },
    { title: 'Flutter / Dart',     desc: 'Cross-platform mobile apps. Concept to store in days.', pct: 83 }
  ],
  techTags: ['Flask','Django','Kivy','PHP','MySQL','Flutter','Dart','Python','CNN','LLM','GSAP','Vercel','Hostinger','Firebase','Groq','NASA API','Open-Meteo','IMU','Arduino'],
  projects: [
    { name: 'SoilScope', url: 'https://soilscope.vercel.app', live: true, stack: ['Flask','Python','CNN','Groq','Vercel'], year: '2025', bg: 'linear-gradient(135deg,#002233 0%,#005566 60%,#007a88 100%)', desc: 'AI agricultural intelligence — NASA NDVI data, CNN pest detection, 106-language support.' },
    { name: 'KeyToHome.in', url: 'https://keytohome.in', live: true, stack: ['PHP','MySQL','CRM','Hostinger'], year: '2025', bg: 'linear-gradient(135deg,#150020 0%,#3a0d55 100%)', desc: 'Full-stack PHP real estate CRM. 500+ clients, 100+ properties across Chandigarh Tricity.' },
    { name: 'RentVala', url: 'https://rentvala.com', live: true, stack: ['PHP','MySQL','Mobile-first'], year: '2025', bg: 'linear-gradient(135deg,#001030 0%,#002f70 100%)', desc: 'Verified no-brokerage rentals across Chandigarh, Mohali, Panchkula, Zirakpur.' },
    { name: 'SwingEdge Pro', url: 'https://swingedgepro.vercel.app', live: true, stack: ['Flask','Firebase','Node.js'], year: '2025', bg: 'linear-gradient(135deg,#0a1500 0%,#003300 100%)', desc: 'Swing trading platform v5.0 — Firebase Firestore, multi-module stock insights.' },
    { name: 'Saksham — ASHA AI', url: '', live: false, stack: ['Gemma 4','GRPO','Python'], year: '2025', bg: 'linear-gradient(135deg,#0a0a1a 0%,#221545 100%)', desc: "Offline voice-first medical AI for India's ASHA frontline workers. Gemma 4 E4B + GRPO." },
    { name: 'AI Bionic Arm', url: '', live: false, stack: ['Python','IMU','CV','Flutter'], year: '2026', bg: 'radial-gradient(circle at 30% 70%,rgba(0,229,255,.16) 0%,#090909 70%)', desc: '₹20K AI-powered arm for Indian children without upper limbs. SFT 2026. In progress.' }
  ],
  achievements: [
    { title: 'NASA Space Apps 2025–26',       result: '🏆 Global Nominee', sub: 'Honorable Mention', desc: 'SoilScope earned NASA-level global recognition competing against thousands of international teams.' },
    { title: 'Intel Ctrl+Alt Hackathon',      result: '🏆 Honorable Mention', sub: '2024–25', desc: 'Recognized by Intel for innovation in computing and AI against senior industry developers.' },
    { title: 'DWPS Mindsphere Competition',   result: '🥇 1st Place',       sub: 'Regional Winner', desc: 'Top position in one of the most competitive school-level tech competitions in the Chandigarh region.' },
    { title: "St. Soldier's Inter-School",    result: '🥈 2nd Place',       sub: 'Runner-Up', desc: 'Runner-up in the inter-school technology competition, showcasing AI and software capabilities.' },
    { title: 'Saksham @ Gemma 4 Good',        result: '🏆 Finalist',        sub: 'Saksham Award', desc: 'Built ASHA AI — offline voice-first medical AI for frontline health workers on Gemma 4 E4B.' },
    { title: 'IIT Delhi FITT Incubation',     result: '🎯 Target Track',    sub: 'Samsung SFT 2026', desc: "AI Bionic Arm targeting IIT Delhi's premier incubation program." }
  ],
  stats: [
    { n: 6, l: 'Hackathons Competed' },
    { n: 3, l: 'Podium Finishes' },
    { n: 14, l: 'Years Old' },
    { n: '10+', l: 'Live Projects' }
  ],
  timeline: [
    { idx: '01', event: 'NASA Space Apps 2025–26',    date: 'Oct 2025', result: '🏆 Global Nominee', cls: 'cyan',   award: 'Honorable Mention', tip: 'Built SoilScope — AI agricultural intelligence with live NASA NDVI satellite data.' },
    { idx: '02', event: 'Gemma 4 Good (Saksham)',     date: '2025',     result: '🏆 Finalist',       cls: 'cyan',   award: 'Saksham Award',    tip: "ASHA AI — offline voice-first medical AI for India's frontline health workers." },
    { idx: '03', event: 'DWPS Mindsphere',            date: '2024',     result: '1ST',               cls: 'gold',   award: '1st Place',        tip: '1st place. Outperformed all competing student teams in the Chandigarh region.' },
    { idx: '04', event: "St. Soldier's Inter-School", date: '2024',     result: '2ND',               cls: 'silver', award: '2nd Place',        tip: 'Runner-up in inter-school tech competition. AI and software development showcase.' },
    { idx: '05', event: 'Intel Ctrl+Alt 2024–25',     date: '2025',     result: '🏆 Nominee',        cls: 'cyan',   award: 'Honorable Mention', tip: 'Honorable Mention from Intel for innovation in computing and AI.' },
    { idx: '06', event: 'Samsung SFT 2026',           date: 'Jul 2026', result: 'IN PROGRESS',       cls: 'prog',   award: 'Target: Top 4',    tip: 'AI Bionic Arm for Indian school children. Target: Top 4 + IIT Delhi FITT incubation.' }
  ],
  termLines: [
    { cmd: 'vibe-init "AI Bionic Arm"',           ok: '✓ Project scaffolded — 1.2s' },
    { cmd: 'prompt-engineer "CNN classifier"',     ok: '✓ Model architecture generated' },
    { cmd: 'deploy soilscope.vercel.app',          ok: '✓ Live in 47 seconds' },
    { cmd: 'fine-tune gemma4-e4b --lang hi,pa',    ok: '✓ GRPO training complete' },
    { cmd: 'git push origin main',                 ok: '✓ KeyToHome.in deployed' },
    { cmd: 'aarav --status',                       ok: '⚡ Currently: AI Bionic Arm (SFT 2026)' }
  ],
  vibeCards: [
    { title: 'Idea to Deploy', desc: 'Most projects go from concept to live URL in under 6 hours. Zero wasted time on boilerplate.' },
    { title: 'Prompt First',   desc: 'Every build starts with a precisely engineered prompt, not a blank file. AI is an extension of intent.' },
    { title: 'Ship Real',      desc: 'All 6 projects are live, used by real users — not just GitHub repos that never see daylight.' },
    { title: 'Compete & Win',  desc: 'Entered 6 hackathons against adults. Podium 3 times. At 14. From Chandigarh. In Class 10.' }
  ],
  stackTicker: ['Flask','PHP','Flutter','Python','GSAP','Vercel','Firebase','Groq','CNN','IMU','Arduino','Dart','MySQL'],
  menuLinks: [
    { n: '01', t: 'Home',      s: '#hero' },
    { n: '02', t: 'About',     s: '#about' },
    { n: '03', t: 'Skills',    s: '#skills' },
    { n: '04', t: 'Projects',  s: '#projects' },
    { n: '05', t: 'Wins',      s: '#wins' },
    { n: '06', t: 'Vibe Code', s: '#vibe' },
    { n: '07', t: 'Contact',   s: '#contact' }
  ]
};

/* ── HELPERS ──────────────────────────────────────────────────── */
const $  = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];
const getData = () => { try { return JSON.parse(localStorage.getItem('an_data')) || DEFAULT; } catch { return DEFAULT; } };
const getPass = () => localStorage.getItem('an_pw') || DEFAULT.password;

let lenis = null;

/* ── BOOT ─────────────────────────────────────────────────────── */
window.addEventListener('load', () => {
  const d = getData();
  renderAll(d);
  initLenis();
  initParticles();
  initNav();
  initMenu();
  initHeroVR();
  initScrollAnims();
  initStatBar();
  initSkillBars();
  initStatCounters();
  initTerminal();
  initProjectCards();
  initTimeline();
  initImmersiveWidgets();
  initFloatingWidgets();

  initDashboard();
  initPalette();
  initLogin();
  initAdmin();
  initKonami();
  initTheme();
  updateSocials(d);
  handleHash();
});

/* ── RENDER ───────────────────────────────────────────────────── */
function renderAll(d) {
  /* Bio */
  const bioCopy = $('#bio-copy');
  if (bioCopy) bioCopy.innerHTML = d.bio.map(p => `<p>${p}</p>`).join('');

  /* Skill bars */
  const sklList = $('#sk-list');
  if (sklList) sklList.innerHTML = d.skills.map(s => `
    <div class="sk-item">
      <div class="sk-top">
        <span>${s.name}${s.best ? '<span class="sk-badge">BEST SKILL</span>' : ''}</span>
        <span>${s.pct}%</span>
      </div>
      <div class="sk-track"><div class="sk-bar${s.best ? ' best' : ''}" data-pct="${s.pct}"></div></div>
    </div>`).join('');

  /* About cards */
  const ac = $('#about-cards');
  if (ac) ac.innerHTML = d.aboutCards.map(c => `
    <div class="a-card">
      <div class="a-wm">${c.pct}</div>
      <h3>${c.title}</h3>
      <p>${c.desc}</p>
    </div>`).join('');

  /* Tech tags */
  const tags = $('#tech-tags');
  if (tags) tags.innerHTML = d.techTags.map(t => `<span class="tag">${t}</span>`).join('');

  /* Projects */
  const pg = $('#proj-grid');
  if (pg) pg.innerHTML = d.projects.map((p, i) => `
    <div class="pc${i === 0 ? ' feat' : ''}" data-url="${p.url || ''}">
      <div class="pc-art" style="background:${p.bg}"></div>
      ${p.live ? `<a href="${p.url}" target="_blank" rel="noopener" class="pc-arrow" onclick="event.stopPropagation()">→</a>` : ''}
      <div class="pc-body">
        <h3>${p.name}</h3>
        <div class="pc-stack">${p.stack.map(s => `<span>${s}</span>`).join('')}</div>
      </div>
      <div class="pc-tip">${p.live ? 'VISIT →' : 'IN PROGRESS'}</div>
    </div>`).join('');

  /* Achievements */
  const ag = $('#ach-grid');
  if (ag) ag.innerHTML = d.achievements.map((a, i) => `
    <div class="ach">
      <div class="ach-n">0${i + 1}</div>
      <h3>${a.title}</h3>
      <div class="sub">${a.result}</div>
      <p>${a.desc}</p>
    </div>`).join('');

  /* Stats */
  const st = $('#stats');
  if (st) st.innerHTML = d.stats.map((s, i) => `
    <div class="st">
      <span class="st-n"${typeof s.n === 'number' ? ` data-target="${s.n}" id="sn${i}"` : ''}>${s.n}</span>
      <span class="st-l">${s.l}</span>
    </div>`).join('');

  /* Vibe cards */
  const vc = $('#vibe-cards');
  if (vc) vc.innerHTML = d.vibeCards.map(c => `
    <div class="vc"><h3>${c.title}</h3><p>${c.desc}</p></div>`).join('');

  /* Timeline table */
  const tl = $('#tl-tbl');
  if (tl) tl.innerHTML = d.timeline.map(r => `
    <div class="tr" data-tip="${r.tip}">
      <span class="tr-n">${r.idx}</span>
      <span class="tr-e">${r.event}</span>
      <span class="tr-d">${r.date}</span>
      <span class="tr-r ${r.cls}">${r.result}</span>
      <span class="tr-a">${r.award}</span>
    </div>`).join('');

  /* Stack ticker (doubled for infinite scroll) */
  const ticker = $('#stack-ticker');
  if (ticker) {
    const items = d.stackTicker.map(s => `<span>${s}</span>`).join('');
    ticker.innerHTML = items + items;
  }

  /* Contact info */
  const ci = $('#contact-info');
  const p = d.personal;
  if (ci) ci.innerHTML = `
    <div class="ir"><span class="il">EMAIL</span><span class="iv">${p.email}</span></div>
    <div class="ir"><span class="il">PHONE</span><span class="iv">${p.phone}</span></div>
    <div class="ir"><span class="il">LOCATION</span><span class="iv">${p.location}</span></div>
    <div class="ir"><span class="il">STATUS</span><span class="iv" style="color:var(--accent)">${p.status}</span></div>`;

  /* Menu links */
  const ml = $('#menu-items');
  if (ml) {
    ml.innerHTML = d.menuLinks.map(m => `
      <div class="m-item" data-sec="${m.s}">
        <span class="m-num">${m.n}</span>
        <span class="m-txt">${m.t}</span>
      </div>`).join('');
    /* attach click events after DOM render */
    $$('.m-item', ml).forEach(item => {
      item.addEventListener('click', () => {
        closeMenu();
        const target = $(item.dataset.sec);
        if (target && lenis) {
          setTimeout(() => lenis.scrollTo(target, { offset: -72, duration: 1.2 }), 440);
        }
      });
    });
  }

  /* Stat bar — derive numbers from live data, re-animate if already visible */
  refreshStatBar(d);
}

function updateSocials(d) {
  const s = d.socials || DEFAULT.socials;
  $$('[data-gh]').forEach(a => { if (s.github)    a.href = s.github; });
  $$('[data-li]').forEach(a => { if (s.linkedin)  a.href = s.linkedin; });
  $$('[data-ig]').forEach(a => { if (s.instagram) a.href = s.instagram; });
}

/* ── LENIS SMOOTH SCROLL ──────────────────────────────────────── */
function initLenis() {
  lenis = new Lenis({
    duration: 1.2,
    easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smooth: true
  });

  window.lenis = lenis; /* expose globally for inline onclick links */
  gsap.registerPlugin(ScrollTrigger);
  gsap.ticker.add(t => lenis.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);

  lenis.on('scroll', ({ scroll, limit }) => {
    ScrollTrigger.update();
    const bar = $('#progress');
    if (bar) bar.style.width = (scroll / limit * 100) + '%';
    const nav = $('#nav');
    if (nav) nav.classList.toggle('scrolled', scroll > 60);
  });
}

/* ── PARTICLES ────────────────────────────────────────────────── */
function initParticles() {
  const cv = $('#particles');
  if (!cv) return;
  const ctx = cv.getContext('2d');
  let W, H;
  const N = 45;
  const pts = [];

  function resize() { W = cv.width = innerWidth; H = cv.height = innerHeight; }
  resize();
  window.addEventListener('resize', resize);

  for (let i = 0; i < N; i++) {
    pts.push({ x: Math.random() * innerWidth, y: Math.random() * innerHeight, vx: (Math.random() - .5) * .3, vy: (Math.random() - .5) * .3, r: Math.random() * 1.4 + .4 });
  }
  (function draw() {
    ctx.clearRect(0, 0, W, H);
    pts.forEach((p, i) => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
      if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
      ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(0,229,255,.3)'; ctx.fill();
      for (let j = i + 1; j < N; j++) {
        const q = pts[j], dx = p.x - q.x, dy = p.y - q.y, d = Math.sqrt(dx * dx + dy * dy);
        if (d < 110) {
          ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y);
          ctx.strokeStyle = `rgba(0,229,255,${(1 - d / 110) * .09})`; ctx.lineWidth = .5; ctx.stroke();
        }
      }
    });
    requestAnimationFrame(draw);
  })();
}

/* ── NAV THEME ────────────────────────────────────────────────── */
function initNav() {
  const nav = $('#nav');
  if (!nav) return;
  $$('[data-theme]').forEach(sec => {
    ScrollTrigger.create({
      trigger: sec, start: 'top 72px', end: 'bottom 72px',
      onEnter:     () => setNavTheme(nav, sec.dataset.theme),
      onEnterBack: () => setNavTheme(nav, sec.dataset.theme)
    });
  });
}
function setNavTheme(nav, theme) {
  nav.classList.toggle('lt', theme === 'light');
  nav.classList.toggle('dk', theme !== 'light');
}

/* ── MENU ─────────────────────────────────────────────────────── */
function initMenu() {
  const menu    = $('#menu');
  const openBtn = $('#menu-open');
  const closeBtn = $('#menu-close');

  /* Ensure hidden on init */
  gsap.set(menu, { y: '-100%' });

  function openMenu() {
    menu.classList.add('open');
    gsap.to(menu, { y: 0, duration: 0.55, ease: 'power3.out' });
    gsap.from($$('.m-txt', menu), { y: 50, opacity: 0, stagger: 0.05, duration: 0.5, ease: 'power3.out', delay: 0.12 });
  }

  openBtn  && openBtn.addEventListener('click', openMenu);
  closeBtn && closeBtn.addEventListener('click', closeMenu);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
}

function closeMenu() {
  const menu = $('#menu');
  if (!menu || !menu.classList.contains('open')) return;
  gsap.to(menu, { y: '-100%', duration: 0.42, ease: 'power3.in', onComplete: () => menu.classList.remove('open') });
}

/* ════════════════════════════════════════════════════════════════
   CANVAS INK-TRAIL VR REVEAL
   ─────────────────────────────────────────────────────────────
   Base layer : photo.jpg  (always visible — Aarav with glasses)
   Trail layer: canvas draws ink blobs at cursor position
                each blob uses source-in to reveal photo-vr.png
                (Aarav with Apple Vision Pro) only inside the blob
   Blob life  : ~1.4s fade, soft radial gradient edge, small trail
════════════════════════════════════════════════════════════════ */
function initHeroVR() {
  const hero   = $('#hero');
  const canvas = $('#vr-trail');
  if (!hero || !canvas) return;

  const ctx = canvas.getContext('2d');

  /* Use normal blend mode — we'll strip the white background from the VR image
     via an offscreen canvas so the headset overlays naturally without darkening. */
  canvas.style.mixBlendMode = 'normal';

  const vrImg = new Image();
  vrImg.src   = 'photo-vr.png';

  /* Pre-process: make near-white pixels transparent so white bg disappears */
  let processedVR = null;
  function processVRImage() {
    try {
      const off = document.createElement('canvas');
      off.width  = vrImg.naturalWidth;
      off.height = vrImg.naturalHeight;
      const offCtx = off.getContext('2d');
      offCtx.drawImage(vrImg, 0, 0);
      const imgData = offCtx.getImageData(0, 0, off.width, off.height);
      const d = imgData.data;
      for (let i = 0; i < d.length; i += 4) {
        const r = d[i], g = d[i+1], b = d[i+2];
        if (r > 215 && g > 215 && b > 215) {
          /* Smooth alpha falloff near the threshold so edges aren't hard */
          const brightness = (r + g + b) / 3;
          const alpha = Math.max(0, 1 - (brightness - 215) / 40);
          d[i+3] = Math.round(alpha * d[i+3]);
        }
      }
      offCtx.putImageData(imgData, 0, 0);
      processedVR = off;
    } catch (e) { /* CORS/local-file fallback — use original */ }
  }
  vrImg.onload = processVRImage;
  /* Handle already-cached image */
  if (vrImg.complete && vrImg.naturalWidth) processVRImage();

  let W = 0, H = 0;
  let imgX = 0, imgY = 0, imgW = 0, imgH = 0;

  function resize() {
    const hr    = hero.getBoundingClientRect();
    W = canvas.width  = hr.width;
    H = canvas.height = hr.height;

    const pw    = $('.h-photo-wrap');
    const photo = pw ? pw.querySelector('img') : null;
    if (!pw) return;
    const pr = pw.getBoundingClientRect();

    if (photo && photo.naturalWidth) {
      /* photo.jpg uses object-fit:contain + object-position:bottom center.
         The <img> fills the wrap container but the actual pixels sit in a
         smaller box — compute that box so the VR overlay aligns exactly. */
      const imgAR  = photo.naturalWidth / photo.naturalHeight;
      const contAR = pr.width / pr.height;
      let rendW, rendH;
      if (imgAR > contAR) { rendW = pr.width;  rendH = pr.width  / imgAR; }
      else                 { rendH = pr.height; rendW = pr.height * imgAR; }

      /* center horizontally, pin to bottom */
      imgX = (pr.left - hr.left) + (pr.width  - rendW) / 2;
      imgY = (pr.top  - hr.top)  + (pr.height - rendH);
      imgW = rendW;
      imgH = rendH;
    } else {
      /* image not loaded yet — use wrap bounds as fallback */
      imgX = pr.left - hr.left;
      imgY = pr.top  - hr.top;
      imgW = pr.width;
      imgH = pr.height;
    }
  }
  resize();
  window.addEventListener('resize', resize);

  /* Re-run once photo loads so object-fit maths use real dimensions */
  const _photoEl = $('.h-photo-wrap img');
  if (_photoEl) {
    _photoEl.addEventListener('load', resize);
    if (_photoEl.complete && _photoEl.naturalWidth) resize();
  }

  const LIFE  = 1400;
  const R_MAX = 130;
  const MIN_D = 8;
  const trail = [];
  let lastX = -999, lastY = -999;

  function addPoint(x, y) {
    /* Only add points within the photo area so blobs don't darken stat numbers */
    if (imgW > 0) {
      const pad = 60;
      if (x < imgX - pad || x > imgX + imgW + pad) return;
      if (y < imgY - pad || y > imgY + imgH + pad) return;
    }
    if (Math.hypot(x - lastX, y - lastY) < MIN_D) return;
    trail.push({ x, y, born: performance.now() });
    lastX = x; lastY = y;
    if (trail.length > 70) trail.splice(0, 4);
  }

  hero.addEventListener('mousemove', e => {
    const hr = canvas.getBoundingClientRect();
    addPoint(e.clientX - hr.left, e.clientY - hr.top);
  });
  hero.addEventListener('mouseleave', () => trail.splice(0));

  function render() {
    requestAnimationFrame(render);
    ctx.clearRect(0, 0, W, H);

    const now = performance.now();
    let i = 0;
    while (i < trail.length) {
      if (now - trail[i].born > LIFE) trail.splice(i, 1); else i++;
    }
    if (!trail.length || !vrImg.complete || !imgW) return;

    ctx.save();

    /* Step 1: draw soft radial blob mask */
    ctx.globalCompositeOperation = 'source-over';
    trail.forEach(p => {
      const age   = (now - p.born) / LIFE;
      const alpha = Math.pow(1 - age, 1.5);
      const r     = R_MAX * Math.min(1, age * 6 + 0.05);
      const g     = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, r);
      g.addColorStop(0,    `rgba(255,255,255,${alpha})`);
      g.addColorStop(0.5,  `rgba(255,255,255,${(alpha * 0.7).toFixed(3)})`);
      g.addColorStop(0.85, `rgba(255,255,255,${(alpha * 0.2).toFixed(3)})`);
      g.addColorStop(1,    'rgba(255,255,255,0)');
      ctx.beginPath();
      ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
      ctx.fillStyle = g;
      ctx.fill();
    });

    /* Step 2: clip to blob shape, draw VR image (white bg baked in).
       mix-blend-mode:multiply on canvas element: white×cream=cream (invisible).
       Only blob trail area reveals VR image — rest is transparent.         */
    ctx.globalCompositeOperation = 'source-in';
    ctx.drawImage(processedVR || vrImg, imgX, imgY, imgW, imgH);

    ctx.restore();
  }

  render();

  gsap.from('.h-photo-wrap', { opacity: 0, scale: 1.04, duration: 1.6, ease: 'power3.out', delay: 0.2 });
  gsap.from('.h-mono',       { opacity: 0, y: -20,  duration: 0.9, ease: 'power2.out', delay: 0.4 });
  gsap.from('.h-ghost',      { opacity: 0, duration: 1.4, delay: 0.2, ease: 'power2.out' });
  gsap.from('.h-comp-card',  { opacity: 0, x: -30,  duration: 0.9, ease: 'power2.out', delay: 0.6 });
  gsap.from('.h-scroll',     { opacity: 0, x:  30,  duration: 0.9, ease: 'power2.out', delay: 0.6 });
}








/* ════════════════════════════════════════════════════════════════
   IMMERSIVE SCROLL WIDGETS
   Each section goes from flat/static → animated/alive on scroll
════════════════════════════════════════════════════════════════ */
function initImmersiveWidgets() {

  /* ─────────────────────────────────────────────────────────────────
     HERO PARALLAX — elements move at different speeds on scroll
  ───────────────────────────────────────────────────────────────── */
  gsap.to('.h-ghost', {
    yPercent: -18, ease: 'none',
    scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: 1.5 }
  });
  gsap.to('.h-photo-wrap', {
    yPercent: 10, ease: 'none',
    scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: 2 }
  });
  gsap.to('.h-comp-card', {
    yPercent: -25, ease: 'none',
    scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: 1 }
  });
  gsap.to('.h-mono', {
    yPercent: -30, opacity: 0, ease: 'none',
    scrollTrigger: { trigger: '#hero', start: 'top top', end: '60% top', scrub: 1 }
  });

  /* ─────────────────────────────────────────────────────────────────
     STATEMENT — word-by-word animation (handled in initScrollAnims)
     No background animation here — it set an inline backgroundColor:'#000'
     that was never properly cleaned up, making the section look black.
  ───────────────────────────────────────────────────────────────── */

  /* ─────────────────────────────────────────────────────────────────
     ABOUT SECTION — bio slides from left, skills from right
  ───────────────────────────────────────────────────────────────── */
  ScrollTrigger.create({
    trigger: '#about', start: 'top 75%', once: true,
    onEnter: () => {
      gsap.from('#bio-copy p', {
        opacity: 0, x: -60, stagger: 0.12, duration: 0.9, ease: 'power3.out'
      });
      gsap.from('#sk-list .sk-item', {
        opacity: 0, x: 60, stagger: 0.08, duration: 0.8, ease: 'power3.out', delay: 0.1
      });
      gsap.from('#about-cards .a-card', {
        opacity: 0, y: 50, scale: 0.94, stagger: 0.07, duration: 0.75,
        ease: 'back.out(1.4)', delay: 0.3, clearProps: 'transform'
      });
    }
  });

  /* ─────────────────────────────────────────────────────────────────
     SKILLS — cube spins in, tags pop in staggered
  ───────────────────────────────────────────────────────────────── */
  ScrollTrigger.create({
    trigger: '#skills', start: 'top 72%', once: true,
    onEnter: () => {
      gsap.from('.cube-scene', { opacity: 0, scale: 0.6, rotation: -15, duration: 1, ease: 'back.out(1.7)' });
      gsap.from('.tag', { opacity: 0, y: 20, scale: 0.85, stagger: 0.04, duration: 0.5, ease: 'back.out(1.4)', delay: 0.3 });
      gsap.from('.edge-card', { opacity: 0, x: 80, duration: 1, ease: 'power3.out', delay: 0.2 });
    }
  });

  /* ─────────────────────────────────────────────────────────────────
     STAT BAR — numbers shoot up, dividers slide in
  ───────────────────────────────────────────────────────────────── */
  ScrollTrigger.create({
    trigger: '.w-statbar', start: 'top 85%', once: true,
    onEnter: () => {
      gsap.from('.sb-div', { scaleY: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out' });
    }
  });

  /* ─────────────────────────────────────────────────────────────────
     PROJECTS — cards slide in from alternating sides
  ───────────────────────────────────────────────────────────────── */
  ScrollTrigger.create({
    trigger: '#projects', start: 'top 70%', once: true,
    onEnter: () => {
      $$('.pc').forEach((card, i) => {
        gsap.from(card, {
          opacity: 0,
          x: i % 2 === 0 ? -80 : 80,
          y: 40,
          scale: 0.92,
          duration: 0.85,
          delay: i * 0.08,
          ease: 'power3.out',
          clearProps: 'transform'
        });
      });
    }
  });

  /* ─────────────────────────────────────────────────────────────────
     WINS — achievement cards drop in with bounce
  ───────────────────────────────────────────────────────────────── */
  ScrollTrigger.create({
    trigger: '#wins', start: 'top 72%', once: true,
    onEnter: () => {
      gsap.from('.ach', {
        opacity: 0, y: 70, scale: 0.9,
        stagger: 0.08, duration: 0.85, ease: 'back.out(1.5)', clearProps: 'transform'
      });
      gsap.from('.st', {
        opacity: 0, x: -40, stagger: 0.06, duration: 0.7, ease: 'power3.out', delay: 0.3, clearProps: 'transform'
      });
    }
  });

  /* ─────────────────────────────────────────────────────────────────
     VIBE SECTION — cards slide from left one at a time
  ───────────────────────────────────────────────────────────────── */
  ScrollTrigger.create({
    trigger: '#vibe', start: 'top 72%', once: true,
    onEnter: () => {
      gsap.from('.vc', {
        opacity: 0, x: -60, stagger: 0.12, duration: 0.8, ease: 'power3.out', clearProps: 'transform'
      });
      gsap.from('.terminal', {
        opacity: 0, y: 40, scale: 0.96, duration: 1, ease: 'power3.out', delay: 0.4, clearProps: 'transform'
      });
    }
  });

  /* ─────────────────────────────────────────────────────────────────
     TIMELINE — rows slide in from left, one after another
  ───────────────────────────────────────────────────────────────── */
  ScrollTrigger.create({
    trigger: '#timeline', start: 'top 70%', once: true,
    onEnter: () => {
      gsap.from('.tl-intro', { opacity: 0, x: -60, duration: 0.9, ease: 'power3.out' });
      gsap.from('.tr', {
        opacity: 0, x: -50, scaleX: 0.96,
        stagger: 0.1, duration: 0.7, ease: 'power3.out', delay: 0.2
      });
    }
  });

  /* ─────────────────────────────────────────────────────────────────
     DASHBOARD — widgets pop in from bottom staggered
  ───────────────────────────────────────────────────────────────── */
  ScrollTrigger.create({
    trigger: '#dashboard', start: 'top 72%', once: true,
    onEnter: () => {
      gsap.from('.w', {
        opacity: 0, y: 50, scale: 0.94,
        stagger: 0.07, duration: 0.75, ease: 'back.out(1.3)', clearProps: 'transform'
      });
    }
  });

  /* ─────────────────────────────────────────────────────────────────
     CONTACT — big heading sweeps in, info rows from right
  ───────────────────────────────────────────────────────────────── */
  ScrollTrigger.create({
    trigger: '#contact', start: 'top 70%', once: true,
    onEnter: () => {
      gsap.from('.ct-h', { opacity: 0, y: 80, duration: 1.1, ease: 'power3.out' });
      gsap.from('.ir', { opacity: 0, x: 60, stagger: 0.08, duration: 0.75, ease: 'power3.out', delay: 0.2 });
      gsap.from('.cta-card', { opacity: 0, y: 40, scale: 0.95, duration: 0.9, ease: 'back.out(1.4)', delay: 0.5 });
    }
  });

  /* ─────────────────────────────────────────────────────────────────
     FOOTER — slide up from below
  ───────────────────────────────────────────────────────────────── */
  ScrollTrigger.create({
    trigger: '#footer', start: 'top 90%', once: true,
    onEnter: () => {
      gsap.from('.footer-top', { opacity: 0, y: 40, duration: 0.8, ease: 'power3.out' });
      gsap.from('.footer-bottom', { opacity: 0, y: 20, duration: 0.7, ease: 'power3.out', delay: 0.2 });
    }
  });

  /* ─────────────────────────────────────────────────────────────────
     SKILL BARS — best skill pulses after animating
  ───────────────────────────────────────────────────────────────── */
  ScrollTrigger.create({
    trigger: '#skills', start: 'top 60%', once: true,
    onEnter: () => {
      $$('.sk-bar.best').forEach(b => {
        gsap.to(b, { boxShadow: '0 0 18px 4px rgba(0,229,255,.45)', duration: 0.8, delay: 1.4 });
      });
    }
  });

  /* ─────────────────────────────────────────────────────────────────
     STACK TICKER — start scrolling when in view
  ───────────────────────────────────────────────────────────────── */
  const ticker = $('#stack-ticker');
  if (ticker) {
    gsap.set(ticker, { opacity: 0 });
    ScrollTrigger.create({
      trigger: ticker, start: 'top 88%', once: true,
      onEnter: () => {
        gsap.to(ticker, { opacity: 1, duration: 0.5 });
        gsap.to(ticker, {
          x: () => -ticker.scrollWidth / 2,
          duration: 22, ease: 'none', repeat: -1
        });
      }
    });
  }

  /* ─────────────────────────────────────────────────────────────────
     W-BAND MARQUEE — pause on hover (already CSS, just add speed link)
  ───────────────────────────────────────────────────────────────── */

  /* ─────────────────────────────────────────────────────────────────
     MOUSE PARALLAX on hero floating elements
  ───────────────────────────────────────────────────────────────── */
  const hero = $('#hero');
  if (hero) {
    hero.addEventListener('mousemove', e => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const dx = (e.clientX - cx) / cx;  /* -1 to 1 */
      const dy = (e.clientY - cy) / cy;

      gsap.to('.h-ghost', { x: dx * 22, y: dy * 12, duration: 1.2, ease: 'power2.out' });
      gsap.to('.h-blob.a', { x: dx * 30, y: dy * 20, duration: 2, ease: 'power2.out' });
      gsap.to('.h-blob.b', { x: -dx * 24, y: -dy * 18, duration: 2.2, ease: 'power2.out' });
      gsap.to('.h-mono', { x: dx * 10, y: dy * 6, duration: 1, ease: 'power2.out' });
    });
    hero.addEventListener('mouseleave', () => {
      gsap.to(['.h-ghost', '.h-blob.a', '.h-blob.b', '.h-mono'], {
        x: 0, y: 0, duration: 1.5, ease: 'power2.out'
      });
    });
  }

}


/* ── SCROLL ANIMATIONS ────────────────────────────────────────── */
function initScrollAnims() {

  /* Reusable helper — animate elements in as they enter viewport */
  function reveal(selector, vars = {}, triggerEl) {
    const els = $$(selector);
    if (!els.length) return;
    const trigger = triggerEl || els[0];
    gsap.from(els, {
      opacity: 0,
      y: vars.y ?? 40,
      x: vars.x ?? 0,
      scale: vars.scale ?? 1,
      duration: vars.duration ?? 0.75,
      ease: vars.ease ?? 'power3.out',
      stagger: vars.stagger ?? 0.08,
      delay: vars.delay ?? 0,
      scrollTrigger: { trigger, start: 'top 88%', once: true }
    });
  }

  /* NOTE: .a-card, .pc, .ach, .vc, .tr, .ir, .sk-item are handled by
     initImmersiveWidgets with clearProps:'transform'. Do NOT re-animate them
     here — conflicting gsap.from() calls leave elements stuck at opacity:0. */

  /* ── Section headings ──────────────────────────────────────── */
  $$('.sec-tag, .sec-title, .sec-sub').forEach(el => {
    gsap.from(el, {
      opacity: 0, y: 28, duration: 0.75, ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 90%', once: true }
    });
  });

  /* ── Statement section — text is always visible; floating widgets
     (added in initFloatingWidgets) provide all the visual interest.
     All SplitType / gsap.set pre-hiding removed to fix black void. ── */
}




/* ════════════════════════════════════════════════════════════════
   FLOATING SCROLL WIDGETS
   Injects decorative animated chips/badges into existing sections.
   Pure additive — no existing content removed.
════════════════════════════════════════════════════════════════ */
function initFloatingWidgets() {

  /* Inject inline styles for fw elements once */
  if (!document.getElementById('fw-styles')) {
    const s = document.createElement('style');
    s.id = 'fw-styles';
    s.textContent = `
      .fw-chip {
        position:absolute; font-family:var(--fm); font-size:10px;
        font-weight:700; letter-spacing:.14em; text-transform:uppercase;
        padding:6px 16px; border-radius:99px; pointer-events:none;
        z-index:2; white-space:nowrap;
        backdrop-filter:blur(6px);
        background:rgba(255,255,255,0.55);
        box-shadow:0 2px 16px rgba(0,0,0,.08);
      }
      body.dm .fw-chip {
        background:rgba(0,0,0,.35);
        box-shadow:0 2px 16px rgba(0,0,0,.4);
      }

      .fw-badge { position:absolute; pointer-events:none; z-index:2; text-align:center; }
      .fw-num { display:block; font-family:var(--fi);
                font-size:clamp(2rem,4vw,3.2rem); color:var(--accent); line-height:1; }
      .fw-lab { display:block; font-family:var(--fm); font-size:9px;
                letter-spacing:.18em; text-transform:uppercase;
                color:rgba(9,9,9,.4); margin-top:3px; }
      body.dm .fw-lab { color:rgba(236,233,227,.35); }
    `;
    document.head.appendChild(s);
  }

  /* Create a floating chip and animate it in on scroll */
  function addChip(sectionId, text, x, y, delay, color) {
    const parent = $(sectionId);
    if (!parent) return;
    const el = document.createElement('div');
    el.className = 'fw-chip';
    el.textContent = text;
    el.style.left = x; el.style.top = y;
    el.style.color = color; el.style.border = `1px solid ${color}`;
    el.style.opacity = '0'; el.style.transform = 'translateY(24px)';
    parent.appendChild(el);

    /* If section already in view, animate immediately */
    const rect = parent.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      gsap.to(el, { opacity: 1, y: 0, duration: 0.7, delay, ease: 'back.out(1.8)' });
      gsap.to(el, { y: -9, duration: 2.4 + delay, ease: 'sine.inOut',
        repeat: -1, yoyo: true, delay: delay + 0.9 });
    } else {
      ScrollTrigger.create({
        trigger: parent, start: 'top 85%', once: true,
        onEnter: () => {
          gsap.to(el, { opacity: 1, y: 0, duration: 0.7, delay, ease: 'back.out(1.8)' });
          gsap.to(el, { y: -9, duration: 2.4 + delay, ease: 'sine.inOut',
            repeat: -1, yoyo: true, delay: delay + 0.9 });
        }
      });
    }
  }

  /* Create a floating number badge */
  function addBadge(sectionId, num, label, x, y, delay) {
    const parent = $(sectionId);
    if (!parent) return;
    const el = document.createElement('div');
    el.className = 'fw-badge';
    el.innerHTML = `<span class="fw-num">${num}</span><span class="fw-lab">${label}</span>`;
    el.style.left = x; el.style.top = y;
    el.style.opacity = '0'; el.style.transform = 'translateY(28px) scale(.85)';
    parent.appendChild(el);

    const rect2 = parent.getBoundingClientRect();
    if (rect2.top < window.innerHeight) {
      gsap.to(el, { opacity: 1, y: 0, scale: 1, duration: 0.85, delay, ease: 'back.out(1.7)' });
      gsap.to(el, { y: -7, duration: 2.8 + delay, ease: 'sine.inOut',
        repeat: -1, yoyo: true, delay: delay + 1.1 });
    } else {
      ScrollTrigger.create({
        trigger: parent, start: 'top 85%', once: true,
        onEnter: () => {
          gsap.to(el, { opacity: 1, y: 0, scale: 1, duration: 0.85, delay, ease: 'back.out(1.7)' });
          gsap.to(el, { y: -7, duration: 2.8 + delay, ease: 'sine.inOut',
            repeat: -1, yoyo: true, delay: delay + 1.1 });
        }
      });
    }
  }


  /* Cyan */  const C = 'var(--accent)';
  /* Green */ const G = '#28C840';
  /* Purple*/ const P = '#a78bfa';
  /* Amber */ const A = '#f59e0b';
  /* Dim */   const D = 'rgba(9,9,9,.35)';

  /* ── HERO: floating status chips ──────────────────────────── */
  addChip('#hero', 'Open to Work',  '72%', '16%', 0.4, G);
  addChip('#hero', 'Class 10',      '6%',  '28%', 0.6, C);
  addChip('#hero', 'Builder',       '76%', '72%', 0.8, D);

  /* ── ABOUT: floating category chips ───────────────────────── */
  addChip('#about', 'Full-Stack',   '62%', '10%', 0.2, C);
  addChip('#about', 'AI / ML',      '70%', '28%', 0.4, P);
  addChip('#about', 'Hardware',     '64%', '44%', 0.6, A);

  /* ── PROJECTS: floating tech tags ─────────────────────────── */
  addChip('#projects', 'Python',    '3%',  '6%',  0.2, C);
  addChip('#projects', 'Flask',     '86%', '10%', 0.4, G);
  addChip('#projects', 'React',     '3%',  '52%', 0.5, '#38bdf8');
  addChip('#projects', 'Vercel',    '86%', '56%', 0.7, P);

  /* ── STATEMENT: floating stat chips ──────────────────────────── */
  addChip('#statement', '🏆 NASA Nominee',  '4%',  '12%', 0.3, A);
  addChip('#statement', 'Age 14',           '82%', '10%', 0.5, C);
  addChip('#statement', 'Chandigarh',       '5%',  '80%', 0.4, G);
  addChip('#statement', '6 Hackathons',     '74%', '76%', 0.6, P);
  addBadge('#statement', '10+', 'Projects', '83%', '42%', 0.7);

  /* ── WINS: achievement chips ───────────────────────────────── */
  addChip('#wins', 'NASA Finalist', '4%',  '8%',  0.2, A);
  addChip('#wins', 'Intel ISEF',    '78%', '12%', 0.4, C);

  /* ── SKILLS: floating number badges ───────────────────────── */
  addBadge('#skills', '12+', 'Skills',       '4%',  '5%',  0.3);
  addBadge('#skills', '95%', 'Python',       '82%', '6%',  0.5);
}

/* ── COMPUTE STAT BAR VALUES FROM LIVE DATA ───────────────────── */
function computeStatBar(d) {
  const age     = parseInt(d.personal?.age) || 14;
  const comps   = (d.timeline || DEFAULT.timeline).length;
  const podiums = (d.timeline || DEFAULT.timeline).filter(t =>
    t.cls === 'gold' || t.cls === 'silver' || /finalist/i.test(t.award)
  ).length;
  const shipped = (d.projects || DEFAULT.projects).filter(p => p.live).length;
  return [age, comps, podiums, shipped];
}

/* ── STAT BAR ─────────────────────────────────────────────────── */
function animateStatBar() {
  $$('.sb-n[data-count]').forEach((el, i) => {
    const target = parseInt(el.dataset.count) || 0;
    if (!target) return;
    const obj = { v: 0 };
    gsap.to(obj, {
      v: target, duration: 2.2, ease: 'power2.out', delay: i * 0.1,
      onUpdate: () => { el.textContent = Math.floor(obj.v); },
      onComplete: () => { el.textContent = target; }
    });
  });
}

function initStatBar() {
  /* Seed data-count from live data before ScrollTrigger fires */
  const vals = computeStatBar(getData());
  $$('.sb-n').forEach((el, i) => { if (vals[i] !== undefined) el.dataset.count = vals[i]; });

  ScrollTrigger.create({
    trigger: '.w-statbar', start: 'top 80%', once: true,
    onEnter: () => {
      $$('.sb-item').forEach((item, i) => {
        setTimeout(() => item.classList.add('visible'), i * 120);
      });
      animateStatBar();
    }
  });
}

/* Called by renderAll() so admin saves auto-update the numbers */
function refreshStatBar(d) {
  const vals = computeStatBar(d);
  $$('.sb-n').forEach((el, i) => {
    if (vals[i] !== undefined) el.dataset.count = vals[i];
  });
  /* If stat bar already visible (scrolled past), re-animate immediately */
  if ($('.sb-item.visible')) animateStatBar();
}

/* ── SKILL BARS ───────────────────────────────────────────────── */
function initSkillBars() {
  /* Pre-zero all bars in CSS already (width:0), ensure GSAP matches */
  $$('.sk-bar').forEach(bar => gsap.set(bar, { width: 0 }));

  /* Trigger from the about section so bars animate AFTER their parent sk-items
     have faded in (which takes ~0.5s) */
  ScrollTrigger.create({
    trigger: '#about', start: 'top 60%', once: true,
    onEnter: () => {
      $$('.sk-bar').forEach((bar, i) => {
        const target = (bar.dataset.pct || 0) + '%';
        gsap.to(bar, {
          width: target, duration: 1.4, ease: 'power2.out',
          delay: 0.55 + i * 0.07
        });
      });
    }
  });
}

/* ── STAT COUNTERS ────────────────────────────────────────────── */
function initStatCounters() {
  $$('.st-n[data-target]').forEach(el => {
    const target = parseInt(el.dataset.target);
    const obj = { v: 0 };
    ScrollTrigger.create({
      trigger: el, start: 'top 90%',
      onEnter: () => gsap.to(obj, { v: target, duration: 2, ease: 'power2.out', onUpdate: () => { el.textContent = Math.floor(obj.v); } })
    });
  });
  ScrollTrigger.create({
    trigger: '#dashboard', start: 'top 75%',
    onEnter: () => gsap.to('#build-bar', { width: '65%', duration: 1.5, ease: 'power2.out' })
  });
}

/* ── TERMINAL TYPEWRITER ──────────────────────────────────────── */
function initTerminal() {
  const body = $('#term-body');
  if (!body) return;
  const d = getData();

  body.innerHTML = d.termLines.map((l, i) =>
    `<div class="tl" id="tln${i}"><span style="color:rgba(0,229,255,.45)">$ </span><span class="cmd">${l.cmd}</span>  <span class="ok">${l.ok}</span>${i === d.termLines.length - 1 ? '<span class="t-cur"></span>' : ''}</div>`
  ).join('');

  let fired = false;
  ScrollTrigger.create({
    trigger: body, start: 'top 82%',
    onEnter: () => {
      if (fired) return; fired = true;
      $$('.tl').forEach((ln, i) => setTimeout(() => { ln.style.opacity = '1'; ln.style.transition = 'opacity .3s'; }, i * 860));
    }
  });
}

/* ── PROJECT CARDS ────────────────────────────────────────────── */
function initProjectCards() {
  $$('.pc').forEach(card => {
    const tip = card.querySelector('.pc-tip');

    card.addEventListener('mouseenter', () => {
      if (tip) gsap.to(tip, { opacity: 1, scale: 1, duration: 0.28, ease: 'power2.out' });
    });
    card.addEventListener('mouseleave', () => {
      if (tip) gsap.to(tip, { opacity: 0, scale: 0.82, duration: 0.2 });
      gsap.to(card, { rotateX: 0, rotateY: 0, duration: 0.5, ease: 'power2.out' });
    });
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect();
      const mx = (e.clientX - r.left) / r.width - 0.5;
      const my = (e.clientY - r.top)  / r.height - 0.5;
      gsap.to(card, { rotateY: mx * 12, rotateX: -my * 12, transformPerspective: 900, duration: 0.35 });
    });
    card.addEventListener('click', () => { if (card.dataset.url) window.open(card.dataset.url, '_blank'); });
  });
}

/* ── TIMELINE TOOLTIP ─────────────────────────────────────────── */
function initTimeline() {
  const tip = $('#tl-tip');
  if (!tip) return;

  /* Park off-screen so it never flashes at 0,0 before first mousemove */
  tip.style.left = '-9999px';
  tip.style.top  = '-9999px';

  $$('.tr').forEach(row => {
    row.addEventListener('mouseenter', e => {
      /* Set position BEFORE fading in — prevents top-left flash */
      tip.style.left = (e.clientX + 18) + 'px';
      tip.style.top  = (e.clientY - 10) + 'px';
      tip.textContent = row.dataset.tip || '';
      gsap.to(tip, { opacity: 1, duration: 0.2 });
    });
    row.addEventListener('mousemove', e => {
      tip.style.left = (e.clientX + 18) + 'px';
      tip.style.top  = (e.clientY - 10) + 'px';
    });
    row.addEventListener('mouseleave', () => gsap.to(tip, { opacity: 0, duration: 0.15 }));
  });
}

/* ── DASHBOARD ────────────────────────────────────────────────── */
function initDashboard() {
  /* IST Clock — runs immediately and every second */
  function tick() {
    try {
      const now = new Date();
      const t = now.toLocaleTimeString('en-IN', {
        timeZone: 'Asia/Kolkata', hour12: false,
        hour: '2-digit', minute: '2-digit', second: '2-digit'
      });
      const clk = document.getElementById('live-clock');
      if (clk) clk.textContent = t;
      const hud = document.getElementById('hud-clk');
      if (hud) hud.textContent = 'IST · ' + t;
    } catch(e) {}
  }
  tick();
  setInterval(tick, 1000);

  /* Visitor counter — runs immediately */
  let v = parseInt(localStorage.getItem('an_v') || '0');
  if (!v || v < 1000) v = 1247;
  v++;
  localStorage.setItem('an_v', String(v));
  const vc = document.getElementById('visitor');
  if (vc) vc.textContent = v.toLocaleString();

  /* Weather — fetch from Open-Meteo (CORS-open API) */
  const wt = document.getElementById('w-temp');
  const wd = document.getElementById('w-desc');
  if (wt) wt.textContent = '--°C';
  if (wd) wd.textContent = 'Loading...';

  fetch('https://api.open-meteo.com/v1/forecast?latitude=30.7333&longitude=76.7794&current=temperature_2m,weather_code')
    .then(r => r.json())
    .then(j => {
      const codes = {
        0:'Clear Sky', 1:'Mainly Clear', 2:'Partly Cloudy', 3:'Overcast',
        45:'Foggy', 51:'Light Drizzle', 61:'Light Rain', 63:'Moderate Rain',
        71:'Light Snow', 80:'Rain Showers', 95:'Thunderstorm'
      };
      if (wt) wt.textContent = Math.round(j.current.temperature_2m) + '°C';
      if (wd) wd.textContent = (codes[j.current.weather_code] || 'Partly Cloudy') + ' · Chandigarh';
    })
    .catch(() => {
      if (wt) wt.textContent = '31°C';
      if (wd) wd.textContent = 'Partly Cloudy · Chandigarh';
    });
}


/* ── COMMAND PALETTE (Cmd+K) ──────────────────────────────────── */
function initPalette() {
  const pal  = $('#palette');
  const inp  = $('#pal-input');
  const list = $('#cmd-list');
  if (!pal || !inp || !list) return;

  let filtered = [], sel = 0;

  const CMDS = [
    { icon: '🏠', title: 'Home',          sub: 'Back to top',             action: () => { navTo('#hero');     closePal(); } },
    { icon: '👤', title: 'About',          sub: 'Who is Aarav',            action: () => { navTo('#about');    closePal(); } },
    { icon: '⚙️', title: 'Skills',         sub: 'Tech stack',              action: () => { navTo('#skills');   closePal(); } },
    { icon: '🚀', title: 'Projects',       sub: '6 live products',          action: () => { navTo('#projects'); closePal(); } },
    { icon: '🏆', title: 'Wins',           sub: 'Hackathons & awards',      action: () => { navTo('#wins');     closePal(); } },
    { icon: '⚡', title: 'Vibe Code',      sub: 'The method',               action: () => { navTo('#vibe');     closePal(); } },
    { icon: '📧', title: 'Contact',        sub: 'Get in touch',             action: () => { navTo('#contact');  closePal(); } },
    { icon: '🌐', title: 'SoilScope',      sub: 'soilscope.vercel.app',     action: () => { window.open('https://soilscope.vercel.app','_blank'); closePal(); } },
    { icon: '🏠', title: 'KeyToHome',      sub: 'keytohome.in',             action: () => { window.open('https://keytohome.in','_blank'); closePal(); } },
    { icon: '📈', title: 'SwingEdge',      sub: 'swingedgepro.vercel.app',  action: () => { window.open('https://swingedgepro.vercel.app','_blank'); closePal(); } },
    { icon: '🔐', title: 'Admin Panel',    sub: 'Open admin login',          action: () => { closePal(); openLogin(); } },
    { icon: '📋', title: 'Copy Email',     sub: 'aarav13.narula@gmail.com', action: () => { navigator.clipboard?.writeText('aarav13.narula@gmail.com').catch(() => {}); showToast('Email copied!'); closePal(); } },
    { icon: '🌙', title: 'Toggle Theme',   sub: 'Switch light/dark mode',   action: () => { toggleTheme(); closePal(); } }
  ];

  function renderCmds(q = '') {
    filtered = CMDS.filter(c => c.title.toLowerCase().includes(q.toLowerCase()) || c.sub.toLowerCase().includes(q.toLowerCase()));
    sel = 0;
    list.innerHTML = filtered.map((c, i) => `
      <div class="ci${i === 0 ? ' on' : ''}" data-i="${i}">
        <span class="ci-ic">${c.icon}</span>
        <div><div class="ci-title">${c.title}</div><div class="ci-sub">${c.sub}</div></div>
      </div>`).join('');
    $$('.ci', list).forEach((it, i) => {
      it.addEventListener('mouseenter', () => { sel = i; updateSel(); });
      it.addEventListener('click', () => filtered[i] && filtered[i].action());
    });
  }
  function updateSel() { $$('.ci', list).forEach((it, i) => it.classList.toggle('on', i === sel)); }

  renderCmds();
  inp.addEventListener('input', () => renderCmds(inp.value));
  inp.addEventListener('keydown', e => {
    if (e.key === 'ArrowDown') { e.preventDefault(); sel = Math.min(sel + 1, filtered.length - 1); updateSel(); }
    if (e.key === 'ArrowUp')   { e.preventDefault(); sel = Math.max(sel - 1, 0); updateSel(); }
    if (e.key === 'Enter' && filtered[sel]) filtered[sel].action();
    if (e.key === 'Escape') closePal();
  });

  document.addEventListener('keydown', e => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') { e.preventDefault(); pal.classList.contains('open') ? closePal() : openPal(); }
  });
  pal.addEventListener('click', e => { if (e.target === pal) closePal(); });

  function openPal() { pal.classList.add('open'); inp.value = ''; renderCmds(); setTimeout(() => inp.focus(), 50); }
  function closePal() { pal.classList.remove('open'); }
  window._openPal = openPal;
}

/* ── NAV TO SECTION ───────────────────────────────────────────── */
function navTo(hash) {
  const target = $(hash);
  if (target && lenis) {
    const fl = $('#flash');
    if (fl) gsap.fromTo(fl, { opacity: 0 }, { opacity: 1, duration: 0.06, onComplete: () => gsap.to(fl, { opacity: 0, duration: 0.15, delay: 0.04 }) });
    setTimeout(() => lenis.scrollTo(target, { offset: -72, duration: 1.2 }), 60);
  }
}

/* ── THEME TOGGLE ─────────────────────────────────────────────── */
function _applyThemeExtras(isDark) {
  /* Sync #hero data-theme so [data-theme="dark"] .h-photo-wrap rule fires.
     Without this, multiply blend makes the photo invisible in dark mode. */
  const hero = document.getElementById('hero');
  if (hero) hero.dataset.theme = isDark ? 'dark' : 'light';
}

function initTheme() {
  const isDark = localStorage.getItem('an_dm') === '1';
  if (isDark) document.body.classList.add('dm');
  _applyThemeExtras(isDark);
  const btn = $('.theme-btn');
  if (btn) btn.addEventListener('click', toggleTheme);
  updateThemeBtn();
}
function toggleTheme() {
  document.body.classList.toggle('dm');
  const isDark = document.body.classList.contains('dm');
  localStorage.setItem('an_dm', isDark ? '1' : '0');
  _applyThemeExtras(isDark);
  updateThemeBtn();
}
function updateThemeBtn() {
  const btn = $('.theme-btn');
  if (!btn) return;
  btn.textContent = document.body.classList.contains('dm') ? '☀' : '◐';
  btn.title = document.body.classList.contains('dm') ? 'Switch to Light Mode' : 'Switch to Dark Mode';
}

/* ── LOGIN ────────────────────────────────────────────────────── */
function openLogin()  { const l = $('#login');  if (l) { l.classList.add('open');  setTimeout(() => $('#login-pw')?.focus(), 80); } }
function closeLogin() { const l = $('#login');  if (l) l.classList.remove('open'); }
window.openLogin = openLogin;

function initLogin() {
  $('#login-x')   && $('#login-x').addEventListener('click', closeLogin);
  $('#login-btn') && $('#login-btn').addEventListener('click', doLogin);
  $('#login-pw')  && $('#login-pw').addEventListener('keydown', e => { if (e.key === 'Enter') doLogin(); });
}
function doLogin() {
  const pw  = $('#login-pw')?.value || '';
  const err = $('#login-err');
  if (pw === getPass()) {
    sessionStorage.setItem('an_auth', '1');
    closeLogin();
    if (err) err.textContent = '';
    openAdmin();
  } else {
    if (err) err.textContent = 'Incorrect password.';
    const box = $('#login-box');
    if (box) { box.classList.remove('shake'); void box.offsetWidth; box.classList.add('shake'); }
  }
}

/* ── ADMIN PANEL ──────────────────────────────────────────────── */
const ADMIN_TABS = [
  { id: 'personal',  label: 'Personal' },
  { id: 'bio',       label: 'Bio' },
  { id: 'socials',   label: 'Socials' },
  { id: 'skills',    label: 'Skills' },
  { id: 'projects',  label: 'Projects' },
  { id: 'wins',      label: 'Wins' },
  { id: 'timeline',  label: 'Timeline' },
  { id: 'stats',     label: 'Stats' },
  { id: 'terminal',  label: 'Terminal' },
  { id: 'vibe',      label: 'Vibe' },
  { id: 'stack',     label: 'Stack' },
  { id: 'security',  label: 'Security' }
];

/* Default item templates for "Add" button */
const ADM_DEFAULTS = {
  bio:          '',
  skills:       { name: 'New Skill', pct: 70, best: false },
  projects:     { name: 'New Project', url: '', live: false, stack: [], year: '2026', bg: 'linear-gradient(135deg,#090909 0%,#181818 100%)', desc: 'Project description.' },
  achievements: { title: 'New Achievement', result: '🏆', sub: '', desc: '' },
  stats:        { n: 0, l: 'New Stat' },
  timeline:     { idx: '00', event: 'New Event', date: '2026', result: '', cls: 'cyan', award: '', tip: '' },
  termLines:    { cmd: 'new-command --arg', ok: '✓ Done' },
  vibeCards:    { title: 'New Card', desc: 'Description here.' }
};

let _admSection = 'personal';

function openAdmin() {
  const a = $('#admin');
  if (!a) return;
  a.classList.add('open');
  lenis?.stop(); /* prevent Lenis hijacking scroll inside the admin panel */
  if (!$('#adm-nav')?.children.length) buildAdminTabs();
}
function closeAdmin() {
  $('#admin')?.classList.remove('open');
  lenis?.start(); /* resume smooth scroll on page */
}

function buildAdminTabs() {
  const nav = $('#adm-nav');
  if (!nav) return;
  nav.style.overflowY = 'auto'; /* scrollable sidebar for many tabs */
  nav.innerHTML = ADMIN_TABS.map((t, i) =>
    `<button class="at${i === 0 ? ' on' : ''}" data-t="${t.id}">${t.label}</button>`).join('');
  $$('.at', nav).forEach(btn => {
    btn.addEventListener('click', () => {
      $$('.at', nav).forEach(b => b.classList.remove('on'));
      btn.classList.add('on');
      showAdmSection(btn.dataset.t);
    });
  });
  showAdmSection('personal');
}

/* ── ADMIN SECTION RENDERER ───────────────────────────────────── */
function showAdmSection(id) {
  _admSection = id;
  const main = document.getElementById('adm-main');
  if (!main) return;
  const d   = getData();
  const esc = v => String(v || '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');

  const IS  = 'width:100%;padding:8px 11px;background:rgba(236,233,227,.07);border:1px solid rgba(236,233,227,.18);color:var(--light);font-family:var(--fm);font-size:12px;margin-top:3px;outline:none;box-sizing:border-box;';
  const TA  = IS + 'min-height:80px;resize:vertical;';
  const LS  = 'display:block;font-family:var(--fm);font-size:9px;text-transform:uppercase;letter-spacing:.14em;color:rgba(236,233,227,.35);width:100%;margin-bottom:4px;';
  const LI  = 'padding:12px;border:1px solid rgba(236,233,227,.1);background:rgba(236,233,227,.03);margin-bottom:8px;overflow:hidden;';
  const G2  = 'display:grid;grid-template-columns:1fr 1fr;gap:8px;';
  const ADD = 'display:block;width:100%;padding:9px;background:rgba(0,229,255,.08);border:1px solid rgba(0,229,255,.2);color:var(--accent);font-family:var(--fm);font-size:10px;text-transform:uppercase;letter-spacing:.12em;cursor:pointer;margin-bottom:12px;';
  const DEL = 'background:rgba(255,60,60,.12);border:1px solid rgba(255,80,80,.25);color:#ff6b6b;font-family:var(--fm);font-size:9px;padding:3px 9px;cursor:pointer;letter-spacing:.08em;float:right;';

  const lbl = (t, c) => `<label style="${LS}">${t}</label>${c}`;
  const inp = (k, v, tp='text') => `<input data-adm="${k}" type="${tp}" style="${IS}" value="${esc(v)}" />`;
  const ta  = (k, v) => `<textarea data-adm="${k}" style="${TA}">${esc(v)}</textarea>`;
  const num = (k, v) => `<input data-adm="${k}" type="number" style="${IS}" value="${esc(v)}" />`;
  const chk = (k, v, ltext) => `<label style="${LS};text-transform:none;margin-top:6px;"><input type="checkbox" data-adm="${k}" ${v?'checked':''} style="margin-right:6px;" />${ltext}</label>`;
  const sel = (k, v, opts) => `<select data-adm="${k}" style="${IS}">${opts.map(o=>`<option value="${o}" ${v===o?'selected':''}>${o}</option>`).join('')}</select>`;
  const del = (arr, i) => `<button onclick="admDel('${arr}',${i})" style="${DEL}">✕ Delete</button>`;
  const add = (arr, lbl2) => `<button onclick="admAdd('${arr}')" style="${ADD}">＋ Add ${lbl2||arr}</button>`;

  let h = '';

  if (id === 'personal') {
    const p = d.personal || DEFAULT.personal;
    h = ['name','age','class','school','email','phone','location','status'].map(k =>
      `<div style="margin-bottom:10px;">${lbl(k, inp(`personal.${k}`, p[k]))}</div>`
    ).join('');

  } else if (id === 'bio') {
    const bio = d.bio || DEFAULT.bio;
    h = add('bio','Paragraph') + bio.map((b,i) => `
      <div style="${LI}">${del('bio',i)}
        ${lbl(`Paragraph ${i+1}`, ta(`bio.${i}`,b))}
      </div>`).join('');

  } else if (id === 'socials') {
    const soc = d.socials || DEFAULT.socials;
    h = ['github','linkedin','instagram'].map(k =>
      `<div style="margin-bottom:10px;">${lbl(k+' URL', inp(`socials.${k}`,soc[k]))}</div>`
    ).join('');

  } else if (id === 'skills') {
    const sk = d.skills || DEFAULT.skills;
    h = add('skills','Skill') + sk.map((s,i) => `
      <div style="${LI}">${del('skills',i)}
        <div style="${G2}">
          <div>${lbl('Skill Name', inp(`skills.${i}.name`,s.name))}</div>
          <div>${lbl('Percent (0-100)', num(`skills.${i}.pct`,s.pct))}</div>
        </div>
        ${chk(`skills.${i}.best`,s.best,'Mark as top/featured skill')}
      </div>`).join('');

  } else if (id === 'projects') {
    const pr = d.projects || DEFAULT.projects;
    h = add('projects','Project') + pr.map((p,i) => `
      <div style="${LI}">${del('projects',i)}
        <div style="${G2}">
          <div>${lbl('Project Name', inp(`projects.${i}.name`,p.name))}</div>
          <div>${lbl('Year', inp(`projects.${i}.year`,p.year))}</div>
        </div>
        ${lbl('Live URL', inp(`projects.${i}.url`,p.url))}
        ${lbl('Description', ta(`projects.${i}.desc`,p.desc))}
        ${lbl('Stack (comma-separated)', inp(`projects.${i}.stack`,Array.isArray(p.stack)?p.stack.join(', '):p.stack))}
        ${lbl('Background CSS gradient', inp(`projects.${i}.bg`,p.bg))}
        ${chk(`projects.${i}.live`,p.live,'Live / published')}
      </div>`).join('');

  } else if (id === 'wins') {
    const ach = d.achievements || DEFAULT.achievements;
    h = add('achievements','Achievement') + ach.map((w,i) => `
      <div style="${LI}">${del('achievements',i)}
        ${lbl('Title', inp(`achievements.${i}.title`,w.title))}
        <div style="${G2}">
          <div>${lbl('Result badge', inp(`achievements.${i}.result`,w.result))}</div>
          <div>${lbl('Subtitle', inp(`achievements.${i}.sub`,w.sub))}</div>
        </div>
        ${lbl('Description', ta(`achievements.${i}.desc`,w.desc))}
      </div>`).join('');

  } else if (id === 'timeline') {
    const tl = d.timeline || DEFAULT.timeline;
    h = add('timeline','Entry') + tl.map((t,i) => `
      <div style="${LI}">${del('timeline',i)}
        <div style="${G2}">
          <div>${lbl('Index (01, 02…)', inp(`timeline.${i}.idx`,t.idx))}</div>
          <div>${lbl('Event Name', inp(`timeline.${i}.event`,t.event))}</div>
        </div>
        <div style="${G2}">
          <div>${lbl('Date', inp(`timeline.${i}.date`,t.date))}</div>
          <div>${lbl('Result text', inp(`timeline.${i}.result`,t.result))}</div>
        </div>
        <div style="${G2}">
          <div>${lbl('Award label', inp(`timeline.${i}.award`,t.award))}</div>
          <div>${lbl('Color class', sel(`timeline.${i}.cls`,t.cls,['cyan','gold','silver','prog']))}</div>
        </div>
        ${lbl('Tooltip text', ta(`timeline.${i}.tip`,t.tip))}
      </div>`).join('');

  } else if (id === 'stats') {
    const st = d.stats || DEFAULT.stats;
    h = st.map((s,i) => `
      <div style="${LI}">
        <div style="${G2}">
          <div>${lbl('Number / Value', inp(`stats.${i}.n`,s.n))}</div>
          <div>${lbl('Label', inp(`stats.${i}.l`,s.l))}</div>
        </div>
      </div>`).join('');

  } else if (id === 'terminal') {
    const tl2 = d.termLines || DEFAULT.termLines;
    h = add('termLines','Line') + tl2.map((l,i) => `
      <div style="${LI}">${del('termLines',i)}
        ${lbl('Command', inp(`termLines.${i}.cmd`,l.cmd))}
        ${lbl('Output (✓ message)', inp(`termLines.${i}.ok`,l.ok))}
      </div>`).join('');

  } else if (id === 'vibe') {
    const vc = d.vibeCards || DEFAULT.vibeCards;
    h = add('vibeCards','Card') + vc.map((c,i) => `
      <div style="${LI}">${del('vibeCards',i)}
        ${lbl('Title', inp(`vibeCards.${i}.title`,c.title))}
        ${lbl('Description', ta(`vibeCards.${i}.desc`,c.desc))}
      </div>`).join('');

  } else if (id === 'stack') {
    const ticks = d.stackTicker || DEFAULT.stackTicker;
    h = `<p style="font-family:var(--fm);font-size:9px;opacity:.35;margin-bottom:8px;letter-spacing:.08em;">Comma-separated tech tags for the scrolling ticker.</p>
         <textarea data-adm="stackTicker" style="${TA}min-height:110px;">${esc(ticks.join(', '))}</textarea>`;

  } else if (id === 'security') {
    h = `<div style="margin-bottom:10px;">${lbl('New Password', `<input data-adm="password" type="password" style="${IS}" placeholder="Leave blank to keep current" />`)}</div>
         <p style="font-family:var(--fm);font-size:9px;opacity:.3;letter-spacing:.08em;">Stored in localStorage. Takes effect on next login.</p>`;
  }

  main.innerHTML = h;
}

/* ── ADMIN SAVE ───────────────────────────────────────────────── */
function saveAdmin() {
  const d = getData();
  document.querySelectorAll('[data-adm]').forEach(el => {
    const key = el.dataset.adm;
    if (!key) return;
    const raw = el.type === 'checkbox' ? el.checked
              : el.type === 'number'   ? (el.value === '' ? 0 : Number(el.value))
              : el.value;
    const parts = key.split('.');

    if (parts.length === 1) {
      if (key === 'stackTicker') {
        d.stackTicker = raw.split(',').map(s => s.trim()).filter(Boolean);
      } else if (key === 'password') {
        if (raw) d.password = raw;
      } else {
        d[key] = raw;
      }
    } else if (parts.length === 2) {
      const [obj, field] = parts;
      if (obj === 'bio') {
        if (!Array.isArray(d.bio)) d.bio = [];
        d.bio[parseInt(field)] = raw;
      } else {
        if (!d[obj] || typeof d[obj] !== 'object') d[obj] = {};
        d[obj][field] = raw;
      }
    } else if (parts.length === 3) {
      const [arr, idxStr, field] = parts;
      const i = parseInt(idxStr);
      if (!Array.isArray(d[arr])) d[arr] = [];
      if (!d[arr][i] || typeof d[arr][i] !== 'object') d[arr][i] = {};
      if (arr === 'projects' && field === 'stack') {
        d[arr][i][field] = raw.split(',').map(s => s.trim()).filter(Boolean);
      } else if (arr === 'stats' && field === 'n') {
        d[arr][i][field] = isNaN(Number(raw)) ? raw : Number(raw);
      } else {
        d[arr][i][field] = raw;
      }
    }
  });
  try {
    localStorage.setItem('an_data', JSON.stringify(d));
    renderAll(d);
    updateSocials(d);
    showToast('Saved!');
  } catch (e) { showToast('Save failed.'); }
}

/* ── ADMIN CRUD HELPERS (called from inline onclick) ─────────── */
window.admDel = function(arr, idx) {
  saveAdmin();
  const d = getData();
  if (Array.isArray(d[arr])) {
    d[arr].splice(idx, 1);
    localStorage.setItem('an_data', JSON.stringify(d));
    renderAll(d);
    showAdmSection(_admSection);
    showToast('Deleted');
  }
};

window.admAdd = function(arr) {
  saveAdmin();
  const d = getData();
  if (!Array.isArray(d[arr])) d[arr] = [];
  const def = ADM_DEFAULTS[arr];
  d[arr].push(def !== undefined
    ? (typeof def === 'object' && !Array.isArray(def) ? Object.assign({}, def) : def)
    : {});
  localStorage.setItem('an_data', JSON.stringify(d));
  renderAll(d);
  showAdmSection(_admSection);
  showToast('Added!');
};

function initAdmin() {
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeAdmin(); });
  $('#adm-save')?.addEventListener('click', saveAdmin);
  $('#adm-logout')?.addEventListener('click', () => { sessionStorage.removeItem('an_auth'); closeAdmin(); });
  $('#adm-close')?.addEventListener('click',  closeAdmin);
  $('#adm-export')?.addEventListener('click', () => {
    const blob = new Blob([JSON.stringify(getData(), null, 2)], { type: 'application/json' });
    const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = 'aarav-portfolio.json'; a.click();
  });
  $('#adm-import')?.addEventListener('change', e => {
    const f = e.target.files[0]; if (!f) return;
    const r = new FileReader();
    r.onload = ev => {
      try { const d = JSON.parse(ev.target.result); localStorage.setItem('an_data', JSON.stringify(d)); showToast('Imported! Reload to see all changes.'); renderAll(d); updateSocials(d); }
      catch { showToast('Invalid JSON file.'); }
    };
    r.readAsText(f);
  });
  $('#adm-reset')?.addEventListener('click', () => {
    if (confirm('Reset ALL data to defaults? This cannot be undone.')) { localStorage.clear(); location.reload(); }
  });
}

/* old admin removed — new CRUD admin panel appended below */


/* ── KONAMI CODE ──────────────────────────────────────────────── */
function initKonami() {
  const seq = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];
  let buf = [];
  document.addEventListener('keydown', e => {
    buf.push(e.key);
    if (buf.length > seq.length) buf.shift();
    if (buf.join() === seq.join()) {
      buf = [];
      const k = $('#konami');
      if (k) { k.classList.add('show'); setTimeout(() => { k.classList.remove('show'); openLogin(); }, 1500); }
    }
  });
}

/* ── HASH ROUTING ─────────────────────────────────────────────── */
function handleHash() {
  if (location.hash === '#login') openLogin();
  if (location.hash === '#admin') sessionStorage.getItem('an_auth') === '1' ? openAdmin() : openLogin();
}

/* ── TOAST ────────────────────────────────────────────────────── */
function showToast(msg) {
  const t = $('#toast'); if (!t) return;
  t.textContent = msg;
  gsap.killTweensOf(t);
  gsap.fromTo(t, { opacity: 0, y: -8 }, { opacity: 1, y: 0, duration: 0.3, onComplete: () => gsap.to(t, { opacity: 0, y: -8, duration: 0.3, delay: 1.8 }) });
}