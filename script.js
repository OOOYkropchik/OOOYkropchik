'use strict';
/* ===== Укропчик — общий скрипт (без фреймворков) ===== */

/* ---------- иконки (набор Lucide, встроен в код) ---------- */
const ICONS = {
  'arrow-right': '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
  'arrow-down-right': '<path d="m7 7 10 10"/><path d="M17 7v10H7"/>',
  'leaf': '<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>',
  'calculator': '<rect width="16" height="20" x="4" y="2" rx="2"/><line x1="8" x2="16" y1="6" y2="6"/><line x1="16" x2="16" y1="14" y2="18"/><path d="M16 10h.01"/><path d="M12 10h.01"/><path d="M8 10h.01"/><path d="M12 14h.01"/><path d="M8 14h.01"/><path d="M12 18h.01"/><path d="M8 18h.01"/>',
  'scale': '<path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="M7 21h10"/><path d="M12 3v18"/><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"/>',
  'calendar-days': '<path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/><path d="M16 18h.01"/>',
  'chevron-right': '<path d="m9 18 6-6-6-6"/>',
  'check': '<path d="M20 6 9 17l-5-5"/>',
  'plus': '<path d="M5 12h14"/><path d="M12 5v14"/>',
  'x': '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
  'book-open': '<path d="M12 7v14"/><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"/>',
  'heart': '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>',
  'utensils': '<path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/>',
  'sprout': '<path d="M7 20h10"/><path d="M10 20c5.5-2.5.8-6.4 3-10"/><path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z"/><path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z"/>',
  'info': '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>',
  'rotate-ccw': '<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/>',
  'menu': '<path d="M4 12h16"/><path d="M4 6h16"/><path d="M4 18h16"/>',
  'user-round': '<circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 0 0-16 0"/>',
  'log-out': '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="m16 17 5-5-5-5"/><path d="M21 12H9"/>',
  'save': '<path d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"/><path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"/><path d="M7 3v4a1 1 0 0 0 1 1h7"/>',
  'circle-user-round': '<path d="M18 20a6 6 0 0 0-12 0"/><circle cx="12" cy="10" r="4"/><circle cx="12" cy="12" r="10"/>',
  'phone': '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>',
  'mail': '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>'
};
function ic(name, size = 16) {
  return `<svg class="icon" xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name] || ''}</svg>`;
}
/* заменяет <i data-icon="leaf" data-size="20"></i> на SVG */
function hydrateIcons(root = document) {
  root.querySelectorAll('i[data-icon]').forEach(el => {
    el.outerHTML = ic(el.dataset.icon, Number(el.dataset.size) || 16);
  });
}
const $ = (sel, root = document) => root.querySelector(sel);
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const fmtRu = n => n.toLocaleString('ru-RU');

/* ---------- локальные «аккаунты» (учебная замена Clerk) ---------- */
const USERS_KEY = 'ukropchik-users';
const SESSION_KEY = 'ukropchik-session';
function readJSON(key, fallback) {
  try { const raw = localStorage.getItem(key); return raw ? JSON.parse(raw) : fallback; } catch { return fallback; }
}
function getUsers() { return readJSON(USERS_KEY, {}); }
function saveUsers(users) { try { localStorage.setItem(USERS_KEY, JSON.stringify(users)); } catch {} }
function currentUser() {
  let email = null;
  try { email = localStorage.getItem(SESSION_KEY); } catch {}
  const u = email && getUsers()[email];
  return u ? { email, name: u.name } : null;
}
function signOut() { try { localStorage.removeItem(SESSION_KEY); } catch {} location.href = 'index.html'; }
async function hashPassword(pw) {
  if (window.crypto && crypto.subtle) {
    const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(pw));
    return [...new Uint8Array(buf)].map(b => b.toString(16).padStart(2, '0')).join('');
  }
  let h = 0; for (const ch of pw) h = (h * 31 + ch.charCodeAt(0)) | 0;
  return 'x' + h;
}

