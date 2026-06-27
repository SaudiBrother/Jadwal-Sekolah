/**
 * app.js — Logika aplikasi Jadwal Pelajaran SMP Negeri 2 Bitung.
 * Bergantung pada data.js (scheduleData, funFactsData) yang dimuat sebelumnya.
 */

/* ===================================================================
   0. IKON (inline SVG, tanpa dependensi font/CDN eksternal)
   =================================================================== */
const ICONS = {
  chart: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><rect x="7" y="12" width="3" height="6"/><rect x="12" y="8" width="3" height="10"/><rect x="17" y="5" width="3" height="13"/></svg>',
  users: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3.4"/><path d="M2.5 20c0-3.5 3-6 6.5-6s6.5 2.5 6.5 6"/><circle cx="17.2" cy="9" r="2.6"/><path d="M16 13.2c2.6.5 4.6 2.5 4.6 4.8"/></svg>',
  bookOpen: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5.5C10 4 6.5 3.5 4 4v15c2.5-.5 6 0 8 1.5 2-1.5 5.5-2 8-1.5V4c-2.5-.5-6 0-8 1.5z"/><path d="M12 5.5v15"/></svg>',
  graduation: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 8l10-4 10 4-10 4-10-4z"/><path d="M6 10.3V16c0 1.5 3 3 6 3s6-1.5 6-3v-5.7"/><path d="M22 8v6"/></svg>',
  clock: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.4 2"/></svg>',
  chevronRight: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6l6 6-6 6"/></svg>',
};
const FACT_ICONS = [ICONS.chart, ICONS.users, ICONS.bookOpen, ICONS.graduation, ICONS.clock];

/* ===================================================================
   1. UTIL: tanggal & hari (Bahasa Indonesia, tanpa Intl agar konsisten
      di semua browser/WebView tanpa bergantung pada data locale).
   =================================================================== */
const DAY_KEYS = ['SENIN', 'SELASA', 'RABU', 'KAMIS', 'JUMAT'];
const DAY_LABELS = { SENIN: 'Senin', SELASA: 'Selasa', RABU: 'Rabu', KAMIS: 'Kamis', JUMAT: 'Jumat' };
const DAY_FULL = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
const MONTH_FULL = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
const MONTH_SHORT = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'];

function todayDayKey() {
  const map = { 1: 'SENIN', 2: 'SELASA', 3: 'RABU', 4: 'KAMIS', 5: 'JUMAT' };
  return map[new Date().getDay()] || null;
}

function getMondayOfWeek(d) {
  const date = new Date(d);
  const day = date.getDay();
  const diff = day === 0 ? -6 : 1 - day;
  date.setDate(date.getDate() + diff);
  date.setHours(0, 0, 0, 0);
  return date;
}

function getWeekDates() {
  const monday = getMondayOfWeek(new Date());
  const map = {};
  DAY_KEYS.forEach((key, idx) => {
    const d = new Date(monday);
    d.setDate(monday.getDate() + idx);
    map[key] = d;
  });
  return map;
}

function parseTimeRange(str) {
  const m = String(str || '').match(/(\d{1,2})[.:](\d{2})\s*-\s*(\d{1,2})[.:](\d{2})/);
  if (!m) return null;
  return [parseInt(m[1], 10) * 60 + parseInt(m[2], 10), parseInt(m[3], 10) * 60 + parseInt(m[4], 10)];
}

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

/* ===================================================================
   2. WARNA MATA PELAJARAN
   =================================================================== */
const SUBJECT_COLOR_MAP = [
  ['Matematika', '--subj-matematika'],
  ['IPA', '--subj-ipa'],
  ['IPS', '--subj-ips'],
  ['Bahasa Indonesia', '--subj-bindo'],
  ['Bahasa Inggris', '--subj-binggris'],
  ['PKn', '--subj-pkn'],
  ['Agama', '--subj-agama'],
  ['PJOK', '--subj-pjok'],
  ['Prakarya', '--subj-prakarya'],
  ['TIK', '--subj-tik'],
  ['Mulok', '--subj-mulok'],
  ['Projek', '--subj-projek'],
  ['Istirahat', '--subj-istirahat'],
  ['Upacara', '--subj-lainnya'],
  ['Ibadah', '--subj-lainnya'],
  ['Apel', '--subj-lainnya'],
];

function getSubjectColorVar(subject) {
  for (const [key, varName] of SUBJECT_COLOR_MAP) {
    if (subject.includes(key)) return varName;
  }
  return '--subj-lainnya';
}

