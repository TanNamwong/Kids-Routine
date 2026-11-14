'use strict';
/* Kids Routine – เกมเรียนรู้ประจำวัน: คลังโจทย์ + ตัวสร้างชุดโจทย์ (ไทย / อังกฤษ / คณิต) */
const GAME_LEVELS = [
  { id: 0, name: 'อนุบาล', emoji: '🧸' },
  { id: 1, name: 'ป.1–2', emoji: '🎒' },
  { id: 2, name: 'ป.3–4', emoji: '📘' },
  { id: 3, name: 'ป.5–6', emoji: '🎓' }
];
const GAME_SUBJECTS = [
  { id: 'thai', name: 'ภาษาไทย', emoji: '📖', color: '#FFD3DE' },
  { id: 'english', name: 'English', emoji: '🔤', color: '#BDEBEE' },
  { id: 'math', name: 'คณิตศาสตร์', emoji: '🔢', color: '#FEE15A' }
];
const GQ = 5; // จำนวนข้อต่อชุด
const gStarsFor = score => score >= 5 ? 2 : score >= 3 ? 1 : 0;

const gr = n => Math.floor(Math.random() * n);
const gpick = a => a[gr(a.length)];
const gshuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = gr(i + 1); [a[i], a[j]] = [a[j], a[i]]; } return a; };

/* ข้อสอบแบบเลือกตอบ: correct = คำตอบ, pool = ตัวเลือกหลอก */
function mcq(id, t, e, correct, pool, x, extra) {
  correct = String(correct);
  const w = [];
  for (const p of gshuffle(pool.map(String))) { if (p !== correct && !w.includes(p)) { w.push(p); if (w.length === 3) break; } }
  if (w.length < 2) return null;
  const c = gshuffle([correct, ...w]);
  return Object.assign({ id, t, e: e || '', c, a: c.indexOf(correct), x: x || '', ch: -1 }, extra || {});
}
function numPool(c, sp) {
  const s = new Set(); let tries = 0;
  while (s.size < 6 && tries++ < 60) { const d = 1 + gr(sp); const v = c + (gr(2) ? d : -d); if (v !== c && v >= 0) s.add(v); }
  return [...s];
}
const ri = (a, b) => a + gr(b - a + 1);