/* ---------- шапка и подвал ---------- */
const NAV = [
  { href: 'index.html', label: 'Главная', icon: 'sprout', key: 'home' },
  { href: 'calculator.html', label: 'Калькуляторы', icon: 'calculator', key: 'calculator' },
  { href: 'compare.html', label: 'Сравнить продукты', icon: 'scale', key: 'compare' },
  { href: 'planner.html', label: 'План питания', icon: 'calendar-days', key: 'planner' }
];
function renderShell() {
  const page = document.body.dataset.page || '';
  const user = currentUser();
  const header = $('#site-header');
  if (header) {
    const links = NAV.map(n => `<a class="nav-link${page === n.key ? ' active' : ''}" href="${n.href}">${n.label}</a>`).join('');
    const auth = user
      ? `<a class="btn-soft btn-sm" href="profile.html">${ic('circle-user-round')} Профиль</a><button type="button" class="icon-btn" id="btn-signout" aria-label="Выйти" title="Выйти">${ic('log-out', 18)}</button>`
      : `<a class="link-pill" href="sign-in.html">Войти</a><a class="btn-primary btn-sm" href="sign-up.html">Регистрация ${ic('arrow-right')}</a>`;
    const mobileAuth = user
      ? `<a class="m-accent" href="profile.html">${ic('circle-user-round', 18)} Профиль</a><button type="button" class="m-muted" id="btn-signout-m">${ic('log-out', 18)} Выйти</button>`
      : `<a class="m-accent" href="sign-in.html">${ic('user-round', 18)} Войти</a><a class="m-accent" href="sign-up.html">${ic('sprout', 18)} Создать аккаунт</a>`;
    header.className = 'site-header';
    header.innerHTML = `
      <div class="page-wrap header-row">
        <a class="brand" href="index.html"><span class="leaf-mark">${ic('leaf', 20)}</span><span class="brand-display brand-name">укропчик<span>.</span></span></a>
        <nav class="main-nav" aria-label="Основная навигация">${links}</nav>
        <div class="header-auth">${auth}</div>
        <button type="button" class="burger" id="btn-burger" aria-label="Открыть меню">${ic('menu', 22)}</button>
      </div>
      <nav class="page-wrap mobile-nav" id="mobile-nav" aria-label="Мобильная навигация">
        ${NAV.map(n => `<a href="${n.href}">${ic(n.icon, 18)}${n.label}</a>`).join('')}${mobileAuth}
      </nav>`;
    const burger = $('#btn-burger'), mnav = $('#mobile-nav');
    burger.addEventListener('click', () => {
      const open = mnav.classList.toggle('open');
      burger.innerHTML = ic(open ? 'x' : 'menu', 22);
      burger.setAttribute('aria-label', open ? 'Закрыть меню' : 'Открыть меню');
    });
    const so = $('#btn-signout'), som = $('#btn-signout-m');
    if (so) so.addEventListener('click', signOut);
    if (som) som.addEventListener('click', signOut);
  }
  const footer = $('#site-footer');
  if (footer) {
    footer.className = 'site-footer';
    footer.innerHTML = `
      <div class="page-wrap footer-grid">
        <div>
          <div class="footer-brand"><span class="logo-sq">${ic('leaf', 19)}</span><strong class="brand-display">укропчик.</strong></div>
          <p class="footer-text">Ваш спокойный помощник в мире еды. Без запретов, сложных правил и чувства вины.</p>
        </div>
        <div>
          <h3 class="footer-title">Инструменты</h3>
          <div class="footer-links">${NAV.slice(1).map(n => `<a href="${n.href}">${n.label}</a>`).join('')}</div>
        </div>
        <div>
          <h3 class="footer-title">Наша идея</h3>
          <p class="footer-text">Небольшие шаги и привычная еда могут быть хорошим началом. Все инструменты открыты и бесплатны.</p>
        </div>
        <div>
          <h3 class="footer-title">Контакты</h3>
          <div class="footer-links">
            <a href="tel:+79515251175">${ic('phone', 15)} +7 951 525-11-75</a>
            <a href="mailto:info.oooukropchik@gmail.com">${ic('mail', 15)} info.oooukropchik@gmail.com</a>
          </div>
        </div>
      </div>
      <div class="footer-bottom"><div class="page-wrap"><span>© 2024–2025 Укропчик</span><span>Информация на сайте — для общего ознакомления</span></div></div>`;
  }
}