/* ===================================================================
   3. TEMA — deteksi otomatis, simpan pilihan terakhir, default terang.
   =================================================================== */
const THEME_KEY = 'jp-theme';

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const meta = document.getElementById('themeColorMeta');
  const bg = getComputedStyle(document.documentElement).getPropertyValue('--bg').trim();
  if (meta && bg) meta.setAttribute('content', bg);
}

function setTheme(theme, persist) {
  applyTheme(theme);
  if (persist) {
    try { localStorage.setItem(THEME_KEY, theme); } catch (e) { /* storage unavailable */ }
  }
}

function initTheme() {
  // Atribut data-theme sudah diset secara sinkron oleh skrip di <head>
  // (sebelum render pertama) agar tidak ada kedipan tema. Di sini kita
  // hanya menyinkronkan meta theme-color & memasang listener.
  applyTheme(document.documentElement.getAttribute('data-theme') || 'light');

  const toggle = document.getElementById('themeToggle');
  if (toggle) {
    toggle.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      setTheme(current === 'dark' ? 'light' : 'dark', true);
    });
  }

  if (window.matchMedia) {
    try {
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        let saved = null;
        try { saved = localStorage.getItem(THEME_KEY); } catch (err) { /* noop */ }
        if (saved === 'light' || saved === 'dark') return; // pilihan manual selalu diutamakan
        setTheme(e.matches ? 'dark' : 'light', false);
      });
    } catch (e) { /* matchMedia change listener unsupported — abaikan */ }
  }
}

/* ===================================================================
   4. STATE & NAVIGASI (dengan riwayat browser agar tombol back
      perangkat / gesture iOS bekerja seperti aplikasi native)
   =================================================================== */
let currentState = {
  selectedClass: null,
  selectedRombel: null,
  selectedDay: null,
  currentScreen: 'mainMenu',
};

const SCREEN_IDS = ['mainMenu', 'rombelSelection', 'daySelection', 'scheduleDisplay', 'funFactsDisplay'];

function setActiveScreen(screenName, direction) {
  SCREEN_IDS.forEach((id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.classList.remove('active', 'enter-right', 'enter-left');
  });
  const target = document.getElementById(screenName);
  if (target) {
    target.classList.add('active');
    if (direction === 'forward') target.classList.add('enter-right');
    if (direction === 'backward') target.classList.add('enter-left');
  }
  currentState.currentScreen = screenName;

  const backBtn = document.getElementById('backButton');
  if (backBtn) backBtn.hidden = screenName === 'mainMenu';

  updateBreadcrumb();
  window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
}

function pushHistory(screenName) {
  const state = Object.assign({}, currentState, { currentScreen: screenName });
  try { history.pushState(state, '', '#' + screenName); } catch (e) { /* noop */ }
}

function goToScreen(screenName, opts) {
  opts = opts || {};
  const push = opts.push !== false;
  const direction = opts.direction || 'forward';

  switch (screenName) {
    case 'mainMenu':
      updateCurrentDate();
      renderContinueCard();
      break;
    case 'rombelSelection':
      renderRombelGrid(currentState.selectedClass);
      break;
    case 'daySelection':
      renderDaySelection();
      break;
    case 'scheduleDisplay':
      renderSchedule(currentState.selectedDay);
      break;
    case 'funFactsDisplay':
      renderFunFacts();
      break;
  }

  setActiveScreen(screenName, direction);
  if (push) pushHistory(screenName);
}

/* ===================================================================
   5. BREADCRUMB
   =================================================================== */
function updateBreadcrumb() {
  const bc = document.getElementById('breadcrumb');
  if (!bc) return;
  const { currentScreen, selectedClass, selectedRombel, selectedDay } = currentState;

  if (currentScreen === 'mainMenu') {
    bc.hidden = true;
    bc.innerHTML = '';
    return;
  }

  const segments = [{ label: 'Beranda', onClick: () => goToScreen('mainMenu') }];

  if (currentScreen === 'funFactsDisplay') {
    segments.push({ label: 'Fun Facts', current: true });
  } else {
    segments.push({
      label: `Kelas ${selectedClass}`,
      current: currentScreen === 'rombelSelection',
      onClick: currentScreen !== 'rombelSelection' ? () => goToScreen('rombelSelection') : null,
    });
    if (currentScreen === 'daySelection' || currentScreen === 'scheduleDisplay') {
      segments.push({
        label: `${selectedClass}-${selectedRombel}`,
        current: currentScreen === 'daySelection',
        onClick: currentScreen !== 'daySelection' ? () => goToScreen('daySelection') : null,
      });
    }
    if (currentScreen === 'scheduleDisplay') {
      segments.push({ label: DAY_LABELS[selectedDay] || '', current: true });
    }
  }

  bc.innerHTML = '';
  segments.forEach((seg, i) => {
    if (i > 0) {
      const sep = document.createElement('span');
      sep.className = 'crumb-sep';
      sep.innerHTML = ICONS.chevronRight;
      bc.appendChild(sep);
    }
    if (seg.current || !seg.onClick) {
      const span = document.createElement('span');
      span.className = 'crumb';
      span.textContent = seg.label;
      if (seg.current) span.setAttribute('aria-current', 'true');
      bc.appendChild(span);
    } else {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'crumb';
      btn.textContent = seg.label;
      btn.addEventListener('click', seg.onClick);
      bc.appendChild(btn);
    }
  });
  bc.hidden = false;
}

