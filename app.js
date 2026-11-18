'use strict';
/* Kids Routine v3 – เว็บแอป (PWA) ไฟล์เรียบ ไม่มีโฟลเดอร์ */
const APP_VERSION = '3.10.0';
const CHANGELOG = [
  ['3.10.0', ['🌏 “เรียนภาษา” แยกออกมาเป็นเมนูแถบล่างของตัวเอง (ภาษาจีน · ภาษาญี่ปุ่น) หน้าเรียนรู้กลับมาเหลือเฉพาะเกมวิชาต่าง ๆ']],
  ['3.9.0', ['🀄🗾 เมนูใหม่ “เรียนภาษา” ในหน้าเรียนรู้: ภาษาจีน และภาษาญี่ปุ่น','📚 คำศัพท์ 7 หมวด (ทักทาย ตัวเลข สัตว์ ครอบครัว สี อาหาร รอบตัว) แตะการ์ดเพื่อฟังเสียง พร้อมคำอ่านพินอิน/โรมาจิ','💬 ประโยคพื้นฐานพร้อมเสียงอ่าน (ปกติ/ช้า) ให้พูดตามแล้วกดบันทึกว่าพูดแล้ว','🎮 ทดสอบคำศัพท์และประโยคแบบเกม ได้ดาวตามคะแนน (ไม่นับโบนัสครบวิชา)']],
  ['3.8.0', ['🚩 เกมใหม่ “ทายธงชาติ”: ดูธงทายประเทศ · เลือกธงให้ตรงชื่อประเทศ · ถูก/ผิด · ทวีป · เมืองหลวง (39 ประเทศ รวมเพื่อนบ้านอาเซียน)', '🔁 โจทย์ไม่ซ้ำ: หนึ่งชุดไม่มีประเทศซ้ำ และเลี่ยงประเทศที่เคยออกไปแล้วก่อน', '🏆 ตอนนี้มี 8 วิชา']],
  ['3.7.0', ['🚗 เกมใหม่ “ทายยี่ห้อรถ”: ดูรถที่เห็นโลโก้บนกระจังหน้า แล้วเลือกยี่ห้อ (Toyota · Honda · Mazda · BMW ฯลฯ)', '🧩 มีโจทย์ ดูรถทายยี่ห้อ · ดูโลโก้ · ถูก/ผิด · ประเทศผู้ผลิต ตามระดับชั้น', '🏆 ตอนนี้มี 7 วิชา: เล่นครบ 3 วิชา +1 ⭐ และครบทุกวิชา +1 ⭐']],
  ['3.6.0', ['🎓 เกมเรียนรู้แบบโรงเรียนกวดวิชา: เพิ่มวิชา วิทยาศาสตร์ · สังคมและรอบตัว · คิดวิเคราะห์ (รวม 6 วิชา)', '🧠 โจทย์หลากหลายรูปแบบ: ถูก/ผิด · เติมคำ · โจทย์ปัญหา · อ่านจับใจความ · อนุกรม/เปรียบเทียบ', '🕒 คณิตเพิ่มเรื่องเวลา เงิน หน่วยวัด เรขาคณิต ค่าเฉลี่ย · อังกฤษเพิ่มไวยากรณ์และอ่านเรื่องสั้น · ไทยเพิ่มลักษณนาม สำนวน', '🏆 โบนัสใหม่: เล่นครบ 3 วิชา +1 ⭐ และครบทั้ง 6 วิชา +1 ⭐ เพิ่ม']],
  ['3.5.0', ['🏠 หน้าแรกเรียบง่ายขึ้น เหลือแค่ ชุด · ตารางเรียน · ของที่ต้องพก', '✅ เช็คลิสต์และภารกิจที่บ้านย้ายไปที่ โรงเรียน → เช็คลิสต์', '📅 หัววันที่สั้นลงเหลือบรรทัดเดียว']],
  ['3.4.0', ['🗂️ เมนูใหม่ 4 หมวด: หน้าแรก · โรงเรียน · เกม · ดาว', '🎒 หมวดโรงเรียนรวม ตารางสอน / แต่งตัว / ต้องส่ง ไว้ด้วยกัน', '🏠 หน้าแรกแบ่งเป็นส่วน พร้อมแถบสรุปแตะข้ามไปส่วนที่ต้องการ', '⭐ หน้าดาวแยกแท็บ ดาวของฉัน / ร้านรางวัล / ประวัติ']],
  ['3.3.1', ['⭐ คะแนนเกมแปลงเป็นดาวอัตโนมัติทันทีที่ตอบข้อสุดท้าย (ไม่ต้องกดดูผลก่อน)']],
  ['3.3.0', ['🎮 เกมประจำวัน: ภาษาไทย / English / คณิตศาสตร์ วิชาละ 5 ข้อ', '⭐ ได้ดาวตามคะแนน (5/5 = 2 ดาว, 3–4 = 1 ดาว) ครบ 3 วิชาได้โบนัส', '🧠 โจทย์ใหม่ทุกวัน ไม่ซ้ำกับที่เคยเล่น เลือกระดับตามวัย อนุบาล – ป.6']],
  ['3.2.0', ['🎁 ร้านรางวัล: ตั้งรางวัลหลายอย่าง ราคาดาวต่างกัน แล้วกดแลกได้เอง', '🔥 โบนัสสตรีค: เตรียมของครบติดกัน 5 / 10 / 20 / 30 วัน ได้ดาวโบนัส', '🔒 PIN ผู้ปกครอง: ล็อกการให้ดาว หักดาว แลกรางวัล และการตั้งค่า']],
  ['3.1.0', ['🔄 ระบบอัปเดตใหม่: ตรวจเวอร์ชันใหม่อัตโนมัติ และแจ้งให้กดอัปเดต', '📋 หน้า "มีอะไรใหม่" แสดงหลังอัปเดตทุกครั้ง']],
  ['3.0.0', ['🔔 เตือนตอนเย็น/เช้า', '🗓️ ตารางเรียนมีเวลา + วันพิเศษ', '📌 แท็บต้องส่ง (การบ้าน/เงิน/เอกสาร)', '🏠 ภารกิจที่บ้าน + ดาวหลายแบบ']]
];
const WEB_FILES = true;      // false = รุ่นอาร์ติแฟกต์ (ไม่มีไฟล์ดาวน์โหลด / service worker)
const KEY = 'kidsroutine.v2'; // ใช้คีย์เดิม ข้อมูลรุ่นเก่าจะถูกแปลงให้อัตโนมัติ

const DAYS = ['อาทิตย์','จันทร์','อังคาร','พุธ','พฤหัสบดี','ศุกร์','เสาร์'];
const DAYS_S = ['อา','จ','อ','พ','พฤ','ศ','ส'];
const DAY_COLORS = ['#FFB3B3','#FEE15A','#FFB8CC','#8DE8B1','#FFD0A0','#9ADDE2','#D4C4FF'];
const ORDER = [1,2,3,4,5,6,0];
const UNIFORMS = ['🏫 ชุดนักเรียน','🏃 ชุดพละ','⚜️ ชุดลูกเสือ','🏊 ชุดว่ายน้ำ','🎨 ชุดไปรเวท','🎉 วันหยุด'];
const KID_COLORS = ['#69C9D0','#FF85A1','#8DE8B1','#FEE15A','#FFB86B','#B79CFF'];
const CATS = { auto: '🎒 เตรียมของ', chore: '🧹 ภารกิจบ้าน', kind: '💖 น้ำใจ', study: '📚 ตั้งใจเรียน', other: '🌟 อื่น ๆ', bonus: '🔥 โบนัสสตรีค', game: '🎮 เกมเรียนรู้' };
const BONUS = { 5: 1, 10: 2, 20: 3, 30: 5 };
const GIVE_CATS = ['kind', 'study', 'chore', 'other'];
const TODO_TYPES = { hw: '📝 การบ้าน', money: '💰 เงิน', form: '📄 เอกสาร', item: '🎒 ของส่งครู', other: '📌 อื่น ๆ' };
const SPECIAL_PRESETS = [
  { t: '🏅 วันกีฬาสี', off: false }, { t: '📝 วันสอบ', off: false }, { t: '🚌 ทัศนศึกษา', off: false },
  { t: '🎭 กิจกรรมพิเศษ', off: false }, { t: '🎉 โรงเรียนหยุด', off: true }
];

/* ---------- ข้อมูล ---------- */
const $ = (s, r = document) => r.querySelector(s);
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const pad = n => String(n).padStart(2, '0');
const dkey = d => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
const fromKey = k => { const [y, m, d] = String(k).split('-').map(Number); return new Date(y, (m || 1) - 1, d || 1); };
const startOfDay = d => new Date(d.getFullYear(), d.getMonth(), d.getDate());
const addDays = (d, n) => { const x = new Date(d); x.setDate(x.getDate() + n); return x; };
const uid = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 6);

function defDay(kid, dow) {
  if (dow === 0 || dow === 6) return { uniform: '', periods: [], extras: [] };
  return kid === 'potter'
    ? { uniform: '🏫 ชุดนักเรียน', periods: ['คณิต', 'ไทย', 'อังกฤษ'].map(n => ({ time: '', name: n })), extras: ['สีไม้', 'แฟ้มการบ้าน'] }
    : { uniform: '🏃 ชุดพละ', periods: [], extras: ['ชุดว่ายน้ำ', 'ที่นอน', 'กระติกน้ำ'] };
}
function defShop() {
  return [{ id: uid(), name: '🍦 ไอศกรีม', cost: 10 }, { id: uid(), name: '🍽️ เลือกเมนูมื้อเย็น', cost: 15 }, { id: uid(), name: '🎡 ไปเที่ยวพิเศษ', cost: 30 }];
}
function defChores() {
  return [
    { id: uid(), name: '🪥 แปรงฟันก่อนนอน', stars: 1, days: [0,1,2,3,4,5,6] },
    { id: uid(), name: '🧸 เก็บของเล่น', stars: 1, days: [0,1,2,3,4,5,6] },
    { id: uid(), name: '🍽️ เก็บจานของตัวเอง', stars: 1, days: [0,1,2,3,4,5,6] }
  ];
}
function normDay(d) {
  d = d || {};
  const per = Array.isArray(d.periods) ? d.periods : Array.isArray(d.subjects) ? d.subjects.map(n => ({ time: '', name: n })) : [];
  return {
    uniform: String(d.uniform || ''),
    periods: per.map(p => ({ time: String(p.time || ''), name: String(p.name || '') })).filter(p => p.name),
    extras: Array.isArray(d.extras) ? d.extras.map(String) : []
  };
}
function defaults() {
  const kids = [
    { id: 'potter', name: 'พี่พอตเตอร์', emoji: '👦🏻', color: '#69C9D0' },
    { id: 'winner', name: 'น้องวินเนอร์', emoji: '🧒🏻', color: '#FF85A1' }
  ];
  const S = { v: 3, kids, sched: {}, check: {}, done: {}, stars: {}, goal: {}, chores: {}, shop: {}, games: {}, gameSeen: {}, level: {}, lang: {}, pin: '', special: [], todos: [],
    rem: { evening: { on: false, time: '20:00' }, morning: { on: false, time: '06:30' } }, remFired: {}, lastKid: 'potter' };
  kids.forEach(k => fillKid(S, k.id));
  S.check.potter = ['แฟ้มการบ้าน 📝', 'กระติกน้ำ 💧', 'เงินค่าขนม 💰'];
  S.check.winner = ['กระติกน้ำ 💧', 'ที่นอน 🛌', 'ป้ายชื่อ 🏷️'];
  return S;
}
function fillKid(S, id) {
  S.sched[id] = S.sched[id] || [0,1,2,3,4,5,6].map(d => defDay(id, d));
  S.check[id] = S.check[id] || [];
  S.stars[id] = S.stars[id] || [];
  if (!S.shop[id]) {
    const g = S.goal && S.goal[id];
    S.shop[id] = g ? [{ id: uid(), name: g.reward, cost: g.target }, ...defShop().filter(x => x.cost > g.target)] : defShop();
  }
  S.chores[id] = S.chores[id] || defChores();
  S.games[id] = S.games[id] || {};
  S.gameSeen[id] = S.gameSeen[id] || {};
}
function load() {
  try { const raw = localStorage.getItem(KEY); if (raw) return sanitize(JSON.parse(raw)); } catch (e) {}
  return defaults();
}
function sanitize(o) {
  const d = defaults();
  if (!o || !Array.isArray(o.kids) || !o.kids.length) return d;
  const S = Object.assign(d, o);
  S.v = 3;
  S.shop = (o.shop && typeof o.shop === 'object') ? o.shop : {};
  S.goal = (o.goal && typeof o.goal === 'object') ? o.goal : {};
  S.kids = o.kids.map((k, i) => ({
    id: String(k.id || 'kid' + i), name: String(k.name || 'เด็กน้อย'),
    emoji: String(k.emoji || '🧒'), color: String(k.color || KID_COLORS[i % KID_COLORS.length])
  }));
  ['sched', 'check', 'stars', 'goal', 'done', 'chores', 'remFired', 'shop', 'games', 'gameSeen', 'level', 'lang'].forEach(f => { if (!S[f] || typeof S[f] !== 'object') S[f] = {}; });
  if (typeof S.pin !== 'string' || !/^\d{4}$/.test(S.pin)) S.pin = '';
  if (!Array.isArray(S.special)) S.special = [];
  if (!Array.isArray(S.todos)) S.todos = [];
  S.rem = Object.assign({ evening: { on: false, time: '20:00' }, morning: { on: false, time: '06:30' } }, o.rem || {});
  S.kids.forEach(k => {
    const had = Array.isArray(S.chores[k.id]);
    fillKid(S, k.id);
    if (!Array.isArray(S.sched[k.id]) || S.sched[k.id].length !== 7) S.sched[k.id] = [0,1,2,3,4,5,6].map(x => defDay(k.id, x));
    S.sched[k.id] = S.sched[k.id].map(normDay);
    if (!had) S.chores[k.id] = defChores();
    S.stars[k.id].forEach(e => { if (!e.c) e.c = e.t === 'auto' ? 'auto' : e.t === 'chore' ? 'chore' : e.t === 'bonus' ? 'bonus' : e.t === 'game' ? 'game' : 'other'; });
  });
  if (!S.kids.some(k => k.id === S.lastKid)) S.lastKid = S.kids[0].id;
  return S;
}
let memOnly = false;
function save() {
  try { localStorage.setItem(KEY, JSON.stringify(S)); }
  catch (e) { if (!memOnly) { memOnly = true; toast('⚠️ เบราว์เซอร์ไม่ยอมให้บันทึก ข้อมูลจะหายเมื่อปิดหน้านี้'); } }
}

