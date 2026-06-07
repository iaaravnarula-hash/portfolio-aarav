/* ═══════════════════════════════════════════════════════════════
   COMPETITIONS PAGE JS — with LN-style expanded panels
   js/competitions.js
═══════════════════════════════════════════════════════════════ */

/* ── Unique SVG circuit diagrams for each competition ──────── */
/* Each is a different abstract "tech circuit path" glowing in cyan */
const CIRCUITS = [
  /* 01 — NASA SoilScope: satellite orbit path + data nodes */
  `<svg viewBox="0 0 600 340" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
    <path class="circuit-path secondary" d="M 580 170 A 240 120 0 1 0 580 169.99" pathLength="1" stroke-dasharray="1" />
    <path class="circuit-path main" d="M 20 170 L 80 170 L 80 80 L 160 80 L 200 40 L 280 40 L 320 80 L 420 80 L 460 130 L 520 130 L 560 170 L 520 210 L 460 210 L 420 260 L 320 260 L 280 300 L 200 300 L 160 260 L 80 260 L 80 170" pathLength="1" stroke-dasharray="1" />
    <path class="circuit-path secondary" d="M 200 40 L 200 170 M 320 40 L 320 170 M 200 300 L 200 170 M 320 300 L 320 170 L 280 170" pathLength="1" stroke-dasharray="1" />
    <circle class="circuit-node" cx="80" cy="170" r="5" />
    <circle class="circuit-node" cx="200" cy="40" r="4" style="animation-delay:.3s" />
    <circle class="circuit-node" cx="320" cy="40" r="4" style="animation-delay:.5s" />
    <circle class="circuit-node" cx="460" cy="130" r="5" style="animation-delay:.7s" />
    <circle class="circuit-node" cx="460" cy="210" r="5" style="animation-delay:.9s" />
    <circle class="circuit-node" cx="320" cy="260" r="4" style="animation-delay:1.1s" />
    <circle class="circuit-node" cx="200" cy="300" r="4" style="animation-delay:1.3s" />
    <circle class="circuit-node" cx="280" cy="170" r="7" style="animation-delay:1.5s" />
    <text class="circuit-label" x="130" y="60">NDVI</text>
    <text class="circuit-label" x="340" y="60">CNN</text>
    <text class="circuit-label" x="475" y="155">API</text>
    <text class="circuit-label" x="260" y="190">CORE</text>
    <text class="circuit-label" x="130" y="290">GROQ</text>
    <text class="circuit-label" x="340" y="290">DEPLOY</text>
  </svg>`,

  /* 02 — Gemma/Saksham: neural network topology */
  `<svg viewBox="0 0 600 340" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
    <!-- Input layer -->
    <line class="circuit-path secondary" x1="60" y1="70" x2="60" y2="270" pathLength="1" stroke-dasharray="1"/>
    <!-- Hidden layer connections -->
    <line class="circuit-path secondary" x1="60" y1="70" x2="200" y2="60" pathLength="1" stroke-dasharray="1"/>
    <line class="circuit-path secondary" x1="60" y1="120" x2="200" y2="60" pathLength="1" stroke-dasharray="1"/>
    <line class="circuit-path secondary" x1="60" y1="170" x2="200" y2="130" pathLength="1" stroke-dasharray="1"/>
    <line class="circuit-path secondary" x1="60" y1="170" x2="200" y2="200" pathLength="1" stroke-dasharray="1"/>
    <line class="circuit-path secondary" x1="60" y1="220" x2="200" y2="200" pathLength="1" stroke-dasharray="1"/>
    <line class="circuit-path secondary" x1="60" y1="270" x2="200" y2="270" pathLength="1" stroke-dasharray="1"/>
    <!-- Hidden to hidden -->
    <line class="circuit-path secondary" x1="200" y1="60" x2="360" y2="100" pathLength="1" stroke-dasharray="1"/>
    <line class="circuit-path secondary" x1="200" y1="130" x2="360" y2="100" pathLength="1" stroke-dasharray="1"/>
    <line class="circuit-path secondary" x1="200" y1="130" x2="360" y2="200" pathLength="1" stroke-dasharray="1"/>
    <line class="circuit-path secondary" x1="200" y1="200" x2="360" y2="200" pathLength="1" stroke-dasharray="1"/>
    <line class="circuit-path secondary" x1="200" y1="270" x2="360" y2="200" pathLength="1" stroke-dasharray="1"/>
    <line class="circuit-path secondary" x1="200" y1="270" x2="360" y2="270" pathLength="1" stroke-dasharray="1"/>
    <!-- Output -->
    <path class="circuit-path main" d="M 360 100 L 500 170 M 360 200 L 500 170 M 360 270 L 500 170 L 560 170" pathLength="1" stroke-dasharray="1"/>
    <!-- Nodes -->
    <circle class="circuit-node" cx="60" cy="70" r="6" />
    <circle class="circuit-node" cx="60" cy="120" r="6" style="animation-delay:.1s" />
    <circle class="circuit-node" cx="60" cy="170" r="6" style="animation-delay:.2s" />
    <circle class="circuit-node" cx="60" cy="220" r="6" style="animation-delay:.3s" />
    <circle class="circuit-node" cx="60" cy="270" r="6" style="animation-delay:.4s" />
    <circle class="circuit-node" cx="200" cy="60" r="6" style="animation-delay:.6s" />
    <circle class="circuit-node" cx="200" cy="130" r="6" style="animation-delay:.7s" />
    <circle class="circuit-node" cx="200" cy="200" r="6" style="animation-delay:.8s" />
    <circle class="circuit-node" cx="200" cy="270" r="6" style="animation-delay:.9s" />
    <circle class="circuit-node" cx="360" cy="100" r="6" style="animation-delay:1.1s" />
    <circle class="circuit-node" cx="360" cy="200" r="6" style="animation-delay:1.2s" />
    <circle class="circuit-node" cx="360" cy="270" r="6" style="animation-delay:1.3s" />
    <circle class="circuit-node" cx="500" cy="170" r="9" style="animation-delay:1.5s" />
    <text class="circuit-label" x="30" y="185">INPUT</text>
    <text class="circuit-label" x="168" y="155">HIDDEN</text>
    <text class="circuit-label" x="335" y="310">GRPO</text>
    <text class="circuit-label" x="460" y="155">OUT</text>
  </svg>`,

  /* 03 — DWPS: podium / first place spike (sharp angular like a winner's path) */
  `<svg viewBox="0 0 600 340" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
    <path class="circuit-path secondary" d="M 20 280 L 600 280" pathLength="1" stroke-dasharray="1"/>
    <path class="circuit-path main" d="M 20 280 L 80 280 L 80 240 L 140 240 L 140 220 L 220 220 L 260 130 L 300 40 L 340 130 L 380 220 L 440 220 L 440 240 L 520 240 L 520 260 L 580 260" pathLength="1" stroke-dasharray="1"/>
    <path class="circuit-path secondary" d="M 300 40 L 300 280" pathLength="1" stroke-dasharray="1" style="stroke:rgba(255,215,0,.5)" />
    <circle class="circuit-node" cx="300" cy="40" r="8" style="fill:#FFD700;filter:drop-shadow(0 0 8px #FFD700) drop-shadow(0 0 20px #FFD700)" />
    <circle class="circuit-node" cx="260" cy="130" r="5" />
    <circle class="circuit-node" cx="340" cy="130" r="5" style="animation-delay:.3s" />
    <circle class="circuit-node" cx="220" cy="220" r="4" style="animation-delay:.5s" />
    <circle class="circuit-node" cx="380" cy="220" r="4" style="animation-delay:.6s" />
    <circle class="circuit-node" cx="80" cy="240" r="4" style="animation-delay:.8s" />
    <circle class="circuit-node" cx="520" cy="240" r="4" style="animation-delay:.9s" />
    <text class="circuit-label" x="270" y="35" style="fill:rgba(255,215,0,.7);font-size:11px">1ST</text>
    <text class="circuit-label" x="180" y="210">PODIUM</text>
    <text class="circuit-label" x="370" y="210">SCORE</text>
    <text class="circuit-label" x="50" y="230">START</text>
    <text class="circuit-label" x="530" y="250">END</text>
  </svg>`,

  /* 04 — St. Soldiers: double helix (2nd, paired) */
  `<svg viewBox="0 0 600 340" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
    <path class="circuit-path main" d="M 30 50 C 150 50 150 290 300 290 C 450 290 450 50 570 50" pathLength="1" stroke-dasharray="1"/>
    <path class="circuit-path secondary" d="M 30 290 C 150 290 150 50 300 50 C 450 50 450 290 570 290" pathLength="1" stroke-dasharray="1"/>
    <line class="circuit-path secondary" x1="165" y1="170" x2="435" y2="170" pathLength="1" stroke-dasharray="1" style="stroke:rgba(192,192,192,.3)"/>
    <circle class="circuit-node" cx="30" cy="50" r="5" />
    <circle class="circuit-node" cx="165" cy="170" r="6" style="animation-delay:.5s" />
    <circle class="circuit-node" cx="300" cy="290" r="6" style="animation-delay:.8s" />
    <circle class="circuit-node" cx="300" cy="50" r="6" style="animation-delay:.9s" />
    <circle class="circuit-node" cx="435" cy="170" r="6" style="animation-delay:1.2s" />
    <circle class="circuit-node" cx="570" cy="50" r="5" style="animation-delay:1.5s" />
    <text class="circuit-label" x="272" y="44">RUNNER</text>
    <text class="circuit-label" x="272" y="310">2ND</text>
    <text class="circuit-label" x="30" y="310">SCHOOL</text>
    <text class="circuit-label" x="490" y="310">RESULT</text>
  </svg>`,

  /* 05 — Intel: chip / processor grid */
  `<svg viewBox="0 0 600 340" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
    <!-- Chip border -->
    <rect class="circuit-path main" x="170" y="80" width="260" height="180" rx="8" pathLength="1" stroke-dasharray="1"/>
    <!-- Internal grid -->
    <line class="circuit-path secondary" x1="220" y1="80" x2="220" y2="260" pathLength="1" stroke-dasharray="1"/>
    <line class="circuit-path secondary" x1="300" y1="80" x2="300" y2="260" pathLength="1" stroke-dasharray="1"/>
    <line class="circuit-path secondary" x1="380" y1="80" x2="380" y2="260" pathLength="1" stroke-dasharray="1"/>
    <line class="circuit-path secondary" x1="170" y1="140" x2="430" y2="140" pathLength="1" stroke-dasharray="1"/>
    <line class="circuit-path secondary" x1="170" y1="200" x2="430" y2="200" pathLength="1" stroke-dasharray="1"/>
    <!-- Pins left -->
    <line class="circuit-path main" x1="50" y1="110" x2="170" y2="110" pathLength="1" stroke-dasharray="1"/>
    <line class="circuit-path main" x1="50" y1="170" x2="170" y2="170" pathLength="1" stroke-dasharray="1"/>
    <line class="circuit-path main" x1="50" y1="230" x2="170" y2="230" pathLength="1" stroke-dasharray="1"/>
    <!-- Pins right -->
    <line class="circuit-path main" x1="430" y1="110" x2="550" y2="110" pathLength="1" stroke-dasharray="1"/>
    <line class="circuit-path main" x1="430" y1="170" x2="550" y2="170" pathLength="1" stroke-dasharray="1"/>
    <line class="circuit-path main" x1="430" y1="230" x2="550" y2="230" pathLength="1" stroke-dasharray="1"/>
    <!-- Pins top/bottom -->
    <line class="circuit-path main" x1="220" y1="20" x2="220" y2="80" pathLength="1" stroke-dasharray="1"/>
    <line class="circuit-path main" x1="300" y1="20" x2="300" y2="80" pathLength="1" stroke-dasharray="1"/>
    <line class="circuit-path main" x1="380" y1="20" x2="380" y2="80" pathLength="1" stroke-dasharray="1"/>
    <line class="circuit-path main" x1="220" y1="260" x2="220" y2="320" pathLength="1" stroke-dasharray="1"/>
    <line class="circuit-path main" x1="300" y1="260" x2="300" y2="320" pathLength="1" stroke-dasharray="1"/>
    <line class="circuit-path main" x1="380" y1="260" x2="380" y2="320" pathLength="1" stroke-dasharray="1"/>
    <!-- Nodes -->
    <circle class="circuit-node" cx="220" cy="140" r="5" />
    <circle class="circuit-node" cx="300" cy="140" r="5" style="animation-delay:.2s" />
    <circle class="circuit-node" cx="380" cy="140" r="5" style="animation-delay:.4s" />
    <circle class="circuit-node" cx="220" cy="200" r="5" style="animation-delay:.6s" />
    <circle class="circuit-node" cx="300" cy="200" r="5" style="animation-delay:.8s" />
    <circle class="circuit-node" cx="380" cy="200" r="5" style="animation-delay:1s" />
    <text class="circuit-label" x="252" y="172">CPU</text>
    <text class="circuit-label" x="10" y="174">INTEL</text>
    <text class="circuit-label" x="560" y="174">AI</text>
  </svg>`,

  /* 06 — Samsung SFT: bionic arm / robotic path — in-progress, dashed */
  `<svg viewBox="0 0 600 340" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
    <path class="circuit-path secondary" d="M 20 170 L 100 170 L 100 80 L 180 80 L 200 60 L 220 80" stroke-dasharray="8 6"/>
    <path class="circuit-path main" d="M 20 170 L 100 170" pathLength="1" stroke-dasharray="1"/>
    <path class="circuit-path secondary" d="M 220 80 L 300 80 L 340 100 L 360 80 L 420 80 L 420 170 L 580 170" stroke-dasharray="10 8" style="stroke:rgba(0,229,255,.4)"/>
    <path class="circuit-path main" d="M 220 80 L 300 80 L 340 100 L 360 80 L 420 80 L 420 170" pathLength="1" stroke-dasharray="1" style="animation-delay:.4s"/>
    <path class="circuit-path secondary" d="M 340 100 L 340 200 L 280 260 L 340 260 L 400 200 L 340 200" pathLength="1" stroke-dasharray="1"/>
    <path class="circuit-path secondary" d="M 100 170 L 100 280 L 200 280 L 200 220 L 160 220" stroke-dasharray="6 5"/>
    <!-- Arm segments -->
    <line class="circuit-path secondary" x1="200" y1="60" x2="200" y2="220" pathLength="1" stroke-dasharray="1" style="stroke:rgba(0,229,255,.2)"/>
    <!-- Nodes -->
    <circle class="circuit-node" cx="100" cy="170" r="6" />
    <circle class="circuit-node" cx="200" cy="80" r="5" style="animation-delay:.3s" />
    <circle class="circuit-node" cx="340" cy="100" r="7" style="animation-delay:.6s" />
    <circle class="circuit-node" cx="420" cy="170" r="6" style="animation-delay:1s" />
    <circle class="circuit-node" cx="340" cy="260" r="5" style="animation-delay:1.2s" />
    <!-- IN PROGRESS indicator -->
    <circle cx="540" cy="80" r="6" style="fill:#00e5ff;animation:blink 1.2s infinite;filter:drop-shadow(0 0 8px #00e5ff)"/>
    <text class="circuit-label" x="555" y="84">LIVE</text>
    <text class="circuit-label" x="120" y="85">ARM</text>
    <text class="circuit-label" x="355" y="120">JOINT</text>
    <text class="circuit-label" x="430" y="190">IMU</text>
    <text class="circuit-label" x="300" y="280">HAND</text>
  </svg>`
];

