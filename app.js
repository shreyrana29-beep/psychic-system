/* =====================
   Luminary EdTech Dashboard
   app.js
   ===================== */

/* ---- DATA ---- */
const DATA = {
  user: { name: 'Aryan Kumar', initials: 'AK', role: 'Pro Student' },

  stats: [
    { icon: '🎓', value: '12',  label: 'Courses Enrolled',  change: '↑ 2 this month',          dir: 'up',   cls: 'c1' },
    { icon: '⏱',  value: '84h', label: 'Hours Learned',     change: '↑ 12% vs last month',      dir: 'up',   cls: 'c2' },
    { icon: '🏆', value: '#7',  label: 'Leaderboard Rank',  change: '↑ Moved up 3 spots',        dir: 'up',   cls: 'c3' },
    { icon: '🔥', value: '24',  label: 'Day Streak',        change: 'Personal best!',            dir: 'up',   cls: 'c4' },
  ],

  chartWeeks: [
    { label: 'Wk 1', study: 55, assign: 40 },
    { label: 'Wk 2', study: 70, assign: 55 },
    { label: 'Wk 3', study: 48, assign: 35 },
    { label: 'Wk 4', study: 82, assign: 60 },
    { label: 'Wk 5', study: 65, assign: 48 },
    { label: 'Wk 6', study: 90, assign: 70 },
    { label: 'Wk 7', study: 75, assign: 55 },
  ],

  leaderboard: [
    { rank: '1', rankCls: 'gold',   initials: 'PR', avatarGrad: 'linear-gradient(135deg,#f472b6,#ec4899)', name: 'Priya Rao',  barPct: 97, score: '9,720', me: false },
    { rank: '2', rankCls: 'silver', initials: 'RK', avatarGrad: 'linear-gradient(135deg,#34d399,#10b981)', name: 'Rahul Khan', barPct: 89, score: '8,940', me: false },
    { rank: '3', rankCls: 'bronze', initials: 'SM', avatarGrad: 'linear-gradient(135deg,#fb923c,#f97316)', name: 'Sneha Mehta',barPct: 82, score: '8,210', me: false },
    { rank: '4', rankCls: '',       initials: 'VT', avatarGrad: 'linear-gradient(135deg,#818cf8,#6366f1)', name: 'Vikram T.', barPct: 76, score: '7,680', barColor: 'var(--accent2)', me: false },
    { rank: '7', rankCls: 'me',     initials: 'AK', avatarGrad: 'linear-gradient(135deg,var(--accent2),var(--accent))', name: 'You', barPct: 65, score: '6,500', barColor: 'var(--accent)', me: true },
  ],

  courses: [
    { icon: '🐍', bg: 'rgba(91,138,244,0.12)',  name: 'Python for Data Science',   meta: '68% complete · 4h left',  pct: 68, color: 'var(--accent2)' },
    { icon: '📐', bg: 'rgba(232,197,71,0.12)',  name: 'Linear Algebra Masterclass', meta: '42% complete · 9h left',  pct: 42, color: 'var(--accent)'  },
    { icon: '⚛️', bg: 'rgba(244,117,91,0.12)',  name: 'React Advanced Patterns',   meta: '85% complete · 1h left',  pct: 85, color: 'var(--accent3)' },
    { icon: '🧠', bg: 'rgba(74,222,128,0.12)',  name: 'ML Fundamentals',           meta: '19% complete · 21h left', pct: 19, color: 'var(--green)'   },
  ],

  activity: [
    { icon: '✅', iconBg: 'rgba(74,222,128,0.1)',   text: 'Completed <strong>Module 7</strong> in Python for Data Science', time: '2 hours ago'       },
    { icon: '🏆', iconBg: 'rgba(232,197,71,0.1)',   text: 'Earned <strong>"Problem Solver"</strong> badge',                 time: 'Yesterday, 4:30 PM' },
    { icon: '📝', iconBg: 'rgba(91,138,244,0.1)',   text: 'Submitted <strong>Assignment 4</strong> — Linear Algebra',      time: 'Yesterday, 2:15 PM' },
    { icon: '🎥', iconBg: 'rgba(244,117,91,0.1)',   text: 'Attended live session: <strong>React Hooks Deep Dive</strong>', time: '2 days ago'        },
    { icon: '⭐', iconBg: 'rgba(232,197,71,0.1)',   text: 'Scored <strong>94/100</strong> on ML Concepts Quiz',            time: '3 days ago'        },
  ],

  upcoming: [
    { day: '25', month: 'Mar', name: 'Python Live Session',   sub: '7:00 PM · Dr. Anita Sharma', tagCls: 'tag-live',   tagLabel: 'LIVE'  },
    { day: '26', month: 'Mar', name: 'Algebra Mid-term Quiz', sub: '10:00 AM · 45 mins',          tagCls: 'tag-quiz',   tagLabel: 'QUIZ'  },
    { day: '28', month: 'Mar', name: 'React Project Submission', sub: 'Due by 11:59 PM',          tagCls: 'tag-assign', tagLabel: 'DUE'   },
    { day: '01', month: 'Apr', name: 'ML Study Group',        sub: '6:00 PM · 12 members',        tagCls: 'tag-live',   tagLabel: 'LIVE'  },
    { day: '03', month: 'Apr', name: 'Capstone Proposal',     sub: 'Due by 5:00 PM',              tagCls: 'tag-assign', tagLabel: 'DUE'   },
  ],
};

