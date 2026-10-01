/* =====================================================================
 * OrientEdu Global · i18n.js
 * Language switching, translation pipeline, persistence
 * =================================================================== */
(function () {
  'use strict';

  const STORAGE_KEY = 'oeg.locale';
  const DEFAULT_LOCALE = 'en';
  const SUPPORTED = ['zh-CN', 'en', 'ru', 'es'];

  /* Resolve starting locale:
     1. localStorage (user-selected)
     2. <html data-lang>
     3. browser navigator
     4. fallback to en                                  */
  function resolveLocale() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && SUPPORTED.indexOf(saved) > -1) return saved;
    } catch (e) {}
    const htmlLang = (document.documentElement.getAttribute('lang') || '').trim();
    if (SUPPORTED.indexOf(htmlLang) > -1) return htmlLang;
    const nav = (navigator.language || '').toLowerCase();
    if (nav.indexOf('zh') === 0) return 'zh-CN';
    if (nav.indexOf('ru') === 0) return 'ru';
    if (nav.indexOf('es') === 0) return 'es';
    return DEFAULT_LOCALE;
  }

  /* Walk the dictionary using a dot-separated key.
     Falls back to en, then raw key, then empty string. */
  function walk(dict, key) {
    if (!dict) return '';
    const parts = key.split('.');
    let cur = dict;
    for (let i = 0; i < parts.length; i++) {
      if (cur == null) return '';
      cur = cur[parts[i]];
    }
    return (cur == null) ? '' : cur;
  }

  function translate(key, locale) {
    locale = locale || state.locale;
    const dict = window.TRANSLATIONS && window.TRANSLATIONS[locale];
    const v = walk(dict, key);
    if (v !== '') return v;
    const fb = window.TRANSLATIONS && window.TRANSLATIONS.en;
    const v2 = walk(fb, key);
    if (v2 !== '') return v2;
    return key;
  }

  /* Apply translation to every [data-i18n] element on the page. */
  function applyAll() {
    /* meta */
    const m = translate('meta.title');
    if (m) document.title = m;
    document.querySelectorAll('meta[name="description"]').forEach(function (el) {
      const v = translate('meta.desc');
      if (v) el.setAttribute('content', v);
    });
    document.querySelectorAll('meta[name="keywords"]').forEach(function (el) {
      const v = translate('meta.kw');
      if (v) el.setAttribute('content', v);
    });

    /* plain text fields */
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      const key = el.getAttribute('data-i18n');
      const value = translate(key);
      if (value == null) return;
      if (el.children.length === 0) el.textContent = value;
      else el.innerHTML = value; // allow rich html such as <br/> in hero title
    });

    /* attributes (placeholder, aria-label, value) */
    document.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
      const raw = el.getAttribute('data-i18n-attr');
      const pairs = raw.split(';').map(function (s) { return s.trim(); }).filter(Boolean);
      pairs.forEach(function (pair) {
        const [attr, key] = pair.split(':').map(function (s) { return s.trim(); });
        const v = translate(key);
        if (v) el.setAttribute(attr, v);
      });
    });

    /* mark lang switcher current */
    document.querySelectorAll('[data-lang-switch]').forEach(function (b) {
      b.classList.toggle('is-active', b.getAttribute('data-lang-switch') === state.locale);
    });

    document.documentElement.setAttribute('lang', state.locale);
  }

  const state = { locale: 'en' };
  const listeners = [];

  function setLocale(loc) {
    if (SUPPORTED.indexOf(loc) === -1) return;
    state.locale = loc;
    try { localStorage.setItem(STORAGE_KEY, loc); } catch (e) {}
    applyAll();
    listeners.forEach(function (cb) { cb(loc); });
    /* Bubble a custom event for page-specific logic (e.g., fill lists) */
    document.dispatchEvent(new CustomEvent('locale:changed', { detail: { locale: loc } }));
  }

  function currentLocale() { return state.locale; }

  function onLocaleChange(cb) {
    listeners.push(cb);
  }

  /* Wire up lang-switch buttons (any where data-lang-switch="xx") */
  function bindSwitches() {
    document.addEventListener('click', function (e) {
      const t = e.target.closest('[data-lang-switch]');
      if (!t) return;
      e.preventDefault();
      const l = t.getAttribute('data-lang-switch');
      setLocale(l);
    });
  }

  function init() {
    state.locale = resolveLocale();
    try { localStorage.setItem(STORAGE_KEY, state.locale); } catch (e) {}
    bindSwitches();
    /* Defer applyAll to next tick to ensure the page DOM is in place */
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', applyAll);
    } else {
      applyAll();
    }
  }

  /* expose */
  window.i18n = {
    t: translate,
    setLocale: setLocale,
    getLocale: currentLocale,
    onLocaleChange: onLocaleChange,
    apply: applyAll,
    init: init,
    supported: SUPPORTED
  };
})();
