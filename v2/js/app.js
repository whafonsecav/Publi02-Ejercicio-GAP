/* ═══════════════════════════════════════════════════════════
   GAP × BETTER IN DENIM — Motor
   Escenario 1600×900 · pestañas · carrusel · modales
   · fichas de cada elemento del posicionamiento
   ═══════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  var W = 1600, H = 900;
  var deck = document.getElementById('deck');
  var slides = [].slice.call(document.querySelectorAll('.slide'));
  var dotsBox = document.getElementById('navDots');
  var navNo = document.getElementById('navNo'), navT = document.getElementById('navT');
  var pl = document.getElementById('pl');
  var bPrev = document.getElementById('bPrev'), bNext = document.getElementById('bNext');
  var scrim = document.getElementById('scrim');
  var cur = -1, total = slides.length, openM = null;

  var fitBox = document.getElementById('fit');
  var NAVH = 56, HH = H + NAVH;
  function fit() {
    /* clientWidth/Height dan la caja l\u00f3gica, sin contar el giro en vertical */
    var w = fitBox ? fitBox.clientWidth  : window.innerWidth;
    var t = fitBox ? fitBox.clientHeight : window.innerHeight;
    document.documentElement.style.setProperty('--k', Math.min(w / W, t / HH));
    document.querySelectorAll('[data-car]').forEach(function (c) { if (c.__go) c.__go(c.__i); });
  }
  fit();
  window.addEventListener('resize', fit);

  /* ── Rueda del raton: un gesto = una lamina ───────── */
  var ruedaFija = false, ruedaT = null;
  deck.addEventListener('wheel', function (e) {
    e.preventDefault();
    if (ruedaT) clearTimeout(ruedaT);
    if (!ruedaFija && Math.abs(e.deltaY) > 4) {
      ruedaFija = true;
      go(cur + (e.deltaY > 0 ? 1 : -1));
    }
    /* el candado se suelta cuando la rueda lleva un rato quieta */
    ruedaT = setTimeout(function () { ruedaFija = false; }, 280);
  }, { passive: false });
  window.addEventListener('orientationchange', function () { setTimeout(fit, 120); });

  /* ── Decorado ───────────────────────────────────────────── */
  var WASH = ['#0D1B33','#16294A','#20395E','#2E4E7B','#4067A0','#5E85BE','#8FAED6','#BCD0E8','#CBFF3D','#FF5C93'];
  document.querySelectorAll('.strip').forEach(function (s) {
    s.innerHTML = WASH.map(function (c) { return '<i style="background:' + c + '"></i>'; }).join('');
  });
  document.querySelectorAll('[data-mq] .run').forEach(function (r) { r.innerHTML += r.innerHTML; });
  var POSES = [
    'M20 14V34M20 19L10 8M20 19L30 8M20 34L13 56M20 34L27 56',
    'M20 14V34M20 19L9 11M20 19L32 23M20 34L12 55M20 34L28 55',
    'M20 14V34M20 20L6 17M20 20L34 17M20 34L14 56M20 34L26 56',
    'M20 14V34M20 20L10 26L14 31M20 20L30 26L26 31M20 34L13 55M20 34L27 55',
    'M20 14V34M20 19L11 7M20 19L31 13M20 34L10 53M20 34L34 44',
    'M20 14V34M20 19L13 6M20 19L27 6M20 34L16 56M20 34L30 50'
  ];
  document.querySelectorAll('[data-dancers]').forEach(function (box) {
    var h = '';
    for (var i = 0; i < 6; i++) h += '<svg viewBox="0 0 40 60"><circle cx="20" cy="9" r="5"/><path d="' + POSES[i] + '"/></svg>';
    box.innerHTML = h;
  });

  /* ── Títulos por palabra ────────────────────────────────── */
  document.querySelectorAll('h2.big, .cov h1').forEach(function (el) {
    if (el.dataset.k) return; el.dataset.k = '1';
    var i = 0;
    (function walk(node) {
      [].slice.call(node.childNodes).forEach(function (n) {
        if (n.nodeType === 3) {
          var f = document.createDocumentFragment();
          n.nodeValue.split(/(\s+)/).forEach(function (p) {
            if (!p) return;
            if (/^\s+$/.test(p)) { f.appendChild(document.createTextNode(p)); return; }
            var w = document.createElement('span'); w.className = 'w';
            var t = document.createElement('i'); t.textContent = p;
            t.style.transitionDelay = (0.05 + i * 0.06).toFixed(3) + 's'; i++;
            w.appendChild(t); f.appendChild(w);
          });
          node.replaceChild(f, n);
        } else if (n.nodeType === 1 && n.tagName !== 'BR' && n.tagName !== 'svg') walk(n);
      });
    })(el);
  });

  /* ── Escalonado de las columnas ─────────────────────────── */
  document.querySelectorAll('.col').forEach(function (col, ci) {
    [].slice.call(col.querySelectorAll('.el')).forEach(function (el, i) {
      el.style.transitionDelay = (0.18 + ci * 0.07 + i * 0.06).toFixed(3) + 's';
    });
  });
  /* ── Frase: máquina de escribir ─────────────────────────── */
  function setupTypewriter(q) {
    if (q.dataset.tw) return; q.dataset.tw = '1';
    var chars = [];
    (function walk(n) {
      [].slice.call(n.childNodes).forEach(function (c) {
        if (c.nodeType === 3) {
          var f = document.createDocumentFragment();
          c.nodeValue.split('').forEach(function (ch) {
            var s = document.createElement('span');
            s.className = 'ch'; s.textContent = ch;
            f.appendChild(s); chars.push(s);
          });
          n.replaceChild(f, c);
        } else if (c.nodeType === 1) { walk(c); }
      });
    })(q);
    var cur = document.createElement('span');
    cur.className = 'twcur';
    var timer = null;

    /* Termina de golpe: al acabar solo, o si alguien toca la frase */
    function finish() {
      clearTimeout(timer); timer = null;
      chars.forEach(function (s) { s.classList.add('in'); });
      if (cur.parentNode) cur.parentNode.removeChild(cur);
      q.dataset.run = 'done';
    }

    q.__type = function () {
      if (q.dataset.run) return; q.dataset.run = '1';
      var i = 0;
      (function step() {
        var s = chars[i];
        s.classList.add('in');
        var t = s.textContent, wait = 11;
        if (t === '.') wait = 240;                       /* respira en el punto */
        else if (t === ',' || t === ':' || t === ';') wait = 130;
        i++;
        if (i < chars.length) {
          chars[i].parentNode.insertBefore(cur, chars[i]);
          timer = setTimeout(step, wait);
        } else { finish(); }
      })();
    };

    /* Un clic la completa si va a medias, y la repite si ya terminó */
    q.style.cursor = 'pointer';
    q.addEventListener('click', function () {
      if (q.dataset.run === '1') { finish(); return; }
      chars.forEach(function (s) { s.classList.remove('in'); });
      q.dataset.run = '';
      q.__type();
    });
  }
  document.querySelectorAll('.qtext').forEach(setupTypewriter);
  function runTypewriters(slide) {
    slide.querySelectorAll('.qtext').forEach(function (q) {
      if (q.__type) setTimeout(q.__type, 420);
    });
  }

  /* ── Navegación ─────────────────────────────────────────── */
  slides.forEach(function (s, i) {
    var b = document.createElement('button');
    b.type = 'button'; b.title = (i + 1) + '. ' + (s.dataset.title || '');
    b.addEventListener('click', function () { go(i); });
    dotsBox.appendChild(b);
  });
  var dots = [].slice.call(dotsBox.children);
  function pad(n) { return (n < 10 ? '0' : '') + n; }
  function go(i) {
    i = Math.max(0, Math.min(total - 1, i));
    deck.scrollTo({ top: i * deck.clientHeight, behavior: 'smooth' });
  }
  /* ── Voz de la frase de posicionamiento ───────────── */
  var voz = document.getElementById('voz'), vozT = null, vozEsperando = false;
  function arrancarVoz() {
    var p = voz.play();
    if (p && p.catch) p.catch(function () {
      /* algunos navegadores no dejan sonar nada hasta que alguien toque la pagina */
      if (vozEsperando) return; vozEsperando = true;
      var once = function () {
        vozEsperando = false;
        document.removeEventListener('pointerdown', once);
        document.removeEventListener('keydown', once);
        voz.play().catch(function () {});
      };
      document.addEventListener('pointerdown', once);
      document.addEventListener('keydown', once);
    });
  }
  function vozPara(slide) {
    if (!voz) return;
    if (vozT) { clearTimeout(vozT); vozT = null; }
    if (slide && slide.hasAttribute('data-audio')) {
      vozT = setTimeout(function () { voz.currentTime = 0; arrancarVoz(); }, 4000);
    } else if (!voz.paused || voz.currentTime) {
      voz.pause(); voz.currentTime = 0;
    }
  }

  function setActive(i) {
    if (i === cur || i < 0 || i >= total) return;
    cur = i;
    vozPara(slides[i]);
    tickersDe(slides[i]);
    dots.forEach(function (d, k) { d.classList.toggle('on', k === i); });
    navNo.textContent = pad(i + 1);
    navT.textContent = slides[i].dataset.title || '';
    pl.style.width = ((i + 1) / total * 100) + '%';
    bPrev.disabled = (i === 0); bNext.disabled = (i === total - 1);
  }
  function reveal(i) {
    if (!slides[i]) return;
    slides[i].classList.add('on');
    slides[i].querySelectorAll('[data-count]').forEach(count);
    runTypewriters(slides[i]);
    pauseHidden(slides[i]);
    setActive(i);
  }
  function count(el) {
    if (el.dataset.done) return; el.dataset.done = '1';
    var to = parseFloat(el.dataset.count), post = el.dataset.post || '', t0 = null;
    function f(t) {
      if (!t0) t0 = t;
      var p = Math.min(1, (t - t0) / 1100), e = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(to * e) + post;
      if (p < 1) requestAnimationFrame(f);
    }
    requestAnimationFrame(f);
  }
  var io = new IntersectionObserver(function (es) {
    es.forEach(function (e) {
      if (!e.isIntersecting) return;
      e.target.classList.add('on');
      e.target.querySelectorAll('[data-count]').forEach(count);
      runTypewriters(e.target);
      if (e.intersectionRatio > 0.5) setActive(slides.indexOf(e.target));
    });
  }, { root: deck, threshold: [0.2, 0.55, 0.85] });
  slides.forEach(function (s) { io.observe(s); });
  var tk = null;
  deck.addEventListener('scroll', function () {
    clearTimeout(tk);
    tk = setTimeout(function () { reveal(Math.round(deck.scrollTop / deck.clientHeight)); }, 90);
  }, { passive: true });
  reveal(0);

  bPrev.addEventListener('click', function () { go(cur - 1); });
  bNext.addEventListener('click', function () { go(cur + 1); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && openM) { closeM(); return; }
    if (openM) {
      var c = openM.querySelector('[data-car]');
      if (c && (e.key === 'ArrowRight' || e.key === 'ArrowLeft')) {
        e.preventDefault(); c.__go(c.__i + (e.key === 'ArrowRight' ? 1 : -1));
      }
      return;
    }
    var k = e.key;
    if (openM && openM.id === 'm-el' && (k === 'ArrowRight' || k === 'ArrowLeft')) {
      e.preventDefault(); renderEl(elIdx + (k === 'ArrowRight' ? 1 : -1)); return;
    }
    if (k === 'ArrowDown' || k === 'ArrowRight' || k === 'PageDown' || k === ' ') { e.preventDefault(); go(cur + 1); }
    else if (k === 'ArrowUp' || k === 'ArrowLeft' || k === 'PageUp') { e.preventDefault(); go(cur - 1); }
    else if (k === 'Home') { e.preventDefault(); go(0); }
    else if (k === 'End') { e.preventDefault(); go(total - 1); }
  });
  var y0 = null;
  deck.addEventListener('touchstart', function (e) { y0 = e.touches[0].clientY; }, { passive: true });
  deck.addEventListener('touchend', function (e) {
    if (y0 === null) return;
    var dy = y0 - e.changedTouches[0].clientY;
    if (Math.abs(dy) > 70) go(cur + (dy > 0 ? 1 : -1));
    y0 = null;
  }, { passive: true });

  /* ── Pestañas ───────────────────────────────────────────── */
  document.querySelectorAll('[data-tabs]').forEach(function (bar) {
    var panes = document.getElementById(bar.dataset.tabs);
    var btns = [].slice.call(bar.children), ps = [].slice.call(panes.children);
    btns.forEach(function (b, i) {
      b.addEventListener('click', function () {
        btns.forEach(function (x) { x.classList.remove('on'); });
        ps.forEach(function (x) { x.classList.remove('on'); });
        b.classList.add('on'); if (ps[i]) ps[i].classList.add('on');
      });
    });
  });

  /* ── Carruseles ─────────────────────────────────────────── */
  document.querySelectorAll('[data-car]').forEach(function (car) {
    var track = car.querySelector('.car-track');
    var items = [].slice.call(track.children);
    var dw = car.querySelector('.car-dots'), ct = car.querySelector('.car-ct');
    var pv = car.querySelector('[data-prev]'), nx = car.querySelector('[data-next]');
    car.__i = 0;
    items.forEach(function (_, i) {
      var b = document.createElement('button'); b.type = 'button';
      b.addEventListener('click', function () { car.__go(i); });
      dw.appendChild(b);
    });
    var cd = [].slice.call(dw.children);
    car.__go = function (i) {
      i = Math.max(0, Math.min(items.length - 1, i));
      car.__i = i;
      var step = items[0] ? items[0].getBoundingClientRect().width : 0;
      track.style.transform = 'translateX(' + (-i * step) + 'px)';
      cd.forEach(function (d, k) { d.classList.toggle('on', k === i); });
      ct.innerHTML = '<b>' + (i + 1) + '</b> / ' + items.length;
      pv.disabled = (i === 0); nx.disabled = (i === items.length - 1);
    };
    pv.addEventListener('click', function () { car.__go(car.__i - 1); });
    nx.addEventListener('click', function () { car.__go(car.__i + 1); });
    car.__go(0);
  });

  /* ── Reproductores de video ()───────────────── */
  var pv = document.getElementById('pvVideo');
  document.querySelectorAll('.vp').forEach(function (wrap) {
    wrap.addEventListener('click', function () {
      if (!pv) return;
      document.getElementById('pvTitle').innerHTML = wrap.dataset.title || 'Video';
      document.getElementById('pvSub').textContent = wrap.dataset.sub || '';
      if (pv.getAttribute('src') !== wrap.dataset.src) pv.setAttribute('src', wrap.dataset.src);
      openModal('m-play');
      pv.currentTime = 0;
      var p = pv.play(); if (p && p.catch) p.catch(function () {});
    });
  });
  function pauseHidden(slide) { if (pv) pv.pause(); }

  /* ── Mantener presionado para ver la version anterior ── */
  document.querySelectorAll('[data-antes]').forEach(function (btn) {
    var capa = document.getElementById('antes-' + btn.dataset.antes);
    if (!capa) return;
    var mostrar = function (e) { if (e) e.preventDefault(); capa.classList.add('on'); };
    var ocultar = function () { capa.classList.remove('on'); };
    btn.addEventListener('pointerdown', mostrar);
    btn.addEventListener('pointerup', ocultar);
    btn.addEventListener('pointerleave', ocultar);
    btn.addEventListener('pointercancel', ocultar);
    /* con teclado: la barra o Enter mientras se mantiene */
    btn.addEventListener('keydown', function (e) { if (e.key === ' ' || e.key === 'Enter') mostrar(e); });
    btn.addEventListener('keyup', ocultar);
    btn.addEventListener('blur', ocultar);
  });

  /* ── Carrusel de comentarios: cambia cada 4 segundos ──── */
  document.querySelectorAll('[data-ticker]').forEach(function (tk) {
    var items = [].slice.call(tk.querySelectorAll('.cmt'));
    var dots  = [].slice.call(tk.querySelectorAll('.tkdots i'));
    if (items.length < 2) return;
    var i = 0, timer = null;
    function ir(n) {
      items[i].classList.remove('on'); if (dots[i]) dots[i].classList.remove('on');
      i = (n + items.length) % items.length;
      items[i].classList.add('on');   if (dots[i]) dots[i].classList.add('on');
    }
    function arrancar() { if (!timer) timer = setInterval(function () { ir(i + 1); }, 4000); }
    function parar() { if (timer) { clearInterval(timer); timer = null; } }
    /* solo corre mientras la lamina esta a la vista */
    tk.__on = arrancar; tk.__off = parar;
    dots.forEach(function (d, k) { d.addEventListener('click', function () { parar(); ir(k); arrancar(); }); });
    tk.addEventListener('mouseenter', parar);
    tk.addEventListener('mouseleave', arrancar);
  });
  function tickersDe(slide) {
    document.querySelectorAll('[data-ticker]').forEach(function (tk) {
      if (slide && slide.contains(tk)) { if (tk.__on) tk.__on(); }
      else if (tk.__off) tk.__off();
    });
  }

  /* ── Modales ────────────────────────────────────────────── */
  function openModal(id) {
    var m = document.getElementById(id); if (!m) return;
    openM = m; scrim.classList.add('on'); m.classList.add('on');
    var c = m.querySelector('[data-car]'); if (c) c.__go(0);
    var b = m.querySelector('.mb'); if (b) b.scrollTop = 0;
    var x = m.querySelector('.xbtn'); if (x) setTimeout(function () { x.focus(); }, 60);
  }
  function closeM() {
    if (!openM) return;
    var v = document.getElementById('pvVideo'); if (v) v.pause();
    openM.classList.remove('on'); scrim.classList.remove('on'); openM = null;
  }
  document.querySelectorAll('[data-modal]').forEach(function (el) {
    el.addEventListener('click', function () { openModal(el.dataset.modal); });
  });
  document.querySelectorAll('.xbtn').forEach(function (b) { b.addEventListener('click', closeM); });
  scrim.addEventListener('click', closeM);
  document.querySelectorAll('.modal').forEach(function (m) {
    m.addEventListener('click', function (e) { if (e.target === m) closeM(); });
  });

  /* ═══ FICHAS DE CADA ELEMENTO ═══ */
  var CLASE = {
    atr: { n: 'Atributo', c: 'g-fab' },
    ben: { n: 'Beneficio', c: 'g-tec' },
    cre: { n: 'Creencia / Valor', c: 'g-int' }
  };
  var EL = {
    /* ─ ATRIBUTOS ─ */
    esenciales: { t: 'Esenciales de uso diario', k: 'atr', ic: 'i-tag',
      j: 'Es la <b>categor&iacute;a que la marca fabrica</b>: jean, sudadera, camiseta, caqui. No hace vestidos de gala ni trajes de novia. La prenda est&aacute; hecha para repetirse, no para un evento.',
      e: 'Las dos campa&ntilde;as visten a la gente con lo que uno se pone un martes: en 2025 un jean, en 2026 una sudadera.' },
    algodon: { t: 'Base de algod&oacute;n', k: 'atr', ic: 'i-fabric',
      j: 'Es <b>la fibra con la que se hace la tela</b>. El denim es algod&oacute;n tejido en sarga y te&ntilde;ido con &iacute;ndigo; el polar de las sudaderas es el mismo algod&oacute;n, cardado por dentro para que agarre aire.',
      e: 'Cambia el tejido entre una campa&ntilde;a y otra, pero <b>no cambia la materia prima</b>.' },
    patron: { t: 'El tiro y la pierna como medida', k: 'atr', ic: 'i-ruler',
      j: 'Es <b>patronaje</b>: se mide en pulgadas y no se opina. El tiro dice d&oacute;nde queda la pretina respecto a la cadera; la abertura de pierna dice si es ce&ntilde;ido, recto o ancho.',
      e: 'En 2025 el argumento fue <b>el tiro bajo</b>; en 2026, <b>el jogger de pierna ancha</b>. La misma variable, otro valor.' },
    paleta: { t: 'Paleta neutra y corta', k: 'atr', ic: 'i-palette',
      j: 'Es <b>el color con el que sale la tela de la f&aacute;brica</b>. Gap trabaja una gama corta de tonos que no compiten entre s&iacute; ni con nada de lo que ya tengas.',
      e: 'El denim se relanz&oacute; en diez tonos de &iacute;ndigo; las sudaderas salieron en gris, negro y blanco.' },
    tallas: { t: 'Todas las tallas y todos los cortes', k: 'atr', ic: 'i-layers',
      j: 'Es un atributo <b>del cat&aacute;logo</b>, no de una prenda suelta: cu&aacute;ntos cuerpos y cu&aacute;ntos gustos cubre el surtido completo.',
      e: 'Las dos piezas ense&ntilde;an el cat&aacute;logo en movimiento, sin que una sola prenda sea la protagonista.' },
    movimiento: { t: 'Tejido que aguanta el movimiento', k: 'atr', ic: 'i-stretch',
      j: 'Es <b>comportamiento f&iacute;sico medible</b>: el elastano da elasticidad y el &iacute;ndice de recuperaci&oacute;n dice cu&aacute;nto vuelve la tela a su sitio.',
      e: 'Las dos campa&ntilde;as son coreograf&iacute;as completas. Ninguna prenda se ve deformada ni fuera de lugar.' },
    liso: { t: 'Prendas lisas, sin estampados', k: 'atr', ic: 'i-rivet',
      j: 'Es <b>lo que la prenda NO tiene</b>: ni dibujos, ni frases, ni logos grandes. Gap fabrica la tela y el corte, y deja la superficie en blanco.',
      e: 'Verificado mirando las dos piezas: en el anuncio de 2026 <b>las sudaderas no llevan ni un logo visible</b>, y en el de 2025 el denim tampoco. La marca vende su ropa <b>sin firmarla por fuera</b>.' },
    responsable: { t: 'Confecci&oacute;n responsable', k: 'atr', ic: 'i-check',
      j: 'Es <b>el est&aacute;ndar de fabricaci&oacute;n declarado</b> por la marca, no una opini&oacute;n sobre ella: algod&oacute;n de fibra larga, hilo ring-spun y produccion responsable.',
      e: 'Aparece en la declaraci&oacute;n oficial de la marca: &laquo;responsibly made essentials&raquo;.' },
    /* ─ BENEFICIOS ─ */
    olvidas: { t: 'Te olvidas de lo que llevas puesto', k: 'ben', ic: 'i-heart',
      j: 'Es <b>la recompensa de la comodidad</b>. No describe la tela: describe que puedas dejar de pensar en ella.',
      n: 'Necesidad que resuelve: &laquo;La ropa me estorba cuando me muevo.&raquo;',
      e: 'Nadie en los dos videos se acomoda la ropa ni se la baja. Bailan 91 segundos y tres minutos sin tocarse la pretina.' },
    combina: { t: 'Combina con lo que ya tienes', k: 'ben', ic: 'i-sun',
      j: 'Es <b>la utilidad pr&aacute;ctica</b> de la paleta corta: el azul del denim y el gris del polar funcionan con casi cualquier otra prenda del cl&oacute;set.',
      n: 'Necesidad que resuelve: &laquo;No s&eacute; qu&eacute; ponerme y no tengo tiempo.&raquo;',
      e: 'En los dos videos conviven todos los tonos del surtido a la vez y ninguno desentona con otro.' },
    todoeldia: { t: 'Te sirve el d&iacute;a entero', k: 'ben', ic: 'i-puzzle',
      j: 'Es <b>el resultado de juntar</b> la variedad de cortes con los colores f&aacute;ciles: la misma prenda pasa del d&iacute;a a la noche sin quedar fuera de lugar.',
      n: 'Necesidad que resuelve: &laquo;No quiero tener que cambiarme tres veces al d&iacute;a.&raquo;',
      e: 'El jean y la sudadera son las dos prendas que uno se deja puestas. La marca escogi&oacute; sus dos productos m&aacute;s continuos.' },
    talla: { t: 'Tu talla existe', k: 'ben', ic: 'i-body',
      j: 'Es <b>lo que ganas con la amplitud del surtido</b>: que haya uno para tu cuerpo. Y es literalmente el problema con el que empez&oacute; todo.',
      n: 'Necesidad que resuelve: &laquo;Nunca encuentro uno que me quede.&raquo;',
      e: 'Gap existe porque en 1969 a Don Fisher no le quedaban los jeans. El beneficio no se invent&oacute; para una campa&ntilde;a: <b>es el origen</b>.' },
    dura: { t: 'Te dura a&ntilde;os', k: 'ben', ic: 'i-shield',
      j: 'Es <b>lo que ganas con los materiales y la costura</b>: una prenda que aguanta el uso diario sin deformarse ni perder el color.',
      n: 'Necesidad que resuelve: &laquo;Quiero comprar una vez y que me dure.&raquo;',
      e: 'Es el beneficio que enganchan los atributos de material, que si no se quedan sin consecuencia para quien compra.' },
    mover: { t: 'Te puedes mover con ella puesta', k: 'ben', ic: 'i-bolt',
      j: 'Es <b>libertad de movimiento</b>, que sale directo del tejido el&aacute;stico. La diferencia con la comodidad es que aqu&iacute; la prenda no solo no estorba: <b>acompa&ntilde;a</b>.',
      n: 'Necesidad que resuelve: &laquo;Quiero poder moverme sin pensar en lo que llevo.&raquo;',
      e: 'Las dos campa&ntilde;as son coreograf&iacute;as. Es el beneficio que la marca lleva demostrando <b>bailando desde 1998</b>, no explicando.' },
    sinpensar: { t: 'Te ves bien sin dedicarle tiempo', k: 'ben', ic: 'i-mirror',
      j: 'Es <b>seguridad sin esfuerzo</b>: la tranquilidad de no tener que armar un atuendo para salir bien librado.',
      n: 'Necesidad que resuelve: &laquo;Quiero verme bien sin dedicarle media hora.&raquo;',
      e: 'Ni el jean ni la sudadera piden accesorios ni combinaciones. Son prendas que resuelven solas.' },
    perteneces: { t: 'Perteneces sin uniformarte', k: 'ben', ic: 'i-hands',
      j: 'Es un <b>beneficio social</b>, no funcional: llevar lo mismo que los dem&aacute;s y aun as&iacute; no confundirte con ellos.',
      n: 'Necesidad que resuelve: &laquo;Quiero encajar sin desaparecer.&raquo;',
      e: 'Es el &uacute;nico beneficio que explica por qu&eacute; las dos campa&ntilde;as son <b>coreograf&iacute;as de grupo</b> y no retratos de una persona sola.' },
    /* ─ CREENCIAS Y VALORES ─ */
    adapta: { t: 'La ropa se adapta a la persona', k: 'cre', ic: 'i-hand',
      j: 'Es <b>la conviccion fundacional</b> de la marca y de la que salen todas las dem&aacute;s: el cuerpo no se corrige para caber en la prenda.',
      e: 'Doris y Don Fisher abrieron la tienda con una sola idea: <b>&laquo;hacer m&aacute;s f&aacute;cil encontrar un jean que quede&raquo;</b>.' },
    brechas: { t: 'Las brechas est&aacute;n para cerrarse', k: 'cre', ic: 'i-bridge',
      j: 'Es <b>el prop&oacute;sito corporativo</b>, y es raro: la marca se llam&oacute; como un problema social para dedicarse a resolverlo.',
      e: '&laquo;Gap&raquo; viene de <b>generation gap</b>, la brecha entre padres e hijos de 1969. El prop&oacute;sito declarado hoy es <b>&laquo;bridging gaps&raquo;</b>.' },
    genera: { t: 'Uniendo generaciones', k: 'cre', ic: 'i-clock',
      j: 'Es un <b>prop&oacute;sito declarado</b>, y la marca lo tiene escrito en su propio perfil.',
      e: 'La biograf&iacute;a de TikTok de Gap dice, textual: <b>&laquo;Individual style. For every generation.&raquo;</b> No es interpretaci&oacute;n nuestra.' },
    culturas: { t: 'Uniendo culturas', k: 'cre', ic: 'i-globe',
      j: 'Es <b>la postura cultural</b> que la marca defiende, y no se queda en el reparto: cambia el idioma de la campa&ntilde;a si hace falta.',
      e: '2025: seis integrantes de seis or&iacute;genes m&aacute;s treinta bailarines. 2026: <b>26 bailarines latinos</b> y la primera campa&ntilde;a de la marca cantada en espa&ntilde;ol.' },
    losuyo: { t: 'Cada quien tiene lo suyo', k: 'cre', ic: 'i-spark',
      j: 'Es <b>la verdad humana</b> sobre la que se construye todo el discurso: lo que te distingue no es lo que compras, es lo que haces con ello.',
      e: 'Las dos canciones escogidas dicen lo mismo: una mujer afirmando que tiene algo propio. En 2003 y en 2025.' },
    indiv: { t: 'Individualidad', k: 'cre', ic: 'i-crown',
      j: 'Es <b>el valor que la marca declara por escrito</b> en su definici&oacute;n oficial. No es una lectura: es una cita.',
      e: '&laquo;Gap inspira al mundo a llevar su <b>individualidad</b> a esenciales modernos.&raquo;' },
    comolavistes: { t: 'No es la prenda: es c&oacute;mo la vistes', k: 'cre', ic: 'i-eye',
      j: 'Es <b>un manifiesto</b> sobre la relaci&oacute;n entre la persona y el producto: el valor no est&aacute; en la tela sino en la decisi&oacute;n.',
      e: 'Es la primera l&iacute;nea del anuncio de 2025: <b>&laquo;This is denim as you define it&raquo;</b> &mdash; esto es denim como t&uacute; lo definas.' },
    lienzo: { t: 'La prenda es un lienzo', k: 'cre', ic: 'i-key',
      j: 'Es <b>c&oacute;mo la marca entiende su producto</b>: la prenda sale igual para todos y por s&iacute; sola no significa nada. El significado lo pone quien se la pone.',
      e: 'La marca us&oacute; <b>esa misma palabra dos veces</b>: &laquo;un par de jeans puede ser un lienzo&raquo; (2025) y &laquo;GapSweats como un lienzo para la creatividad&raquo; (2026, Mark Breitbard). Dos productos distintos, la misma idea.' },
  };

  var elBody   = document.getElementById('elBody');
  var elKicker = document.getElementById('elKicker');
  var elSub    = document.getElementById('elSub');
  var elPanel  = document.getElementById('elPanel');
  var elPos    = document.getElementById('elPos');
  var elGrupo  = document.getElementById('elGrupo');
  var elNodes  = [].slice.call(document.querySelectorAll('[data-e]'));
  var elKeys   = elNodes.map(function (n) { return n.dataset.e; });
  var elIdx    = 0;

  var LV = [
    { k: 'atr', c: 'g-fab', n: '1 \u00b7 Atributo',  s: 'Lo que el producto ES' },
    { k: 'ben', c: 'g-tec', n: '2 \u00b7 Beneficio', s: 'Lo que T\u00da ganas' },
    { k: 'cre', c: 'g-int', n: '3 \u00b7 Creencia',  s: 'En lo que la marca CREE' }
  ];

  function renderEl(i) {
    elIdx = (i + elKeys.length) % elKeys.length;
    var d = EL[elKeys[elIdx]]; if (!d) return;
    var c = CLASE[d.k];
    var sub = elNodes[elIdx].querySelector('i');

    elPanel.className = 'panel k-' + d.k;
    elKicker.innerHTML = 'Clasificaci\u00f3n: <span class="hl">' + c.n + '</span>';
    elSub.textContent = d.k === 'atr' ? 'Lo que el producto es'
                      : d.k === 'ben' ? 'Lo que gana quien lo usa'
                      : 'En lo que la marca cree';
    elPos.textContent = (elIdx + 1);
    elGrupo.textContent = d.k === 'atr' ? 'Atributos' : d.k === 'ben' ? 'Beneficios' : 'Creencias';

    var lad = '<div class="ladder">';
    LV.forEach(function (x, ix) {
      if (ix) lad += '<span class="ar">\u2192</span>';
      lad += '<div class="lv ' + x.c + (x.k === d.k ? ' act' : '') + '"><b>' + x.n + '</b><i>' + x.s + '</i></div>';
    });
    lad += '</div>';

    var head = '<div class="ef-head ' + c.c + '">' +
      '<span class="ring"><svg class="ic"><use href="#' + d.ic + '"/></svg></span>' +
      '<div><span class="bdg">' + c.n + '</span><h4>' + d.t + '</h4>' +
      (sub ? '<p class="lede">' + sub.textContent + '</p>' : '') + '</div></div>';

    var cols = '';
    if (d.n) cols += '<div class="ef-box"><div class="t"><svg class="ic"><use href="#i-arrow"/></svg> La necesidad que resuelve</div><p>' + d.n + '</p></div>';
    if (d.e) cols += '<div class="ef-box"><div class="t"><svg class="ic"><use href="#i-eye"/></svg> D\u00f3nde se ve en la campa\u00f1a</div><p>' + d.e + '</p></div>';
    if (d.n && d.e) cols = '<div class="mcols">' + cols + '</div>';

    elBody.innerHTML = lad + head +
      '<div class="ef-box"><div class="t"><svg class="ic"><use href="#i-key"/></svg> Por qu\u00e9 est\u00e1 en este grupo</div><p>' + d.j + '</p></div>' + cols;
    elBody.classList.remove('swap'); void elBody.offsetWidth; elBody.classList.add('swap');
    elBody.scrollTop = 0;
  }

  elNodes.forEach(function (node, i) {
    node.addEventListener('click', function () { renderEl(i); openModal('m-el'); });
  });
  document.getElementById('elPrev').addEventListener('click', function () { renderEl(elIdx - 1); });
  document.getElementById('elNext').addEventListener('click', function () { renderEl(elIdx + 1); });
})();