/* ---- HELPERS ---- */
const el  = (tag, cls = '') => { const e = document.createElement(tag); if (cls) e.className = cls; return e; };
const div = (cls = '')       => el('div', cls);

/* ---- RENDER: NAV ---- */
function renderNav() {
  document.querySelector('.logo-text').textContent = 'Luminary';
  document.querySelector('.user-info .name').textContent = DATA.user.name;
  document.querySelector('.user-info .role').textContent = DATA.user.role;
  document.querySelectorAll('.avatar').forEach(a => (a.textContent = DATA.user.initials));

  // Active nav highlight on click
  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', e => {
      e.preventDefault();
      document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
      item.classList.add('active');
    });
  });
}

/* ---- RENDER: GREETING ---- */
function renderGreeting() {
  const h = new Date().getHours();
  const greeting = h < 12 ? 'Good morning' : h < 17 ? 'Good afternoon' : 'Good evening';
  const firstName = DATA.user.name.split(' ')[0];
  document.querySelector('.page-title').innerHTML =
    `${greeting}, <span>${firstName}</span> 👋`;
}

/* ---- RENDER: STATS ---- */
function renderStats() {
  const grid = document.querySelector('.stats-grid');
  grid.innerHTML = '';
  DATA.stats.forEach(s => {
    const card = div(`stat-card ${s.cls}`);
    card.innerHTML = `
      <div class="stat-icon">${s.icon}</div>
      <div class="stat-value">${s.value}</div>
      <div class="stat-label">${s.label}</div>
      <div class="stat-change ${s.dir}">${s.change}</div>`;
    grid.appendChild(card);
  });
}

/* ---- RENDER: CHART ---- */
function renderChart() {
  const barsContainer = document.querySelector('.chart-bars');
  const labelsContainer = document.querySelector('.chart-labels');
  barsContainer.innerHTML = '';
  labelsContainer.innerHTML = '';

  DATA.chartWeeks.forEach(w => {
    const group = div('bar-group');
    const b1 = div('bar primary');
    const b2 = div('bar secondary');
    b1.style.height = w.study  + '%';
    b2.style.height = w.assign + '%';
    group.append(b1, b2);
    barsContainer.appendChild(group);

    const lbl = div('chart-label');
    lbl.textContent = w.label;
    labelsContainer.appendChild(lbl);
  });
}