const COMPETITIONS = [
  {
    num: '01', icon: '🛸', circuitIdx: 0,
    name: 'NASA Space Apps Challenge',
    sub: '2025–26 · International',
    vertName: 'NASA',
    date: 'Oct 2025',
    category: 'AI · Agricultural\nSatellite Data',
    result: 'NOMINEE', resultClass: 'cyan',
    award: '🏆 Global Honorable Mention',
    stats: [
      { label: 'WHEN', val: 'OCT', sub: '2025' },
      { label: 'TECH', val: '7', sub: 'Tools Used' },
      { label: 'TEAMS', val: '150+', sub: 'Countries' }
    ],
    milestones: [
      { name: 'Project Ideated', date: 'Sep 2025', done: true },
      { name: 'SoilScope Built', date: 'Oct 2025', done: true },
      { name: 'Submitted', date: 'Oct 2025', done: true },
      { name: 'Global Nominee', date: 'Nov 2025', done: true }
    ],
    desc: 'Built SoilScope — an AI-powered agricultural intelligence platform using live NASA NDVI satellite data, CNN pest detection trained on 40,000+ images, and 106-language voice support for Indian farmers. Competed against thousands of international teams across 150+ countries.',
    stack: ['Flask', 'Python', 'CNN', 'NASA API', 'Groq', 'Open-Meteo', 'Vercel']
  },
  {
    num: '02', icon: '🤖', circuitIdx: 1,
    name: 'Gemma 4 Good — Saksham',
    sub: '2025 · Google DeepMind',
    vertName: 'GEMMA',
    date: '2025',
    category: 'AI · Healthcare\nNLP · Fine-Tuning',
    result: 'FINALIST', resultClass: 'cyan',
    award: '🏆 Saksham Award Finalist',
    stats: [
      { label: 'WHEN', val: '2025', sub: 'Google Event' },
      { label: 'TECH', val: '6', sub: 'Tools Used' },
      { label: 'LANG', val: '2', sub: 'Hindi + Punjabi' }
    ],
    milestones: [
      { name: 'Gemma 4 E4B Setup', date: 'Apr 2025', done: true },
      { name: 'GRPO Fine-Tuned', date: 'May 2025', done: true },
      { name: 'Saksham Submitted', date: 'Jun 2025', done: true },
      { name: 'Finalist Award', date: 'Jun 2025', done: true }
    ],
    desc: "Built Saksham — an offline, voice-first medical AI for India's 900,000 ASHA frontline health workers. Uses Gemma 4 E4B with GRPO fine-tuning for Hindi/Punjabi medical guidance. Designed to run without internet in rural India.",
    stack: ['Gemma 4 E4B', 'GRPO', 'Python', 'Flask', 'Hindi NLP', 'Voice AI']
  },
  {
    num: '03', icon: '🏫', circuitIdx: 2,
    name: 'DWPS Mindsphere',
    sub: 'Delhi World Public School · Regional',
    vertName: 'DWPS',
    date: '2024',
    category: 'Software · AI\nInnovation',
    result: '1ST', resultClass: 'gold',
    award: '🥇 1st Place — Regional Winner',
    stats: [
      { label: 'WHEN', val: '2024', sub: 'Regional' },
      { label: 'PLACE', val: '1ST', sub: 'Winner' },
      { label: 'SCORE', val: '#1', sub: 'Chandigarh' }
    ],
    milestones: [
      { name: 'Registered', date: '2024', done: true },
      { name: 'Project Developed', date: '2024', done: true },
      { name: 'Presented', date: '2024', done: true },
      { name: '1st Place Awarded', date: '2024', done: true }
    ],
    desc: 'First place in one of the most competitive school-level tech competitions in the Chandigarh region. Outperformed all competing student teams with an AI-powered project demonstrating advanced machine learning capabilities.',
    stack: ['Python', 'Machine Learning', 'Computer Vision', 'Flask']
  },
  {
    num: '04', icon: '🏆', circuitIdx: 3,
    name: "St. Soldier's Inter-School",
    sub: 'Inter-School Technology Championship',
    vertName: "ST. SOL",
    date: '2024',
    category: 'Software · Hardware\nPrototype',
    result: '2ND', resultClass: 'silver',
    award: '🥈 2nd Place — Runner-Up',
    stats: [
      { label: 'WHEN', val: '2024', sub: 'Inter-School' },
      { label: 'PLACE', val: '2ND', sub: 'Runner Up' },
      { label: 'SCHOOLS', val: '8+', sub: 'Competing' }
    ],
    milestones: [
      { name: 'Registered', date: '2024', done: true },
      { name: 'Project Built', date: '2024', done: true },
      { name: 'Presented Live', date: '2024', done: true },
      { name: '2nd Place', date: '2024', done: true }
    ],
    desc: 'Runner-up in the inter-school technology competition. Showcased AI and full-stack software development capabilities against senior student teams from multiple schools across the Chandigarh Tricity region.',
    stack: ['Full-Stack', 'PHP', 'MySQL', 'AI', 'Arduino']
  },
  {
    num: '05', icon: '⚡', circuitIdx: 4,
    name: 'Intel Ctrl+Alt Hackathon',
    sub: '2024–25 · National',
    vertName: 'INTEL',
    date: '2025',
    category: 'AI · Computing\nInnovation',
    result: 'NOMINEE', resultClass: 'cyan',
    award: '🏆 Honorable Mention — Intel',
    stats: [
      { label: 'WHEN', val: '2025', sub: 'National' },
      { label: 'TECH', val: '4', sub: 'Tools Used' },
      { label: 'LEVEL', val: 'NAT', sub: 'India' }
    ],
    milestones: [
      { name: 'Team Registered', date: '2024', done: true },
      { name: 'Solution Built', date: '2025', done: true },
      { name: 'Submitted to Intel', date: '2025', done: true },
      { name: 'Honorable Mention', date: '2025', done: true }
    ],
    desc: 'Recognized by Intel for innovation in computing and AI development. Competed against senior industry developers and university students. Received an Intel Honorable Mention for advanced technical implementation and real-world impact.',
    stack: ['Python', 'AI/ML', 'Neural Networks', 'Intel OpenVINO']
  },
  {
    num: '06', icon: '🦾', circuitIdx: 5,
    name: 'Samsung Solve For Tomorrow',
    sub: '2026 · National India — IN PROGRESS',
    vertName: 'SFT',
    date: 'Jul 2026',
    category: 'Hardware · AI\nHealthcare · Robotics',
    result: 'IN PROGRESS', resultClass: 'prog',
    award: '🎯 Target: Top 4 + IIT Delhi FITT',
    stats: [
      { label: 'WHEN', val: 'JUL', sub: '2026' },
      { label: 'BUDGET', val: '₹20K', sub: 'Target Cost' },
      { label: 'STATUS', val: 'WIP', sub: 'Building Now' }
    ],
    milestones: [
      { name: 'Concept Designed', date: 'Apr 2026', done: true },
      { name: 'Prototype Building', date: 'Jun 2026', done: false, active: true },
      { name: 'Samsung Submission', date: 'Jul 2026', done: false },
      { name: 'IIT Delhi FITT', date: 'Aug 2026', done: false }
    ],
    desc: 'Building an AI-powered bionic arm for Indian school children without upper limbs — priced under ₹20,000 (vs ₹4–5 lakh market rate). Uses IMU sensors for gesture control, CV for object detection, and a Flutter app for calibration. Targeting IIT Delhi FITT incubation.',
    stack: ['Python', 'IMU Sensors', 'Computer Vision', 'Flutter', 'Arduino', 'TensorFlow Lite']
  }
];