let S = load();
const ui = { kid: S.lastKid, tab: 'home', sub: 'week', ssub: 'me', when: new Date().getHours() < 12 ? 'today' : 'tomorrow' };
const kidOf = () => S.kids.find(k => k.id === ui.kid) || S.kids[0];
const targetDate = () => addDays(startOfDay(new Date()), ui.when === 'tomorrow' ? 1 : 0);
const starTotal = id => S.stars[id].reduce((a, e) => a + e.n, 0);
const thDate = d => d.toLocaleDateString('th-TH', { day: 'numeric', month: 'long' });
const thShort = d => `${DAYS_S[d.getDay()]} ${d.getDate()}/${d.getMonth() + 1}`;
const chipsHtml = (arr, cls = '') => arr.map(x => `<span class="chip ${cls}">${esc(x)}</span>`).join('');
const daysBetween = (a, b) => Math.round((startOfDay(b) - startOfDay(a)) / 86400000);

/* วันหนึ่ง = ตารางประจำสัปดาห์ + วันพิเศษที่ทับอยู่ */
function dayFor(kid, date) {
  const base = S.sched[kid][date.getDay()], k = dkey(date);
  const sp = S.special.filter(s => s.date === k && (s.kid === 'all' || s.kid === kid));
  const off = sp.find(s => s.off);
  if (off) return { uniform: '', periods: [], extras: [], specials: sp, off: true };
  const day = { uniform: base.uniform, periods: base.periods.map(p => ({ ...p })), extras: [...base.extras], specials: sp, off: false };
  sp.forEach(s => { if (s.uniform) day.uniform = s.uniform; (s.extras || []).forEach(x => { if (!day.extras.includes(x)) day.extras.push(x); }); });
  return day;
}
const isEmptyDay = d => !d.uniform && !d.periods.length && !d.extras.length;
const periodsSorted = ps => ps.map((p, i) => ({ p, i })).sort((a, b) => (a.p.time || '99:99').localeCompare(b.p.time || '99:99') || a.i - b.i).map(x => x.p);
const todosFor = id => S.todos.filter(t => t.kid === 'all' || t.kid === id);
const choresToday = (id, d) => S.chores[id].filter(c => c.days.includes(d.getDay()));
const choreDone = (id, c, dk) => S.stars[id].some(e => e.t === 'chore' && e.cid === c.id && e.d === dk);

function relLabel(due) {
  const n = daysBetween(new Date(), fromKey(due));
  if (n < 0) return { t: `เลยกำหนด ${-n} วัน`, cls: 'late' };
  if (n === 0) return { t: 'วันนี้', cls: 'soon' };
  if (n === 1) return { t: 'พรุ่งนี้', cls: 'soon' };
  return { t: `อีก ${n} วัน · ${thShort(fromKey(due))}`, cls: '' };
}
function streakAt(id, dk) {
  const has = new Set(S.stars[id].filter(e => e.t === 'auto').map(e => e.d));
  let d = fromKey(dk), n = 0;
  while (has.has(dkey(d))) { n++; d = addDays(d, -1); }
  return n;
}
function streak(id) {
  const has = new Set(S.stars[id].filter(e => e.t === 'auto').map(e => e.d)), t = startOfDay(new Date());
  let d = addDays(t, 1);
  if (!has.has(dkey(d))) d = t;
  if (!has.has(dkey(d))) d = addDays(t, -1);
  return streakAt(id, dkey(d));
}

/* ---------- วาดหน้าจอ ---------- */
function render() {
  gSweep();
  document.documentElement.style.setProperty('--kid', kidOf().color);
  $('#kidbar').innerHTML = S.kids.map(k =>
    `<button class="kidbtn ${k.id === ui.kid ? 'on' : ''}" style="--kc:${esc(k.color)}" data-act="kid" data-id="${esc(k.id)}">${esc(k.emoji)} ${esc(k.name)}</button>`).join('');
  const pend = todosFor(ui.kid).filter(t => !t.done).length;
  document.querySelectorAll('#nav button').forEach(b => b.classList.toggle('on', b.dataset.tab === ui.tab));
  const nb = $('#todoBadge'); if (nb) { nb.textContent = pend; nb.hidden = !pend; }
  $('#view').innerHTML = { home: vHome, school: vSchool, game: vGames, lang: vLangTab, stars: vStars }[ui.tab]();
}

function vSchool() {
  const pend = todosFor(ui.kid).filter(t => !t.done).length;
  const subs = [['week', '🎒 ตาราง'], ['dress', '👕 ชุด'], ['todo', '📌 ต้องส่ง' + (pend ? ` (${pend})` : '')], ['daily', '✅ เช็คลิสต์']];
  return `<div class="seg">${subs.map(([v, l]) => `<button class="${ui.sub === v ? 'on' : ''}" data-act="sub" data-s="${v}">${l}</button>`).join('')}</div>` +
    ({ week: vWeek, dress: vDress, todo: vTodo, daily: vDaily }[ui.sub] || vWeek)();
}
function periodsHtml(ps) {
  const sorted = periodsSorted(ps);
  if (!sorted.some(p => p.time)) return `<div class="chips">${chipsHtml(sorted.map(p => p.name))}</div>`;
  return sorted.map(p => `<div class="per"><b>${esc(p.time || '·')}</b><span>${esc(p.name)}</span></div>`).join('');
}

const TMON_S = ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'];
const whenSeg = () => `<div class="seg">
    <button class="${ui.when === 'today' ? 'on' : ''}" data-act="when" data-w="today">☀️ วันนี้</button>
    <button class="${ui.when === 'tomorrow' ? 'on' : ''}" data-act="when" data-w="tomorrow">🌙 พรุ่งนี้</button></div>`;
const dayHead = d => `<div class="dayhead"><b>${ui.when === 'today' ? 'วันนี้' : 'พรุ่งนี้'}</b> · วัน${DAYS[d.getDay()]}ที่ ${d.getDate()} ${TMON_S[d.getMonth()]}</div>`;

/* หน้าแรก: เฉพาะสิ่งที่ต้องเตรียม (ชุด · ตารางเรียน · ของที่ต้องพก) */
function vHome() {
  const k = kidOf(), d = targetDate(), day = dayFor(k.id, d);
  const word = ui.when === 'today' ? 'วันนี้' : 'พรุ่งนี้';
  let h = whenSeg() + dayHead(d);
  day.specials.forEach(s => {
    h += `<div class="card c-p"><div class="ttl">${esc(s.title || '📌 วันพิเศษ')}</div>${s.note ? `<div>${esc(s.note)}</div>` : ''}</div>`;
  });
  if (isEmptyDay(day)) {
    return h + `<div class="card c-y"><div class="holiday">🎉 ไม่มีอะไรต้องเตรียม<br>${day.off ? 'โรงเรียนหยุด' : 'วันหยุดสบาย ๆ'}</div></div>`;
  }
  h += `<div class="card c-y"><div class="ttl">👕 ชุด${word}</div><div class="big">${esc(day.uniform || '— ยังไม่ได้ตั้งค่า —')}</div></div>`;
  if (day.periods.length) h += `<div class="card c-b"><div class="ttl">📚 ตารางเรียน</div>${periodsHtml(day.periods)}</div>`;
  if (day.extras.length) h += `<div class="card c-g"><div class="ttl">🎒 ของที่ต้องพกไป</div><div class="chips">${chipsHtml(day.extras)}</div></div>`;
  return h;
}

/* เช็คลิสต์ + ภารกิจที่บ้าน (อยู่ในหมวดโรงเรียน) */
function vDaily() {
  const k = kidOf(), d = targetDate(), dk = dkey(d), today = startOfDay(new Date());
  const items = S.check[k.id], doneArr = S.done[`${dk}|${k.id}`] || [];
  const nDone = items.filter(i => doneArr.includes(i)).length, all = items.length > 0 && nDone === items.length;
  const cs = choresToday(k.id, today), tk = dkey(today), cDone = cs.filter(c => choreDone(k.id, c, tk)).length;
  let h = whenSeg() + dayHead(d);
  h += `<div class="card"><div class="row sp"><div class="ttl">✅ เช็คลิสต์ก่อนออกจากบ้าน</div><b>${nDone}/${items.length}</b></div>
    <div class="prog"><i style="width:${items.length ? nDone / items.length * 100 : 0}%"></i></div>`;
  if (!items.length) h += `<div class="empty">ยังไม่มีรายการ กด "แก้เช็คลิสต์" เพื่อเพิ่ม</div>`;
  items.forEach((it, i) => {
    h += `<label class="chk"><input type="checkbox" data-change="toggle" data-i="${i}" ${doneArr.includes(it) ? 'checked' : ''}><span class="box"></span><span class="txt">${esc(it)}</span></label>`;
  });
  if (all) h += `<div class="win">🎉 เก่งมาก! ได้ดาว ⭐ 1 ดวง</div>`;
  h += `<div style="margin-top:10px"><button class="btn small ghost" data-act="editCheck">✏️ แก้เช็คลิสต์</button></div></div>`;
  h += `<div class="card"><div class="row sp"><div class="ttl">🏠 ภารกิจที่บ้านวันนี้</div><b>${cDone}/${cs.length}</b></div>`;
  if (!cs.length) h += `<div class="empty">วันนี้ไม่มีภารกิจ</div>`;
  cs.forEach(c => {
    h += `<label class="chk"><input type="checkbox" data-change="chore" data-id="${esc(c.id)}" ${choreDone(k.id, c, tk) ? 'checked' : ''}><span class="box"></span><span class="txt">${esc(c.name)}</span><span class="pill">+${c.stars} ⭐</span></label>`;
  });
  return h + `<div style="margin-top:10px"><button class="btn small ghost" data-act="editChores">✏️ แก้ภารกิจ</button></div></div>`;
}

function todoRow(t, compact) {
  const r = t.due ? relLabel(t.due) : { t: 'ไม่มีกำหนด', cls: '' };
  const kidTag = t.kid === 'all' ? ' · ทุกคน' : '';
  return `<div class="tdrow"><label class="chk" style="flex:1;border:0;padding:6px 0;min-height:48px"><input type="checkbox" data-change="todo" data-id="${esc(t.id)}" ${t.done ? 'checked' : ''}><span class="box"></span>
    <span class="txt"><span>${esc(TODO_TYPES[t.type] ? TODO_TYPES[t.type].split(' ')[0] : '📌')} ${esc(t.title)}${t.amount ? ` <b>฿${Number(t.amount).toLocaleString('th-TH')}</b>` : ''}</span>
    <small class="due ${t.done ? '' : r.cls}">${t.done ? 'ส่งแล้ว ✓' : esc(r.t)}${kidTag}</small></span></label>
    ${compact ? '' : `<button class="btn small ghost" data-act="editTodo" data-id="${esc(t.id)}" aria-label="แก้ไข">✏️</button>`}</div>`;
}

function vTodo() {
  const k = kidOf(), list = todosFor(k.id), today = startOfDay(new Date());
  const pend = list.filter(t => !t.done).sort((a, b) => (a.due || '9999').localeCompare(b.due || '9999'));
  const done = list.filter(t => t.done).slice(-5).reverse();
  const money = pend.filter(t => t.type === 'money').reduce((a, t) => a + (Number(t.amount) || 0), 0);
  let h = `<h2>📌 ต้องส่ง / เงิน / การบ้าน</h2>
    <button class="btn pink block" data-act="addTodo">＋ เพิ่มรายการ</button><div style="height:12px"></div>`;
  if (money) h += `<div class="card c-y"><div class="ttl">💰 เงินที่ต้องจ่ายรวม</div><div class="big">฿${money.toLocaleString('th-TH')}</div></div>`;
  const groups = [['⚠️ เลยกำหนด', t => t.due && daysBetween(today, fromKey(t.due)) < 0], ['📅 วันนี้ – พรุ่งนี้', t => t.due && daysBetween(today, fromKey(t.due)) >= 0 && daysBetween(today, fromKey(t.due)) <= 1],
    ['🗓️ ภายหลัง', t => t.due && daysBetween(today, fromKey(t.due)) > 1], ['📎 ไม่มีกำหนด', t => !t.due]];
  groups.forEach(([ttl, f]) => {
    const g = pend.filter(f); if (!g.length) return;
    h += `<div class="card"><div class="ttl">${ttl} (${g.length})</div>${g.map(t => todoRow(t)).join('')}</div>`;
  });
  if (!pend.length) h += `<div class="card"><div class="empty">🎉 ไม่มีอะไรค้างส่งเลย</div></div>`;
  if (done.length) h += `<div class="card"><div class="ttl">✅ ส่งแล้วล่าสุด</div>${done.map(t => todoRow(t)).join('')}</div>`;
  return h;
}