/* ======================= คณิตศาสตร์ ======================= */
const MATH = {
  0: [
    () => { const n = ri(1, 10), em = gpick(['🍎', '⭐', '🐟', '🎈', '🍪', '🚗', '🐥']); return mcq('cnt' + em + n, 'นับดูสิ มีกี่ชิ้น?', em.repeat(n), n, numPool(n, 3), `นับได้ ${n} ชิ้น`); },
    () => { const a = ri(1, 8), b = ri(1, 10 - a); return mcq(`a${a}+${b}`, `${a} + ${b} = ?`, '', a + b, numPool(a + b, 3), `${a} บวก ${b} ได้ ${a + b}`); },
    () => { const a = ri(2, 10), b = ri(1, a - 1); return mcq(`s${a}-${b}`, `${a} − ${b} = ?`, '', a - b, numPool(a - b, 3), `${a} ลบ ${b} เหลือ ${a - b}`); },
    () => { const a = ri(1, 20); let b = ri(1, 20); if (a === b) b = a % 20 + 1; return mcq(`big${a}_${b}`, 'เลขไหนมากกว่ากัน?', '', Math.max(a, b), [Math.min(a, b), ri(1, 20), ri(1, 20), ri(1, 20)], `${Math.max(a, b)} มากกว่า ${Math.min(a, b)}`); },
    () => { const a = ri(1, 8); return mcq(`nx${a}`, `${a}, ${a + 1}, ${a + 2}, __`, '', a + 3, numPool(a + 3, 3), `ต่อจาก ${a + 2} คือ ${a + 3}`); }
  ],
  1: [
    () => { const a = ri(10, 39), b = ri(3, 19); return mcq(`a${a}+${b}`, `${a} + ${b} = ?`, '', a + b, numPool(a + b, 10), `${a} + ${b} = ${a + b}`); },
    () => { const a = ri(20, 60), b = ri(3, 19); return mcq(`s${a}-${b}`, `${a} − ${b} = ?`, '', a - b, numPool(a - b, 10), `${a} − ${b} = ${a - b}`); },
    () => { const a = gpick([2, 5, 10]), b = ri(1, 10); return mcq(`m${a}x${b}`, `${a} × ${b} = ?`, '', a * b, numPool(a * b, 10), `${a} × ${b} = ${a * b}`); },
    () => { const b = ri(3, 12), s = ri(b + 2, 25); return mcq(`miss${b}_${s}`, `□ + ${b} = ${s}`, '', s - b, numPool(s - b, 5), `${s} − ${b} = ${s - b}`); },
    () => { const a = ri(10, 99); let b = ri(10, 99); if (a === b) b++; const c = a > b ? '>' : '<'; return mcq(`cmp${a}_${b}`, `${a} ◯ ${b}`, '', c, ['>', '<', '='], `${a} ${c} ${b}`); },
    () => { const st = gpick([2, 5, 10]), s = ri(1, 4) * st; return mcq(`sk${st}_${s}`, `${s}, ${s + st}, ${s + 2 * st}, __`, '', s + 3 * st, numPool(s + 3 * st, st + 3), `เพิ่มทีละ ${st}`); },
    () => { const a = ri(5, 14), b = ri(3, 9), it = gpick(['ส้ม', 'ลูกโป่ง', 'ขนม', 'ดินสอ']); return mcq(`w1${a}${b}${it}`, `แม่ให้${it} ${a} ชิ้น พ่อให้อีก ${b} ชิ้น รวมมีกี่ชิ้น?`, '', a + b, numPool(a + b, 4), `${a} + ${b} = ${a + b}`); }
  ],
  2: [
    () => { const a = ri(2, 12), b = ri(2, 12); return mcq(`m${a}x${b}`, `${a} × ${b} = ?`, '', a * b, numPool(a * b, 12), `${a} × ${b} = ${a * b}`); },
    () => { const a = ri(2, 12), b = ri(2, 12); return mcq(`d${a * b}/${a}`, `${a * b} ÷ ${a} = ?`, '', b, numPool(b, 4), `${a} × ${b} = ${a * b}`); },
    () => { const a = ri(100, 799), b = ri(25, 190); return mcq(`a${a}+${b}`, `${a} + ${b} = ?`, '', a + b, numPool(a + b, 20), `${a} + ${b} = ${a + b}`); },
    () => { const a = ri(300, 999), b = ri(25, 250); return mcq(`s${a}-${b}`, `${a} − ${b} = ?`, '', a - b, numPool(a - b, 20), `${a} − ${b} = ${a - b}`); },
    () => { const n = ri(100, 999), pos = gpick([['หลักสิบ', 1], ['หลักร้อย', 0], ['หลักหน่วย', 2]]); const d = String(n)[pos[1]]; return mcq(`pv${n}${pos[0]}`, `เลข ${n} ${pos[0]}คือเลขอะไร?`, '', d, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], `${n} ${pos[0]}คือ ${d}`); },
    () => { const k = ri(3, 30); return mcq(`half${k}`, `ครึ่งหนึ่งของ ${2 * k} คือเท่าไร?`, '', k, numPool(k, 5), `${2 * k} ÷ 2 = ${k}`); },
    () => { let n = ri(11, 98); if (n % 10 === 5) n++; const r = Math.round(n / 10) * 10; return mcq(`rd${n}`, `${n} ปัดเป็นสิบที่ใกล้ที่สุดได้เท่าไร?`, '', r, [r + 10, r - 10, r + 20, r - 20, n], `${n} ใกล้ ${r} ที่สุด`); },
    () => { const a = ri(3, 9), b = ri(3, 9); return mcq(`w2${a}${b}`, `กล่องละ ${a} ชิ้น มี ${b} กล่อง รวมกี่ชิ้น?`, '', a * b, numPool(a * b, 8), `${a} × ${b} = ${a * b}`); },
    () => { const n = ri(10, 99); const even = n % 2 === 0; return mcq(`eo${n}`, `${n} เป็นเลขคู่หรือเลขคี่?`, '', even ? 'เลขคู่' : 'เลขคี่', ['เลขคู่', 'เลขคี่', 'ทั้งคู่', 'ไม่ใช่ทั้งสอง'], even ? 'ลงท้ายด้วยเลขคู่ หารสองลงตัว' : 'ลงท้ายด้วยเลขคี่ หารสองไม่ลงตัว'); }
  ],
  3: [
    () => { const a = ri(12, 25), b = ri(3, 9); return mcq(`m${a}x${b}`, `${a} × ${b} = ?`, '', a * b, numPool(a * b, 15), `${a} × ${b} = ${a * b}`); },
    () => { const b = ri(3, 9), q = ri(12, 99); return mcq(`d${b * q}/${b}`, `${b * q} ÷ ${b} = ?`, '', q, numPool(q, 8), `${b} × ${q} = ${b * q}`); },
    () => { const d = ri(5, 12), a = ri(1, d - 3), b = ri(1, d - a - 1); const c = `${a + b}/${d}`; return mcq(`fr${a}_${b}_${d}`, `${a}/${d} + ${b}/${d} = ?`, '', c, [`${a + b}/${d * 2}`, `${a + b + 1}/${d}`, `${a * b}/${d}`, `${a + b - 1}/${d}`], `ส่วนเท่ากัน บวกเศษ ${a} + ${b} = ${a + b}`); },
    () => { const p = gpick([10, 25, 50]), base = ri(1, 12) * 20; const r = base * p / 100; return mcq(`pc${p}_${base}`, `${p}% ของ ${base} คือเท่าไร?`, '', r, numPool(r, 10), `${base} × ${p} ÷ 100 = ${r}`); },
    () => { const x = ri(11, 90) / 10, y = ri(11, 90) / 10; const r = (x + y).toFixed(1); return mcq(`dc${x}_${y}`, `${x.toFixed(1)} + ${y.toFixed(1)} = ?`, '', r, [(x + y + 0.1).toFixed(1), (x + y - 0.1).toFixed(1), (x + y + 1).toFixed(1), (x + y - 1).toFixed(1)], `${x.toFixed(1)} + ${y.toFixed(1)} = ${r}`); },
    () => { const w = ri(3, 15), l = ri(w + 1, 20), area = gr(2); const r = area ? w * l : 2 * (w + l); return mcq(`ar${w}_${l}_${area}`, `สี่เหลี่ยมผืนผ้ากว้าง ${w} ยาว ${l} ${area ? 'มีพื้นที่เท่าไร?' : 'มีความยาวรอบรูปเท่าไร?'}`, '', r, numPool(r, 12), area ? `กว้าง × ยาว = ${w} × ${l} = ${r}` : `2 × (${w} + ${l}) = ${r}`); },
    () => { const a = ri(2, 20), b = ri(2, 9), c = ri(2, 9); return mcq(`op${a}_${b}_${c}`, `${a} + ${b} × ${c} = ?`, '', a + b * c, [(a + b) * c, a + b + c, a * b + c, a + b * c + 1], `คูณก่อนบวก: ${b} × ${c} = ${b * c} แล้วบวก ${a} = ${a + b * c}`); },
    () => { const a = ri(1200, 7800), b = ri(120, 990); return mcq(`a${a}+${b}`, `${a} + ${b} = ?`, '', a + b, numPool(a + b, 100), `${a} + ${b} = ${a + b}`); }
  ]
};

