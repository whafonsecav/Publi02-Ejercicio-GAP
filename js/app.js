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

  function fit() {
    var b = deck.getBoundingClientRect();
    document.documentElement.style.setProperty('--k', Math.min(b.width / W, b.height / H));
    document.querySelectorAll('[data-car]').forEach(function (c) { if (c.__go) c.__go(c.__i); });
  }
  fit(); window.addEventListener('resize', fit);

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
  function setActive(i) {
    if (i === cur || i < 0 || i >= total) return;
    cur = i;
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
  document.querySelectorAll('.vp').forEach(function (wrap) {
    var v = wrap.querySelector('video'), b = wrap.querySelector('.pbtn');
    if (!v || !b) return;
    b.addEventListener('click', function () { v.controls = true; v.play(); });
    v.addEventListener('play', function () {
      wrap.classList.add('playing'); v.controls = true;
      /* que no suenen los dos a la vez */
      document.querySelectorAll('.vp video').forEach(function (o) { if (o !== v) o.pause(); });
    });
  });
  /* al cambiar de lamina, se pausa lo que este sonando */
  function pauseHidden(slide) {
    document.querySelectorAll('.vp video').forEach(function (v) {
      if (!slide || !slide.contains(v)) v.pause();
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
    tiro: { t: 'Jean de tiro bajo', k: 'atr', ic: 'i-ruler',
      j: 'Es una <b>medida del patrón</b>: dónde queda la cintura respecto a la cadera. Se mide en centímetros, y por eso es un atributo y no una opinión.',
      e: 'Toda la campaña existe para relanzar el tiro bajo. Gap rediseñó la pretina del Long &amp; Lean justamente para que no se caiga.' },
    denim: { t: 'Elaborado en denim', k: 'atr', ic: 'i-fabric',
      j: 'Es el <b>material físico y tangible</b> del que está hecho el producto: algodón tejido en sarga y teñido con índigo.',
      e: 'Las 36 personas del video llevan el mismo material. Es lo único que todos comparten en pantalla.' },
    colores: { t: 'Colores fríos y sepias', k: 'atr', ic: 'i-palette',
      j: 'En el producto son <b>los lavados reales de la tela</b>: los azules fríos del índigo y el sepia del caqui. No es gusto: es el color que sale de fábrica.',
      e: 'El relanzamiento trajo <b>10 lavados de temporada</b>. Esos diez azules son, literalmente, la paleta del video.' },
    variedad: { t: 'Variedad de prendas', k: 'atr', ic: 'i-layers',
      j: 'Es la <b>amplitud del catálogo</b>: jean, falda, top, chaleco y caqui, en todos los tiros y todas las piernas. Es un atributo del surtido, no de una prenda sola.',
      e: 'El video muestra el catálogo completo en movimiento sin que ninguna prenda sea la protagonista.' },
    flex: { t: 'Prendas flexibles y resistentes', k: 'atr', ic: 'i-stretch',
      j: 'Describe el <b>comportamiento físico de la tela</b>: el elastano le da elasticidad y recuperación, y la sarga 3×1 le da resistencia a la abrasión.',
      e: 'Aguantaron cuatro semanas de ensayo diario y 91 segundos de coreografía de seis estilos sin deformarse.' },
    calidad: { t: 'Materiales de buena calidad', k: 'atr', ic: 'i-check',
      j: 'Es la <b>composición y el estándar con el que se fabrica</b> la prenda: algodón de fibra larga, hilo ring-spun y confección responsable.',
      e: 'La misma ropa aguantó <b>cuatro semanas de ensayo diario</b> y 91 segundos de coreografía sin deformarse.' },

    /* ─ BENEFICIOS ─ */
    comodas: { t: 'Prendas cómodas', k: 'ben', ic: 'i-heart',
      j: 'Es <b>la recompensa que siente el usuario</b> gracias al atributo de la flexibilidad. No describe la tela: describe cómo se siente llevarla puesta.',
      n: 'Necesidad que resuelve: «la ropa me estorba cuando me muevo».',
      e: 'Un comentario con 240 likes lo dice solo: «qué bien ver a alguien que no tiene que pelear para ponerse unos jeans».' },
    combinan: { t: 'Sus colores permiten combinar con todo', k: 'ben', ic: 'i-palette',
      j: 'Es <b>la utilidad práctica</b> que el consumidor obtiene de la paleta: el azul y el sepia funcionan con cualquier otra prenda del clóset.',
      n: 'Necesidad que resuelve: «no sé qué ponerme y no tengo tiempo».' },
    versa: { t: 'Versatilidad', k: 'ben', ic: 'i-puzzle',
      j: 'Es el <b>resultado directo</b> de tener variedad de cortes y colores fáciles de combinar. Le simplifica la vida al usuario.',
      n: 'Necesidad que resuelve: «necesito una sola prenda que me sirva para estudiar, trabajar y salir».' },
    nostalgia: { t: 'Nostalgia del pasado / Revivir los 2000', k: 'ben', ic: 'i-clock',
      j: 'Es <b>lo que el consumidor siente</b> al usar el tiro bajo o al ver la campaña: una gratificación psicológica, no una característica del producto.',
      n: 'Necesidad que resuelve: «quiero sentirme parte de algo que reconozco».',
      e: 'Toda la pieza está armada con señales de esa época: la canción de 2003, el tiro bajo y el denim sobre denim.' },
    energia: { t: 'Vitalidad y energía', k: 'ben', ic: 'i-bolt',
      j: 'El ritmo y la coreografía exigen mucha energía. El beneficio emocional para quien compra la prenda es <b>contagiarse de ese dinamismo</b>: sentirse joven, activo y en movimiento.',
      n: 'Necesidad que resuelve: «quiero sentirme con energía, no pesado».',
      e: '91 segundos de baile sin conflicto, sin drama y sin una sola palabra.' },

    durabilidad: { t: 'Durabilidad', k: 'ben', ic: 'i-shield',
      j: 'Es <b>lo que t\u00fa ganas</b> con los materiales y la costura: una prenda que aguanta el uso diario sin deformarse ni perder el color. El atributo es el algod\u00f3n; el beneficio es <b>que no tengas que volver a comprarlo</b>.',
      n: 'Necesidad que resuelve: \u00abquiero comprar una vez y que me dure, no repetir la compra cada temporada\u00bb.',
      e: 'En el video, 36 personas bailan en denim durante 91 segundos y ninguna prenda se ve deformada ni fuera de sitio.' },

    /* ─ CREENCIAS Y VALORES ─ */
    genera: { t: 'Uniendo generaciones', k: 'cre', ic: 'i-bridge',
      j: 'Es un <b>propósito o ideal</b> de la marca: su visión sobre el papel que quiere jugar en la sociedad.',
      e: 'No es discurso vacío: el nombre «Gap» viene de <b>«generation gap»</b>, la brecha entre padres e hijos, y su propósito corporativo declarado es <b>«cerrar brechas»</b>.' },
    culturas: { t: 'Uniendo culturas / diversidad', k: 'cre', ic: 'i-globe',
      j: 'Es la <b>postura ideológica y cultural</b> que la marca defiende en su comunicación.',
      e: 'Seis integrantes de seis países + 30 bailarines acreditados con nombre. Y la canción está hecha de cinco geografías: Egipto, India, Brasil, Filipinas y Estados Unidos.' },
    losuyo: { t: 'Cada quien tiene lo suyo', k: 'cre', ic: 'i-spark',
      j: 'Es la <b>verdad humana (insight)</b> sobre la que la marca construye su filosofía para conectar con el público.',
      e: 'Sale de la propia canción: «lo mío es mejor que lo tuyo», puesto en boca de seis mujeres distintas, deja de ser presumir y se vuelve <b>«lo tuyo vale»</b>.' },
    indiv: { t: 'Individualidad', k: 'cre', ic: 'i-body',
      j: 'Es el <b>valor fundamental</b> que la marca promueve y defiende: su bandera ideológica.',
      e: 'Es textual en su declaración oficial de marca: «Gap inspira al mundo a llevar <b>su individualidad</b> a esenciales modernos».' },
    comolavistes: { t: 'Lo importante no es la prenda, sino cómo la vistes', k: 'cre', ic: 'i-mirror',
      j: 'Es una <b>declaración de principios</b>: un manifiesto sobre la relación entre la persona y el producto.',
      e: 'Es la primera línea del anuncio: <b>«This is denim as you define it»</b> — esto es denim como tú lo definas.' },
    lienzo: { t: 'El jean como lienzo del estilo personal', k: 'cre', ic: 'i-palette',
      j: 'Es la <b>forma poética</b> en que la marca entiende su producto frente al consumidor: un soporte en blanco, no una prenda terminada.',
      e: 'No es interpretación nuestra. La directora de marketing de Gap lo dijo textual: <b>«un par de jeans puede ser un lienzo para el estilo personal»</b>.' }
  };

  var elBody = document.getElementById('elBody');
  var elKicker = document.getElementById('elKicker');
  document.querySelectorAll('[data-e]').forEach(function (node) {
    node.addEventListener('click', function () {
      var d = EL[node.dataset.e]; if (!d) return;
      var c = CLASE[d.k];
      elKicker.innerHTML = 'Clasificación: <span class="hl">' + c.n + '</span>';
      var lv = [
        { k: 'atr', c: 'g-fab', n: '1 · Atributo',  s: 'Lo que el producto ES' },
        { k: 'ben', c: 'g-tec', n: '2 · Beneficio', s: 'Lo que TÚ ganas' },
        { k: 'cre', c: 'g-int', n: '3 · Creencia',  s: 'En lo que la marca CREE' }
      ];
      var lad = '<div class="ladder">';
      lv.forEach(function (x, ix) {
        if (ix) lad += '<span class="ar">→</span>';
        lad += '<div class="lv ' + x.c + (x.k === d.k ? ' act' : '') + '"><b>' + x.n + '</b><i>' + x.s + '</i></div>';
      });
      lad += '</div>';

      var h = lad + '<div class="ef-head ' + c.c + '">' +
        '<span class="ring"><svg class="ic"><use href="#' + d.ic + '"/></svg></span>' +
        '<div><span class="bdg">' + c.n + '</span><h4>' + d.t + '</h4></div></div>';
      h += '<div class="ef-box"><div class="t ' + c.c + '"><svg class="ic"><use href="#i-key"/></svg> Por qué está en este grupo</div><p>' + d.j + '</p></div>';
      if (d.n) {
        h += '<div class="ef-box"><div class="t ' + c.c + '"><svg class="ic"><use href="#i-arrow"/></svg> La necesidad que resuelve</div><p>' + d.n + '</p></div>';
      }
      if (d.e) {
        h += '<div class="ef-box"><div class="t ' + c.c + '"><svg class="ic"><use href="#i-eye"/></svg> Dónde se ve en la campaña</div><p>' + d.e + '</p></div>';
      }
      elBody.innerHTML = h;
      openModal('m-el');
    });
  });
})();