/* ---- numeracion consecutiva de las laminas (siempre igual al pie) ---- */
(function () {
  var laminas = [].slice.call(document.querySelectorAll('.slide'));
  laminas.forEach(function (s, i) {
    var punto = s.querySelector('.kicker .dot');
    if (punto) punto.textContent = (i + 1 < 10 ? '0' : '') + (i + 1);
  });
})();

/* ---- mantener presionado: el bloque se cambia a si mismo ---- */
(function () {
  document.querySelectorAll('[data-swap]').forEach(function (btn) {
    var caja = document.getElementById(btn.dataset.swap);
    if (!caja) return;
    var ver = function (e) { if (e) e.preventDefault(); caja.classList.add('old'); btn.classList.add('activo'); };
    var quitar = function () { caja.classList.remove('old'); btn.classList.remove('activo'); };
    btn.addEventListener('pointerdown', ver);
    btn.addEventListener('pointerup', quitar);
    btn.addEventListener('pointerleave', quitar);
    btn.addEventListener('pointercancel', quitar);
    btn.addEventListener('keydown', function (e) { if (e.key === ' ' || e.key === 'Enter') ver(e); });
    btn.addEventListener('keyup', quitar);
    btn.addEventListener('blur', quitar);
  });
})();


/* ---- fichas de colaboracion ---- */
(function () {
  var poner = function (id, txt) { var n = document.getElementById(id); if (n) n.innerHTML = txt; };
  document.querySelectorAll('.chip[data-a]').forEach(function (c) {
    c.addEventListener('click', function () {
      poner('cb-a', c.dataset.a);
      poner('cb-f', c.dataset.p);
      poner('cb-f2', c.dataset.f);
      poner('cb-p', c.dataset.p);
      poner('cb-c', c.dataset.c);
      poner('cb-n', c.dataset.n);
      var yb = document.getElementById('cb-yt');
      if (yb) {
        yb.innerHTML = c.dataset.yt
          ? '<iframe src="https://www.youtube-nocookie.com/embed/' + c.dataset.yt +
            '?rel=0&modestbranding=1" title="' + c.dataset.a +
            '" allow="accelerometer; autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>'
          : '';
      }
    });
  });
})();