/* ======================= อังกฤษ ======================= */
// [emoji, english, ไทย, ระดับ 1-3]
const VOCAB = [
  ['🐶', 'dog', 'หมา', 1], ['🐱', 'cat', 'แมว', 1], ['🐟', 'fish', 'ปลา', 1], ['🐦', 'bird', 'นก', 1], ['🐘', 'elephant', 'ช้าง', 2],
  ['🐄', 'cow', 'วัว', 1], ['🐷', 'pig', 'หมู', 1], ['🐔', 'chicken', 'ไก่', 2], ['🦆', 'duck', 'เป็ด', 1], ['🐸', 'frog', 'กบ', 1],
  ['🐒', 'monkey', 'ลิง', 2], ['🐯', 'tiger', 'เสือ', 2], ['🦁', 'lion', 'สิงโต', 2], ['🐴', 'horse', 'ม้า', 1], ['🐰', 'rabbit', 'กระต่าย', 2],
  ['🐢', 'turtle', 'เต่า', 2], ['🦋', 'butterfly', 'ผีเสื้อ', 3], ['🐝', 'bee', 'ผึ้ง', 1], ['🐜', 'ant', 'มด', 1], ['🕷️', 'spider', 'แมงมุม', 3],
  ['🐻', 'bear', 'หมี', 1], ['🦒', 'giraffe', 'ยีราฟ', 3], ['🐊', 'crocodile', 'จระเข้', 3], ['🐍', 'snake', 'งู', 1], ['🐙', 'octopus', 'ปลาหมึก', 3], ['🦈', 'shark', 'ฉลาม', 2],
  ['🍎', 'apple', 'แอปเปิล', 1], ['🍌', 'banana', 'กล้วย', 1], ['🍊', 'orange', 'ส้ม', 1], ['🍇', 'grapes', 'องุ่น', 2], ['🍉', 'watermelon', 'แตงโม', 3],
  ['🍓', 'strawberry', 'สตรอว์เบอร์รี', 3], ['🍍', 'pineapple', 'สับปะรด', 3], ['🥕', 'carrot', 'แครอท', 2], ['🌽', 'corn', 'ข้าวโพด', 1],
  ['🥚', 'egg', 'ไข่', 1], ['🍚', 'rice', 'ข้าว', 1], ['🥛', 'milk', 'นม', 1], ['💧', 'water', 'น้ำ', 1], ['🍞', 'bread', 'ขนมปัง', 1],
  ['🍪', 'cookie', 'คุกกี้', 2], ['🍦', 'ice cream', 'ไอศกรีม', 2], ['🍕', 'pizza', 'พิซซ่า', 1], ['🍔', 'hamburger', 'แฮมเบอร์เกอร์', 3], ['🎂', 'cake', 'เค้ก', 1],
  ['☀️', 'sun', 'ดวงอาทิตย์', 1], ['🌙', 'moon', 'ดวงจันทร์', 1], ['⭐', 'star', 'ดาว', 1], ['🌧️', 'rain', 'ฝน', 1], ['☁️', 'cloud', 'เมฆ', 2],
  ['🌈', 'rainbow', 'รุ้ง', 3], ['⛰️', 'mountain', 'ภูเขา', 3], ['🌳', 'tree', 'ต้นไม้', 1], ['🌸', 'flower', 'ดอกไม้', 2],
  ['🏠', 'house', 'บ้าน', 1], ['🏫', 'school', 'โรงเรียน', 2], ['🏥', 'hospital', 'โรงพยาบาล', 3], ['🛏️', 'bed', 'เตียง', 1], ['🪑', 'chair', 'เก้าอี้', 2],
  ['🚪', 'door', 'ประตู', 1], ['🪟', 'window', 'หน้าต่าง', 3], ['🕐', 'clock', 'นาฬิกา', 2],
  ['🚗', 'car', 'รถยนต์', 1], ['🚌', 'bus', 'รถบัส', 1], ['✈️', 'airplane', 'เครื่องบิน', 3], ['🚲', 'bicycle', 'จักรยาน', 3], ['🚢', 'ship', 'เรือ', 2],
  ['🚒', 'fire truck', 'รถดับเพลิง', 3], ['🚓', 'police car', 'รถตำรวจ', 3],
  ['📖', 'book', 'หนังสือ', 1], ['✏️', 'pencil', 'ดินสอ', 2], ['🎒', 'bag', 'กระเป๋า', 1], ['🧑‍🏫', 'teacher', 'ครู', 2], ['⚽', 'ball', 'ลูกบอล', 1], ['🎈', 'balloon', 'ลูกโป่ง', 3],
  ['👕', 'shirt', 'เสื้อ', 1], ['👟', 'shoe', 'รองเท้า', 1], ['🎩', 'hat', 'หมวก', 1],
  ['👁️', 'eye', 'ตา', 1], ['👂', 'ear', 'หู', 1], ['👃', 'nose', 'จมูก', 1], ['👄', 'mouth', 'ปาก', 1], ['✋', 'hand', 'มือ', 1], ['🦶', 'foot', 'เท้า', 1], ['🦷', 'tooth', 'ฟัน', 2],
  ['🔴', 'red', 'สีแดง', 1], ['🔵', 'blue', 'สีน้ำเงิน', 1], ['🟢', 'green', 'สีเขียว', 1], ['🟡', 'yellow', 'สีเหลือง', 1], ['⚫', 'black', 'สีดำ', 1], ['⚪', 'white', 'สีขาว', 1]
];
const NUMW = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];
const EDAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const ESENT = [ // [ประโยค, คำตอบ, [ตัวหลอก], ระดับ]
  ['I ___ a boy.', 'am', ['is', 'are', 'be'], 1], ['She ___ my sister.', 'is', ['am', 'are', 'be'], 1], ['They ___ happy.', 'are', ['is', 'am', 'be'], 1],
  ['What ___ your name?', 'is', ['are', 'am', 'do'], 1], ['How ___ you?', 'are', ['is', 'am', 'be'], 1], ['The sun is ___.', 'hot', ['cold', 'wet', 'sad'], 1],
  ['A fish can ___.', 'swim', ['fly', 'run', 'climb'], 1], ['A bird can ___.', 'fly', ['drive', 'cook', 'read'], 1], ['I have ___ egg.', 'an', ['a', 'is', 'are'], 1],
  ['I ___ an apple every day.', 'eat', ['eats', 'eating', 'ate'], 2], ['He ___ to school by bus.', 'goes', ['go', 'going', 'gone'], 2], ['There are three ___ in the box.', 'cats', ['cat', 'cates', 'catting'], 2],
  ['My mother ___ cooking now.', 'is', ['are', 'am', 'be'], 2], ['I brush my ___ every morning.', 'teeth', ['hands', 'eyes', 'shoes'], 2], ['We use a pen to ___.', 'write', ['eat', 'swim', 'sleep'], 2],
  ['Today is Monday. Tomorrow is ___.', 'Tuesday', ['Sunday', 'Friday', 'Saturday'], 2], ['There ___ two books on the desk.', 'are', ['is', 'am', 'be'], 2], ['It is raining, so I take an ___.', 'umbrella', ['apple', 'elephant', 'orange'], 2],
  ['We ___ football yesterday.', 'played', ['play', 'plays', 'playing'], 3], ['She ___ a new dress yesterday.', 'bought', ['buy', 'buys', 'buying'], 3], ['He is taller ___ me.', 'than', ['then', 'that', 'the'], 3],
  ['I am ___ than my brother.', 'taller', ['tallest', 'more tall', 'tall'], 3], ['She can ___ English very well.', 'speak', ['speaks', 'speaking', 'spoke'], 3]
];
const vpool = lv => VOCAB.filter(v => lv === 0 ? v[3] === 1 : lv === 1 ? v[3] <= 2 : lv === 2 ? true : v[3] >= 2);
function misspell(w) {
  const o = new Set(); let t = 0;
  while (o.size < 3 && t++ < 40) {
    const i = gr(w.length - 1), k = gr(3); let m;
    if (k === 0) m = w.slice(0, i) + w[i + 1] + w[i] + w.slice(i + 2);
    else if (k === 1) m = w.slice(0, i) + w.slice(i + 1);
    else m = w.slice(0, i) + w[i] + w.slice(i);
    if (m !== w && m.length > 2) o.add(m);
  }
  return [...o];
}
const sp = (txt, lang) => ({ sp: { txt, lang } });
const ENG = {
  e2n: lv => { const p = vpool(lv), v = gpick(p); return mcq('e2n' + v[1], 'รูปนี้ภาษาอังกฤษคืออะไร?', v[0], v[1], p.map(x => x[1]), `${v[1]} = ${v[2]}`, sp(v[1], 'en-US')); },
  n2t: lv => { const p = vpool(lv), v = gpick(p); return mcq('n2t' + v[1], `"${v[1]}" แปลว่าอะไร?`, v[0], v[2], p.map(x => x[2]), `${v[1]} = ${v[2]}`, sp(v[1], 'en-US')); },
  t2n: lv => { const p = vpool(lv), v = gpick(p); return mcq('t2n' + v[1], `"${v[2]}" ภาษาอังกฤษคือคำไหน?`, '', v[1], p.map(x => x[1]), `${v[2]} = ${v[1]}`, sp(v[1], 'en-US')); },
  spell: lv => { const p = vpool(lv).filter(v => !v[1].includes(' ') && v[1].length >= 4), v = gpick(p); return mcq('sp' + v[1], 'เลือกคำที่สะกดถูก', v[0], v[1], misspell(v[1]), `สะกดว่า ${v[1]}`, sp(v[1], 'en-US')); },
  sent: lv => { const p = ESENT.filter(s => lv <= 1 ? s[3] === 1 : lv === 2 ? s[3] <= 2 : s[3] >= 2), s = gpick(p); return mcq('es' + s[0], s[0], '', s[1], s[2], `${s[0].replace('___', s[1])}`); },
  numw: (mx = 20) => { const n = ri(1, mx); return mcq('nw' + n, `เลข ${n} ภาษาอังกฤษคือ?`, '', NUMW[n], NUMW.slice(1, Math.max(mx, 6) + 1), `${n} = ${NUMW[n]}`, sp(NUMW[n], 'en-US')); },
  numd: () => { const n = ri(1, 20); return mcq('nd' + n, `"${NUMW[n]}" คือเลขอะไร?`, '', n, numPool(n, 4), `${NUMW[n]} = ${n}`, sp(NUMW[n], 'en-US')); },
  alpha: () => { const i = ri(0, 24), L = String.fromCharCode(65 + i); return mcq('al' + L, `ตัวอักษรอะไรมาต่อจาก ${L} ?`, '', String.fromCharCode(66 + i), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''), `ต่อจาก ${L} คือ ${String.fromCharCode(66 + i)}`); },
  lower: () => { const i = ri(0, 25), L = String.fromCharCode(65 + i); return mcq('lw' + L, `ตัวพิมพ์เล็กของ ${L} คือตัวไหน?`, '', L.toLowerCase(), 'abcdefghijklmnopqrstuvwxyz'.split(''), `${L} = ${L.toLowerCase()}`); },
  dayafter: () => { const i = gr(7), after = gr(2); const d = EDAYS[(i + (after ? 1 : 6)) % 7]; return mcq('da' + EDAYS[i] + after, `What day comes ${after ? 'after' : 'before'} ${EDAYS[i]}?`, '', d, EDAYS, `${after ? 'หลัง' : 'ก่อน'}วัน ${EDAYS[i]} คือ ${d}`, sp(d, 'en-US')); }
};
const ENG_LEVELS = {
  0: [() => ENG.e2n(0), () => ENG.n2t(0), () => ENG.t2n(0), () => ENG.alpha(), () => ENG.lower(), () => ENG.numw(10)],
  1: [() => ENG.e2n(1), () => ENG.n2t(1), () => ENG.t2n(1), () => ENG.numw(), () => ENG.sent(1), () => ENG.alpha()],
  2: [() => ENG.e2n(2), () => ENG.n2t(2), () => ENG.t2n(2), () => ENG.spell(2), () => ENG.sent(2), () => ENG.dayafter(), () => ENG.numd()],
  3: [() => ENG.n2t(3), () => ENG.t2n(3), () => ENG.e2n(3), () => ENG.spell(3), () => ENG.sent(3), () => ENG.sent(3), () => ENG.dayafter(), () => ENG.numd()]
};