function vWeek() {
  const k = kidOf(), today = new Date().getDay(), tmr = (today + 1) % 7;
  let h = `<h2>🎒 ตารางประจำสัปดาห์</h2><p class="sub">แตะที่วันเพื่อแก้ไข</p>`;
  ORDER.forEach(dow => {
    const day = S.sched[k.id][dow];
    const badge = dow === today ? '<span class="badge">วันนี้</span>' : dow === tmr ? '<span class="badge t">พรุ่งนี้</span>' : '';
    h += `<button class="card day" data-act="editDay" data-dow="${dow}">
      <div class="dn" style="--dc:${DAY_COLORS[dow]}">${DAYS_S[dow]}<small>${DAYS[dow]}</small></div>
      <div class="dc"><div class="ttl">${isEmptyDay(day) ? '🎉 วันหยุด' : esc(day.uniform || 'ยังไม่ได้ตั้งชุด')}${badge}</div>`;
    if (day.periods.length) h += `<div style="margin-bottom:4px">${periodsHtml(day.periods)}</div>`;
    if (day.extras.length) h += `<div class="mini">🎒 ${esc(day.extras.join(', '))}</div>`;
    h += `</div></button>`;
  });
  const today0 = startOfDay(new Date());
  const sp = S.special.filter(s => (s.kid === 'all' || s.kid === k.id)).sort((a, b) => a.date.localeCompare(b.date));
  const fut = sp.filter(s => fromKey(s.date) >= today0), past = sp.filter(s => fromKey(s.date) < today0).slice(-3);
  h += `<h2 style="margin-top:20px">📌 วันพิเศษ</h2><button class="btn ghost block" data-act="addSpecial">＋ เพิ่มวันพิเศษ / วันหยุดโรงเรียน</button><div style="height:10px"></div>`;
  if (!fut.length && !past.length) h += `<div class="empty">ยังไม่มี เช่น วันกีฬาสี วันสอบ ทัศนศึกษา</div>`;
  [...fut, ...past].forEach(s => {
    const n = daysBetween(today0, fromKey(s.date));
    h += `<button class="card day" data-act="editSpecial" data-id="${esc(s.id)}" style="padding:12px 16px;${n < 0 ? 'opacity:.55' : ''}"><div class="dn" style="--dc:${s.off ? '#FFB3B3' : '#BDEBEE'}">${fromKey(s.date).getDate()}<small>${thShort(fromKey(s.date)).split(' ')[0]}</small></div>
      <div class="dc"><div class="ttl">${esc(s.title)}</div><div class="mini">${s.off ? 'โรงเรียนหยุด' : 'วันพิเศษ'} · ${s.kid === 'all' ? 'ทุกคน' : esc(S.kids.find(x => x.id === s.kid)?.name || '')}${n >= 0 ? ' · ' + (n === 0 ? 'วันนี้' : 'อีก ' + n + ' วัน') : ''}</div></div></button>`;
  });
  return h;
}

function vDress() {
  const k = kidOf(), t = addDays(startOfDay(new Date()), 1), tmr = dayFor(k.id, t);
  let h = `<h2>👕 ชุดประจำสัปดาห์</h2>
    <div class="card c-y"><div class="ttl">พรุ่งนี้ (วัน${DAYS[t.getDay()]}) ใส่</div><div class="big">${esc(tmr.uniform || '🎉 วันหยุด')}</div></div>
    <p class="sub">แตะที่วันเพื่อเปลี่ยนชุด</p>`;
  ORDER.forEach(dow => {
    const u = S.sched[k.id][dow].uniform;
    h += `<button class="card day" data-act="pickUniform" data-dow="${dow}" style="padding:12px 16px">
      <div class="dn" style="--dc:${DAY_COLORS[dow]}">${DAYS_S[dow]}</div>
      <div class="dc big" style="font-size:18px;align-self:center">${esc(u || '— ไม่มี / วันหยุด —')}</div></button>`;
  });
  return h;
}

function vStars() {
  const k = kidOf(), total = starTotal(k.id), st = streak(k.id);
  const shop = S.shop[k.id].slice().sort((a, b) => a.cost - b.cost), nx = shop.find(x => x.cost > total);
  const pct = nx ? Math.min(100, Math.max(0, total / nx.cost * 100)) : 100;
  const nb = Object.keys(BONUS).map(Number).sort((a, b) => a - b).find(n => n > st);
  let h = `<div class="card c-p starhero"><div class="s">⭐</div><div class="n">${total}</div><div>ดาวสะสมของ${esc(k.name)}</div>
    ${st > 0 ? `<div class="pill" style="margin-top:6px">🔥 เตรียมของครบติดกัน ${st} วัน${nb ? ` · อีก ${nb - st} วันได้โบนัส +${BONUS[nb]} ⭐` : ''}</div>` : ''}
    <div class="goalbar"><i style="width:${pct}%"></i></div>
    <div class="mini" style="color:var(--ink)">${nx ? `ถัดไป: ${esc(nx.name)} (${nx.cost} ดวง) — อีก ${nx.cost - Math.max(0, total)} ดวง` : shop.length ? 'แลกได้ทุกอย่างในร้านแล้ว! 🎉' : 'ยังไม่มีรางวัล เพิ่มได้ที่ร้านรางวัล'}</div></div>
    <div class="row" style="margin-bottom:14px">
      <button class="btn pink grow" data-act="giveStar">⭐ ให้ดาว</button>
      <button class="btn ghost grow" data-act="starSub">หักดาว −1</button></div>
    <div class="seg">${[['me', '⭐ ดาวของฉัน'], ['shop', '🎁 ร้านรางวัล'], ['log', '📝 ประวัติ']].map(([v, l]) => `<button class="${ui.ssub === v ? 'on' : ''}" data-act="ssub" data-s="${v}">${l}</button>`).join('')}</div>`;

  if (ui.ssub === 'shop') {
    h += `<div class="card"><div class="row sp"><div class="ttl">🎁 ร้านรางวัล</div><button class="btn small ghost" data-act="editShop">✏️ แก้ร้าน</button></div>`;
    if (!shop.length) h += `<div class="empty">ยังไม่มีรางวัล</div>`;
    shop.forEach(it => {
      const can = total >= it.cost;
      h += `<div class="tdrow" style="padding:8px 0"><div style="flex:1;min-width:0"><div>${esc(it.name)}</div><div class="mini">${it.cost} ⭐${can ? '' : ` · อีก ${it.cost - Math.max(0, total)}`}</div>
        <div class="prog" style="height:8px;margin:4px 0 0"><i style="width:${Math.min(100, Math.max(0, total / it.cost * 100))}%"></i></div></div>
        <button class="btn small ${can ? 'green' : 'ghost'}" data-act="buy" data-id="${esc(it.id)}" ${can ? '' : 'disabled'}>🎁 แลก</button></div>`;
    });
    return h + `</div>`;
  }
  if (ui.ssub === 'log') {
    const log = S.stars[k.id].slice().sort((a, b) => b.ts - a.ts).slice(0, 30);
    h += `<div class="card"><div class="ttl">📝 ประวัติล่าสุด</div>`;
    if (!log.length) h += `<div class="empty">ยังไม่มีดาว — ติ๊กเช็คลิสต์ ทำภารกิจ หรือเล่นเกมเพื่อรับดาว</div>`;
    log.forEach(e => {
      h += `<div class="log"><span>${esc(e.note || CATS[e.c] || '')}</span><span class="${e.n > 0 ? 'pos' : 'neg'}">${e.n > 0 ? '+' : ''}${e.n} ⭐</span></div>`;
    });
    return h + `</div>`;
  }
  const by = {}; S.stars[k.id].forEach(e => { if (e.n > 0) by[e.c || 'other'] = (by[e.c || 'other'] || 0) + e.n; });
  const keys = Object.keys(CATS).filter(c => by[c]);
  h += `<div class="card"><div class="ttl">🌈 ดาวแต่ละแบบ (ที่ได้ทั้งหมด)</div>${keys.length ? `<div class="chips">${keys.map(c => `<span class="chip" style="background:#F4EFE8">${CATS[c]} <b>${by[c]}</b></span>`).join('')}</div>` : '<div class="empty">ยังไม่มีดาว</div>'}</div>`;
  h += `<div class="card"><div class="ttl">📅 7 วันล่าสุด</div><div class="dots">`;
  for (let i = 6; i >= 0; i--) {
    const d = addDays(startOfDay(new Date()), -i), kk = dkey(d);
    const ok = S.stars[k.id].some(e => e.t === 'auto' && e.d === kk), ch = S.stars[k.id].some(e => e.t === 'chore' && e.d === kk), gm = S.stars[k.id].some(e => e.t === 'game' && e.d === kk);
    h += `<div><b>${ok ? '⭐' : '·'}</b><b style="font-size:14px;margin-top:-4px">${ch ? '🧹' : '&nbsp;'}${gm ? '🎮' : ''}</b>${DAYS_S[d.getDay()]}</div>`;
  }
  return h + `</div><div class="mini" style="margin-top:6px">⭐ เตรียมของครบ · 🧹 ภารกิจบ้าน · 🎮 เกม</div></div>`;
}

/* ---------- เกมประจำวัน ---------- */
const gSubj = id => GAME_SUBJECTS.find(x => x.id === id);
const gLevelOf = id => GAME_LEVELS.find(x => x.id === id);
const gDay = (kid, dk) => { S.games[kid] = S.games[kid] || {}; return (S.games[kid][dk] = S.games[kid][dk] || {}); };
const gGet = (kid, dk, sb) => ((S.games[kid] || {})[dk] || {})[sb];
const gDoneCount = (kid, dk) => GAME_CORE.filter(x => { const t = gGet(kid, dk, x.id); return t && t.done; }).length;
const gCur = () => ui.play.practice ? ui.prac : gGet(ui.kid, dkey(new Date()), ui.play.subj);
function gMarkSeen(kid, sb, qs) {
  S.gameSeen[kid] = S.gameSeen[kid] || {};
  S.gameSeen[kid][sb] = (S.gameSeen[kid][sb] || []).concat(qs.map(q => q.id)).slice(-400);
}
function gPrune(kid) {
  const t = startOfDay(new Date());
  Object.keys(S.games[kid] || {}).forEach(k => { if (daysBetween(fromKey(k), t) > 14) delete S.games[kid][k]; });
}
function vGames() {
  if (ui.play) return vPlay();
  const k = kidOf(), lv = S.level[k.id], dk = dkey(new Date());
  let h = `<h2>🎮 เกมเรียนรู้ประจำวัน</h2><p class="sub">${GAME_CORE.length} วิชา วิชาละ ${GQ} ข้อ โจทย์ใหม่ทุกวัน เลือกเล่นวิชาไหนก็ได้</p>`;
  if (lv === undefined) {
    return h + `<div class="card c-y"><div class="ttl">เลือกระดับของ${esc(k.name)}ก่อนนะ</div>
      <div class="pick">${GAME_LEVELS.map(l => `<button data-act="gSetLevel" data-v="${l.id}">${l.emoji} ${l.name}</button>`).join('')}</div>
      <p class="mini" style="color:var(--ink)">เลือกให้ตรงกับชั้นเรียน เปลี่ยนทีหลังได้</p></div>`;
  }
  const L = gLevelOf(lv), n = gDoneCount(k.id, dk), tot = GAME_CORE.length;
  h += `<div class="row sp" style="margin-bottom:10px"><span class="pill">${L.emoji} ระดับ ${L.name}</span><button class="btn small ghost" data-act="gLevel">เปลี่ยนระดับ</button></div>
    <div class="gprog"><div class="row sp"><b>วันนี้เล่นแล้ว ${n}/${tot} วิชา${n === tot ? ' 🏆' : ''}</b><span class="mini">${n >= 3 ? '✅ โบนัสครบ 3 วิชา' : `อีก ${3 - n} วิชาได้โบนัส`}</span></div>
      <div class="prog" style="margin-top:8px"><i style="width:${n / tot * 100}%"></i></div></div><div class="gsubs">`;
  GAME_CORE.forEach(sb => { h += gCard(sb, k, dk); });
  h += `</div><div class="card" style="margin-top:12px"><div class="ttl">⭐ กติกาให้ดาว</div><div class="mini" style="color:var(--ink)">ถูก 5 ข้อ = 2 ดาว · ถูก 3–4 ข้อ = 1 ดาว<br>เล่นครบ 3 วิชาในวันเดียว +1 ดาว · ครบทั้ง ${tot} วิชา +1 ดาวอีกครั้ง<br>เกมภาษาจีน/ญี่ปุ่นได้ดาวตามคะแนน แต่ไม่นับโบนัสครบวิชา<br>โหมด “ฝึกเพิ่ม” ไม่ได้ดาว ใช้ซ้อมได้ไม่จำกัด</div></div>`;
  return h;
}
function gCard(sb, k, dk) {
    const st = gGet(k.id, dk, sb.id), done = st && st.done;
    return `<div class="gsub" style="background:${sb.color}"><div class="gs-e">${sb.emoji}</div><div class="gs-n">${sb.name}</div>
      <div class="gs-s">${done ? `✅ ${st.score}/${GQ} · ${st.stars}⭐` : st ? `ทำไป ${Math.min(st.i, GQ)}/${GQ}` : `${GQ} ข้อ · ได้สูงสุด 2⭐`}</div>
      ${done ? `<button class="btn small ghost block" data-act="gPractice" data-s="${sb.id}">🔁 ฝึกเพิ่ม</button>`
        : `<button class="btn small block" data-act="gStart" data-s="${sb.id}">${st ? '▶️ เล่นต่อ' : '▶️ เริ่ม'}</button>`}</div>`;
}