/* ===================================================================
   6. BERANDA — tanggal & kartu "lanjutkan"
   =================================================================== */
function updateCurrentDate() {
  const now = new Date();
  const text = `${DAY_FULL[now.getDay()]}, ${now.getDate()} ${MONTH_FULL[now.getMonth()]} ${now.getFullYear()}`;
  const el = document.getElementById('currentDate');
  if (el) el.textContent = text;
}

function getLastRombel() {
  try {
    const raw = localStorage.getItem('jp-last-rombel');
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (parsed && parsed.kelas && parsed.rombel && scheduleData[parsed.kelas] && scheduleData[parsed.kelas][parsed.rombel]) {
      return parsed;
    }
  } catch (e) { /* noop */ }
  return null;
}

function saveLastRombel(kelas, rombel) {
  try { localStorage.setItem('jp-last-rombel', JSON.stringify({ kelas, rombel })); } catch (e) { /* noop */ }
}

function renderContinueCard() {
  const card = document.getElementById('continueCard');
  if (!card) return;
  const last = getLastRombel();
  if (!last) { card.hidden = true; return; }

  const todayKey = todayDayKey();
  const labelEl = document.getElementById('continueLabel');
  const targetEl = document.getElementById('continueTarget');

  if (todayKey) {
    labelEl.textContent = 'Lihat Jadwal Hari Ini';
    targetEl.textContent = `Kelas ${last.kelas}-${last.rombel} • ${DAY_LABELS[todayKey]}`;
  } else {
    labelEl.textContent = 'Lanjutkan';
    targetEl.textContent = `Kelas ${last.kelas}-${last.rombel}`;
  }

  card.hidden = false;
  card.onclick = () => {
    currentState.selectedClass = last.kelas;
    currentState.selectedRombel = last.rombel;
    if (todayKey) {
      currentState.selectedDay = todayKey;
      goToScreen('scheduleDisplay');
    } else {
      goToScreen('daySelection');
    }
  };
}

/* ===================================================================
   7. RENDER: PILIH ROMBEL
   =================================================================== */
function renderRombelGrid(kelas) {
  const titleEl = document.getElementById('rombelTitle');
  if (titleEl) titleEl.textContent = `Pilih Kelas ${kelas}`;

  const grid = document.getElementById('rombelGrid');
  if (!grid) return;
  grid.innerHTML = '';

  const data = scheduleData[kelas];
  if (!data) {
    grid.innerHTML = '<p class="no-data">Tidak ada data untuk kelas ini.</p>';
    return;
  }

  const rombels = Object.keys(data).sort((a, b) => parseInt(a, 10) - parseInt(b, 10));
  const frag = document.createDocumentFragment();
  rombels.forEach((r, i) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'rombel-btn stagger-item';
    btn.style.animationDelay = `${i * 25}ms`;
    btn.dataset.rombel = r;
    btn.textContent = `${kelas}-${r}`;
    frag.appendChild(btn);
  });
  grid.appendChild(frag);
}

/* ===================================================================
   8. RENDER: PILIH HARI (dengan tanggal asli minggu ini + badge "Hari ini")
   =================================================================== */