/* ======================= ภาษาไทย ======================= */
// [พยัญชนะ, คำที่ขึ้นต้นด้วยพยัญชนะนั้นจริง ๆ, emoji]
const CONS = [
  ['ก', 'ไก่', '🐔'], ['ข', 'ไข่', '🥚'], ['ค', 'ควาย', '🐃'], ['ง', 'งู', '🐍'], ['จ', 'จาน', '🍽️'], ['ช', 'ช้าง', '🐘'], ['ซ', 'โซ่', '⛓️'],
  ['ด', 'เด็ก', '🧒'], ['ต', 'เต่า', '🐢'], ['ถ', 'ถุง', '🛍️'], ['ท', 'ทหาร', '🪖'], ['ธ', 'ธง', '🚩'], ['น', 'นก', '🐦'], ['บ', 'บ้าน', '🏠'],
  ['ป', 'ปลา', '🐟'], ['ผ', 'ผึ้ง', '🐝'], ['ฝ', 'ฝา', ''], ['ฟ', 'ฟัน', '🦷'], ['ม', 'ม้า', '🐴'], ['ย', 'ยักษ์', '👹'], ['ร', 'เรือ', '🚢'],
  ['ล', 'ลิง', '🐒'], ['ว', 'วัว', '🐄'], ['ศ', 'ศาลา', ''], ['ส', 'เสือ', '🐯'], ['ห', 'หมา', '🐶'], ['อ', 'อ่าง', '']
];
const TALPHA = 'ก ข ฃ ค ฅ ฆ ง จ ฉ ช ซ ฌ ญ ฎ ฏ ฐ ฑ ฒ ณ ด ต ถ ท ธ น บ ป ผ ฝ พ ฟ ภ ม ย ร ล ว ศ ษ ส ห ฬ อ ฮ'.split(' ');
const TDIGIT = '๐๑๒๓๔๕๖๗๘๙';
const toThaiNum = n => String(n).split('').map(c => TDIGIT[+c]).join('');
const TDAYS = ['อาทิตย์', 'จันทร์', 'อังคาร', 'พุธ', 'พฤหัสบดี', 'ศุกร์', 'เสาร์'];
const TMONTHS = ['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน', 'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'];
const OPP = [['ใหญ่', 'เล็ก'], ['ร้อน', 'เย็น'], ['สูง', 'ต่ำ'], ['ยาว', 'สั้น'], ['หนัก', 'เบา'], ['เร็ว', 'ช้า'], ['อ้วน', 'ผอม'], ['ขึ้น', 'ลง'],
  ['เปิด', 'ปิด'], ['เข้า', 'ออก'], ['หัวเราะ', 'ร้องไห้'], ['สว่าง', 'มืด'], ['แข็ง', 'นิ่ม'], ['เก่า', 'ใหม่'], ['ใกล้', 'ไกล'], ['หวาน', 'ขม'],
  ['ง่าย', 'ยาก'], ['ซื้อ', 'ขาย'], ['รัก', 'เกลียด'], ['เช้า', 'เย็น'], ['เต็ม', 'ว่าง'], ['แห้ง', 'เปียก'], ['สะอาด', 'สกปรก'], ['หนา', 'บาง'],
  ['กว้าง', 'แคบ'], ['ถูก', 'แพง'], ['ชนะ', 'แพ้'], ['มาก', 'น้อย'], ['ซ้าย', 'ขวา'], ['หน้า', 'หลัง'], ['บน', 'ล่าง'], ['กลางวัน', 'กลางคืน'], ['ตื่น', 'หลับ']];