/* ---------- калькуляторы ---------- */
function initCalculator() {
  const num = id => Number($('#' + id).value);
  const inRange = (v, min, max) => v && v >= min && v <= max;

  $('#form-bmi').addEventListener('submit', e => {
    e.preventDefault();
    const h = num('height'), w = num('weight');
    const err = $('#bmi-error'), res = $('#bmi-result');
    if (!inRange(h, 100, 230) || !inRange(w, 25, 350)) {
      err.textContent = 'Проверьте значения: рост 100–230 см, вес 25–350 кг.';
      err.hidden = false; res.hidden = true; return;
    }
    err.hidden = true;
    const bmi = Math.round((w / ((h / 100) ** 2)) * 10) / 10;
    const label = bmi < 18.5 ? 'ниже условного диапазона'
      : bmi < 25 ? 'в условном диапазоне'
      : bmi < 30 ? 'выше условного диапазона'
      : 'значительно выше условного диапазона';
    $('#bmi-value').textContent = bmi.toFixed(1);
    $('#bmi-category').textContent = label;
    res.hidden = false;
  });

  $('#form-energy').addEventListener('submit', e => {
    e.preventDefault();
    const a = num('age'), h = num('height'), w = num('weight');
    const err = $('#energy-error'), res = $('#energy-result');
    if (!inRange(a, 18, 100) || !inRange(h, 100, 230) || !inRange(w, 25, 350)) {
      err.textContent = 'Для оценки укажите возраст от 18 лет, рост 100–230 см и вес 25–350 кг (рост и вес — в блоке слева).';
      err.hidden = false; res.hidden = true; return;
    }
    err.hidden = true;
    const sex = $('#sex').value, factor = Number($('#activity').value), goal = $('#goal').value;
    const bmr = 10 * w + 6.25 * h - 5 * a + (sex === 'male' ? 5 : -161);
    const tweak = goal === 'gentle-loss' ? -0.10 : goal === 'gain' ? 0.08 : 0;
    const kcal = Math.round(bmr * factor * (1 + tweak) / 10) * 10;
    $('#energy-value').textContent = fmtRu(kcal);
    res.hidden = false;
  });
}