/* ── BOOT ──────────────────────────────────────────────────── */
window.addEventListener('load', () => {
  initProgress();
  initNav();
  renderCalendar();
  initExpandRows();
  initHeroAnims();
  initScrollAnims();
  initRecordCounters();
});

function initProgress() {
  window.addEventListener('scroll', () => {
    const bar = document.getElementById('progress');
    if (!bar) return;
    bar.style.width = ((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100) + '%';
  });
}

function initNav() {
  const nav = document.getElementById('nav');
  if (!nav) return;
  window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 60));
}

/* ── RENDER CALENDAR ───────────────────────────────────────── */
function renderCalendar() {
  const tbody = document.getElementById('cal-tbody');
  if (!tbody) return;

  tbody.innerHTML = COMPETITIONS.map((c, i) => `
    <div class="cal-row-wrap" data-idx="${i}" id="row-${i}">
      <div class="cal-row">
        <span class="cr-num">${c.num}</span>
        <span class="cr-icon">${c.icon}</span>
        <div class="cr-name">${c.name}<small>${c.sub}</small></div>
        <span class="cr-date">${c.date}</span>
        <div class="cr-cat">${c.category.replace('\n','<br>')}</div>
        <span class="cr-result ${c.resultClass}">${c.result}</span>
        <span class="cr-chevron">↓</span>
      </div>

      <!-- EXPANDED PANEL — 3 column LN style -->
      <div class="cal-expand">
        <div class="cal-expand-inner">

          <!-- LEFT: vertical name + stats -->
          <div class="ce-left">
            <div class="ce-vert-name">${c.vertName}</div>
            <div class="ce-left-stats">
              ${c.stats.map(s => `
                <div class="ce-stat-row">
                  <span class="ce-stat-label">${s.label}</span>
                  <span class="ce-stat-val">${s.val}</span>
                  <span class="ce-stat-sub">${s.sub}</span>
                </div>`).join('')}
            </div>
          </div>

          <!-- CENTER: glowing circuit diagram -->
          <div class="ce-circuit" id="circuit-${i}">
            <div class="circuit-num">${c.num}</div>
            ${CIRCUITS[c.circuitIdx] || CIRCUITS[0]}
          </div>

          <!-- RIGHT: description + milestones + stack -->
          <div class="ce-right">
            <div>
              <div class="ce-event-label">AARAV AT ${c.vertName}</div>
              <div class="ce-event-title">${c.award}</div>
              <p class="ce-event-desc">${c.desc}</p>
            </div>
            <div>
              <div class="ce-milestones">
                ${c.milestones.map(m => `
                  <div class="ce-milestone">
                    <div class="ce-ms-dot ${m.done ? 'done' : m.active ? 'active' : ''}"></div>
                    <span class="ce-ms-name ${m.done ? 'done' : ''}">${m.name}</span>
                    <span class="ce-ms-date">${m.date}</span>
                  </div>`).join('')}
              </div>
              <div class="ce-stack-wrap">
                <div class="ce-stack-label">TECH STACK</div>
                <div class="ce-stack">
                  ${c.stack.map(t => `<span class="ce-tag">${t}</span>`).join('')}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  `).join('');
}