/* ---- el anuncio de YouTube, dentro de la presentacion ---- */
(function () {
  var caja = document.getElementById('vd-box');
  if (!caja) return;
  document.querySelectorAll('.vchip[data-yt]').forEach(function (v) {
    v.addEventListener('click', function () {
      var t = document.getElementById('vd-t'), s = document.getElementById('vd-s');
      if (t) t.innerHTML = v.dataset.vt;
      if (s) s.innerHTML = v.dataset.vs;
      caja.innerHTML = '<iframe src="https://www.youtube-nocookie.com/embed/' + v.dataset.yt +
        '?autoplay=1&rel=0&modestbranding=1" title="' + v.dataset.vt +
        '" allow="accelerometer; autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>';
    });
  });
  var vaciar = function () { caja.innerHTML = ''; };
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') vaciar(); });
  var m = document.getElementById('m-video');
  if (m) { var x = m.querySelector('.xbtn'); if (x) x.addEventListener('click', vaciar); }
  var sc = document.getElementById('scrim');
  if (sc) sc.addEventListener('click', vaciar);
})();


/* ---- interruptor flotante: mantener presionado cambia la vista en sitio ---- */
(function () {
  document.querySelectorAll('[data-flip]').forEach(function (btn) {
    var caja = document.getElementById(btn.dataset.flip);
    if (!caja) return;
    var ver = function (e) {
      if (e) e.preventDefault();
      caja.classList.add('old');
      btn.classList.add('activo');
    };
    var quitar = function () {
      caja.classList.remove('old');
      btn.classList.remove('activo');
    };
    btn.addEventListener('pointerdown', ver);
    ['pointerup', 'pointerleave', 'pointercancel', 'blur'].forEach(function (ev) {
      btn.addEventListener(ev, quitar);
    });
    btn.addEventListener('keydown', function (e) {
      if (e.key === ' ' || e.key === 'Enter') ver(e);
    });
    btn.addEventListener('keyup', quitar);
    btn.addEventListener('contextmenu', function (e) { e.preventDefault(); });
  });
})();


/* cortar el video de la ficha de colaboracion al cerrarla */
(function () {
  var yb = document.getElementById('cb-yt');
  if (!yb) return;
  var vaciar = function () { yb.innerHTML = ''; };
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') vaciar(); });
  var m = document.getElementById('m-colab');
  if (m) { var x = m.querySelector('.xbtn'); if (x) x.addEventListener('click', vaciar); }
  var sc = document.getElementById('scrim');
  if (sc) sc.addEventListener('click', vaciar);
})();
