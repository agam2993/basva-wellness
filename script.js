/**
 * Basva Yoga & Wellness Center - Interactive Client Logic
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initHeaderScroll();
  initBreathingExercise();
  initScheduleTabs();
  initNewsletterForm();
  initCopySnippet();
});

/* ==========================================================================
   1. Theme Toggle (Light / Serene Dark Mode)
   ========================================================================== */
function initTheme() {
  const themeToggle = document.getElementById('themeToggle');
  const storedTheme = localStorage.getItem('basva-theme');
  
  if (storedTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    updateThemeIcon(true);
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      if (isDark) {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('basva-theme', 'light');
        updateThemeIcon(false);
      } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('basva-theme', 'dark');
        updateThemeIcon(true);
      }
    });
  }
}

function updateThemeIcon(isDark) {
  const icon = document.getElementById('themeIcon');
  if (!icon) return;
  if (isDark) {
    icon.innerHTML = `<path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>`;
  } else {
    icon.innerHTML = `<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`;
  }
}

/* ==========================================================================
   2. Header Scroll Effect
   ========================================================================== */
function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });
}

/* ==========================================================================
   3. Interactive Mindful Breathing Exercise (4-4-4 Technique)
   ========================================================================== */
function initBreathingExercise() {
  const breathCircle = document.getElementById('breathCircle');
  const actionText = document.getElementById('breathAction');
  const counterText = document.getElementById('breathCountdown');
  const toggleBtn = document.getElementById('toggleBreathing');
  const soundBtn = document.getElementById('soundToggle');

  if (!breathCircle || !actionText || !counterText || !toggleBtn) return;

  let isRunning = false;
  let soundEnabled = false;
  let currentPhase = 'idle'; // 'inhale', 'hold', 'exhale'
  let secondsRemaining = 4;
  let intervalId = null;

  // Web Audio Context for gentle harmonic singing bowl chime
  let audioCtx = null;

  function playChime(frequency = 432) {
    if (!soundEnabled) return;
    try {
      if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      }
      if (audioCtx.state === 'suspended') {
        audioCtx.resume();
      }

      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(frequency, audioCtx.currentTime);

      gain.gain.setValueAtTime(0.001, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.18, audioCtx.currentTime + 0.15);
      gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 2.5);

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start();
      osc.stop(audioCtx.currentTime + 2.6);
    } catch (e) {
      console.log('Web Audio not supported or blocked', e);
    }
  }

  if (soundBtn) {
    soundBtn.addEventListener('click', () => {
      soundEnabled = !soundEnabled;
      soundBtn.classList.toggle('active', soundEnabled);
      const label = soundBtn.querySelector('.sound-label');
      if (label) {
        label.textContent = soundEnabled ? 'Chime: On' : 'Chime: Off';
      }
      if (soundEnabled) {
        playChime(528); // Miraculous 528Hz love/peace frequency
      }
    });
  }

  function runPhase(phase, duration, label, chimeFreq) {
    currentPhase = phase;
    breathCircle.className = `breath-circle ${phase}`;
    actionText.textContent = label;
    secondsRemaining = duration;
    counterText.textContent = secondsRemaining;
    playChime(chimeFreq);
  }

  function tick() {
    secondsRemaining--;
    if (secondsRemaining <= 0) {
      if (currentPhase === 'inhale') {
        runPhase('hold', 4, 'Hold', 587); // D note
      } else if (currentPhase === 'hold') {
        runPhase('exhale', 4, 'Exhale', 396); // Solfeggio release note
      } else {
        runPhase('inhale', 4, 'Inhale', 432); // Calming grounding A note
      }
    } else {
      counterText.textContent = secondsRemaining;
    }
  }

  function startBreathing() {
    isRunning = true;
    toggleBtn.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <rect x="6" y="4" width="4" height="16" rx="1"/>
        <rect x="14" y="4" width="4" height="16" rx="1"/>
      </svg>
      Pause Practice
    `;
    runPhase('inhale', 4, 'Inhale', 432);
    intervalId = setInterval(tick, 1000);
  }

  function pauseBreathing() {
    isRunning = false;
    clearInterval(intervalId);
    intervalId = null;
    toggleBtn.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <polygon points="5 3 19 12 5 21 5 3"/>
      </svg>
      Resume Practice
    `;
    actionText.textContent = 'Paused';
  }

  toggleBtn.addEventListener('click', () => {
    if (isRunning) {
      pauseBreathing();
    } else {
      startBreathing();
    }
  });
}