/* ---------- сравнение продуктов ---------- */
const PRODUCTS = [
  { id: 'chips', name: 'Картофельные чипсы', category: 'Перекус', kcal: 536, protein: 6.5, fiber: 4.8, sugar: 1.2, satFat: 3.2, kind: 'more', note: 'Хрустящий снек, часто с заметным количеством соли и жира.' },
  { id: 'apple', name: 'Яблоко', category: 'Перекус', kcal: 52, protein: .3, fiber: 2.4, sugar: 10.4, satFat: 0, kind: 'alternative', note: 'Фрукт с клетчаткой и естественной сладостью.' },
  { id: 'soda', name: 'Газированный напиток', category: 'Напиток', kcal: 42, protein: 0, fiber: 0, sugar: 10.6, satFat: 0, kind: 'more', note: 'Сладкий напиток: почти вся энергия приходится на сахар.' },
  { id: 'kefir', name: 'Кефир 2,5%', category: 'Напиток', kcal: 53, protein: 3, fiber: 0, sugar: 4, satFat: 1.6, kind: 'alternative', note: 'Кисломолочный напиток с белком и кальцием.' },
  { id: 'whitebread', name: 'Белый хлеб', category: 'Хлеб и крупы', kcal: 265, protein: 8.9, fiber: 2.7, sugar: 5, satFat: .7, kind: 'more', note: 'Удобная основа для бутерброда; клетчатки немного.' },
  { id: 'ryebread', name: 'Ржаной хлеб', category: 'Хлеб и крупы', kcal: 259, protein: 8.5, fiber: 5.8, sugar: 3.8, satFat: .3, kind: 'alternative', note: 'Более насыщенный вкус и чуть больше клетчатки.' },
  { id: 'milkchoc', name: 'Молочный шоколад', category: 'Сладкое', kcal: 535, protein: 7.6, fiber: 3.4, sugar: 56, satFat: 19, kind: 'more', note: 'Сладкий продукт, которым можно просто наслаждаться в подходящей порции.' },
  { id: 'darkchoc', name: 'Тёмный шоколад 70%', category: 'Сладкое', kcal: 598, protein: 7.8, fiber: 10.9, sugar: 24, satFat: 19, kind: 'alternative', note: 'Более насыщенный вкус; энергетическая ценность тоже высокая.' },
  { id: 'sausage', name: 'Сосиски', category: 'Основное', kcal: 270, protein: 12, fiber: 0, sugar: 1, satFat: 8, kind: 'more', note: 'Готовый продукт, удобный в приготовлении.' },
  { id: 'chicken', name: 'Куриная грудка, готовая', category: 'Основное', kcal: 165, protein: 31, fiber: 0, sugar: 0, satFat: 1, kind: 'alternative', note: 'Источник белка; значения зависят от способа приготовления.' },
  { id: 'fruit-yogurt', name: 'Йогурт с наполнителем', category: 'Молочные продукты', kcal: 92, protein: 3.8, fiber: 0, sugar: 12.4, satFat: 1.2, kind: 'more', note: 'Содержание сахара зависит от вкуса и производителя.' },
  { id: 'plain-yogurt', name: 'Натуральный йогурт 2%', category: 'Молочные продукты', kcal: 60, protein: 4.3, fiber: 0, sugar: 4.7, satFat: 1.3, kind: 'alternative', note: 'Нейтральная основа: вкус можно дополнить ягодами или фруктами.' },
  { id: 'fries', name: 'Картофель фри', category: 'Гарнир', kcal: 312, protein: 3.4, fiber: 3.8, sugar: 0.3, satFat: 2.3, kind: 'more', note: 'Показатели зависят от способа жарки и масла.' },
  { id: 'boiled-potato', name: 'Картофель отварной', category: 'Гарнир', kcal: 87, protein: 1.9, fiber: 1.8, sugar: 0.9, satFat: 0.1, kind: 'alternative', note: 'Простой гарнир; показатели зависят от сорта и приготовления.' },
  { id: 'granola', name: 'Гранола', category: 'Каши и крупы', kcal: 471, protein: 10.3, fiber: 7.1, sugar: 19.8, satFat: 4, kind: 'more', note: 'Состав и сладость сильно различаются у разных видов гранолы.' },
  { id: 'oatflakes', name: 'Овсяные хлопья, сухие', category: 'Каши и крупы', kcal: 372, protein: 12.3, fiber: 10.1, sugar: 0.9, satFat: 1.2, kind: 'alternative', note: 'Справочные значения для сухих хлопьев; готовая каша содержит воду.' },
  { id: 'orange-juice', name: 'Апельсиновый сок', category: 'Напиток', kcal: 45, protein: 0.7, fiber: 0.2, sugar: 9.4, satFat: 0, kind: 'more', note: 'В соке обычно меньше клетчатки, чем в целом апельсине.' },
  { id: 'tea', name: 'Чай без сахара', category: 'Напиток', kcal: 1, protein: 0, fiber: 0, sugar: 0, satFat: 0, kind: 'alternative', note: 'Пищевая ценность указана без молока, сахара и добавок.' },
  { id: 'mayonnaise', name: 'Майонез', category: 'Соусы', kcal: 680, protein: 1, fiber: 0, sugar: 1, satFat: 10, kind: 'more', note: 'Энергетическая ценность зависит от рецепта и жирности.' },
  { id: 'tomato-sauce', name: 'Томатный соус', category: 'Соусы', kcal: 29, protein: 1.4, fiber: 1.5, sugar: 3.5, satFat: 0.1, kind: 'alternative', note: 'Состав и содержание соли и сахара зависят от производителя.' },
  { id: 'beef', name: 'Говядина тушёная', category: 'Основное', kcal: 250, protein: 26, fiber: 0, sugar: 0, satFat: 4, kind: 'more', note: 'Показатели зависят от части мяса и способа приготовления.' },
  { id: 'lentils', name: 'Чечевица варёная', category: 'Основное', kcal: 116, protein: 9, fiber: 7.9, sugar: 1.8, satFat: 0.1, kind: 'alternative', note: 'Источник растительного белка и клетчатки; значения усреднённые.' }
];
const fmt = n => Number.isInteger(n) ? String(n) : n.toFixed(1).replace('.', ',');