/* ── EXPAND ROW (animated height) ─────────────────────────── */
function initExpandRows() {
  document.addEventListener('click', e => {
    const rowWrap = e.target.closest('.cal-row-wrap');
    if (!rowWrap) return;

    const isOpen = rowWrap.classList.contains('open');

    /* Close all with height animation */
    document.querySelectorAll('.cal-row-wrap.open').forEach(r => {
      const panel = r.querySelector('.cal-expand');
      if (panel) {
        panel.style.height = panel.scrollHeight + 'px';
        requestAnimationFrame(() => {
          panel.style.transition = 'height .45s cubic-bezier(.76,0,.24,1)';
          panel.style.height = '0';
        });
        setTimeout(() => { r.classList.remove('open'); panel.style.height = ''; }, 460);
      }
    });

    if (!isOpen) {
      /* Open this row */
      setTimeout(() => {
        const panel = rowWrap.querySelector('.cal-expand');
        if (!panel) return;
        rowWrap.classList.add('open');
        panel.style.height = '0';
        panel.style.display = 'block';
        const h = panel.scrollHeight;
        panel.style.transition = 'height .55s cubic-bezier(.76,0,.24,1)';
        requestAnimationFrame(() => { panel.style.height = h + 'px'; });
        setTimeout(() => { panel.style.height = 'auto'; }, 580);

        /* Animate SVG paths on open */
        animateCircuit(panel);

        /* Scroll into view */
        setTimeout(() => rowWrap.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 200);
      }, 50);
    }
  });
}

