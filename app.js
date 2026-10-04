(() => {
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const pad = n => String(n).padStart(2, '0');

/* ---------- CSS-only product mocks ---------- */
const bars = [38, 52, 44, 66, 58, 80, 62, 92, 74, 70, 86, 64];
const mockDesk = () => `
  <div class="mk-desk" aria-hidden="true">
    <div class="mk-side"><i class="logo"></i><i class="on"></i><i></i><i></i><i></i><i style="width:60%"></i></div>
    <div class="mk-main">
      <div class="mk-row">
        <div class="mk-kpi hl"><i></i><b>₹4.2L</b></div>
        <div class="mk-kpi"><i></i><b>₹1.8L</b></div>
        <div class="mk-kpi"><i></i><b>12</b></div>
      </div>
      <div class="mk-chart">${bars.map((h, i) => `<i class="${i > 7 ? 'on' : ''}" style="height:${h}%"></i>`).join('')}</div>
      <div class="mk-list">
        <div class="mk-li"><span></span><i style="width:30%"></i><em>Paid</em></div>
        <div class="mk-li"><span></span><i style="width:42%"></i><em class="due">Due Fri</em></div>
      </div>
    </div>
  </div>`;

const phone = (inner, cls = '') => `<div class="mk-phone ${cls}" aria-hidden="true"><span class="notch"></span>${inner}</div>`;
const care = {
  today: () => phone(`<div class="mk-h">Today, <em>Papa</em></div>
      <div class="mk-card hl"><i style="width:40%"></i><i style="width:70%"></i></div>
      <div class="mk-card"><i style="width:55%"></i><i style="width:80%"></i></div>
      <div class="mk-card"><i style="width:35%"></i><i style="width:60%"></i></div>
      <div class="mk-btn"></div>`),
  digest: () => phone(`<div class="mk-avatar"></div><div class="mk-h">All <em>good</em> today</div>
      <div class="mk-pills"><i class="on"></i><i></i><i></i></div>
      <div class="mk-card"><i style="width:70%"></i><i style="width:50%"></i></div>
      <div class="mk-card dark"><i style="width:60%"></i><i style="width:40%"></i></div>`, 'tall'),
  check: () => phone(`<div class="mk-h" style="font-size:clamp(10px,1.5vw,20px)">How are <em>you</em> feeling?</div>
      <div class="mk-card hl" style="flex:1"></div>
      <div class="mk-card" style="flex:.6"></div>
      <div class="mk-btn"></div>`)
};
const map = () => `<div class="mk-map">
      <span class="mk-route" style="left:18%;top:72%;width:40%;transform:rotate(-38deg)"></span>
      <span class="mk-route" style="left:49%;top:46%;width:34%;transform:rotate(-8deg)"></span>
      <span class="mk-stop" style="left:18%;top:72%"></span><span class="mk-stop" style="left:49%;top:46%"></span><span class="mk-stop" style="left:82%;top:41%;background:var(--tomato)"></span>
    </div>`;
const transit = {
  home: () => phone(`<div class="mk-h">Going to <em>work?</em></div>${map()}
      <div class="mk-ticket"><b>MG Road → Indiranagar</b><i style="width:60%"></i></div><div class="mk-btn"></div>`),
  ticket: () => phone(`<div class="mk-h">Your <em>ticket</em></div>
      <div class="mk-ticket" style="flex:1;justify-content:center"><b>Ready at gate</b><div class="mk-qr"></div><i style="width:50%;align-self:center"></i></div>`, 'tall'),
  route: () => phone(`<div class="mk-h">3 stops <em>left</em></div>${map()}
      <div class="mk-card"><i style="width:65%"></i><i style="width:40%"></i></div>`)
};
const PREVIEW = {
  desk: mockDesk,
  care: () => `<div class="mk-phones">${care.today()}${care.digest()}${care.check()}</div>`,
  transit: () => `<div class="mk-phones">${transit.home()}${transit.ticket()}${transit.route()}</div>`
};
const SCREENS = {
  desk: [() => phone(`<div class="mk-h">Next <em>4 weeks</em></div><div class="mk-chart" style="flex:.8">${[60,40,80,52].map((h,i)=>`<i class="${i==1?'':'on'}" style="height:${h}%;${i==1?'background:var(--tomato)':''}"></i>`).join('')}</div><div class="mk-card"><i style="width:70%"></i><i style="width:40%"></i></div><div class="mk-btn"></div>`),
         () => phone(`<div class="mk-h">Gentle <em>nudge</em></div><div class="mk-card" style="flex:1"><i style="width:80%"></i><i style="width:90%"></i><i style="width:60%"></i></div><div class="mk-pills"><i class="on"></i><i></i><i></i></div><div class="mk-btn"></div>`, 'tall'),
         () => phone(`<div class="mk-pills"><i class="on"></i><i></i></div><div class="mk-h">Owner <em>mode</em></div><div class="mk-card dark"><i style="width:50%"></i><i style="width:70%"></i></div><div class="mk-card"><i style="width:60%"></i></div><div class="mk-card"><i style="width:40%"></i></div>`)],
  care: [care.today, care.digest, care.check],
  transit: [transit.home, transit.ticket, transit.route]
};

/* ---------- Projects ---------- */
const P = window.PROJECTS;
$('#projects').innerHTML = P.map((p, i) => `
  <button class="project rv" data-id="${p.id}" aria-label="Open case study: ${p.name} ${p.nameEm}">
    <div class="p-visual" style="--pc:${p.color};--pi:${p.ink}">
      <span class="p-num">${pad(i + 1)} / 03</span><span class="p-year">${p.time.split('·')[1].trim()}</span>
      <div class="mk-stage">${PREVIEW[p.mock]()}</div>
      <span class="p-cursor">View case<br>study →</span>
    </div>
    <div class="p-info">
      <div>
        <div class="p-meta">${p.tags.map(t => `<span class="chip">${t}</span>`).join('')}</div>
        <h3 class="p-name">${p.name} <em>${p.nameEm}</em></h3>
        <p class="p-desc">${p.desc}</p>
      </div>
      <div>
        <dl class="p-role"><dt>Role</dt><dd>${p.role}</dd><dt>Team</dt><dd>${p.team}</dd><dt>Platform</dt><dd>${p.platform}</dd></dl>
        <span class="p-cta"><span class="circ">→</span>Read the case study</span>
      </div>
    </div>
  </button>`).join('');

// cursor follow (desktop)
$$('.project').forEach(card => {
  const vis = $('.p-visual', card), cur = $('.p-cursor', card);
  vis.addEventListener('pointermove', e => {
    const r = vis.getBoundingClientRect();
    cur.style.left = (e.clientX - r.left) + 'px';
    cur.style.top = (e.clientY - r.top) + 'px';
  });
  vis.addEventListener('pointerenter', e => {
    const r = vis.getBoundingClientRect();
    cur.style.left = (e.clientX - r.left) + 'px'; cur.style.top = (e.clientY - r.top) + 'px';
  });
  card.addEventListener('click', () => openCase(card.dataset.id));
});

/* ---------- Case study ---------- */
const caseEl = $('#case'), wipe = $('#wipe');
const SECTIONS = ['Overview', 'Problem', 'Context', 'Research', 'Key insights', 'Design approach', 'Final solution', 'Key screens', 'Outcome & learnings'];
let lastFocus = null;

function caseHTML(p) {
  const idx = P.indexOf(p), next = P[(idx + 1) % P.length];
  const s = (i, inner) => `<section class="cs" id="cs-${i}"><div class="cs-k mono">${pad(i + 1)} <span>${SECTIONS[i]}</span></div>${inner}</section>`;
  return `
  <div class="case-bar">
    <button class="case-back" id="caseClose"><span class="circ">←</span>Back to work</button>
    <span class="case-crumb mono">Case ${pad(idx + 1)} / 03 — ${p.name} ${p.nameEm}</span>
    <span class="case-progress" id="caseProg"></span>
  </div>
  <div class="wrap" style="--pc:${p.color};--pi:${p.ink}">
    <header class="case-hero">
      <div class="p-meta">${p.tags.map(t => `<span class="chip">${t}</span>`).join('')}</div>
      <h1 style="margin-top:24px">${p.name}<br><em>${p.nameEm}</em></h1>
      <p class="case-lede">${p.tagline}</p>
      <dl class="case-facts">
        <div><dt class="mono">Role</dt><dd>${p.role}</dd></div>
        <div><dt class="mono">Team</dt><dd>${p.team}</dd></div>
        <div><dt class="mono">Timeline</dt><dd>${p.time}</dd></div>
        <div><dt class="mono">Platform</dt><dd>${p.platform}</dd></div>
      </dl>
      <div class="case-cover"><div class="mk-stage">${PREVIEW[p.mock]()}</div></div>
    </header>
    <div class="case-body">
      <nav class="case-toc" aria-label="Case study sections">
        ${SECTIONS.map((t, i) => `<a href="#cs-${i}" data-i="${i}"><span>${pad(i + 1)}</span>${t}</a>`).join('')}
      </nav>
      <div>
        ${s(0, `<h2>The <em>short</em> version.</h2><p>${p.overview}</p>`)}
        ${s(1, `<p class="big-quote">${p.problemQuote}</p><p>${p.problem}</p>`)}
        ${s(2, `<h2>Who, what, <em>and the limits.</em></h2><div class="cs-grid">${p.context.map(([h, t]) => `<div class="cs-card"><span class="mono" style="color:var(--ink-3)">${h}</span><p>${t}</p></div>`).join('')}</div>`)}
        ${s(3, `<h2>Going to <em>where it happens.</em></h2><p>${p.research}</p><div class="cs-methods">${p.methods.map(m => `<span class="chip">${m}</span>`).join('')}</div>`)}
        ${s(4, `<h2>Three things <em>we didn't expect.</em></h2><div class="cs-grid">${p.insights.map(([h, t], i) => `<div class="cs-card"><span class="n">${i + 1}.</span><h3>${h}</h3><p>${t}</p></div>`).join('')}</div>`)}
        ${s(5, `<h2>The <em>principle</em> we designed by.</h2><p>${p.approach}</p>
          <div class="cs-compare"><div class="before"><h4>Before</h4><ul>${p.before.map(x => `<li>${x}</li>`).join('')}</ul></div>
          <div class="after"><h4>After</h4><ul>${p.after.map(x => `<li>${x}</li>`).join('')}</ul></div></div>`)}
        ${s(6, `<h2>What <em>shipped.</em></h2><p>${p.solution}</p><div class="cs-wide"><div class="mk-stage" style="width:100%;height:100%;display:flex;align-items:center;justify-content:center">${PREVIEW[p.mock]()}</div></div>`)}
        ${s(7, `<h2>Key <em>screens.</em></h2><div class="cs-screens">${SCREENS[p.mock].map((f, i) => `<figure class="cs-screen">${f()}<figcaption><b>${p.screens[i][0]}</b><span>${p.screens[i][1]}</span></figcaption></figure>`).join('')}</div>`)}
        ${s(8, `<h2>What <em>changed.</em></h2><div class="cs-stats">${p.outcome.map(([b, t]) => `<div class="cs-stat"><b>${b}</b><span>${t}</span></div>`).join('')}</div>
          <ol class="cs-learn">${p.learnings.map((l, i) => `<li><span>L/${pad(i + 1)}</span>${l}</li>`).join('')}</ol>`)}
      </div>
    </div>
    <button class="case-next" data-next="${next.id}" style="--pc:${next.color};--pi:${next.ink}">
      <span class="mono">Next case study →</span>
      <h3>${next.name} <em>${next.nameEm}</em></h3>
    </button>
  </div>`;
}

let tocObs;
function openCase(id, push = true) {
  const p = P.find(x => x.id === id); if (!p) return;
  const wasOpen = caseEl.classList.contains('open');
  if (!wasOpen) lastFocus = document.activeElement;
  const render = () => {
    caseEl.innerHTML = caseHTML(p);
    caseEl.scrollTop = 0;
    bindCase();
  };
  if (wasOpen && !reduce) {
    wipe.classList.remove('go'); void wipe.offsetWidth; wipe.classList.add('go');
    setTimeout(render, 380);
  } else render();
  caseEl.classList.add('open');
  document.body.classList.add('locked');
  if (push) history.pushState({ c: id }, '', '#case/' + id);
  setTimeout(() => $('#caseClose')?.focus({ preventScroll: true }), wasOpen ? 450 : 60);
}
function closeCase(push = true) {
  if (!caseEl.classList.contains('open')) return;
  caseEl.classList.remove('open');
  document.body.classList.remove('locked');
  if (push) history.pushState({}, '', '#work');
  lastFocus?.focus({ preventScroll: true });
}
function bindCase() {
  $('#caseClose').onclick = () => closeCase();
  $('.case-next', caseEl).onclick = e => openCase(e.currentTarget.dataset.next);
  $$('.case-toc a', caseEl).forEach(a => a.onclick = e => {
    e.preventDefault();
    const t = $(a.getAttribute('href'), caseEl);
    caseEl.scrollTo({ top: t.offsetTop - 80, behavior: reduce ? 'auto' : 'smooth' });
  });
  tocObs?.disconnect();
  tocObs = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) {
      const i = e.target.id.split('-')[1];
      $$('.case-toc a', caseEl).forEach(a => a.classList.toggle('active', a.dataset.i === i));
    }
  }), { root: caseEl, rootMargin: '-30% 0px -60% 0px' });
  $$('.cs', caseEl).forEach(s => tocObs.observe(s));
}
caseEl.addEventListener('scroll', () => {
  const prog = $('#caseProg'); if (!prog) return;
  const m = caseEl.scrollHeight - caseEl.clientHeight;
  prog.style.transform = `scaleX(${m > 0 ? caseEl.scrollTop / m : 0})`;
}, { passive: true });
document.addEventListener('keydown', e => { if (e.key === 'Escape') { closeCase(); setMenu(false); } });
addEventListener('popstate', () => {
  const m = location.hash.match(/^#case\/(\w+)/);
  m ? openCase(m[1], false) : closeCase(false);
});
const initial = location.hash.match(/^#case\/(\w+)/);
if (initial) openCase(initial[1], false);

/* ---------- Process ---------- */
const PR = window.PROCESS;
const steps = $('#procSteps'), panel = $('#procPanel'), track = $('#procTrack');
steps.insertAdjacentHTML('beforeend', PR.map((s, i) => `
  <button class="proc-step" role="tab" aria-selected="${i === 0}" data-i="${i}" id="ps-${i}">
    <span class="n">${pad(i + 1)}</span><span class="t">${s.k}${i < 5 ? '<span class="ar">→</span>' : ''}</span>
  </button>`).join(''));
let pi = 0;
function setProc(i) {
  pi = (i + PR.length) % PR.length;
  const s = PR[pi];
  $$('.proc-step', steps).forEach((b, j) => b.setAttribute('aria-selected', j === pi));
  track.style.transform = `translateX(${pi * 100}%)`;
  panel.setAttribute('aria-labelledby', 'ps-' + pi);
  panel.innerHTML = `
    <div class="proc-anim"><div class="proc-big" style="--pcol:${s.c}">${pad(pi + 1)}</div>
      <div class="proc-nav"><button aria-label="Previous stage" data-d="-1">←</button><button aria-label="Next stage" data-d="1">→</button></div></div>
    <div class="proc-anim">
      <p class="proc-q">${s.q}</p>
      <div>
        <p class="proc-d">${s.d}</p>
        <div class="proc-cols">
          <div><h4 class="mono">Methods</h4><ul>${s.m.map(x => `<li class="chip">${x}</li>`).join('')}</ul></div>
          <div><h4 class="mono">Outputs</h4><ul>${s.o.map(x => `<li class="chip" style="background:#fff">${x}</li>`).join('')}</ul></div>
        </div>
      </div>
    </div>`;
  $$('.proc-nav button', panel).forEach(b => b.onclick = () => setProc(pi + +b.dataset.d));
}
steps.addEventListener('click', e => { const b = e.target.closest('.proc-step'); if (b) setProc(+b.dataset.i); });
steps.addEventListener('keydown', e => {
  if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') { setProc(pi + (e.key === 'ArrowRight' ? 1 : -1)); $('#ps-' + pi).focus(); }
});
setProc(0);

/* ---------- Skills ---------- */
const SK = window.SKILLS, wall = $('#skillWall'), detail = $('#skillDetail');
wall.innerHTML = SK.map((s, i) => `<button class="skill" data-i="${i}" style="--sc:${s.c}"><span class="w">${s.k}</span><sup>${pad(i + 1)}</sup></button>${i < SK.length - 1 ? '<span class="skill-slash" aria-hidden="true">/</span>' : ''}`).join('');
let pinned = -1;
function showSkill(i) {
  $$('.skill', wall).forEach((b, j) => b.classList.toggle('on', j === i));
  wall.classList.toggle('dim', i >= 0);
  if (i < 0) {
    detail.innerHTML = `<p class="hint mono">↑ Hover or tap any skill to see what it means in practice.</p>`;
    return;
  }
  const s = SK[i];
  detail.innerHTML = `<h3 class="proc-anim"><span>${s.k}</span></h3><p class="proc-anim"><span>${s.d}</span></p>
    <div class="tools">${s.t.map(t => `<span class="chip" style="background:#fff">${t}</span>`).join('')}</div>`;
}
wall.addEventListener('pointerover', e => { const b = e.target.closest('.skill'); if (b && e.pointerType === 'mouse') showSkill(+b.dataset.i); });
wall.addEventListener('pointerleave', () => showSkill(pinned));
wall.addEventListener('focusin', e => { const b = e.target.closest('.skill'); if (b) showSkill(+b.dataset.i); });
wall.addEventListener('click', e => {
  const b = e.target.closest('.skill'); if (!b) return;
  const i = +b.dataset.i; pinned = pinned === i ? -1 : i; showSkill(pinned);
});
showSkill(-1);

/* ---------- Experience ---------- */
$('#expList').innerHTML = window.EXPERIENCE.map((x, i) => `
  <div class="exp${i === 0 ? ' open' : ''}">
    <button class="exp-row" aria-expanded="${i === 0}">
      <span class="yr">${x.yr}</span>
      <span class="role">${x.role}</span>
      <span class="co"><em>${x.co}</em> · ${x.coEm}</span>
      <span class="now">${x.now ? '<span class="chip">Current</span>' : ''}</span>
      <span class="pm" aria-hidden="true">+</span>
    </button>
    <div class="exp-more"><div><div class="inner"><span></span><p>${x.d}</p><ul>${x.pts.map(p => `<li>${p}</li>`).join('')}</ul></div></div></div>
  </div>`).join('');
$$('.exp-row').forEach(b => b.onclick = () => {
  const el = b.parentElement, o = !el.classList.contains('open');
  el.classList.toggle('open', o); b.setAttribute('aria-expanded', o);
});

/* ---------- Principles accordion ---------- */
$$('.principle button').forEach(b => b.onclick = () => {
  const el = b.parentElement, o = !el.classList.contains('open');
  $$('.principle').forEach(p => { p.classList.remove('open'); $('button', p).setAttribute('aria-expanded', false); });
  el.classList.toggle('open', o); b.setAttribute('aria-expanded', o);
});

/* ---------- Desk ---------- */
const desk = $('#desk'), deskInner = $('#deskInner'), pol = $('#polaroid');
let fact = 0;
pol.addEventListener('click', () => {
  if (pol.classList.contains('flipped')) {
    fact = (fact + 1) % FACTS.length;
    pol.classList.remove('flipped');
    return;
  }
  $('#factText').textContent = FACTS[fact];
  $('#factLabel').textContent = `Fact ${fact + 1} / ${FACTS.length} · tap again`;
  pol.classList.add('flipped');
});
$$('.desk-legend button').forEach(b => b.onclick = () => {
  const g = b.dataset.go;
  if (g === 'polaroid') { pol.click(); pol.focus({ preventScroll: true }); }
  else scrollToSel(g);
});
function scrollToSel(sel) {
  const t = document.querySelector(sel); if (!t) return;
  scrollTo({ top: t.getBoundingClientRect().top + scrollY - 70, behavior: reduce ? 'auto' : 'smooth' });
}
// gentle tilt toward pointer (desktop only)
if (!reduce && matchMedia('(hover:hover) and (pointer:fine)').matches) {
  let raf;
  desk.addEventListener('pointermove', e => {
    const r = desk.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(() => deskInner.style.transform = `translate(${x * -10}px, ${y * -8}px)`);
  });
  desk.addEventListener('pointerleave', () => deskInner.style.transform = '');
}
// brief hint: show labels once on first view
setTimeout(() => { desk.classList.add('hinting'); setTimeout(() => desk.classList.remove('hinting'), 2200); }, 1300);

/* ---------- Nav: active pill, hide on scroll ---------- */
const nav = $('#nav'), links = $$('#navLinks a'), pill = $('#navPill');
function movePill(a) {
  if (!a) { pill.style.opacity = 0; return; }
  pill.style.opacity = 1;
  pill.style.width = a.offsetWidth + 'px';
  pill.style.transform = `translateX(${a.offsetLeft}px)`;
}
const secMap = { home: 'home', work: 'work', about: 'about', process: 'about', skills: 'about', experience: 'experience', contact: 'contact' };
const secObs = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) {
    const key = secMap[e.target.id];
    links.forEach(l => l.classList.toggle('active', l.dataset.sec === key));
    movePill(links.find(l => l.dataset.sec === key));
  }
}), { rootMargin: '-45% 0px -50% 0px' });
Object.keys(secMap).forEach(id => secObs.observe(document.getElementById(id)));
let lastY = 0;
addEventListener('scroll', () => {
  const y = scrollY;
  nav.classList.toggle('scrolled', y > 20);
  nav.classList.toggle('hide', y > 400 && y > lastY + 4 && !document.body.classList.contains('menu-open'));
  if (y < lastY - 4) nav.classList.remove('hide');
  lastY = y;
}, { passive: true });
addEventListener('resize', () => movePill($('#navLinks a.active')));

/* in-page anchors: smooth + offset */
document.addEventListener('click', e => {
  const a = e.target.closest('a[href^="#"]');
  if (!a || a.closest('.case')) return;
  const h = a.getAttribute('href'); if (h.length < 2) return;
  e.preventDefault(); setMenu(false); closeCase(false);
  scrollToSel(h);
  history.replaceState({}, '', h);
});

/* mobile menu */
const menuBtn = $('#menuBtn'), sheet = $('#sheet');
function setMenu(o) {
  document.body.classList.toggle('menu-open', o);
  document.body.classList.toggle('locked', o || caseEl.classList.contains('open'));
  menuBtn.setAttribute('aria-expanded', o); sheet.setAttribute('aria-hidden', !o);
}
menuBtn.onclick = () => setMenu(!document.body.classList.contains('menu-open'));

/* ---------- Reveal ---------- */
const rvObs = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) { e.target.classList.add('in'); rvObs.unobserve(e.target); }
}), { rootMargin: '0px 0px -8% 0px', threshold: .08 });
$$('.rv').forEach(el => rvObs.observe(el));

/* ---------- Contact ---------- */
const toast = $('#toast');
function say(t) { toast.textContent = t; toast.classList.add('show'); clearTimeout(say.t); say.t = setTimeout(() => toast.classList.remove('show'), 1800); }
$('#copyBtn').onclick = async () => {
  try { await navigator.clipboard.writeText('hello@shrutimishra.design'); say('Email copied. Talk soon ✳'); }
  catch { say('hello@shrutimishra.design'); }
};
$('#toTop').onclick = () => scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
})();