/* ---------- เรียนภาษาจีน / ญี่ปุ่น ---------- */
const langDone = (kid, L) => (S.lang[kid] && S.lang[kid][L]) || {};
function vLangTab() {
  if (ui.play) return vPlay();
  if (ui.lang) return vLang();
  return `<h2>🌏 เรียนภาษา</h2><p class="sub">คำศัพท์ + ประโยคพื้นฐาน มีเสียงอ่านให้ฟังแล้วพูดตาม เลือกภาษาที่อยากเรียนเลย</p>
    <div class="gsubs">${Object.keys(LANG).map(id => { const D = LANG[id]; return `<button class="lbtn" data-act="langOpen" data-l="${id}" style="background:${D.color}"><span class="gs-e">${D.emoji}</span><b>${D.name}</b><span class="mini">${D.native}</span></button>`; }).join('')}</div>
    <div class="card" style="margin-top:12px"><div class="ttl">มีอะไรให้เรียน</div><div class="mini" style="color:var(--ink)">📚 คำศัพท์ 7 หมวด แตะการ์ดเพื่อฟังเสียง<br>💬 ประโยคพื้นฐาน ฟังปกติ/ช้า แล้วพูดตาม<br>🎮 ทดสอบ ได้ดาวตามคะแนน (ไม่นับโบนัสครบวิชา)</div></div>`;
}
function vLang() {
  const D = LANG[ui.lang], k = kidOf(), dk = dkey(new Date()), t = ui.lt || 'vocab';
  let h = `<div class="row sp" style="margin-bottom:10px"><button class="btn small ghost" data-act="langBack">← กลับ</button><b>${D.emoji} ${D.name} ${D.native}</b><span></span></div>
    <div class="seg">${[['vocab', '📚 คำศัพท์'], ['sent', '💬 ประโยค'], ['quiz', '🎮 ทดสอบ']].map(([v, l]) => `<button class="${t === v ? 'on' : ''}" data-act="langTab" data-t="${v}">${l}</button>`).join('')}</div>`;
  if (t === 'vocab') {
    const c = ui.lcat === undefined ? -1 : ui.lcat, words = D.vocab.filter(v => c < 0 || v[0] === c);
    h += `<p class="mini" style="color:var(--ink)">แตะการ์ดเพื่อฟังเสียง แล้วลองพูดตามนะ 🗣️ (ใต้คำมีคำอ่าน${D.rd})</p>
      <div class="pick" style="margin:8px 0 12px"><button class="${c < 0 ? 'on' : ''}" data-act="langCat" data-c="-1">ทั้งหมด</button>${LANG_CATS.map((x, i) => `<button class="${c === i ? 'on' : ''}" data-act="langCat" data-c="${i}">${x[0]} ${x[1]}</button>`).join('')}</div>
      <div class="lgrid">${words.map(v => `<button class="lcard" data-act="speak" data-t="${esc(v[1])}" data-l="${D.voice}"><span class="le">${v[4]}</span><span class="lw">${esc(v[1])}</span><span class="lr">${esc(v[2])}</span><span class="lth">${esc(v[3])}</span><span class="ls">🔊</span></button>`).join('')}</div>`;
  } else if (t === 'sent') {
    const done = langDone(k.id, ui.lang), n = D.sent.filter((s, i) => done[i]).length;
    h += `<div class="gprog"><div class="row sp"><b>พูดตามแล้ว ${n}/${D.sent.length} ประโยค${n === D.sent.length ? ' 🏆' : ''}</b></div><div class="prog" style="margin-top:8px"><i style="width:${n / D.sent.length * 100}%"></i></div></div>
      <p class="mini" style="color:var(--ink)">ฟังเสียง (ปกติ หรือช้า) → พูดตามออกเสียงดัง ๆ → กด “พูดตามแล้ว”</p>`;
    LANG_SENT_GROUPS.forEach((g, gi) => {
      h += `<h3 style="margin:14px 0 6px">${g}</h3>`;
      D.sent.forEach((s, i) => { if (s[3] !== gi) return;
        h += `<div class="card lsent ${done[i] ? 'ok' : ''}"><div class="lw2">${esc(s[0])}</div><div class="lr">${esc(s[1])}</div><div class="lth">${esc(s[2])}</div>
          <div class="row" style="margin-top:8px;gap:6px;flex-wrap:wrap"><button class="btn small" data-act="speak" data-t="${esc(s[0])}" data-l="${D.voice}">🔊 ฟัง</button><button class="btn small ghost" data-act="speak" data-t="${esc(s[0])}" data-l="${D.voice}" data-r="0.55">🐢 ช้า ๆ</button>
          <button class="btn small ${done[i] ? '' : 'pink'}" data-act="langSay" data-i="${i}">${done[i] ? '✅ พูดแล้ว' : '🗣️ พูดตามแล้ว'}</button></div></div>`; });
    });
  } else {
    const sb = gSubj(ui.lang), lv = S.level[k.id];
    h += `<p class="mini" style="color:var(--ink)">ทดสอบคำศัพท์และประโยค ${GQ} ข้อ ได้สูงสุด 2⭐ ${lv === undefined ? '' : '(ระดับ ' + gLevelOf(lv).name + ')'}</p>`;
    h += lv === undefined ? `<div class="card c-y"><div class="ttl">เลือกระดับของ${esc(k.name)}ก่อนนะ</div><div class="pick">${GAME_LEVELS.map(l => `<button data-act="gSetLevel" data-v="${l.id}">${l.emoji} ${l.name}</button>`).join('')}</div></div>`
      : `<div class="gsubs" style="grid-template-columns:1fr">${gCard(sb, k, dk)}</div>`;
  }
  return h;
}
function vPlay() {
  const p = ui.play, sb = gSubj(p.subj), st = gCur();
  if (!st) { ui.play = null; return ui.tab === 'lang' ? vLangTab() : vGames(); }
  if (st.i >= st.q.length) {
    const stars = p.practice ? 0 : st.stars, sc = st.score;
    const msg = sc === GQ ? 'เก่งสุดยอด! 🌟' : sc >= 3 ? 'เก่งมาก! พยายามต่อไปนะ 💪' : 'ไม่เป็นไร พรุ่งนี้มีโจทย์ใหม่ ลองฝึกเพิ่มได้เลย 😊';
    return `<div class="card c-p starhero"><div class="s">${sc === GQ ? '🏆' : sc >= 3 ? '🎉' : '💪'}</div><div class="n">${sc}/${st.q.length}</div><div>${sb.emoji} ${sb.name}${p.practice ? ' · ฝึกเพิ่ม' : ''}</div>
      <p style="font-weight:700;margin:10px 0 4px">${msg}</p>
      ${p.practice ? '<div class="mini" style="color:var(--ink)">โหมดฝึกเพิ่มไม่ได้ดาว</div>' : `<div class="big">+${stars} ⭐</div>${gBonusPill(st)}`}</div>
      <div class="row"><button class="btn grow" data-act="gBack">กลับหน้าเกม</button><button class="btn ghost grow" data-act="gPractice" data-s="${p.subj}">🔁 ฝึกเพิ่ม</button></div>`;
  }
  const q = st.q[st.i], ans = q.ch >= 0, long = !q.fc && q.c.some(c => String(c).length > 9);
  let h = `<div class="row sp"><button class="btn small ghost" data-act="gBack">← กลับ</button><b>${sb.emoji} ${sb.name}${p.practice ? ' · ฝึกเพิ่ม' : ''}</b><span class="pill">ข้อ ${st.i + 1}/${st.q.length}</span></div>
    <div class="prog" style="margin:10px 0"><i style="width:${st.i / st.q.length * 100}%"></i></div>
    <div class="card gq">${q.k ? `<div class="gkind">${esc(q.k)}</div>` : ''}${q.p ? `<div class="gpass">${esc(q.p)}</div>` : ''}${q.flag ? `<div class="gflag">${flagSvg(q.flag)}</div>` : ''}${q.car ? `<div class="gcar">${carSvg(q.car, q.cc, q.big)}</div>` : ''}${q.e ? `<div class="gemoji">${q.e}</div>` : ''}<div class="gtext">${esc(q.t)}</div>
      ${q.sp ? `<button class="btn small ghost" data-act="speak" data-t="${esc(q.sp.txt)}" data-l="${q.sp.lang}" style="margin-top:8px">🔊 ฟังเสียง</button>` : ''}</div>
    <div class="gch ${long ? 'one' : ''}">${q.c.map((c, i) => `<button class="gc ${ans ? (i === q.a ? 'ok' : i === q.ch ? 'bad' : 'dim') : ''}" data-act="gAns" data-i="${i}" ${ans ? 'disabled' : ''}${q.fc ? `aria-label="ธงตัวเลือก ${i + 1}"` : ''}>${q.fc ? flagSvg(q.fc[i]) : esc(c)}</button>`).join('')}</div>`;
  if (ans) h += `<div class="card ${q.ch === q.a ? 'c-g' : 'c-p'}" style="margin-top:12px"><div class="ttl">${q.ch === q.a ? '🎉 ถูกต้อง!' : '😅 ยังไม่ใช่นะ'}</div>${q.x ? `<div>${esc(q.x)}</div>` : ''}${!p.practice && st.done && st.i + 1 >= st.q.length ? `<div class="win">⭐ คะแนน ${st.score}/${GQ} ได้ดาว +${st.stars}${gBonusN(st) ? ' และโบนัส +' + gBonusN(st) : ''} เข้าบัญชีแล้ว</div>` : ''}</div>
    <button class="btn pink block" style="margin-top:12px" data-act="gNext">${st.i + 1 >= st.q.length ? 'ดูผลคะแนน 🏆' : 'ข้อต่อไป ▶️'}</button>`;
  return h;
}
const gBonusN = st => (+st.bonus) || 0;
const gBonusPill = st => gBonusN(st) ? `<div class="pill" style="margin-top:6px">🏆 โบนัสเล่นครบหลายวิชา +${gBonusN(st)} ⭐</div>` : '';
function gFinish(kid, subj, st) {
  if (st.done) return false;
  const dk = dkey(new Date());
  st.done = true; st.stars = gStarsFor(st.score);
  if (st.stars > 0) S.stars[kid].push({ t: 'game', c: 'game', subj, n: st.stars, d: dk, note: `🎮 เกม${gSubj(subj).name} ${st.score}/${GQ}`, ts: Date.now() });
  const dn = gDoneCount(kid, dk); st.bonus = 0;
  if (dn >= 3 && !S.stars[kid].some(e => e.cid === 'gbonus' && e.d === dk)) {
    S.stars[kid].push({ t: 'game', c: 'game', cid: 'gbonus', n: 1, d: dk, note: '🏆 เล่นเกมครบ 3 วิชา', ts: Date.now() + 1 }); st.bonus++;
  }
  if (dn >= GAME_CORE.length && !S.stars[kid].some(e => e.cid === 'gbonus6' && e.d === dk)) {
    S.stars[kid].push({ t: 'game', c: 'game', cid: 'gbonus6', n: 1, d: dk, note: `🏆 เล่นเกมครบทั้ง ${dn} วิชา`, ts: Date.now() + 2 }); st.bonus++;
  }
  save();
  return true;
}
/* ชุดที่ตอบครบทุกข้อแล้วแต่ยังไม่ได้ให้ดาว (เช่น ปิดหน้าก่อนกดดูผล) → ให้ดาวอัตโนมัติ */
function gSweep() {
  const dk = dkey(new Date());
  S.kids.forEach(k => GAME_SUBJECTS.forEach(sb => {
    const st = gGet(k.id, dk, sb.id);
    if (st && !st.done && st.q.every(q => q.ch >= 0)) gFinish(k.id, sb.id, st);
  }));
}