const ODD = {
  'สัตว์': ['ช้าง', 'ม้า', 'ปลา', 'นก', 'เสือ', 'วัว', 'กบ'],
  'ผลไม้': ['มะม่วง', 'กล้วย', 'ส้ม', 'องุ่น', 'แตงโม', 'ทุเรียน'],
  'ยานพาหนะ': ['รถยนต์', 'เรือ', 'เครื่องบิน', 'รถไฟ', 'จักรยาน', 'รถเมล์'],
  'เครื่องแต่งกาย': ['เสื้อ', 'กางเกง', 'รองเท้า', 'หมวก', 'ถุงเท้า'],
  'อวัยวะ': ['มือ', 'เท้า', 'ตา', 'หู', 'จมูก', 'ปาก'],
  'เครื่องเขียน': ['ดินสอ', 'ปากกา', 'ยางลบ', 'ไม้บรรทัด', 'สมุด']
};
const SYN = [['พ่อ', 'บิดา'], ['แม่', 'มารดา'], ['หมา', 'สุนัข'], ['สวย', 'งาม'], ['ดีใจ', 'ยินดี'], ['ใหญ่', 'โต'], ['เร็ว', 'ไว'], ['บ้าน', 'เรือน'],
  ['ภูเขา', 'เขา'], ['พระจันทร์', 'เดือน'], ['พระอาทิตย์', 'ตะวัน'], ['ถนน', 'หนทาง'], ['เก่ง', 'ฉลาด']];