/* ==========================================================================
   4. Schedule Filter Tabs
   ========================================================================== */
const scheduleData = {
  morning: [
    { time: '06:30 AM', title: 'Sunrise Sadhana & Prana Flow', instructor: 'Basva Lead Instructor', room: 'Lotus Sunroom' },
    { time: '08:00 AM', title: 'Dynamic Vinyasa Strength', instructor: 'Elena V.', room: 'Studio Earth' },
    { time: '09:30 AM', title: 'Gentle Awakening & Mindfulness', instructor: 'Devan M.', room: 'Sanctuary Pavilion' }
  ],
  midday: [
    { time: '12:00 PM', title: 'Midday Reset: Neck, Spine & Breath', instructor: 'Aria Chen', room: 'Lotus Sunroom' },
    { time: '01:15 PM', title: 'Mindful Desk Worker Release', instructor: 'Elena V.', room: 'Studio Earth' },
    { time: '02:30 PM', title: 'Walking Meditation in Forest Gardens', instructor: 'Basva Lead Instructor', room: 'Garden Path' }
  ],
  evening: [
    { time: '05:30 PM', title: 'Sunset Restorative & Yin Yoga', instructor: 'Devan M.', room: 'Studio Earth' },
    { time: '07:00 PM', title: 'Sacred Tibetan Sound Healing Bath', instructor: 'Master Sound Healer', room: 'Sanctuary Pavilion' },
    { time: '08:30 PM', title: 'Yoga Nidra & Deep Sleep Preparation', instructor: 'Aria Chen', room: 'Lotus Sunroom' }
  ]
};

function initScheduleTabs() {
  const tabs = document.querySelectorAll('.tab-btn');
  const scheduleContainer = document.getElementById('scheduleList');

  if (!scheduleContainer) return;

  function renderSchedule(timeOfDay) {
    const items = scheduleData[timeOfDay] || [];
    scheduleContainer.innerHTML = items.map(item => `
      <div class="schedule-item">
        <div class="schedule-time">${item.time}</div>
        <div class="schedule-details">
          <h4>${item.title}</h4>
          <p>${item.instructor} • ${item.room}</p>
        </div>
        <div class="schedule-action">
          <button class="reserve-btn" onclick="showToast('Reserved session: ${item.title} at ${item.time}')">
            Reserve Mat
          </button>
        </div>
      </div>
    `).join('');
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const timeOfDay = tab.getAttribute('data-tab');
      renderSchedule(timeOfDay);
    });
  });

  // Render initial morning schedule
  renderSchedule('morning');
}

/* ==========================================================================
   5. Newsletter Form & Toast Notifications
   ========================================================================== */
function initNewsletterForm() {
  const form = document.getElementById('newsletterForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const emailInput = form.querySelector('input[type="email"]');
    if (emailInput && emailInput.value) {
      showToast(`Namaste! Welcome to Basva Wellness Circle (${emailInput.value}).`);
      emailInput.value = '';
    }
  });
}

function showToast(message) {
  let toast = document.getElementById('toastNotice');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toastNotice';
    toast.className = 'toast-notice';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M20 6L9 17l-5-5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    <span>${message}</span>
  `;
  
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 4000);
}
window.showToast = showToast;

/* ==========================================================================
   6. Vercel Snippet Quick Copy
   ========================================================================== */
function initCopySnippet() {
  const copyBtn = document.getElementById('copyDeployBtn');
  if (!copyBtn) return;

  copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText('npx vercel deploy').then(() => {
      copyBtn.textContent = 'COPIED!';
      setTimeout(() => {
        copyBtn.textContent = 'COPY';
      }, 2000);
    }).catch(() => {
      showToast('Deploy command: npx vercel deploy');
    });
  });
}