/* ---------- Sheet ---------- */
let ed = null, cl = null, spd = null, td = null, chs = null, gv = null, sh = null, pin = null, pinNext = null, unlockUntil = 0, pendingYes = null;
const OBJ = n => ({ ed, cl, spd, td, chs, gv, sh })[n];
function openSheet(html) { $('#sheetBody').innerHTML = html; $('#sheet').classList.remove('hidden'); $('.sheet').scrollTop = 0; }
function openSheetKeep(html) { const sc = $('.sheet').scrollTop; openSheet(html); $('.sheet').scrollTop = sc; }
function closeSheet() { $('#sheet').classList.add('hidden'); $('#sheetBody').innerHTML = ''; ed = cl = spd = td = chs = gv = sh = pin = null; }
function ask(msg, yes) {
  pendingYes = yes;
  openSheet(`<h2>❓ ยืนยัน</h2><p>${esc(msg)}</p><div class="row" style="margin-top:16px"><button class="btn grow danger" data-act="askYes">ตกลง</button><button class="btn grow ghost" data-act="closeSheet">ยกเลิก</button></div>`);
}
const focusId = id => { if (id) { const el = $('#' + id); if (el) el.focus(); } };
const pickBtns = (act, arr, cur, extra = '') => arr.map(([v, label]) => `<button data-act="${act}" data-v="${esc(v)}" ${extra} class="${cur === v ? 'on' : ''}">${esc(label)}</button>`).join('');

function chipEditor(o, ph) {
  const obj = OBJ(o);
  return `<div class="chips">${obj.extras.map((x, i) =>
    `<span class="chip x">${esc(x)} <button data-act="chipDel" data-o="${o}" data-i="${i}" aria-label="ลบ ${esc(x)}">✕</button></span>`).join('')}</div>
    <div class="addrow"><input class="in" id="in-${o}-extras" placeholder="${ph}" maxlength="40" data-enter="chipAdd" data-o="${o}">
    <button class="btn small" data-act="chipAdd" data-o="${o}">＋</button></div>`;
}

function renderEditDay(focus) {
  const k = kidOf();
  openSheetKeep(`<h2>✏️ ${esc(k.name)} · วัน${DAYS[ed.dow]}</h2>
    <label class="f" for="in-uniform">👕 ชุดที่ใส่</label>
    <input class="in" id="in-uniform" value="${esc(ed.uniform)}" maxlength="40" data-b="ed:uniform" placeholder="เช่น 🏫 ชุดนักเรียน">
    <div class="pick" style="margin-top:8px">${pickBtns('uniPick', UNIFORMS.map(u => [u, u]), ed.uniform)}</div>
    <label class="f">📚 ตารางเรียน (เวลาไม่ใส่ก็ได้)</label>
    ${ed.periods.map((p, i) => `<div class="li"><input class="in" type="time" style="max-width:118px" value="${esc(p.time)}" data-r="ed:periods:${i}:time" aria-label="เวลาคาบ ${i + 1}">
      <input class="in" id="pn-${i}" value="${esc(p.name)}" maxlength="30" placeholder="วิชา" data-r="ed:periods:${i}:name" data-enter="periodNext" aria-label="วิชาคาบ ${i + 1}">
      <button class="btn small danger" data-act="periodDel" data-i="${i}" aria-label="ลบ">✕</button></div>`).join('')}
    <button class="btn small ghost" data-act="periodAdd" style="margin-top:6px">＋ เพิ่มคาบ</button>
    <label class="f">🎒 ของที่ต้องพก</label>${chipEditor('ed', 'พิมพ์ของที่ต้องพก แล้วกด ＋')}
    <label class="f">💾 บันทึกให้วัน (เลือกได้หลายวัน)</label>
    <div class="pick">${ORDER.map(d => `<button data-act="applyDay" data-d="${d}" class="${ed.apply.includes(d) ? 'on' : ''}">${DAYS_S[d]}</button>`).join('')}</div>
    <div class="row" style="margin-top:20px"><button class="btn grow" data-act="saveDay">💾 บันทึก</button>
    <button class="btn danger" data-act="clearDay">ตั้งเป็นวันหยุด</button></div>`);
  focusId(focus);
}
function renderCheckEditor(focus) {
  openSheetKeep(`<h2>✅ เช็คลิสต์ของ${esc(kidOf().name)}</h2><p class="sub">ของที่ต้องเช็คก่อนออกจากบ้านทุกวัน</p>
    ${cl.items.map((x, i) => `<div class="li"><input class="in" value="${esc(x)}" maxlength="40" data-r="cl:items:${i}:" aria-label="รายการที่ ${i + 1}"><button class="btn small danger" data-act="clDel" data-i="${i}" aria-label="ลบ">✕</button></div>`).join('')}
    <div class="addrow"><input class="in" id="in-cl" placeholder="เพิ่มรายการ เช่น สมุดจดการบ้าน 📓" maxlength="40" data-enter="clAdd"><button class="btn small" data-act="clAdd">＋</button></div>
    <div class="row" style="margin-top:20px"><button class="btn grow" data-act="clSave">💾 บันทึก</button></div>`);
  focusId(focus && 'in-cl');
}
function renderChores() {
  openSheetKeep(`<h2>🏠 ภารกิจที่บ้านของ${esc(kidOf().name)}</h2><p class="sub">ทำแล้วได้ดาวตามที่ตั้งไว้</p>
    ${chs.items.map((c, i) => `<div class="card" style="box-shadow:none;border:2px solid var(--line);padding:10px">
      <div class="li" style="padding-top:0"><input class="in" value="${esc(c.name)}" maxlength="40" data-r="chs:items:${i}:name" aria-label="ชื่อภารกิจ">
      <button class="btn small danger" data-act="chDel" data-i="${i}" aria-label="ลบ">✕</button></div>
      <div class="row"><span class="mini">ดาว:</span>${[1,2,3].map(n => `<button class="btn small ${c.stars === n ? '' : 'ghost'}" data-act="chStars" data-i="${i}" data-n="${n}">${n} ⭐</button>`).join('')}</div>
      <div class="pick" style="margin-top:8px">${ORDER.map(d => `<button data-act="chDay" data-i="${i}" data-d="${d}" class="${c.days.includes(d) ? 'on' : ''}" style="padding:6px 10px">${DAYS_S[d]}</button>`).join('')}</div></div>`).join('')}
    <div class="addrow"><input class="in" id="in-chs" placeholder="เพิ่มภารกิจ เช่น 🧺 ช่วยพับผ้า" maxlength="40" data-enter="chAdd"><button class="btn small" data-act="chAdd">＋</button></div>
    <div class="row" style="margin-top:20px"><button class="btn grow" data-act="chSave">💾 บันทึก</button></div>`);
}
function renderSpecial() {
  openSheetKeep(`<h2>📌 ${spd.id ? 'แก้ไข' : 'เพิ่ม'}วันพิเศษ</h2>
    <label class="f">ประเภท (แตะเพื่อเลือก)</label>
    <div class="pick">${SPECIAL_PRESETS.map((p, i) => `<button data-act="spPreset" data-i="${i}" class="${spd.title === p.t ? 'on' : ''}">${esc(p.t)}</button>`).join('')}</div>
    <label class="f" for="sp-title">ชื่อกิจกรรม</label><input class="in" id="sp-title" value="${esc(spd.title)}" maxlength="40" data-b="spd:title" placeholder="เช่น 🏅 วันกีฬาสี">
    <label class="f" for="sp-date">วันที่</label><input class="in" type="date" id="sp-date" value="${esc(spd.date)}" data-b="spd:date">
    <label class="f">ใช้กับ</label>
    <div class="pick">${pickBtns('spKid', [['all', 'ทุกคน'], ...S.kids.map(k => [k.id, k.emoji + ' ' + k.name])], spd.kid)}</div>
    <label class="f">โรงเรียนหยุดไหม?</label>
    <div class="pick">${pickBtns('spOff', [['0', '📚 ไปโรงเรียนตามปกติ'], ['1', '🎉 โรงเรียนหยุด']], spd.off ? '1' : '0')}</div>
    ${spd.off ? '' : `<label class="f" for="sp-uni">👕 ชุดวันนั้น (ว่าง = ใช้ชุดตามตาราง)</label>
    <input class="in" id="sp-uni" value="${esc(spd.uniform)}" maxlength="40" data-b="spd:uniform" placeholder="เช่น 🎽 ชุดกีฬาสี">
    <label class="f">🎒 ของที่ต้องเพิ่ม</label>${chipEditor('spd', 'พิมพ์ของที่ต้องเพิ่ม แล้วกด ＋')}`}
    <label class="f" for="sp-note">📝 บันทึกช่วยจำ</label><input class="in" id="sp-note" value="${esc(spd.note)}" maxlength="80" data-b="spd:note" placeholder="เช่น นัดรวมตัว 7:30 น.">
    <div class="row" style="margin-top:20px"><button class="btn grow" data-act="spSave">💾 บันทึก</button>${spd.id ? '<button class="btn danger" data-act="spDel">ลบ</button>' : ''}</div>`);
}
function renderTodo() {
  openSheetKeep(`<h2>📌 ${td.id ? 'แก้ไข' : 'เพิ่ม'}รายการต้องส่ง</h2>
    <label class="f">ประเภท</label><div class="pick">${pickBtns('tdType', Object.entries(TODO_TYPES), td.type)}</div>
    <label class="f" for="td-title">รายการ</label><input class="in" id="td-title" value="${esc(td.title)}" maxlength="60" data-b="td:title" placeholder="เช่น ใบอนุญาตผู้ปกครอง / ค่าทัศนศึกษา">
    <label class="f" for="td-due">กำหนดส่ง</label><input class="in" type="date" id="td-due" value="${esc(td.due)}" data-b="td:due">
    ${td.type === 'money' ? `<label class="f" for="td-amt">จำนวนเงิน (บาท)</label><input class="in" type="number" id="td-amt" min="0" inputmode="decimal" value="${esc(td.amount)}" data-b="td:amount">` : ''}
    <label class="f">ของใคร</label><div class="pick">${pickBtns('tdKid', [['all', 'ทุกคน'], ...S.kids.map(k => [k.id, k.emoji + ' ' + k.name])], td.kid)}</div>
    <div class="row" style="margin-top:20px"><button class="btn grow" data-act="tdSave">💾 บันทึก</button>${td.id ? '<button class="btn danger" data-act="tdDel">ลบ</button>' : ''}</div>`);
}
function renderGive() {
  openSheetKeep(`<h2>⭐ ให้ดาว ${esc(kidOf().name)}</h2>
    <label class="f">เพราะอะไร</label><div class="pick">${pickBtns('gvCat', GIVE_CATS.map(c => [c, CATS[c]]), gv.c)}</div>
    <label class="f">กี่ดวง</label><div class="pick">${pickBtns('gvN', [['1', '1 ⭐'], ['2', '2 ⭐⭐'], ['3', '3 ⭐⭐⭐'], ['5', '5 🌈']], String(gv.n))}</div>
    <label class="f" for="gv-note">บันทึก (ไม่ใส่ก็ได้)</label><input class="in" id="gv-note" maxlength="60" value="${esc(gv.note)}" data-b="gv:note" placeholder="เช่น ช่วยแม่ถูบ้าน">
    <div class="row" style="margin-top:20px"><button class="btn grow pink" data-act="gvSave">⭐ ให้ดาวเลย</button></div>`);
}

function renderShop(focus) {
  openSheetKeep(`<h2>🎁 ร้านรางวัลของ${esc(kidOf().name)}</h2><p class="sub">ตั้งชื่อรางวัลและจำนวนดาวที่ต้องใช้</p>
    ${sh.items.map((c, i) => `<div class="li"><input class="in" id="sh-${i}" value="${esc(c.name)}" maxlength="40" placeholder="ชื่อรางวัล" data-r="sh:items:${i}:name" aria-label="ชื่อรางวัล ${i + 1}">
      <input class="in" type="number" min="1" max="999" inputmode="numeric" style="max-width:84px" value="${esc(c.cost)}" data-r="sh:items:${i}:cost" aria-label="ดาวที่ใช้ ${i + 1}">
      <button class="btn small danger" data-act="shDel" data-i="${i}" aria-label="ลบ">✕</button></div>`).join('')}
    <button class="btn small ghost" data-act="shAdd" style="margin-top:6px">＋ เพิ่มรางวัล</button>
    <div class="row" style="margin-top:20px"><button class="btn grow" data-act="shSave">💾 บันทึก</button></div>`);
  focusId(focus);
}
function renderPin(msg) {
  const title = { enter: '🔒 ใส่ PIN ผู้ปกครอง', new: '🔐 ตั้ง PIN ใหม่ (4 หลัก)', confirm: '🔐 ใส่ PIN อีกครั้งเพื่อยืนยัน' }[pin.mode];
  if (pin.mode === 'forgot') {
    openSheet(`<h2>🤔 ลืม PIN?</h2><p>ตอบโจทย์นี้เพื่อรีเซ็ต PIN (เด็กเล็กจะทำไม่ได้)</p><div class="big" style="text-align:center;margin:10px 0">${pin.q.a} × ${pin.q.b} = ?</div>
      <input class="in" id="pin-ans" type="number" inputmode="numeric" data-enter="pinForgotOk" aria-label="คำตอบ">
      <div class="row" style="margin-top:16px"><button class="btn grow" data-act="pinForgotOk">ตกลง</button></div>`);
    focusId('pin-ans'); return;
  }
  openSheet(`<h2 style="text-align:center">${title}</h2><div class="pindots">${[0,1,2,3].map(i => `<i class="${i < pin.buf.length ? 'on' : ''}"></i>`).join('')}</div>
    ${msg ? `<p class="mini" style="text-align:center;color:var(--danger)">${esc(msg)}</p>` : ''}
    <div class="keys">${['1','2','3','4','5','6','7','8','9','','0','⌫'].map(k => k === '' ? '<span></span>' : `<button data-act="pinKey" data-k="${k}" aria-label="${k === '⌫' ? 'ลบ' : k}">${k}</button>`).join('')}</div>
    ${pin.mode === 'enter' ? '<div style="text-align:center;margin-top:12px"><button class="btn small ghost" data-act="pinForgot">ลืม PIN?</button></div>' : ''}`);
}
function guard(fn) {
  if (!S.pin || Date.now() < unlockUntil) return fn();
  pin = { mode: 'enter', buf: '', first: '' }; pinNext = fn; renderPin();
}