/* ── ANIMATE SVG CIRCUIT PATH when expanded ───────────────── */
function animateCircuit(panel) {
  const paths = panel.querySelectorAll('.circuit-path');
  paths.forEach(path => {
    const len = path.getTotalLength ? path.getTotalLength() : 1000;
    path.style.strokeDasharray = len;
    path.style.strokeDashoffset = len;
    path.style.transition = 'stroke-dashoffset 1.8s cubic-bezier(.76,0,.24,1)';
    requestAnimationFrame(() => { path.style.strokeDashoffset = '0'; });
  });
}

/* ── HERO ANIMATIONS ───────────────────────────────────────── */
function initHeroAnims() {
  /* Title */
  const title = document.querySelector('.cal-title');
  if (title && window.SplitType) {
    try {
      const s = new SplitType(title, { types: 'words' });
      if (s.words) s.words.forEach((w, i) => {
        w.style.cssText = `opacity:0;transform:translateY(60px);display:inline-block;transition:opacity .7s ease ${100+i*60}ms, transform .7s cubic-bezier(.76,0,.24,1) ${100+i*60}ms`;
        requestAnimationFrame(() => { w.style.opacity='1'; w.style.transform='translateY(0)'; });
      });
    } catch {}
  }

  /* Pills */
  document.querySelectorAll('.cal-pill').forEach((p, i) => {
    p.style.cssText = `opacity:0;transform:translateY(20px);transition:opacity .6s ease ${500+i*80}ms, transform .6s cubic-bezier(.76,0,.24,1) ${500+i*80}ms`;
    requestAnimationFrame(() => { p.style.opacity='1'; p.style.transform='translateY(0)'; });
  });

  /* Next card */
  const card = document.querySelector('.cal-next');
  if (card) {
    card.style.cssText = 'opacity:0;transform:translateX(30px);transition:opacity .8s ease 300ms, transform .8s cubic-bezier(.76,0,.24,1) 300ms';
    requestAnimationFrame(() => { card.style.opacity='1'; card.style.transform='translateX(0)'; });
  }
}