function initCompare() {
  const state = { first: 'chips', second: 'apple', compared: true, category: 'Все' };
  const selA = $('#select-first'), selB = $('#select-second');
  const options = PRODUCTS.map(p => `<option value="${p.id}">${esc(p.name)}</option>`).join('');
  selA.innerHTML = options; selB.innerHTML = options;
  selA.value = state.first; selB.value = state.second;

  const results = $('#compare-results');
  function renderResults() {
    results.hidden = !state.compared;
    if (!state.compared) return;
    const byId = id => PRODUCTS.find(p => p.id === id);
    results.innerHTML = [byId(state.first), byId(state.second)].map((p, i) => `
      <article class="product-card ${i === 0 ? 'a' : 'b'}">
        <div class="product-top">
          <div><p class="cat">${esc(p.category)}</p><h3 class="brand-display">${esc(p.name)}</h3></div>
          <span class="variant">${i ? 'Вариант Б' : 'Вариант А'}</span>
        </div>
        <p class="product-note">${esc(p.note)}</p>
        <div class="stats">
          ${[['Энергия', fmt(p.kcal) + ' ккал'], ['Белок', fmt(p.protein) + ' г'], ['Клетчатка', fmt(p.fiber) + ' г'], ['Сахара', fmt(p.sugar) + ' г'], ['Насыщ. жиры', fmt(p.satFat) + ' г']]
            .map(([k, v]) => `<div class="stat"><p class="k">${k}</p><p class="v">${v}</p></div>`).join('')}
        </div>
      </article>`).join('');
  }

  const filters = $('#filters'), grid = $('#catalog-grid');
  const categories = ['Все', ...new Set(PRODUCTS.map(p => p.category))];
  function renderFilters() {
    filters.innerHTML = categories.map(c => `<button type="button" class="filter${state.category === c ? ' on' : ''}" data-cat="${esc(c)}">${esc(c)}</button>`).join('');
  }
  function renderCatalog() {
    const shown = PRODUCTS.filter(p => state.category === 'Все' || p.category === state.category);
    grid.innerHTML = shown.map(p => `
      <button type="button" class="surface catalog-item hover-lift" data-id="${p.id}">
        <span class="icon-box ${p.kind === 'more' ? 'more' : ''}">${ic('utensils', 19)}</span>
        <span class="txt">
          <span class="cat">${esc(p.category)}</span>
          <span class="name">${esc(p.name)}</span>
          <span class="meta">${p.kcal} ккал · белок ${fmt(p.protein)} г на 100 г</span>
        </span>
        <span class="go">${ic('arrow-down-right', 17)}</span>
      </button>`).join('');
  }

  selA.addEventListener('change', () => { state.first = selA.value; state.compared = false; renderResults(); });
  selB.addEventListener('change', () => { state.second = selB.value; state.compared = false; renderResults(); });
  $('#btn-compare').addEventListener('click', () => { state.compared = true; renderResults(); });
  filters.addEventListener('click', e => {
    const b = e.target.closest('[data-cat]'); if (!b) return;
    state.category = b.dataset.cat; renderFilters(); renderCatalog();
  });
  grid.addEventListener('click', e => {
    const b = e.target.closest('[data-id]'); if (!b) return;
    const p = PRODUCTS.find(x => x.id === b.dataset.id);
    if (p.kind === 'more') {
      state.first = p.id;
      state.second = (PRODUCTS.find(q => q.category === p.category && q.kind === 'alternative') || { id: 'apple' }).id;
    } else {
      state.second = p.id;
      state.first = (PRODUCTS.find(q => q.category === p.category && q.kind === 'more') || { id: 'chips' }).id;
    }
    selA.value = state.first; selB.value = state.second;
    state.compared = true; renderResults();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  renderResults(); renderFilters(); renderCatalog();
}

/* ---------- планировщик питания ---------- */
const DAYS = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
const MEALS = [
  { id: 'breakfast', label: 'Завтрак', time: '08:00', icon: 'sprout' },
  { id: 'lunch', label: 'Обед', time: '13:00', icon: 'utensils' },
  { id: 'snack', label: 'Перекус', time: '16:00', icon: 'leaf' },
  { id: 'dinner', label: 'Ужин', time: '19:00', icon: 'leaf' }
];
const MEAL_IDEAS = {
  breakfast: [
    { id: 'oatmeal', name: 'Овсяная каша с яблоком', portion: '250 г', kcal: 310 },
    { id: 'eggs', name: 'Яйца и цельнозерновой тост', portion: '1 порция', kcal: 340 },
    { id: 'cottage', name: 'Творог с ягодами', portion: '200 г', kcal: 265 },
    { id: 'millet-pumpkin', name: 'Пшённая каша с тыквой', portion: '250 г', kcal: 280 },
    { id: 'yogurt-granola', name: 'Йогурт с гранолой и ягодами', portion: '220 г', kcal: 320 },
    { id: 'avocado-toast', name: 'Цельнозерновой тост с авокадо', portion: '1 порция', kcal: 310 }
  ],
  lunch: [
    { id: 'buckwheat', name: 'Гречка с курицей и овощами', portion: '350 г', kcal: 490 },
    { id: 'lentil', name: 'Чечевичный суп и хлеб', portion: '400 г', kcal: 420 },
    { id: 'salad', name: 'Салат с фасолью и яйцом', portion: '300 г', kcal: 385 },
    { id: 'turkey-bulgur', name: 'Индейка с булгуром и овощами', portion: '350 г', kcal: 470 },
    { id: 'lentil-curry', name: 'Чечевица с овощами и рисом', portion: '350 г', kcal: 440 },
    { id: 'beef-vegetables', name: 'Говядина с тушёными овощами', portion: '350 г', kcal: 510 }
  ],
  snack: [
    { id: 'yogurt', name: 'Йогурт и банан', portion: '200 г + 1 шт.', kcal: 205 },
    { id: 'nuts', name: 'Орехи и груша', portion: '25 г + 1 шт.', kcal: 220 },
    { id: 'carrots', name: 'Морковь и хумус', portion: '150 г + 40 г', kcal: 165 },
    { id: 'kefir-berries', name: 'Кефир с ягодами', portion: '200 мл + 100 г', kcal: 150 },
    { id: 'cottage-fruit', name: 'Творог с фруктом', portion: '150 г + 1 шт.', kcal: 210 },
    { id: 'hummus-cucumber', name: 'Хумус с огурцом', portion: '40 г + 150 г', kcal: 150 }
  ],
  dinner: [
    { id: 'fish', name: 'Запечённая рыба с картофелем', portion: '350 г', kcal: 460 },
    { id: 'pasta', name: 'Паста с томатами и фасолью', portion: '330 г', kcal: 440 },
    { id: 'omelet', name: 'Омлет с овощами', portion: '300 г', kcal: 360 },
    { id: 'salmon-bulgur', name: 'Лосось с булгуром и овощами', portion: '350 г', kcal: 490 },
    { id: 'tofu-vegetables', name: 'Тофу с овощами и рисом', portion: '320 г', kcal: 390 },
    { id: 'chicken-salad', name: 'Курица с тёплым овощным салатом', portion: '320 г', kcal: 410 }
  ]
};
const PLAN_KEY = 'ukropchik-meal-plan-v1';

function initPlanner() {
  let plan = readJSON(PLAN_KEY, {});
  let day = 0;
  const save = () => { try { localStorage.setItem(PLAN_KEY, JSON.stringify(plan)); } catch {} };
  const uid = base => `${base}-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`;

  function addItem(mealId, item) {
    const k = String(day);
    plan[k] = plan[k] || {};
    plan[k][mealId] = [...(plan[k][mealId] || []), { ...item, id: uid(item.id) }];
    save(); render();
  }
  function removeItem(mealId, id) {
    const k = String(day);
    plan[k] = plan[k] || {};
    plan[k][mealId] = (plan[k][mealId] || []).filter(i => i.id !== id);
    save(); render();
  }

  function renderDays() {
    $('#days').innerHTML = DAYS.map((d, i) => `
      <button role="tab" aria-selected="${day === i}" type="button" class="day-btn${day === i ? ' on' : ''}" data-day="${i}">
        <span class="d1">День ${i + 1}</span><span class="d2">${d}</span>
      </button>`).join('');
  }
  function render() {
    const today = plan[String(day)] || {};
    const total = Object.values(today).flat().reduce((s, i) => s + i.kcal, 0);
    $('#daily-kcal').textContent = fmtRu(total);
    renderDays();
    $('#meals').innerHTML = MEALS.map(m => {
      const items = today[m.id] || [];
      const list = items.length === 0
        ? `<p class="meal-empty">Пока свободно. Добавьте блюдо ниже.</p>`
        : `<div class="meal-items">${items.map(i => `
            <div class="meal-item">
              <span><span class="nm">${esc(i.name)}</span><span class="pt">${esc(i.portion)} · ${i.kcal} ккал</span></span>
              <button type="button" class="rm" aria-label="Удалить ${esc(i.name)}" data-remove="${m.id}" data-id="${esc(i.id)}">${ic('x', 16)}</button>
            </div>`).join('')}</div>`;
      const ideas = MEAL_IDEAS[m.id].map(idea => `<button type="button" class="idea" data-add="${m.id}" data-idea="${idea.id}">${ic('plus', 13)} ${esc(idea.name)}</button>`).join('');
      return `
        <section class="surface meal">
          <div class="meal-head">
            <div><p class="time">${m.time}</p><h2 class="brand-display">${m.label}</h2></div>
            <span class="icon-box sm">${ic(m.icon, 17)}</span>
          </div>
          ${list}
          <div class="ideas">${ideas}</div>
        </section>`;
    }).join('');
  }

  $('#days').addEventListener('click', e => {
    const b = e.target.closest('[data-day]'); if (!b) return;
    day = Number(b.dataset.day); render();
  });
  $('#meals').addEventListener('click', e => {
    const add = e.target.closest('[data-add]');
    if (add) {
      const idea = MEAL_IDEAS[add.dataset.add].find(i => i.id === add.dataset.idea);
      addItem(add.dataset.add, idea); return;
    }
    const rm = e.target.closest('[data-remove]');
    if (rm) removeItem(rm.dataset.remove, rm.dataset.id);
  });
  $('#form-custom').addEventListener('submit', e => {
    e.preventDefault();
    const name = $('#custom-food').value.trim();
    const portion = $('#custom-portion').value.trim() || '1 порция';
    const kcal = Number($('#custom-kcal').value);
    if (!name || !kcal || kcal < 0 || kcal > 5000) return;
    addItem('snack', { id: 'custom', name, portion, kcal });
    $('#custom-food').value = ''; $('#custom-kcal').value = '';
  });
  $('#btn-clear-day').addEventListener('click', () => {
    if (confirm('Убрать все блюда из этого дня?')) { plan[String(day)] = {}; save(); render(); }
  });
  render();
}

/* ---------- вход, регистрация, профиль ---------- */
function initSignUp() {
  $('#form-signup').addEventListener('submit', async e => {
    e.preventDefault();
    const name = $('#su-name').value.trim();
    const email = $('#su-email').value.trim().toLowerCase();
    const pw = $('#su-password').value;
    const err = $('#auth-error');
    const users = getUsers();
    if (pw.length < 6) { err.textContent = 'Пароль должен быть не короче 6 символов.'; err.hidden = false; return; }
    if (users[email]) { err.textContent = 'Аккаунт с такой почтой уже есть. Попробуйте войти.'; err.hidden = false; return; }
    users[email] = { name, hash: await hashPassword(pw) };
    saveUsers(users);
    try { localStorage.setItem(SESSION_KEY, email); } catch {}
    location.href = 'profile.html';
  });
}
function initSignIn() {
  $('#form-signin').addEventListener('submit', async e => {
    e.preventDefault();
    const email = $('#si-email').value.trim().toLowerCase();
    const pw = $('#si-password').value;
    const err = $('#auth-error');
    const u = getUsers()[email];
    if (!u || u.hash !== await hashPassword(pw)) { err.textContent = 'Неверная почта или пароль.'; err.hidden = false; return; }
    try { localStorage.setItem(SESSION_KEY, email); } catch {}
    location.href = 'profile.html';
  });
}
function initProfile() {
  const user = currentUser();
  if (!user) { location.replace('sign-in.html'); return; }
  const initials = (user.name || 'У').split(/\s+/).slice(0, 2).map(p => p.charAt(0)).join('').toUpperCase();
  $('#profile-initials').textContent = initials;
  $('#profile-name').textContent = user.name || 'Ваш профиль';
  $('#profile-email').textContent = user.email;
  const input = $('#profile-display-name'), btn = $('#btn-save-profile');
  input.value = user.name || '';
  input.addEventListener('input', () => { $('#profile-saved').hidden = true; btn.disabled = !input.value.trim(); });
  $('#form-profile').addEventListener('submit', e => {
    e.preventDefault();
    const name = input.value.trim(); if (!name) return;
    const users = getUsers();
    if (users[user.email]) users[user.email].name = name;
    saveUsers(users);
    $('#profile-name').textContent = name;
    $('#profile-initials').textContent = name.split(/\s+/).slice(0, 2).map(p => p.charAt(0)).join('').toUpperCase();
    $('#profile-saved').hidden = false;
    renderShell(); hydrateIcons();
  });
}

/* ---------- запуск ---------- */
document.addEventListener('DOMContentLoaded', () => {
  renderShell();
  const page = document.body.dataset.page;
  if (page === 'calculator') initCalculator();
  if (page === 'compare') initCompare();
  if (page === 'planner') initPlanner();
  if (page === 'sign-up') initSignUp();
  if (page === 'sign-in') initSignIn();
  if (page === 'profile') initProfile();
  hydrateIcons();
});
