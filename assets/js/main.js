/* =====================================================================
 * SinoEdu Global · main.js
 * Cross-page interactions: nav, filters, forms, routing
 * =================================================================== */
(function () {
  'use strict';

  /* ---------- Sticky nav shadow on scroll ---------- */
  document.addEventListener('DOMContentLoaded', function () {
    var nav = document.querySelector('.oeg-nav');
    if (!nav) return;
    var onScroll = function () {
      nav.classList.toggle('is-scrolled', window.scrollY > 8);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  });

  /* ---------- Mobile nav toggle ---------- */
  document.addEventListener('click', function (e) {
    var burger = e.target.closest('[data-burger]');
    if (burger) {
      document.querySelector('.oeg-nav').classList.toggle('is-open');
      return;
    }
    if (e.target.closest('.oeg-nav__link')) {
      document.querySelector('.oeg-nav')?.classList.remove('is-open');
    }
  });

  /* ============================================================
   * UNIVERSITY LIST PAGE — search + filter + sort
   * ============================================================ */
  function initUniversityListPage() {
    var grid = document.getElementById('uni-grid');
    if (!grid || !window.UNIVERSITIES) return;

    var ui = {
      q: document.getElementById('uni-search'),
      city: document.getElementById('uni-filter-city'),
      lang: document.getElementById('uni-filter-lang'),
      sort: document.getElementById('uni-sort'),
      count: document.getElementById('uni-count'),
      empty: document.getElementById('uni-empty')
    };

    var stateFilter = { q: '', city: 'all', lang: 'all', sort: 'rank' };

    function render() {
      var locale = window.i18n.getLocale();
      var html = '';
      var list = window.UNIVERSITIES.slice();

      /* filter */
      list = list.filter(function (u) {
        if (stateFilter.q) {
          var hay = [
            u.name['zh-CN'], u.name.en, u.name.ru, u.name.es,
            u.city['zh-CN'], u.city.en, u.city.ru, u.city.es,
            (u.programs || []).join(' ')
          ].join(' ').toLowerCase();
          if (hay.indexOf(stateFilter.q.toLowerCase()) === -1) return false;
        }
        if (stateFilter.city !== 'all' && u.cityKey !== stateFilter.city) return false;
        if (stateFilter.lang !== 'all') {
          var langText = u.languages[locale] || u.languages.en;
          if (langText.toLowerCase().indexOf(stateFilter.lang.toLowerCase()) === -1) return false;
        }
        return true;
      });

      /* sort */
      if (stateFilter.sort === 'rank') list.sort(function (a, b) { return a.qsRank - b.qsRank; });
      if (stateFilter.sort === 'name') list.sort(function (a, b) { return a.name.en.localeCompare(b.name.en); });

      if (ui.count) {
        var prefix = window.i18n.t('unis.results');
        var suffix = window.i18n.t('unis.of');
        ui.count.textContent = prefix + list.length + ' ' + suffix;
      }

      list.forEach(function (u) {
        var name = u.name[locale] || u.name.en;
        var city = u.city[locale] || u.city.en;
        var gradsColor = (u.color && u.color[0]) || '#C8102E';
        var gradsColor2 = (u.color && u.color[1]) || '#7E2D2D';
        html +=
          '<a href="detail.html?id=' + u.id + '" class="ucard">' +
          '  <div class="ucard__hero" style="background:linear-gradient(135deg,' + gradsColor + ',' + gradsColor2 + ')">' +
          '    <span class="ucard__rank">QS #' + u.qsRank + '</span>' +
          '    <span class="ucard__city">' + city + '</span>' +
          '    <span class="ucard__logo" aria-hidden="true">' + u.shortName[locale].slice(0, 2) + '</span>' +
          '  </div>' +
          '  <div class="ucard__body">' +
          '    <h3 class="ucard__name">' + name + '</h3>' +
          '    <p class="ucard__type">' + u.type[locale] + ' · ' + u.languages[locale] + '</p>' +
          '    <ul class="ucard__stats">' +
          '      <li><span>' + u.qsRank + '</span><em>' + window.i18n.t('detail.ranking') + '</em></li>' +
          '      <li><span>' + (u.founded) + '</span><em>' + window.i18n.t('detail.founded') + '</em></li>' +
          '      <li><span>' + (u.students/1000).toFixed(1) + 'k</span><em>' + window.i18n.t('detail.students') + '</em></li>' +
          '    </ul>' +
          (u.scholarship ? '<span class="ucard__badge">' + window.i18n.t('detail.scholarship_kw') + '</span>' : '') +
          '  </div>' +
          '</a>';
      });

      grid.innerHTML = html;
      if (ui.empty) ui.empty.style.display = list.length === 0 ? 'block' : 'none';
    }

    ui.q?.addEventListener('input', function () { stateFilter.q = ui.q.value.trim(); render(); });
    ui.city?.addEventListener('change', function () { stateFilter.city = ui.city.value; render(); });
    ui.lang?.addEventListener('change', function () { stateFilter.lang = ui.lang.value; render(); });
    ui.sort?.addEventListener('change', function () { stateFilter.sort = ui.sort.value; render(); });

    window.i18n.onLocaleChange(render);
    render();
  }

  /* ============================================================
   * UNIVERSITY DETAIL PAGE
   * ============================================================ */
  function initUniversityDetailPage() {
    var root = document.getElementById('uni-detail');
    if (!root || !window.UNIVERSITIES) return;

    var id = new URLSearchParams(window.location.search).get('id');
    var u = window.getUniversity(id);
    if (!u) {
      root.innerHTML =
        '<div class="container" style="padding:120px 24px;text-align:center">' +
        '  <h2>' + window.i18n.t('detail.not_found') + '</h2>' +
        '  <p style="color:#666;margin:12px 0 24px">' + window.i18n.t('detail.not_found_sub') + '</p>' +
        '  <a href="universities.html" class="btn btn--primary">' + window.i18n.t('detail.back') + '</a>' +
        '</div>';
      return;
    }

    function render() {
      var locale = window.i18n.getLocale();
      document.getElementById('b-title-name').textContent = u.name[locale];
      var gradsColor = (u.color && u.color[0]) || '#C8102E';
      var gradsColor2 = (u.color && u.color[1]) || '#7E2D2D';

      /* hero */
      root.querySelector('[data-r="hero"]').style.background =
        'linear-gradient(135deg,' + gradsColor + ' 0%,' + gradsColor2 + ' 100%)';
      root.querySelector('[data-r="name"]').textContent = u.name[locale];
      root.querySelector('[data-r="city"]').textContent = u.city[locale];
      root.querySelector('[data-r="qs"]').textContent = 'QS #' + u.qsRank;
      root.querySelector('[data-r="founded"]').textContent = u.founded;
      root.querySelector('[data-r="students"]').textContent = (u.students/1000).toFixed(1) + 'k';
      root.querySelector('[data-r="intl"]').textContent = (u.intl/1000).toFixed(1) + 'k';

      /* overview */
      root.querySelector('[data-r="overview"]').textContent = u.overview[locale];

      /* why list */
      var whyHtml = '';
      (u.why[locale] || []).forEach(function (w) {
        whyHtml += '<li><span class="dot"></span>' + w + '</li>';
      });
      root.querySelector('[data-r="why"]').innerHTML = whyHtml;

      /* programs */
      var progHtml = '';
      (u.programs || []).forEach(function (p) {
        progHtml += '<li>' + p + '</li>';
      });
      root.querySelector('[data-r="progs"]').innerHTML = progHtml;

      /* req */
      var reqHtml = '';
      (u.req[locale] || []).forEach(function (r) {
        reqHtml += '<li><span class="dot dot--blue"></span>' + r + '</li>';
      });
      root.querySelector('[data-r="req"]').innerHTML = reqHtml;

      /* contact */
      var ct = root.querySelector('[data-r="contact"]');
      if (ct && u.contact) {
        ct.innerHTML =
          '<a class="btn btn--ghost" href="' + (u.contact.website || '#') + '" target="_blank" rel="noopener">' +
            window.i18n.t('detail.ii_kw') + ' ↗' +
          '</a> ' +
          '<a class="btn btn--primary" href="apply.html?uni=' + u.id + '">' + window.i18n.t('featured.apply') + '</a>';
      }

      /* sidebar apply button — set href with id query param */
      var sb = document.getElementById('sidebar-apply');
      if (sb) sb.setAttribute('href', 'apply.html?uni=' + u.id);

      /* apply intro */
      root.querySelector('[data-r="apply-intro"]').textContent = window.i18n.t('detail.apply_intro');
    }

    window.i18n.onLocaleChange(render);
    render();
  }

  /* ============================================================
   * REGISTER PAGE — multi-step form + validation
   * ============================================================ */
  function initRegisterPage() {
    var form = document.getElementById('register-form');
    if (!form) return;

    /* populate target universities select */
    var targetSel = form.querySelector('[data-field="f_target_uni"]');
    if (targetSel && window.UNIVERSITIES) {
      window.UNIVERSITIES.forEach(function (u) {
        var opt = document.createElement('option');
        opt.value = u.id;
        opt.textContent = u.name['zh-CN'] + ' / ' + u.name.en;
        targetSel.appendChild(opt);
      });
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var errors = [];
      var get = function (k) { return form.querySelector('[data-field="' + k + '"]'); };

      var required = ['f_name','f_email','f_phone','f_country','f_password','f_confirm','f_target_uni','f_target_prog','f_intake'];
      required.forEach(function (k) {
        var el = get(k);
        if (!el || !el.value.trim()) errors.push(window.i18n.t('register.err_required') + ': ' + k);
      });

      var email = get('f_email');
      if (email && email.value && !/^[^@]+@[^@]+\.[a-z]{2,}$/i.test(email.value)) errors.push(window.i18n.t('register.err_email'));

      var pwd = get('f_password');
      if (pwd && pwd.value && pwd.value.length < 8) errors.push(window.i18n.t('register.err_pwd_len'));
      if (pwd && get('f_confirm') && pwd.value !== get('f_confirm').value) errors.push(window.i18n.t('register.err_pwd'));

      var agree = form.querySelector('[data-field="agree"]');
      if (agree && !agree.checked) errors.push(window.i18n.t('register.err_agree'));

      if (errors.length) {
        alert(errors[0]);
        return;
      }

      var emailValue = email.value;
      var success = document.getElementById('register-success');
      if (success) {
        success.querySelector('[data-r="success_email"]').textContent = emailValue;
        success.classList.add('is-visible');
        form.style.display = 'none';
        success.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }

  /* ============================================================
   * CONTACT FORM
   * ============================================================ */
  function initContactPage() {
    var form = document.getElementById('contact-form');
    if (!form) return;
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var success = document.getElementById('contact-success');
      if (success) {
        success.classList.add('is-visible');
        form.style.display = 'none';
        success.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }

  /* ============================================================
   * APPLY FORM PAGE
   * ============================================================ */
  function initApplyPage() {
    var form = document.getElementById('apply-form');
    if (!form) return;

    var uniSel = form.querySelector('[data-field="a_uni"]');
    var progSel = form.querySelector('[data-field="a_prog"]');
    if (uniSel && window.UNIVERSITIES) {
      window.UNIVERSITIES.forEach(function (u) {
        var opt = document.createElement('option');
        opt.value = u.id;
        opt.textContent = u.name['zh-CN'] + ' / ' + u.name.en;
        uniSel.appendChild(opt);
      });
      uniSel.value = new URLSearchParams(window.location.search).get('uni') || '';
    }

    function populatePrograms() {
      if (!uniSel || !progSel) return;
      progSel.innerHTML = '';
      var u = window.getUniversity(uniSel.value);
      if (u && u.programs) {
        u.programs.forEach(function (p) {
          var opt = document.createElement('option');
          opt.value = p; opt.textContent = p;
          progSel.appendChild(opt);
        });
      }
    }
    populatePrograms();
    uniSel?.addEventListener('change', populatePrograms);

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var success = document.getElementById('apply-success');
      if (success) {
        success.classList.add('is-visible');
        form.style.display = 'none';
        success.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }

  /* ============================================================
   * BOOTSTRAP
   * ============================================================ */
  document.addEventListener('DOMContentLoaded', function () {
    initUniversityListPage();
    initUniversityDetailPage();
    initRegisterPage();
    initContactPage();
    initApplyPage();
    window.i18n.init();
  });
})();