/* ── SCROLL ANIMATIONS ─────────────────────────────────────── */
function initScrollAnims() {
  const rows = document.querySelectorAll('.cal-row-wrap');
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.opacity = '1';
        e.target.style.transform = 'translateX(0)';
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.08 });

  rows.forEach((row, i) => {
    row.style.cssText = `opacity:0;transform:translateX(-30px);transition:opacity .6s ease ${i*.05}s, transform .6s cubic-bezier(.76,0,.24,1) ${i*.05}s`;
    obs.observe(row);
  });

  /* Record cards */
  const recObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.style.opacity='1'; e.target.style.transform='translateY(0)'; recObs.unobserve(e.target); }
    });
  }, { threshold: 0.15 });
  document.querySelectorAll('.rec-card').forEach((c, i) => {
    c.style.cssText = `opacity:0;transform:translateY(40px);transition:opacity .65s ease ${i*.1}s, transform .65s cubic-bezier(.76,0,.24,1) ${i*.1}s`;
    recObs.observe(c);
  });
}

/* ── COUNTER ANIMATION ─────────────────────────────────────── */
function initRecordCounters() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const target = parseFloat(el.dataset.count);
      let start = null;
      const dur = 1800;
      (function step(ts) {
        if (!start) start = ts;
        const p = Math.min((ts - start) / dur, 1);
        el.textContent = Math.round((1 - Math.pow(1 - p, 3)) * target);
        if (p < 1) requestAnimationFrame(step);
      })(performance.now());
      obs.unobserve(el);
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('[data-count]').forEach(c => obs.observe(c));
}