const TSENT = [ // [ประโยค, คำตอบ, [ตัวหลอก], ระดับ]
  ['เรา___น้ำเมื่อรู้สึกกระหาย', 'ดื่ม', ['เดิน', 'วิ่ง', 'นอน'], 1], ['ฝนตก เราต้อง___ร่ม', 'กาง', ['กิน', 'ร้อง', 'นอน'], 1],
  ['ตอนเช้าเราต้อง___ฟัน', 'แปรง', ['ซัก', 'หั่น', 'เตะ'], 1], ['นกบินอยู่บน___', 'ท้องฟ้า', ['ถนน', 'โต๊ะ', 'เตียง'], 1],
  ['ปลาอาศัยอยู่ใน___', 'น้ำ', ['ต้นไม้', 'ภูเขา', 'เตียง'], 1], ['เรา___หนังสือเพื่อเรียนรู้', 'อ่าน', ['ขับ', 'เตะ', 'ปีน'], 1],
  ['ก่อนกินข้าวต้อง___มือ', 'ล้าง', ['ตัด', 'ปา', 'เผา'], 1], ['ตอนกลางคืนเรา___เพื่อพักผ่อน', 'นอน', ['วิ่ง', 'ว่าย', 'ขุด'], 1],
  ['แมวชอบจับ___', 'หนู', ['ช้าง', 'ปลาวาฬ', 'เสือ'], 1], ['ช้างมี___ยาว', 'งวง', ['ปีก', 'เกล็ด', 'หนาม'], 1],
  ['ดวงอาทิตย์ขึ้นทาง___', 'ทิศตะวันออก', ['ทิศตะวันตก', 'ทิศเหนือ', 'ทิศใต้'], 2], ['ไฟจราจรเป็นสีแดง เราต้อง___', 'หยุด', ['วิ่ง', 'แซง', 'เร่งเครื่อง'], 2],
  ['พบผู้ใหญ่ เราควร___ทักทาย', 'ไหว้', ['ตี', 'แกล้ง', 'วิ่งหนี'], 2], ['เมื่อทำผิด เราต้อง___', 'ขอโทษ', ['โกหก', 'หนี', 'ตี'], 2],
  ['เราใช้หูในการ___', 'ฟัง', ['ดม', 'มอง', 'ชิม'], 2], ['เราใช้จมูกในการ___', 'ดมกลิ่น', ['ฟังเสียง', 'มองเห็น', 'ชิมรส'], 2],
  ['ผึ้งช่วยทำ___', 'น้ำผึ้ง', ['น้ำมัน', 'น้ำแข็ง', 'น้ำปลา'], 2], ['คุณครูสอนนักเรียนที่___', 'โรงเรียน', ['ทะเล', 'สวนสัตว์', 'ตลาด'], 2],
  ['หนึ่งสัปดาห์มี___วัน', '7', ['5', '10', '12'], 2], ['เมืองหลวงของประเทศไทยคือ___', 'กรุงเทพมหานคร', ['เชียงใหม่', 'ภูเก็ต', 'ขอนแก่น'], 3],
  ['สัตว์ที่ออกลูกเป็นไข่ เช่น___', 'ไก่', ['วัว', 'ช้าง', 'แมว'], 3], ['ประเทศไทยมี 3 ฤดู คือ ร้อน ฝน และ___', 'หนาว', ['ใบไม้ผลิ', 'ใบไม้ร่วง', 'หิมะ'], 3]
];
const tvpool = lv => VOCAB.filter(v => lv <= 0 ? v[3] === 1 : v[3] <= 2);
const THAI = {
  vocab: lv => { const p = tvpool(lv), v = gpick(p); return mcq('tv' + v[2], 'รูปนี้คืออะไร?', v[0], v[2].replace('สี', ''), p.map(x => x[2].replace('สี', '')), `คือ ${v[2]}`); },
  initEmoji: () => { const p = CONS.filter(c => c[2]), c = gpick(p); return mcq('ie' + c[1], `${c[1]} ขึ้นต้นด้วยพยัญชนะอะไร?`, c[2], c[0], CONS.map(x => x[0]), `${c[1]} ขึ้นต้นด้วย ${c[0]}`); },
  init: () => { const c = gpick(CONS); return mcq('in' + c[1], `"${c[1]}" ขึ้นต้นด้วยพยัญชนะอะไร?`, c[2], c[0], CONS.map(x => x[0]), `${c[1]} ขึ้นต้นด้วย ${c[0]}`); },
  consWord: () => { const c = gpick(CONS); return mcq('cw' + c[0], `คำไหนขึ้นต้นด้วยพยัญชนะ "${c[0]}"?`, '', c[1], CONS.map(x => x[1]), `${c[1]} ขึ้นต้นด้วย ${c[0]}`); },
  consEmoji: () => { const p = CONS.filter(c => c[2]), c = gpick(p); return mcq('ce' + c[0], `พยัญชนะ "${c[0]}" คู่กับคำไหน?`, '', c[1], p.map(x => x[1]), `${c[0]} ${c[1]}`); },
  next: () => { const i = ri(0, TALPHA.length - 2); return mcq('nx' + TALPHA[i], `พยัญชนะตัวถัดไปจาก "${TALPHA[i]}" คือตัวไหน?`, '', TALPHA[i + 1], TALPHA, `เรียงลำดับ ${TALPHA[i]} แล้วต่อด้วย ${TALPHA[i + 1]}`); },
  num1: () => { const n = ri(1, 9), tha = gr(2); return tha ? mcq('tn' + n, `เลขไทย ${toThaiNum(n)} คือเลขอะไร?`, '', n, [1, 2, 3, 4, 5, 6, 7, 8, 9], `${toThaiNum(n)} = ${n}`) : mcq('ta' + n, `เลข ${n} เขียนเป็นเลขไทยว่าอย่างไร?`, '', toThaiNum(n), [1, 2, 3, 4, 5, 6, 7, 8, 9].map(toThaiNum), `${n} = ${toThaiNum(n)}`); },
  num2: () => { const n = ri(10, 99), tha = gr(2); return tha ? mcq('tn' + n, `เลขไทย ${toThaiNum(n)} คือเลขอะไร?`, '', n, numPool(n, 12), `${toThaiNum(n)} = ${n}`) : mcq('ta' + n, `เลข ${n} เขียนเป็นเลขไทยว่าอย่างไร?`, '', toThaiNum(n), numPool(n, 12).map(toThaiNum), `${n} = ${toThaiNum(n)}`); },
  day: () => { const i = gr(7), a = gr(2), d = TDAYS[(i + (a ? 1 : 6)) % 7]; return mcq('td' + i + a, `วัน${a ? 'หลัง' : 'ก่อน'}วัน${TDAYS[i]}คือวันอะไร?`, '', 'วัน' + d, TDAYS.map(x => 'วัน' + x), `${a ? 'ถัดจาก' : 'ก่อนหน้า'}วัน${TDAYS[i]}คือวัน${d}`); },
  month: () => { const i = gr(12), a = gr(2), m = TMONTHS[(i + (a ? 1 : 11)) % 12]; return mcq('tm' + i + a, `เดือน${a ? 'หลัง' : 'ก่อน'}เดือน${TMONTHS[i]}คือเดือนอะไร?`, '', m, TMONTHS, `${a ? 'ถัดจาก' : 'ก่อนหน้า'}เดือน${TMONTHS[i]}คือเดือน${m}`); },
  opp: n => { const p = n ? OPP.slice(0, 20) : OPP, pr = gpick(p), f = gr(2), a = pr[f], b = pr[1 - f]; return mcq('op' + a + b, `คำตรงข้ามของ "${a}" คือคำไหน?`, '', b, p.flat().filter(x => x !== a), `${a} ตรงข้ามกับ ${b}`); },
  odd: () => { const ks = gshuffle(Object.keys(ODD)), A = ks[0], B = ks[1]; const three = gshuffle(ODD[A]).slice(0, 3), one = gpick(ODD[B]); const c = gshuffle([...three, one]); return { id: 'od' + c.slice().sort().join(), t: 'ข้อใดไม่เข้าพวก?', e: '', c, a: c.indexOf(one), x: `${one} เป็น${B} ส่วนคำอื่นเป็น${A}`, ch: -1 }; },
  syn: () => { const pr = gpick(SYN), f = gr(2), a = pr[f], b = pr[1 - f]; return mcq('sy' + a + b, `คำไหนมีความหมายเหมือน "${a}"?`, '', b, SYN.flat().filter(x => x !== a && x !== b), `${a} มีความหมายเหมือน ${b}`); },
  sent: lv => { const p = TSENT.filter(s => lv <= 1 ? s[3] === 1 : lv === 2 ? s[3] <= 2 : s[3] >= 2), s = gpick(p); return mcq('ts' + s[0], 'เติมคำให้ถูกต้อง: ' + s[0].replace('___', ' ____ '), '', s[1], s[2], s[0].replace('___', s[1])); }
};
const THAI_LEVELS = {
  0: [() => THAI.vocab(0), () => THAI.vocab(1), () => THAI.initEmoji(), () => THAI.consEmoji(), () => THAI.num1()],
  1: [() => THAI.init(), () => THAI.consWord(), () => THAI.num1(), () => THAI.next(), () => THAI.day(), () => THAI.opp(1), () => THAI.vocab(1), () => THAI.sent(1)],
  2: [() => THAI.init(), () => THAI.opp(0), () => THAI.odd(), () => THAI.sent(2), () => THAI.day(), () => THAI.month(), () => THAI.num2(), () => THAI.next()],
  3: [() => THAI.opp(0), () => THAI.odd(), () => THAI.syn(), () => THAI.sent(3), () => THAI.sent(3), () => THAI.month(), () => THAI.num2()]
};
const MATH_LEVELS = MATH;

/* ======================= ตัวสร้างชุดโจทย์ (ไม่ซ้ำกับที่เคยเล่น) ======================= */
function genSet(subj, level, seenArr) {
  const seen = new Set(seenArr || []);
  const gens = ({ thai: THAI_LEVELS, english: ENG_LEVELS, math: MATH_LEVELS })[subj][level];
  const out = [], ids = new Set();
  let order = gshuffle(gens), k = 0, attempts = 0;
  while (out.length < GQ && attempts < 400) {
    attempts++;
    if (k >= order.length) { order = gshuffle(gens); k = 0; }
    let q = null;
    try { q = order[k++](); } catch (e) { q = null; }
    if (!q || ids.has(q.id)) continue;
    if (seen.has(q.id) && attempts < 250) continue;   // พยายามเลี่ยงข้อที่เคยเจอก่อน
    ids.add(q.id); out.push(q);
  }
  return out;
}
