/* Versi demo.
   - Susun Rukun: gambar petak cabaran 3 hingga 13 dikunci. Semua kad jawapan dipaparkan.
   - Padanan Bacaan: gambar petak cabaran 3 hingga 6 dikunci. Semua kad jawapan dipaparkan.
   - Kuiz Dadu: 2 pusingan dibenarkan. Selepas itu kad "Tempoh Percubaan Tamat" dipaparkan. */
(function () {
  var path = (location.pathname || '').toLowerCase();
  var MODE = null;
  if (path.indexOf('game-susun') !== -1) MODE = 'susun';
  else if (path.indexOf('game-bacaan') !== -1) MODE = 'bacaan';
  else if (path.indexOf('game-kuiz') !== -1) MODE = 'kuiz';
  if (!MODE) return;

  var LOCK_FROM = 3;
  var LOCK_TO = { susun: 13, bacaan: 6 };

  function lockPic(el) {
    if (el.classList.contains('demo-locked')) return;
    el.classList.add('demo-locked');
    el.innerHTML = '<img src="kunci.svg" alt="Dikunci" draggable="false" ' +
      'style="display:block;width:86%;height:86%;margin:auto;object-fit:contain">';
  }
  function applySlotLocks() {
    var to = LOCK_TO[MODE];
    var slots = document.querySelectorAll('.slot[data-index]');
    for (var j = 0; j < slots.length; j++) {
      var k = parseInt(slots[j].dataset.index, 10) + 1;
      if (k < LOCK_FROM || k > to) continue;
      var pic = slots[j].querySelector('.slot-pic, .slot-picture');
      if (pic) lockPic(pic);
    }
  }

  if (MODE === 'susun' || MODE === 'bacaan') {
    // Petak dikunci: game hanya menerima peletakan pada elemen berkelas ".slot" (carian seret dan tap).
    // Maka petak dikunci ditukar kelasnya, gaya visual disalin, dan klik tap padanya disekat.
    var lastTo = LOCK_TO[MODE];
    var LOCKED_CLASS = 'slot-demo-locked';

    function copySlotStyles() {
      if (document.getElementById('demo-slot-style')) return;
      var css = '';
      var sheets = document.styleSheets;
      for (var i = 0; i < sheets.length; i++) {
        var rules;
        try { rules = sheets[i].cssRules; } catch (e) { continue; }
        for (var j = 0; j < rules.length; j++) {
          var r = rules[j];
          if (!r.selectorText || r.selectorText.indexOf('.slot') === -1) continue;
          var sel = r.selectorText.replace(/\.slot(?![\w-])/g, '.' + LOCKED_CLASS);
          css += sel + '{' + r.style.cssText + '}\n';
        }
      }
      var st = document.createElement('style');
      st.id = 'demo-slot-style';
      st.textContent = css + '.' + LOCKED_CLASS + ' .slot-picture img{width:86%;height:86%;margin:auto;object-fit:contain}';
      document.head.appendChild(st);
    }

    function applySlotLocks() {
      var slots = document.querySelectorAll('.slot[data-index], .' + LOCKED_CLASS + '[data-index]');
      for (var j = 0; j < slots.length; j++) {
        var el = slots[j];
        var k = parseInt(el.dataset.index, 10) + 1;
        var lock = k >= LOCK_FROM && k <= lastTo;
        if (lock) {
          if (el.classList.contains('slot')) el.classList.replace('slot', LOCKED_CLASS);
          // Susun guna .slot-picture; Padanan guna .slot-pic
          var pic = el.querySelector('.slot-picture, .slot-pic');
          if (pic && !pic.classList.contains('demo-locked')) {
            pic.classList.add('demo-locked');
            pic.innerHTML = '<img src="kunci.svg" alt="Dikunci" draggable="false" style="display:block;width:86%;height:86%;margin:auto;object-fit:contain">';
          }
        }
      }
    }

    // Tap pada petak dikunci tidak sampai ke game
    document.addEventListener('click', function (e) {
      if (e.target.closest && e.target.closest('.' + LOCKED_CLASS)) {
        e.preventDefault(); e.stopImmediatePropagation();
      }
    }, true);

    var mo = new MutationObserver(applySlotLocks);
    var start = function () {
      copySlotStyles();
      mo.observe(document.body, { childList: true, subtree: true });
      applySlotLocks();
    };
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
    return;
  }

  // ---- Kuiz: 2 pusingan ----
  var LIMIT = 2;
  var KEY = 'solat_demo_kuiz';
  function load() { try { return JSON.parse(localStorage.getItem(KEY)) || { rolls: 0, players: 1 }; } catch (e) { return { rolls: 0, players: 1 }; } }
  function save(s) { localStorage.setItem(KEY, JSON.stringify(s)); }
  var st = load();
  function rollsLimit() { return LIMIT * (st.players || 1); }

  function endCard() {
    if (document.getElementById('demo-lock')) return;
    var d = document.createElement('div');
    d.id = 'demo-lock';
    d.setAttribute('style', 'position:fixed;inset:0;z-index:99999;display:flex;align-items:center;justify-content:center;background:rgba(9,38,38,.55);padding:20px;font-family:Arial,sans-serif');
    d.innerHTML = '<div style="background:#fff;border-radius:20px;padding:28px 26px;max-width:380px;width:100%;text-align:center;box-shadow:0 12px 30px rgba(0,0,0,.35)">' +
      '<img src="kunci.svg" alt="" style="width:88px;height:88px">' +
      '<h2 style="margin:12px 0 8px;color:#0F4FA8;font-size:24px">Tempoh Percubaan Tamat</h2>' +
      '<p style="margin:0 0 20px;color:#333;line-height:1.5">Anda telah habis 2 pusingan dalam versi demo Kuiz Dadu Solat.</p>' +
      '<a href="index.html" style="display:inline-block;padding:12px 24px;border-radius:12px;background:#2D9596;color:#fff;text-decoration:none;font-weight:bold">Halaman Utama</a>' +
      '</div>';
    document.body.appendChild(d);
  }

  document.addEventListener('click', function (e) {
    var go = e.target.closest && e.target.closest('#go');
    if (go) {
      var n = document.querySelectorAll('input.nm').length;
      if (n) { st.players = n; save(st); }
      return;
    }
    // Selepas jawapan pusingan ke-2 ditutup, papar kad tamat
    if (e.target.closest && e.target.closest('#btn-next') && st.rolls >= rollsLimit()) {
      setTimeout(endCard, 400);
      return;
    }
    var b = e.target.closest && e.target.closest('#btn-roll');
    if (!b) return;
    if (st.rolls >= rollsLimit()) { e.preventDefault(); e.stopImmediatePropagation(); endCard(); return; }
    st.rolls++; save(st);
  }, true);

  if (st.rolls >= rollsLimit() && st.rolls > 0) {
    var show = function () { endCard(); };
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', show); else show();
  }
  window.solatDemo = { reset: function () { localStorage.removeItem(KEY); }, state: function () { return load(); } };
})();