function renderDaySelection() {
  const titleEl = document.getElementById('dayTitle');
  if (titleEl) titleEl.textContent = `Kelas ${currentState.selectedClass}-${currentState.selectedRombel}`;

  const grid = document.getElementById('dayGrid');
  if (!grid) return;
  grid.innerHTML = '';

  const weekDates = getWeekDates();
  const todayKey = todayDayKey();
  const frag = document.createDocumentFragment();

  DAY_KEYS.forEach((key, i) => {
    const d = weekDates[key];
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'day-btn stagger-item' + (key === todayKey ? ' is-today' : '');
    btn.style.animationDelay = `${i * 35}ms`;
    btn.dataset.day = key;
    btn.innerHTML = `
      <span class="day-date-badge"><span class="dnum">${d.getDate()}</span><span class="dmon">${MONTH_SHORT[d.getMonth()]}</span></span>
      <span class="day-info">
        <span class="day-name">${DAY_LABELS[key]}</span>
        ${key === todayKey ? '<span class="day-today-tag">Hari ini</span>' : ''}
      </span>
    `;
    frag.appendChild(btn);
  });
  grid.appendChild(frag);
}

/* ===================================================================
   9. RENDER: JADWAL (dengan penanda "Sekarang" bila relevan)
   =================================================================== */
function renderSchedule(day) {
  currentState.selectedDay = day;
  const { selectedClass, selectedRombel } = currentState;

  const titleEl = document.getElementById('scheduleTitle');
  if (titleEl) titleEl.textContent = `${DAY_LABELS[day] || day} — Kelas ${selectedClass}-${selectedRombel}`;

  const list = document.getElementById('scheduleList');
  if (!list) return;
  list.innerHTML = '';

  const schedule = scheduleData[selectedClass] && scheduleData[selectedClass][selectedRombel]
    ? scheduleData[selectedClass][selectedRombel][day]
    : null;

  const isViewingToday = day === todayDayKey();
  const now = new Date();
  const nowMinutes = now.getHours() * 60 + now.getMinutes();

  if (schedule && schedule.length) {
    const frag = document.createDocumentFragment();
    schedule.forEach((item, i) => {
      const row = document.createElement('div');
      row.className = 'schedule-item stagger-item';
      row.style.animationDelay = `${i * 25}ms`;

      let isNow = false;
      if (isViewingToday) {
        const range = parseTimeRange(item.time);
        if (range && nowMinutes >= range[0] && nowMinutes < range[1]) isNow = true;
      }
      if (isNow) row.classList.add('is-now');

      const colorVar = getSubjectColorVar(item.subject || '');
      row.innerHTML = `
        <span class="time-slot">${escapeHtml(item.time || '')}</span>
        <span class="subject-cell">
          <span class="subject-dot" style="--subject-color: var(${colorVar})"></span>
          <span class="subject-name">${escapeHtml(item.subject || '')}</span>
          ${isNow ? '<span class="now-tag">Sekarang</span>' : ''}
        </span>
      `;
      frag.appendChild(row);
    });
    list.appendChild(frag);
  } else {
    list.innerHTML = '<div class="no-data">Tidak ada jadwal untuk hari ini.</div>';
  }
}

/* ===================================================================
   10. RENDER: FUN FACTS
   =================================================================== */
function renderFunFacts() {
  const container = document.getElementById('factsContainer');
  if (!container) return;
  container.innerHTML = '';

  if (!funFactsData || !funFactsData.length) {
    container.innerHTML = '<p class="no-data">Tidak ada data fun facts tersedia.</p>';
    return;
  }

  const frag = document.createDocumentFragment();
  funFactsData.forEach((fact, i) => {
    const card = document.createElement('div');
    card.className = 'card stagger-item';
    card.style.animationDelay = `${i * 45}ms`;

    const itemsHtml = (fact.items || []).map((it) => `<li class="fact-item">${escapeHtml(it)}</li>`).join('');
    card.innerHTML = `
      <div class="fact-card-head">
        ${FACT_ICONS[i % FACT_ICONS.length]}
        <h3>${escapeHtml(fact.title)}</h3>
      </div>
      <ul class="fact-list">${itemsHtml}</ul>
    `;
    frag.appendChild(card);
  });
  container.appendChild(frag);
}

/* ===================================================================
   11. INSTALL APP (PWA) — Android/Chrome via beforeinstallprompt,
       iOS via tutorial khusus, browser lain via fallback umum.
   =================================================================== */
let deferredInstallPrompt = null;

function isStandaloneDisplay() {
  return (window.matchMedia && window.matchMedia('(display-mode: standalone)').matches) || window.navigator.standalone === true;
}

function isIOSDevice() {
  const ua = window.navigator.userAgent || '';
  return /iphone|ipad|ipod/i.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
}

function openModal(id) {
  const overlay = document.getElementById(id);
  if (overlay) overlay.hidden = false;
}
function closeModal(id) {
  const overlay = document.getElementById(id);
  if (overlay) overlay.hidden = true;
}