/* ---------- Actions ---------- */
const A = {
  sub: el => { ui.sub = el.dataset.s; render(); window.scrollTo(0, 0); },
  ssub: el => { ui.ssub = el.dataset.s; render(); },
  go: el => { ui.tab = el.dataset.tab; if (el.dataset.sub) ui.sub = el.dataset.sub; ui.play = null; render(); window.scrollTo(0, 0); },
  jump: el => { const t = document.getElementById(el.dataset.id); if (t) t.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' }); },
  tab: el => { ui.tab = el.dataset.tab; ui.play = null; ui.lang = null; render(); window.scrollTo(0, 0); },
  kid: el => { ui.kid = el.dataset.id; S.lastKid = ui.kid; save(); render(); },
  when: el => { ui.when = el.dataset.w; render(); },
  gSetLevel: el => { S.level[ui.kid] = +el.dataset.v; save(); closeSheet(); render(); toast('ตั้งระดับแล้ว'); },
  gLevel: () => guard(() => openSheet(`<h2>🎓 เลือกระดับของ${esc(kidOf().name)}</h2>
    <div class="pick">${pickBtns('gSetLevel', GAME_LEVELS.map(l => [String(l.id), l.emoji + ' ' + l.name]), String(S.level[ui.kid]))}</div>
    <p class="mini">ชุดโจทย์ที่เริ่มเล่นแล้ววันนี้จะไม่เปลี่ยน ระดับใหม่ใช้กับชุดถัดไป</p>`)),
  gStart: el => {
    const k = kidOf(), s = el.dataset.s, dk = dkey(new Date());
    if (S.level[k.id] === undefined) return toast('เลือกระดับก่อนนะ');
    const day = gDay(k.id, dk);
    if (!day[s]) {
      const q = genSet(s, S.level[k.id], (S.gameSeen[k.id] || {})[s]);
      gMarkSeen(k.id, s, q); gPrune(k.id);
      day[s] = { q, i: 0, score: 0, done: false, stars: 0 };
    }
    ui.play = { subj: s, practice: false }; save(); render(); window.scrollTo(0, 0);
  },
  gPractice: el => {
    const k = kidOf(), s = el.dataset.s, q = genSet(s, S.level[k.id], (S.gameSeen[k.id] || {})[s]);
    gMarkSeen(k.id, s, q); save();
    ui.prac = { q, i: 0, score: 0 }; ui.play = { subj: s, practice: true }; render(); window.scrollTo(0, 0);
  },
  gAns: el => {
    const st = gCur(), q = st.q[st.i]; if (q.ch >= 0) return;
    q.ch = +el.dataset.i; if (q.ch === q.a) st.score++;
    let got = false;
    if (!ui.play.practice) { if (st.i + 1 >= st.q.length) got = gFinish(ui.kid, ui.play.subj, st); else save(); }
    render();
    if (got && (st.stars > 0 || gBonusN(st))) { burst(); toast(`⭐ ได้ดาว +${st.stars + gBonusN(st)} อัตโนมัติ`); }
  },
  gNext: () => { const st = gCur(); st.i++; if (!ui.play.practice) save(); render(); window.scrollTo(0, 0); },
  gBack: () => { ui.play = null; render(); },
  langOpen: el => { ui.lang = el.dataset.l; ui.lt = 'vocab'; ui.lcat = -1; render(); window.scrollTo(0, 0); },
  langBack: () => { ui.lang = null; render(); window.scrollTo(0, 0); },
  langTab: el => { ui.lt = el.dataset.t; render(); },
  langCat: el => { ui.lcat = +el.dataset.c; render(); },
  langSay: el => { const kid = ui.kid, L = ui.lang; S.lang[kid] = S.lang[kid] || {}; const d = (S.lang[kid][L] = S.lang[kid][L] || {}), i = el.dataset.i; if (d[i]) delete d[i]; else d[i] = 1; save(); render(); },
  speak: el => {
    try { if (!('speechSynthesis' in window)) return toast('เครื่องนี้ไม่รองรับเสียงอ่าน'); speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(el.dataset.t); u.lang = el.dataset.l || 'en-US'; u.rate = +el.dataset.r || 0.85; speechSynthesis.speak(u); } catch (e) {}
  },
  closeSheet,
  askYes: () => { const f = pendingYes; pendingYes = null; closeSheet(); if (f) f(); },

  editDay: el => {
    const dow = +el.dataset.dow, d = S.sched[ui.kid][dow];
    ed = { dow, uniform: d.uniform, periods: d.periods.map(p => ({ ...p })), extras: [...d.extras], apply: [dow] };
    renderEditDay();
  },
  uniPick: el => { ed.uniform = el.dataset.v === '🎉 วันหยุด' ? '' : el.dataset.v; renderEditDay(); },
  applyDay: el => {
    const d = +el.dataset.d, i = ed.apply.indexOf(d);
    if (i >= 0) { if (ed.apply.length > 1) ed.apply.splice(i, 1); } else ed.apply.push(d);
    renderEditDay();
  },
  periodAdd: () => { ed.periods.push({ time: '', name: '' }); renderEditDay('pn-' + (ed.periods.length - 1)); },
  periodNext: () => A.periodAdd(),
  periodDel: el => { ed.periods.splice(+el.dataset.i, 1); renderEditDay(); },
  chipAdd: el => {
    const o = el.dataset.o, obj = OBJ(o), inp = $(`#in-${o}-extras`), v = inp.value.trim();
    if (v && !obj.extras.includes(v)) obj.extras.push(v);
    (o === 'ed' ? renderEditDay : renderSpecial)(`in-${o}-extras`);
  },
  chipDel: el => { const o = el.dataset.o; OBJ(o).extras.splice(+el.dataset.i, 1); (o === 'ed' ? renderEditDay : renderSpecial)(); },
  saveDay: () => {
    const pend = $('#in-ed-extras').value.trim(); if (pend && !ed.extras.includes(pend)) ed.extras.push(pend);
    const per = periodsSorted(ed.periods.map(p => ({ time: p.time, name: p.name.trim() })).filter(p => p.name));
    ed.apply.forEach(d => { S.sched[ui.kid][d] = { uniform: ed.uniform.trim(), periods: per.map(p => ({ ...p })), extras: [...ed.extras] }; });
    save(); closeSheet(); render(); toast('💾 บันทึกแล้ว');
  },
  clearDay: () => {
    ed.apply.forEach(d => { S.sched[ui.kid][d] = { uniform: '', periods: [], extras: [] }; });
    save(); closeSheet(); render(); toast('🎉 ตั้งเป็นวันหยุดแล้ว');
  },

  pickUniform: el => {
    const dow = +el.dataset.dow, cur = S.sched[ui.kid][dow].uniform;
    ed = { dow };
    openSheet(`<h2>👕 ชุดวัน${DAYS[dow]}</h2>
      <div class="pick">${pickBtns('uniSet', UNIFORMS.map(u => [u, u]), cur)}</div>
      <label class="f" for="in-custom">หรือพิมพ์เอง</label>
      <div class="addrow"><input class="in" id="in-custom" value="${esc(UNIFORMS.includes(cur) ? '' : cur)}" maxlength="40" data-enter="uniCustom" placeholder="เช่น 🎽 ชุดกีฬาสี">
      <button class="btn small" data-act="uniCustom">ตกลง</button></div>`);
  },
  uniSet: el => setUniform(el.dataset.v === '🎉 วันหยุด' ? '' : el.dataset.v),
  uniCustom: () => setUniform($('#in-custom').value.trim()),

  editCheck: () => { cl = { items: [...S.check[ui.kid]] }; renderCheckEditor(); },
  clAdd: () => { const v = $('#in-cl').value.trim(); if (v && !cl.items.includes(v)) cl.items.push(v); renderCheckEditor(true); },
  clDel: el => { cl.items.splice(+el.dataset.i, 1); renderCheckEditor(); },
  clSave: () => {
    const v = $('#in-cl').value.trim(); if (v && !cl.items.includes(v)) cl.items.push(v);
    S.check[ui.kid] = [...new Set(cl.items.map(x => x.trim()).filter(Boolean))];
    save(); closeSheet(); render(); toast('💾 บันทึกเช็คลิสต์แล้ว');
  },

  /* ภารกิจบ้าน */
  editChores: () => { chs = { items: S.chores[ui.kid].map(c => ({ ...c, days: [...c.days] })) }; renderChores(); },
  chAdd: () => { const v = $('#in-chs').value.trim(); if (v) chs.items.push({ id: uid(), name: v, stars: 1, days: [0,1,2,3,4,5,6] }); renderChores(); focusId('in-chs'); },
  chDel: el => { chs.items.splice(+el.dataset.i, 1); renderChores(); },
  chStars: el => { chs.items[+el.dataset.i].stars = +el.dataset.n; renderChores(); },
  chDay: el => {
    const c = chs.items[+el.dataset.i], d = +el.dataset.d, j = c.days.indexOf(d);
    if (j >= 0) { if (c.days.length > 1) c.days.splice(j, 1); } else c.days.push(d);
    renderChores();
  },
  chSave: () => {
    const v = $('#in-chs').value.trim(); if (v) chs.items.push({ id: uid(), name: v, stars: 1, days: [0,1,2,3,4,5,6] });
    S.chores[ui.kid] = chs.items.filter(c => c.name.trim()).map(c => ({ ...c, name: c.name.trim() }));
    save(); closeSheet(); render(); toast('💾 บันทึกภารกิจแล้ว');
  },

  /* วันพิเศษ */
  addSpecial: el => {
    spd = { id: '', date: el.dataset.date || dkey(addDays(startOfDay(new Date()), 1)), kid: ui.kid, title: '', off: false, uniform: '', extras: [], note: '' };
    renderSpecial();
  },
  editSpecial: el => { const s = S.special.find(x => x.id === el.dataset.id); if (!s) return; spd = { ...s, extras: [...(s.extras || [])], uniform: s.uniform || '', note: s.note || '' }; renderSpecial(); },
  spPreset: el => { const p = SPECIAL_PRESETS[+el.dataset.i]; spd.title = p.t; spd.off = p.off; renderSpecial(); },
  spKid: el => { spd.kid = el.dataset.v; renderSpecial(); },
  spOff: el => { spd.off = el.dataset.v === '1'; renderSpecial(); },
  spSave: () => {
    if (!spd.title.trim()) return toast('ใส่ชื่อกิจกรรมก่อนนะ');
    if (!spd.date) return toast('เลือกวันที่ก่อนนะ');
    if (!spd.off) { const f = $('#in-spd-extras'); const v = f ? f.value.trim() : ''; if (v && !spd.extras.includes(v)) spd.extras.push(v); }
    const rec = { id: spd.id || uid(), date: spd.date, kid: spd.kid, title: spd.title.trim(), off: spd.off, uniform: spd.off ? '' : spd.uniform.trim(), extras: spd.off ? [] : spd.extras, note: spd.note.trim() };
    const i = S.special.findIndex(x => x.id === rec.id);
    if (i >= 0) S.special[i] = rec; else S.special.push(rec);
    save(); closeSheet(); render(); toast('📌 บันทึกวันพิเศษแล้ว');
  },
  spDel: () => { const id = spd.id; ask('ลบวันพิเศษนี้?', () => { S.special = S.special.filter(x => x.id !== id); save(); render(); }); },

  /* ต้องส่ง */
  addTodo: () => {
    td = { id: '', type: 'hw', title: '', due: dkey(addDays(startOfDay(new Date()), 1)), amount: '', kid: ui.kid };
    renderTodo();
  },
  editTodo: el => { const t = S.todos.find(x => x.id === el.dataset.id); if (!t) return; td = { ...t, amount: t.amount || '' }; renderTodo(); },
  tdType: el => { td.type = el.dataset.v; renderTodo(); },
  tdKid: el => { td.kid = el.dataset.v; renderTodo(); },
  tdSave: () => {
    if (!td.title.trim()) return toast('ใส่ชื่อรายการก่อนนะ');
    const rec = { id: td.id || uid(), kid: td.kid, type: td.type, title: td.title.trim(), due: td.due || '', amount: td.type === 'money' ? (Number(td.amount) || 0) : 0, done: !!td.done };
    const i = S.todos.findIndex(x => x.id === rec.id);
    if (i >= 0) S.todos[i] = rec; else S.todos.push(rec);
    save(); closeSheet(); render(); toast('📌 บันทึกแล้ว');
  },
  tdDel: () => { const id = td.id; ask('ลบรายการนี้?', () => { S.todos = S.todos.filter(x => x.id !== id); save(); render(); }); },

  /* ดาว */
  giveStar: () => guard(() => { gv = { c: 'kind', n: 1, note: '' }; renderGive(); }),
  gvCat: el => { gv.c = el.dataset.v; renderGive(); },
  gvN: el => { gv.n = +el.dataset.v; renderGive(); },
  gvSave: () => {
    const k = kidOf();
    S.stars[k.id].push({ t: 'manual', c: gv.c, n: gv.n, note: `${CATS[gv.c]}${gv.note.trim() ? ' · ' + gv.note.trim() : ''}`, d: dkey(new Date()), ts: Date.now() });
    save(); closeSheet(); render(); burst();
  },
  starSub: () => guard(() => {
    const k = kidOf();
    if (starTotal(k.id) <= 0) return toast('ไม่มีดาวให้หักแล้ว');
    S.stars[k.id].push({ t: 'manual', c: 'other', n: -1, note: '➖ หักดาว', d: dkey(new Date()), ts: Date.now() });
    save(); render();
  }),
  buy: el => guard(() => {
    const k = kidOf(), it = S.shop[k.id].find(x => x.id === el.dataset.id);
    if (!it || starTotal(k.id) < it.cost) return;
    ask(`แลก "${it.name}" ใช้ ${it.cost} ดาว ใช่ไหม?`, () => {
      if (starTotal(k.id) < it.cost) return;
      S.stars[k.id].push({ t: 'manual', c: 'other', n: -it.cost, note: '🎁 แลกรางวัล ' + it.name, d: dkey(new Date()), ts: Date.now() });
      save(); render(); burst(); toast('🎁 แลกรางวัลแล้ว ยินดีด้วย!');
    });
  }),
  editShop: () => guard(() => { sh = { items: S.shop[ui.kid].map(x => ({ ...x })) }; renderShop(); }),
  shAdd: () => { sh.items.push({ id: uid(), name: '', cost: 10 }); renderShop('sh-' + (sh.items.length - 1)); },
  shDel: el => { sh.items.splice(+el.dataset.i, 1); renderShop(); },
  shSave: () => {
    S.shop[ui.kid] = sh.items.map(x => ({ id: x.id, name: String(x.name).trim(), cost: Math.max(1, Math.min(999, parseInt(x.cost, 10) || 10)) })).filter(x => x.name);
    save(); closeSheet(); render(); toast('💾 บันทึกร้านรางวัลแล้ว');
  },

  /* PIN */
  pinKey: el => {
    const k = el.dataset.k;
    if (k === '⌫') pin.buf = pin.buf.slice(0, -1); else if (pin.buf.length < 4) pin.buf += k;
    if (pin.buf.length < 4) return renderPin();
    renderPin();
    setTimeout(() => {
      if (!pin) return;
      if (pin.mode === 'enter') {
        if (pin.buf === S.pin) { unlockUntil = Date.now() + 120000; const f = pinNext; pinNext = null; closeSheet(); if (f) f(); }
        else { pin.buf = ''; renderPin('PIN ไม่ถูกต้อง ลองอีกครั้ง'); }
      } else if (pin.mode === 'new') { pin.first = pin.buf; pin.buf = ''; pin.mode = 'confirm'; renderPin(); }
      else if (pin.mode === 'confirm') {
        if (pin.buf === pin.first) { S.pin = pin.first; save(); unlockUntil = Date.now() + 120000; closeSheet(); toast('🔒 ตั้ง PIN แล้ว'); openSettings(); }
        else { pin.mode = 'new'; pin.buf = ''; pin.first = ''; renderPin('PIN ไม่ตรงกัน ตั้งใหม่อีกครั้ง'); }
      }
    }, 120);
  },
  pinSet: () => { pin = { mode: 'new', buf: '', first: '' }; renderPin(); },
  pinOff: () => ask('ปิดการใช้ PIN ผู้ปกครอง?', () => { S.pin = ''; save(); toast('ปิด PIN แล้ว'); openSettings(); }),
  pinForgot: () => { pin = { mode: 'forgot', buf: '', first: '', q: { a: 12 + Math.floor(Math.random() * 8), b: 4 + Math.floor(Math.random() * 6) } }; renderPin(); },
  pinForgotOk: () => {
    const v = parseInt($('#pin-ans').value, 10);
    if (v === pin.q.a * pin.q.b) { S.pin = ''; save(); pinNext = null; closeSheet(); toast('รีเซ็ต PIN แล้ว'); }
    else { pin.q = { a: 12 + Math.floor(Math.random() * 8), b: 4 + Math.floor(Math.random() * 6) }; renderPin(); toast('ไม่ถูกต้อง ลองโจทย์ใหม่'); }
  },

  /* ตั้งค่า */
  settings: () => guard(openSettings),
  whatsNew: () => showWhatsNew(false),
  saveKid: el => {
    const id = el.dataset.id, k = S.kids.find(x => x.id === id);
    k.name = $('#kn-' + id).value.trim() || k.name;
    k.emoji = $('#ke-' + id).value.trim() || k.emoji;
    save(); render(); toast('💾 บันทึกชื่อแล้ว');
  },
  kidColor: el => { S.kids.find(x => x.id === el.dataset.id).color = el.dataset.c; save(); render(); openSettings(); },
  addKid: () => {
    const id = 'kid' + uid(), i = S.kids.length;
    S.kids.push({ id, name: 'เด็กน้อยคนใหม่', emoji: '🧒', color: KID_COLORS[i % KID_COLORS.length] });
    fillKid(S, id); S.sched[id] = [0,1,2,3,4,5,6].map(() => ({ uniform: '', periods: [], extras: [] }));
    save(); render(); openSettings();
  },
  delKid: el => {
    if (S.kids.length < 2) return toast('ต้องมีอย่างน้อย 1 คน');
    const id = el.dataset.id, k = S.kids.find(x => x.id === id);
    ask(`ลบ "${k.name}" และข้อมูลทั้งหมดของเขา?`, () => {
      S.kids = S.kids.filter(x => x.id !== id);
      ['sched', 'check', 'stars', 'goal', 'chores', 'shop', 'games', 'gameSeen', 'level', 'lang'].forEach(f => delete S[f][id]);
      Object.keys(S.done).forEach(key => { if (key.endsWith('|' + id)) delete S.done[key]; });
      S.todos = S.todos.filter(t => t.kid !== id); S.special = S.special.filter(s => s.kid !== id);
      if (ui.kid === id) { ui.kid = S.kids[0].id; S.lastKid = ui.kid; }
      save(); render(); openSettings();
    });
  },
  exportCopy: async () => {
    try { await navigator.clipboard.writeText(JSON.stringify(S)); toast('📋 คัดลอกข้อมูลแล้ว'); }
    catch (e) { toast('คัดลอกไม่ได้ ลองใช้ปุ่มส่งออกไฟล์'); }
  },
  importText: () => {
    try {
      const obj = JSON.parse($('#imp').value);
      if (!obj || !Array.isArray(obj.kids)) throw new Error('bad');
      ask('นำเข้าข้อมูลนี้? ข้อมูลปัจจุบันจะถูกแทนที่', () => { S = sanitize(obj); ui.kid = S.lastKid; save(); render(); toast('📥 นำเข้าข้อมูลแล้ว'); });
    } catch (err) { toast('ข้อมูลไม่ถูกต้อง'); }
  },
  resetAll: () => ask('ล้างข้อมูลทั้งหมดและเริ่มใหม่? (ย้อนกลับไม่ได้)', () => {
    S = defaults(); ui.kid = S.lastKid; save(); render(); toast('ล้างข้อมูลแล้ว');
  }),
  notifPerm: async () => {
    if (!('Notification' in window)) return toast('เบราว์เซอร์นี้ไม่รองรับการแจ้งเตือน');
    try { const r = await Notification.requestPermission(); toast(r === 'granted' ? '🔔 เปิดการแจ้งเตือนแล้ว' : 'ยังไม่ได้อนุญาตการแจ้งเตือน'); openSettings(); }
    catch (e) { toast('ขออนุญาตไม่ได้'); }
  },
  remTest: () => fireReminder('evening', true),
  remGo: () => { closeSheet(); $('#remind').classList.add('hidden'); ui.tab = 'home'; ui.when = $('#remind').dataset.when || ui.when; render(); window.scrollTo(0, 0); },
  remClose: () => $('#remind').classList.add('hidden'),
  icsFile: () => {
    const lines = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Kids Routine//TH', 'CALSCALE:GREGORIAN'];
    const t0 = new Date(), ds = `${t0.getFullYear()}${pad(t0.getMonth() + 1)}${pad(t0.getDate())}`;
    [['evening', '🌙 เตรียมของพรุ่งนี้ (Kids Routine)', 'SU,MO,TU,WE,TH'], ['morning', '☀️ เช็คลิสต์ก่อนออกจากบ้าน (Kids Routine)', 'MO,TU,WE,TH,FR']].forEach(([t, sum, by]) => {
      const tm = (S.rem[t].time || '20:00').replace(':', '') + '00';
      lines.push('BEGIN:VEVENT', `UID:kidsroutine-${t}@local`, `DTSTAMP:${ds}T000000`, `DTSTART:${ds}T${tm}`, `DURATION:PT15M`,
        `RRULE:FREQ=WEEKLY;BYDAY=${by}`, `SUMMARY:${sum}`, 'BEGIN:VALARM', 'ACTION:DISPLAY', `DESCRIPTION:${sum}`, 'TRIGGER:PT0M', 'END:VALARM', 'END:VEVENT');
    });
    lines.push('END:VCALENDAR');
    const blob = new Blob([lines.join('\r\n')], { type: 'text/calendar' });
    const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = 'kids-routine-reminders.ics';
    document.body.appendChild(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(a.href), 2000);
    toast('📆 ดาวน์โหลดแล้ว เปิดไฟล์เพื่อเพิ่มลงปฏิทิน');
  },
  exportFile: () => {
    const blob = new Blob([JSON.stringify(S, null, 2)], { type: 'application/json' });
    const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = `kids-routine-${dkey(new Date())}.json`;
    document.body.appendChild(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(a.href), 2000);
    toast('📤 ส่งออกไฟล์สำรองแล้ว');
  },
  importFile: () => $('#importFile').click(),
  install: async () => { if (!deferredPrompt) return; deferredPrompt.prompt(); await deferredPrompt.userChoice; deferredPrompt = null; openSettings(); },
  checkUpdate: async () => {
    if (!swReg) return toast('เบราว์เซอร์นี้ไม่รองรับการอัปเดตอัตโนมัติ');
    try { await swReg.update(); toast(swReg.waiting ? '🎉 มีเวอร์ชันใหม่' : '✅ เป็นเวอร์ชันล่าสุดแล้ว'); }
    catch (e) { toast('ตรวจสอบไม่ได้ (ออฟไลน์?)'); }
  },
  applyUpdate: () => { if (swReg && swReg.waiting) swReg.waiting.postMessage('SKIP_WAITING'); else location.reload(); }
};

function setUniform(v) { S.sched[ui.kid][ed.dow].uniform = v; save(); closeSheet(); render(); toast('👕 เปลี่ยนชุดแล้ว'); }

function openSettings() {
  const standalone = matchMedia('(display-mode: standalone)').matches || navigator.standalone;
  const ios = /iphone|ipad|ipod/i.test(navigator.userAgent);
  const canNotif = 'Notification' in window, perm = canNotif ? Notification.permission : 'denied';
  let h = `<h2>⚙️ ตั้งค่า</h2><h3>🔔 แจ้งเตือน</h3>`;
  [['evening', '🌙 เตือนตอนเย็น: เตรียมของพรุ่งนี้'], ['morning', '☀️ เตือนตอนเช้า: เช็คลิสต์ก่อนออกบ้าน']].forEach(([t, label]) => {
    h += `<div class="li"><label class="chk" style="flex:1;border:0;padding:4px 0;min-height:44px"><input type="checkbox" data-change="remOn" data-t="${t}" ${S.rem[t].on ? 'checked' : ''}><span class="box"></span><span class="txt" style="font-size:15px">${label}</span></label>
      <input class="in" type="time" style="max-width:118px" value="${esc(S.rem[t].time)}" data-change="remTime" data-t="${t}" aria-label="เวลา ${t}"></div>`;
  });
  h += `<div class="row" style="margin-top:6px">${canNotif && perm !== 'granted' ? '<button class="btn small" data-act="notifPerm">🔔 อนุญาตแจ้งเตือน</button>' : ''}<button class="btn small ghost" data-act="remTest">ลองเตือนเดี๋ยวนี้</button></div>
    <p class="mini">แอปจะเตือนเมื่อเปิดหน้านี้ไว้หรือเปิดแอปหลังถึงเวลา ${WEB_FILES ? 'ถ้าต้องการให้เตือนแม้ปิดแอป ใช้ปุ่มเพิ่มลงปฏิทินด้านล่าง' : ''}</p>`;
  if (WEB_FILES) h += `<button class="btn small ghost" data-act="icsFile">📆 เพิ่มเตือนลงปฏิทินมือถือ (.ics)</button>`;
  h += `<div class="sect"><h3 style="margin-top:12px">🔒 PIN ผู้ปกครอง</h3><p class="mini">ล็อกการให้/หักดาว แลกรางวัล และหน้าตั้งค่า กันเด็กกดเอง ${S.pin ? '(เปิดใช้อยู่)' : '(ยังไม่เปิด)'}</p>
    <div class="row"><button class="btn small" data-act="pinSet">${S.pin ? 'เปลี่ยน PIN' : 'ตั้ง PIN'}</button>${S.pin ? '<button class="btn small ghost" data-act="pinOff">ปิด PIN</button>' : ''}</div></div>`;
  h += `<div class="sect"><h3 style="margin-top:12px">👨‍👩‍👧‍👦 เด็ก ๆ</h3>`;
  S.kids.forEach(k => {
    h += `<div class="card" style="box-shadow:none;border:2px solid var(--line)">
      <div class="addrow" style="margin-top:0"><input class="in" id="ke-${esc(k.id)}" value="${esc(k.emoji)}" style="max-width:70px;text-align:center" maxlength="4" aria-label="อีโมจิ">
      <input class="in" id="kn-${esc(k.id)}" value="${esc(k.name)}" maxlength="24" aria-label="ชื่อ"></div>
      <div class="pick" style="margin:10px 0">${KID_COLORS.map(c => `<button data-act="kidColor" data-id="${esc(k.id)}" data-c="${c}" aria-label="สี ${c}" style="width:34px;height:34px;padding:0;background:${c};${k.color === c ? 'outline:3px solid var(--ink)' : ''}"></button>`).join('')}</div>
      <div class="row"><button class="btn small grow" data-act="saveKid" data-id="${esc(k.id)}">💾 บันทึกชื่อ</button>
      <button class="btn small danger" data-act="delKid" data-id="${esc(k.id)}">ลบ</button></div></div>`;
  });
  h += `<button class="btn ghost small" data-act="addKid">＋ เพิ่มเด็ก</button></div>
    <div class="sect"><h3 style="margin-top:12px">💾 สำรอง / ย้ายข้อมูล</h3>
    <p class="mini">ข้อมูลเก็บในเครื่องนี้เท่านั้น ควรสำรองไว้เป็นระยะ</p>
    <div class="row">${WEB_FILES ? '<button class="btn small grow" data-act="exportFile">📤 ส่งออกไฟล์</button><button class="btn small ghost grow" data-act="importFile">📥 นำเข้าไฟล์</button>' : ''}<button class="btn small ghost grow" data-act="exportCopy">📋 คัดลอกข้อมูล</button></div>
    <label class="f" for="imp">นำเข้าโดยวางข้อมูลที่คัดลอกไว้</label>
    <textarea class="in" id="imp" rows="2" placeholder="วางข้อมูลที่นี่"></textarea>
    <div style="margin-top:8px"><button class="btn small ghost" data-act="importText">📥 นำเข้า</button></div></div>`;
  if (WEB_FILES) {
    h += `<div class="sect"><h3 style="margin-top:12px">📲 ติดตั้ง / อัปเดต</h3>`;
    if (standalone) h += `<p class="mini">✅ ติดตั้งเป็นแอปแล้ว</p>`;
    else if (deferredPrompt) h += `<button class="btn green block" data-act="install">📲 ติดตั้งแอปลงหน้าจอ</button>`;
    else if (ios) h += `<p class="mini">iPhone/iPad: กดปุ่มแชร์ ⬆️ ใน Safari แล้วเลือก "เพิ่มลงในหน้าจอโฮม"</p>`;
    else h += `<p class="mini">เมนูเบราว์เซอร์ (⋮) → "ติดตั้งแอป" หรือ "เพิ่มลงในหน้าจอหลัก"</p>`;
    h += `<div style="margin-top:10px"><button class="btn small ghost" data-act="checkUpdate">🔄 ตรวจสอบอัปเดต</button></div></div>`;
  }
  h += `<p class="mini" style="margin-top:12px">เวอร์ชัน ${APP_VERSION} <button class="btn small ghost" data-act="whatsNew" style="min-height:30px;padding:2px 12px">📋 มีอะไรใหม่</button></p><div class="sect"><button class="btn small danger" data-act="resetAll">🗑️ ล้างข้อมูลทั้งหมด</button></div>`;
  openSheetKeep(h);
}

/* ---------- แจ้งเตือน ---------- */
function reminderTarget(type) { return type === 'evening' ? 1 : 0; }
function fireReminder(type, force) {
  const k = kidOf(), d = addDays(startOfDay(new Date()), reminderTarget(type)), dk = dkey(d);
  const msg = type === 'evening' ? `🌙 ถึงเวลาเตรียมของสำหรับพรุ่งนี้ของ${S.kids.map(x => x.name).join(' และ')}` : `☀️ เช็คลิสต์ก่อนออกจากบ้านนะ ${S.kids.map(x => x.name).join(' และ')}`;
  const bar = $('#remind'); bar.dataset.when = type === 'evening' ? 'tomorrow' : 'today';
  $('#remindText').textContent = msg; bar.classList.remove('hidden');
  if ('Notification' in window && Notification.permission === 'granted') {
    try {
      if (typeof swReg !== 'undefined' && swReg && swReg.showNotification) swReg.showNotification('Kids Routine', { body: msg, icon: 'icon-192.png', tag: 'kr-' + type });
      else new Notification('Kids Routine', { body: msg });
    } catch (e) {}
  }
}
function checkReminders() {
  const now = new Date(), mins = now.getHours() * 60 + now.getMinutes(), today = dkey(now);
  ['evening', 'morning'].forEach(type => {
    const c = S.rem[type]; if (!c || !c.on) return;
    const [hh, mm] = String(c.time || '').split(':').map(Number); if (isNaN(hh)) return;
    const at = hh * 60 + (mm || 0), end = type === 'morning' ? 12 * 60 : 24 * 60;
    if (mins < at || mins >= end || S.remFired[type] === today) return;
    const d = addDays(startOfDay(now), reminderTarget(type));
    const needs = S.kids.some(k => { const items = S.check[k.id]; const dn = S.done[`${dkey(d)}|${k.id}`] || []; return items.length === 0 || !items.every(i => dn.includes(i)); });
    S.remFired[type] = today; save();
    if (needs) fireReminder(type);
  });
}

/* ---------- Events ---------- */
document.addEventListener('click', e => {
  const el = e.target.closest('[data-act]');
  if (el && A[el.dataset.act]) A[el.dataset.act](el, e);
});
document.addEventListener('change', e => {
  const t = e.target, c = t.dataset.change;
  if (!c) return;
  if (c === 'toggle') {
    const k = kidOf(), d = targetDate(), key = `${dkey(d)}|${k.id}`, item = S.check[k.id][+t.dataset.i];
    const arr = S.done[key] = S.done[key] || [], idx = arr.indexOf(item);
    if (t.checked && idx < 0) arr.push(item);
    if (!t.checked && idx >= 0) arr.splice(idx, 1);
    const items = S.check[k.id], complete = items.length > 0 && items.every(i => arr.includes(i));
    const has = S.stars[k.id].findIndex(s => s.t === 'auto' && s.d === dkey(d));
    let won = false, bonusMsg = '';
    if (complete && has < 0) { S.stars[k.id].push({ t: 'auto', c: 'auto', n: 1, d: dkey(d), note: '🎒 เตรียมของครบ ' + thDate(d), ts: Date.now() }); won = true;
      const n = streakAt(k.id, dkey(d)), bn = BONUS[n];
      if (bn && !S.stars[k.id].some(s => s.t === 'bonus' && s.d === dkey(d))) { S.stars[k.id].push({ t: 'bonus', c: 'bonus', n: bn, d: dkey(d), note: `🔥 โบนัสสตรีค ${n} วัน`, ts: Date.now() + 1 }); bonusMsg = `🔥 ติดกัน ${n} วัน! โบนัส +${bn} ⭐`; } }
    if (!complete && has >= 0) { S.stars[k.id].splice(has, 1); S.stars[k.id] = S.stars[k.id].filter(s => !(s.t === 'bonus' && s.d === dkey(d))); }
    save(); render(); if (won) burst(); if (bonusMsg) toast(bonusMsg);
  } else if (c === 'chore') {
    const k = kidOf(), tk = dkey(new Date()), ch = S.chores[k.id].find(x => x.id === t.dataset.id); if (!ch) return;
    const i = S.stars[k.id].findIndex(s => s.t === 'chore' && s.cid === ch.id && s.d === tk);
    if (t.checked && i < 0) { S.stars[k.id].push({ t: 'chore', c: 'chore', cid: ch.id, n: ch.stars, d: tk, note: '🧹 ' + ch.name, ts: Date.now() }); save(); render(); burst(); }
    else if (!t.checked && i >= 0) { S.stars[k.id].splice(i, 1); save(); render(); }
  } else if (c === 'todo') {
    const tt = S.todos.find(x => x.id === t.dataset.id); if (!tt) return;
    tt.done = t.checked; save(); render(); if (t.checked) toast('✅ ส่งแล้ว');
  } else if (c === 'remOn') { S.rem[t.dataset.t].on = t.checked; save(); if (t.checked) checkReminders(); }
  else if (c === 'remTime') { S.rem[t.dataset.t].time = t.value || S.rem[t.dataset.t].time; S.remFired[t.dataset.t] = ''; save(); }
});
document.addEventListener('input', e => {
  const t = e.target;
  if (t.dataset.b) { const [o, k] = t.dataset.b.split(':'), obj = OBJ(o); if (obj) obj[k] = t.value; }
  if (t.dataset.r) {
    const [o, arr, i, k] = t.dataset.r.split(':'), obj = OBJ(o);
    if (obj) { if (k) obj[arr][+i][k] = t.value; else obj[arr][+i] = t.value; }
  }
});
document.addEventListener('keydown', e => {
  if (e.key === 'Enter' && e.target.dataset && e.target.dataset.enter) { e.preventDefault(); A[e.target.dataset.enter](e.target); }
  if (e.key === 'Escape' && !$('#sheet').classList.contains('hidden')) closeSheet();
});
document.addEventListener('visibilitychange', () => { if (!document.hidden) checkReminders(); });
if (WEB_FILES) {
  $('#importFile').addEventListener('change', async e => {
    const f = e.target.files[0]; e.target.value = '';
    if (!f) return;
    try {
      const obj = JSON.parse(await f.text());
      if (!obj || !Array.isArray(obj.kids)) throw new Error('bad');
      ask('นำเข้าข้อมูลนี้? ข้อมูลปัจจุบันจะถูกแทนที่', () => { S = sanitize(obj); ui.kid = S.lastKid; save(); render(); toast('📥 นำเข้าข้อมูลแล้ว'); });
    } catch (err) { toast('ไฟล์ไม่ถูกต้อง'); }
  });
}

/* ---------- ตัวช่วย UI ---------- */
let toastT;
function toast(msg) {
  const t = $('#toast'); t.textContent = msg; t.classList.remove('hidden');
  clearTimeout(toastT); toastT = setTimeout(() => t.classList.add('hidden'), 2600);
}
function burst() {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const em = ['⭐', '🎉', '✨', '💖', '🌈'];
  for (let i = 0; i < 18; i++) {
    const s = document.createElement('span'); s.className = 'cf'; s.textContent = em[i % em.length];
    s.style.left = '50%'; s.style.top = '45%';
    s.style.setProperty('--dx', (Math.random() * 320 - 160) + 'px');
    s.style.setProperty('--dy', (Math.random() * -280 - 40) + 'px');
    s.style.setProperty('--rot', (Math.random() * 360 - 180) + 'deg');
    document.body.appendChild(s); setTimeout(() => s.remove(), 1400);
  }
}

/* ---------- PWA: ติดตั้ง + อัปเดต ---------- */
let deferredPrompt = null, swReg = null;
if (WEB_FILES) {
  window.addEventListener('beforeinstallprompt', e => { e.preventDefault(); deferredPrompt = e; });
  window.addEventListener('appinstalled', () => { deferredPrompt = null; toast('📲 ติดตั้งแล้ว'); });
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('sw.js').then(reg => {
        swReg = reg;
        if (reg.waiting && navigator.serviceWorker.controller) $('#updatebar').classList.remove('hidden');
        reg.addEventListener('updatefound', () => {
          const nw = reg.installing;
          nw && nw.addEventListener('statechange', () => {
            if (nw.state === 'installed' && navigator.serviceWorker.controller) $('#updatebar').classList.remove('hidden');
          });
        });
      }).catch(() => {});
      const upd = () => reg.update().catch(() => {});
      setInterval(upd, 30 * 60 * 1000);
      document.addEventListener('visibilitychange', () => { if (!document.hidden) upd(); });
      let reloaded = false;
      navigator.serviceWorker.addEventListener('controllerchange', () => { if (!reloaded) { reloaded = true; location.reload(); } });
    });
  }
}

function showWhatsNew(auto) {
  const list = auto ? CHANGELOG.slice(0, 1) : CHANGELOG;
  openSheet(`<h2>🎉 ${auto ? 'อัปเดตเป็นเวอร์ชัน ' + APP_VERSION + ' แล้ว' : 'มีอะไรใหม่'}</h2>` +
    list.map(([v, items]) => `<h3>v${esc(v)}</h3><ul style="margin:0 0 12px;padding-left:20px">${items.map(i => `<li>${esc(i)}</li>`).join('')}</ul>`).join('') +
    `<div class="row" style="margin-top:12px"><button class="btn grow" data-act="closeSheet">เข้าใจแล้ว</button></div>`);
}
function checkWhatsNew() {
  try {
    const seen = localStorage.getItem('kidsroutine.seen');
    localStorage.setItem('kidsroutine.seen', APP_VERSION);
    if (seen && seen !== APP_VERSION) showWhatsNew(true);
  } catch (e) {}
}
render();
checkWhatsNew();
checkReminders();
setInterval(checkReminders, 30000);