/* ---- RENDER: LEADERBOARD ---- */
function renderLeaderboard() {
  const board = document.querySelector('.leaderboard');
  board.innerHTML = '';

  DATA.leaderboard.forEach(p => {
    const item = div('lb-item' + (p.me ? ' you' : ''));

    const rank = el('span', 'lb-rank ' + p.rankCls);
    rank.textContent = p.rank;

    const avatar = div('lb-avatar');
    avatar.style.background = p.avatarGrad;
    avatar.textContent = p.initials;

    const info = div('lb-info');
    const name = div('lb-name' + (p.me ? ' me' : ''));
    name.textContent = p.name;
    const barWrap = div('lb-bar-wrap');
    const barFill = div('lb-bar-fill');
    barFill.style.width = p.barPct + '%';
    if (p.barColor) barFill.style.background = p.barColor;
    barWrap.appendChild(barFill);
    info.append(name, barWrap);

    const score = div('lb-score' + (p.me ? ' me' : ''));
    score.textContent = p.score;

    item.append(rank, avatar, info, score);
    board.appendChild(item);
  });
}

/* ---- RENDER: COURSES ---- */
function renderCourses() {
  const list = document.querySelector('.course-list');
  list.innerHTML = '';

  DATA.courses.forEach(c => {
    const card = div('course-card');
    const thumb = div('course-thumb');
    thumb.style.background = c.bg;
    thumb.textContent = c.icon;

    const info = div('course-info');
    const name = div('course-name');
    name.textContent = c.name;
    const meta = div('course-meta');
    meta.textContent = c.meta;
    const progressWrap = div('progress-wrap');
    const progressFill = div('progress-fill');
    progressFill.style.width  = c.pct + '%';
    progressFill.style.background = c.color;
    progressWrap.appendChild(progressFill);
    info.append(name, meta, progressWrap);

    card.append(thumb, info);
    list.appendChild(card);
  });
}

/* ---- RENDER: ACTIVITY ---- */
function renderActivity() {
  const feed = document.querySelector('.activity-feed');
  feed.innerHTML = '';

  DATA.activity.forEach(a => {
    const item = div('activity-item');
    const icon = div('act-icon');
    icon.style.background = a.iconBg;
    icon.textContent = a.icon;

    const body = div();
    const text = div('act-text');
    text.innerHTML = a.text;
    const time = div('act-time');
    time.textContent = a.time;
    body.append(text, time);

    item.append(icon, body);
    feed.appendChild(item);
  });
}

/* ---- RENDER: UPCOMING ---- */
function renderUpcoming() {
  const list = document.querySelector('.upcoming-list');
  list.innerHTML = '';

  DATA.upcoming.forEach(u => {
    const item = div('upcoming-item');

    const dateBox = div('upcoming-date');
    const day = el('span', 'day');   day.textContent = u.day;
    const mon = el('span', 'month'); mon.textContent = u.month;
    dateBox.append(day, mon);

    const info = div('upcoming-info');
    const name = div('upcoming-name'); name.textContent = u.name;
    const sub  = div('upcoming-sub');  sub.textContent  = u.sub;
    info.append(name, sub);

    const tag = el('span', `upcoming-tag ${u.tagCls}`);
    tag.textContent = u.tagLabel;

    item.append(dateBox, info, tag);
    list.appendChild(item);
  });
}

/* ---- SEARCH ---- */
function initSearch() {
  const input = document.querySelector('.search-box input');
  input.addEventListener('keydown', e => {
    if (e.key === 'Enter' && input.value.trim()) {
      // Placeholder: filter logic or navigation could go here
      console.log('Search:', input.value.trim());
      input.value = '';
    }
  });
}

/* ---- NOTIFICATION BELL ---- */
function initNotifications() {
  const bell = document.getElementById('notif-btn');
  bell.addEventListener('click', () => {
    bell.querySelector('.dot')?.remove();
    console.log('Notifications opened');
  });
}

/* ---- BOOTSTRAP ---- */
document.addEventListener('DOMContentLoaded', () => {
  renderGreeting();
  renderNav();
  renderStats();
  renderChart();
  renderLeaderboard();
  renderCourses();
  renderActivity();
  renderUpcoming();
  initSearch();
  initNotifications();
});