function initModals() {
  const bindClose = (closeId, overlayId) => {
    const closeBtn = document.getElementById(closeId);
    const overlay = document.getElementById(overlayId);
    if (closeBtn) closeBtn.addEventListener('click', () => closeModal(overlayId));
    if (overlay) overlay.addEventListener('click', (e) => { if (e.target === overlay) closeModal(overlayId); });
  };
  bindClose('iosModalClose', 'iosModalOverlay');
  bindClose('genericModalClose', 'genericModalOverlay');

  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    closeModal('iosModalOverlay');
    closeModal('genericModalOverlay');
  });
}

function initInstallUI() {
  const card = document.getElementById('installCard');
  const action = document.getElementById('installAction');
  const dismiss = document.getElementById('installDismiss');
  if (!card || !action || !dismiss) return;

  if (isStandaloneDisplay()) { card.hidden = true; return; }

  let dismissed = false;
  try { dismissed = localStorage.getItem('jp-install-dismissed') === '1'; } catch (e) { /* noop */ }
  card.hidden = dismissed;

  dismiss.addEventListener('click', (e) => {
    e.stopPropagation();
    card.hidden = true;
    try { localStorage.setItem('jp-install-dismissed', '1'); } catch (err) { /* noop */ }
  });

  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredInstallPrompt = e;
    if (!dismissed) card.hidden = false;
  });

  window.addEventListener('appinstalled', () => {
    card.hidden = true;
    deferredInstallPrompt = null;
  });

  action.addEventListener('click', async () => {
    if (deferredInstallPrompt) {
      deferredInstallPrompt.prompt();
      try {
        const choice = await deferredInstallPrompt.userChoice;
        if (choice && choice.outcome === 'accepted') card.hidden = true;
      } catch (e) { /* noop */ }
      deferredInstallPrompt = null;
    } else if (isIOSDevice()) {
      openModal('iosModalOverlay');
    } else {
      openModal('genericModalOverlay');
    }
  });
}

/* ===================================================================
   12. SERVICE WORKER (dukungan offline)
   =================================================================== */
function initServiceWorker() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('sw.js').catch((err) => {
        console.error('Pendaftaran service worker gagal:', err);
      });
    });
  }
}

/* ===================================================================
   13. EVENT LISTENERS (delegasi pada kontainer yang persisten)
   =================================================================== */
function initEventListeners() {
  const backBtn = document.getElementById('backButton');
  if (backBtn) backBtn.addEventListener('click', () => history.back());

  const gradeGrid = document.getElementById('gradeGrid');
  if (gradeGrid) {
    gradeGrid.addEventListener('click', (e) => {
      const btn = e.target.closest('.grade-btn');
      if (!btn) return;
      currentState.selectedClass = btn.dataset.class;
      currentState.selectedRombel = null;
      goToScreen('rombelSelection');
    });
  }

  const rombelGrid = document.getElementById('rombelGrid');
  if (rombelGrid) {
    rombelGrid.addEventListener('click', (e) => {
      const btn = e.target.closest('.rombel-btn');
      if (!btn) return;
      currentState.selectedRombel = btn.dataset.rombel;
      saveLastRombel(currentState.selectedClass, currentState.selectedRombel);
      goToScreen('daySelection');
    });
  }

  const dayGrid = document.getElementById('dayGrid');
  if (dayGrid) {
    dayGrid.addEventListener('click', (e) => {
      const btn = e.target.closest('.day-btn');
      if (!btn) return;
      currentState.selectedDay = btn.dataset.day;
      goToScreen('scheduleDisplay');
    });
  }

  const funFactsBtn = document.getElementById('funFactsBtn');
  if (funFactsBtn) funFactsBtn.addEventListener('click', () => goToScreen('funFactsDisplay'));

  window.addEventListener('popstate', (e) => {
    const state = e.state;
    if (!state) {
      currentState = { selectedClass: null, selectedRombel: null, selectedDay: null, currentScreen: 'mainMenu' };
      goToScreen('mainMenu', { push: false, direction: 'backward' });
      return;
    }
    currentState = Object.assign({}, state);
    goToScreen(state.currentScreen, { push: false, direction: 'backward' });
  });
}

/* ===================================================================
   14. INISIALISASI
   =================================================================== */
function init() {
  initTheme();
  updateCurrentDate();
  renderContinueCard();
  initInstallUI();
  initModals();
  initServiceWorker();
  initEventListeners();

  try {
    history.replaceState(Object.assign({}, currentState, { currentScreen: 'mainMenu' }), '', '#mainMenu');
  } catch (e) { /* noop */ }

  setActiveScreen('mainMenu', null);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
