/* Effets propres à Manawa Massage Pro (le reste vient du socle). Chaque effet propre porte data-effet="nom-du-plan" :
   parentheses, chaleur, envies, rangee, carte-cadeau, parentheses-fin, bol. */
import { demarrer, boucle, versObjet, quand, aller } from './socle/index.js?v=1';

const gsap = window.gsap;
const ST = window.ScrollTrigger;
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const souris = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
const NB = ' ';

/* ——— Heure du Relecq-Kerhuon, jours fériés, statut des horaires ——— */
function maintenantParis() {
  const p = Object.fromEntries(new Intl.DateTimeFormat('fr-FR', { timeZone: 'Europe/Paris', year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', hourCycle: 'h23' })
    .formatToParts(new Date()).filter((x) => x.type !== 'literal').map((x) => [x.type, +x.value]));
  const date = new Date(Date.UTC(p.year, p.month - 1, p.day));
  return { annee: p.year, mois: p.month, jour: p.day, minutes: p.hour * 60 + p.minute, semaine: date.getUTCDay(), date };
}
function paques(a) {
  const f = Math.floor, G = a % 19, C = f(a / 100), H = (C - f(C / 4) - f((8 * C + 13) / 25) + 19 * G + 15) % 30;
  const I = H - f(H / 28) * (1 - f(29 / (H + 1)) * f((21 - G) / 11)), J = (a + f(a / 4) + I + 2 - C + f(C / 4)) % 7, L = I - J;
  const m = 3 + f((L + 40) / 44), j = L + 28 - 31 * f(m / 4);
  return Date.UTC(a, m - 1, j);
}
function ferie(date) {
  const a = date.getUTCFullYear(), jour = 86400000, p = paques(a);
  const fixes = [[1, 1], [5, 1], [5, 8], [7, 14], [8, 15], [11, 1], [11, 11], [12, 25]].map(([m, j]) => Date.UTC(a, m - 1, j));
  return [...fixes, p + jour, p + 39 * jour, p + 50 * jour].includes(date.getTime());
}
const enMinutes = (h) => { const [a, b] = h.split(':').map(Number); return a * 60 + b; };
const heureLue = (h) => { const [a, b] = h.split(':').map(Number); return b ? `${a}${NB}h${NB}${String(b).padStart(2, '0')}` : `${a}${NB}h`; };
const JOURS = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'];

function statuts() {
  const source = $('#donnees-horaires');
  if (!source) return;
  let jours = [];
  try { jours = JSON.parse(source.textContent); } catch { return; }
  const plages = Object.fromEntries(jours.map((j) => [j.jour, j.plages]));
  const n = maintenantParis();
  const auj = ferie(n.date) ? [] : (plages[n.semaine] || []);
  let texte, ouvert = false;
  const enCours = auj.find(([a, b]) => n.minutes >= enMinutes(a) && n.minutes < enMinutes(b));
  const avant = auj.find(([a]) => n.minutes < enMinutes(a));
  if (enCours) { ouvert = true; texte = `Ouvert aujourd'hui jusqu'à ${heureLue(enCours[1])}`; }
  else if (avant) texte = `Le cabinet ouvre aujourd'hui à ${heureLue(avant[0])}`;
  else {
    for (let k = 1; k <= 14; k++) {
      const d = new Date(n.date.getTime() + k * 86400000);
      const pl = ferie(d) ? [] : (plages[d.getUTCDay()] || []);
      if (pl.length) { texte = `Le cabinet rouvre ${k === 1 ? 'demain' : JOURS[d.getUTCDay()]} à ${heureLue(pl[0][0])}`; break; }
    }
  }
  if (!texte) return;
  $$('[data-statut]').forEach((el) => {
    el.classList.toggle('est-ferme', !ouvert);
    const t = $('[data-statut-texte]', el);
    if (t) t.textContent = texte;
  });
  if (!ferie(n.date)) $$(`[data-horaires-table] tr[data-jour="${n.semaine}"]`).forEach((tr) => { tr.classList.add('est-aujourdhui'); tr.dataset.aujourdhui = "aujourd'hui"; });
  /* Bandeau « Pour Noël » du 1er novembre au 24 décembre. */
  if ((n.mois === 11) || (n.mois === 12 && n.jour <= 24)) $$('[data-noel]').forEach((b) => { b.hidden = false; });
}

/* ——— Lumière chaude (effet « chaleur ») : suit la souris, sinon glisse avec le défilement. ——— */
function chaleurs() {
  $$('[data-chaleur]').forEach((el) => {
    const zone = el.parentElement;
    const cible = { x: 62, y: 32 }, pos = { x: 62, y: 32 };
    let dedans = false, rect = null, prog = 0;
    if (ST) ST.create({ trigger: zone, start: 'top bottom', end: 'bottom top', onUpdate: (s) => { prog = s.progress; } });
    if (souris) {
      zone.addEventListener('pointerenter', () => { rect = el.getBoundingClientRect(); dedans = true; });
      zone.addEventListener('pointermove', (e) => {
        if (!rect) rect = el.getBoundingClientRect();
        dedans = true;
        cible.x = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100));
        cible.y = Math.max(0, Math.min(100, ((e.clientY - rect.top) / rect.height) * 100));
      });
      zone.addEventListener('pointerleave', () => { dedans = false; rect = null; });
      window.addEventListener('scroll', () => { rect = null; }, { passive: true });
    }
    boucle(el, (dt) => {
      if (!dedans) { cible.x = 70 - prog * 34; cible.y = 18 + prog * 46; }
      const k = 1 - Math.exp(-dt * 7);
      const nx = pos.x + (cible.x - pos.x) * k, ny = pos.y + (cible.y - pos.y) * k;
      if (Math.abs(nx - pos.x) + Math.abs(ny - pos.y) < 0.02) return;
      pos.x = nx; pos.y = ny;
      el.style.setProperty('--lx', `${pos.x.toFixed(2)}%`);
      el.style.setProperty('--ly', `${pos.y.toFixed(2)}%`);
    });
  });
}

/* ——— Parenthèses : celles de l'ouverture s'écartent en descendant, celles de la fin se referment ——— */
function parentheses() {
  if (!gsap || !ST) return;
  const hero = $('.hero');
  if (hero) {
    gsap.to('.hero-par.parenthese--g', { x: -36, rotate: -3, ease: 'none', scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: 0.6 } });
    gsap.to('.hero-par.parenthese--d', { x: 36, rotate: 3, ease: 'none', scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: 0.6 } });
  }
  $$('.fin-scene').forEach((scene) => {
    const g = $('.parenthese--g', scene), d = $('.parenthese--d', scene);
    const tl = gsap.timeline({ scrollTrigger: { trigger: scene, start: 'top 92%', end: 'center 55%', scrub: 0.8 } });
    tl.fromTo(g, { x: -90, opacity: 0.25 }, { x: 0, opacity: 1, ease: 'none' }, 0)
      .fromTo(d, { x: 90, opacity: 0.25 }, { x: 0, opacity: 1, ease: 'none' }, 0)
      .fromTo([$('path', g), $('path', d)], { strokeDashoffset: 0.55 }, { strokeDashoffset: 0, ease: 'none' }, 0);
  });
}

/* ——— Envies (accueil) : les soins qui répondent se rangent devant ——— */
function envies() {
  const choix = $('[data-envies-choix]');
  if (!choix) return;
  const liste = $('[data-envies-liste]');
  const images = $$('[data-envie-image]');
  choix.addEventListener('click', (e) => {
    const b = e.target.closest('[data-envie]');
    if (!b || b.getAttribute('aria-pressed') === 'true') return;
    const id = b.dataset.envie;
    $$('[data-envie]', choix).forEach((x) => x.setAttribute('aria-pressed', String(x === b)));
    images.forEach((f) => f.classList.toggle('est-active', f.dataset.envieImage === id));
    const sortants = $$('.mini-soin[data-pour]:not([hidden])', liste);
    const entrants = $$(`.mini-soin[data-pour="${id}"]`, liste);
    const montrer = () => {
      sortants.forEach((li) => { li.hidden = true; gsap && gsap.set(li, { clearProps: 'opacity,transform' }); });
      entrants.forEach((li) => { li.hidden = false; });
      if (gsap) gsap.fromTo(entrants, { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.5, stagger: 0.07, ease: 'power3.out', clearProps: 'opacity,transform' });
    };
    if (gsap && sortants.length) gsap.to(sortants, { opacity: 0, y: -10, duration: 0.2, stagger: 0.03, ease: 'power2.in', onComplete: montrer });
    else montrer();
  });
}

/* ——— Filtres de la carte des soins (adresse ?envie=…) ——— */
function filtres() {
  const groupe = $('[data-filtres]');
  if (!groupe) return;
  const cartes = $$('.soin-ancre[data-envies]');
  const familles = $$('[data-famille]');
  const resultat = $('[data-filtres-resultat]');
  const appliquer = (id, anime) => {
    $$('[data-envie]', groupe).forEach((x) => x.setAttribute('aria-pressed', String(x.dataset.envie === id)));
    const visibles = [];
    cartes.forEach((cte) => {
      const ok = id === 'tout' || cte.dataset.envies.split(' ').includes(id);
      if (ok && cte.hidden) visibles.push(cte);
      cte.hidden = !ok;
    });
    familles.forEach((f) => {
      const vide = !$$('.soin-ancre:not([hidden])', f).length;
      f.classList.toggle('est-vide', vide);
      const v = $('[data-famille-vide]', f);
      if (v) v.hidden = !vide;
    });
    const n = cartes.filter((cte) => !cte.hidden).length;
    if (resultat) resultat.textContent = resultat.dataset.gabarit.replace('{n}', n);
    if (anime && gsap && visibles.length) gsap.fromTo(visibles.map((v) => v.firstElementChild), { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.5, stagger: 0.05, ease: 'power3.out', clearProps: 'opacity,transform', onComplete: () => ST && ST.refresh() });
    else if (ST) requestAnimationFrame(() => ST.refresh());
    try {
      const u = new URL(location.href);
      if (id === 'tout') u.searchParams.delete('envie'); else u.searchParams.set('envie', id);
      history.replaceState(history.state, '', u.pathname + u.search + u.hash);
    } catch {}
  };
  groupe.addEventListener('click', (e) => {
    const b = e.target.closest('[data-envie]');
    if (b) appliquer(b.dataset.envie, true);
  });
  const depart = new URLSearchParams(location.search).get('envie');
  if (depart && $(`[data-envie="${CSS.escape(depart)}"]`, groupe)) appliquer(depart, false);
}

/* ——— La carte en rangée (accueil) : glisse à l'horizontale pendant que la section passe ——— */
function rangee() {
  const boite = $('[data-rangee]'), piste = $('[data-rangee-piste]');
  if (!boite || !piste || !gsap || !ST) return;
  const mm = gsap.matchMedia();
  mm.add('(min-width: 761px)', () => {
    piste.removeAttribute('tabindex'); piste.removeAttribute('role');
    const course = () => Math.max(0, piste.scrollWidth - boite.clientWidth);
    const tw = gsap.fromTo(piste, { x: 0 }, { x: () => -course(), ease: 'none', scrollTrigger: { trigger: boite, start: 'top bottom', end: 'bottom top', scrub: 0.7, invalidateOnRefresh: true } });
    /* Au clavier : la rangée se centre à l'écran et la carte qui a le focus vient au milieu ; le défilement reprend la main ensuite. */
    const surFocus = (e) => {
      const carte = e.target.closest('.phare');
      const st = tw.scrollTrigger;
      if (!carte || !st) return;
      boite.scrollLeft = 0;
      const c = course();
      const x = Math.max(0, Math.min(c, carte.offsetLeft - (boite.clientWidth - carte.offsetWidth) / 2));
      st.disable(false);
      const r = boite.getBoundingClientRect();
      aller(window.scrollY + r.top - Math.max(0, (window.innerHeight - r.height) / 2), { instant: true });
      gsap.set(piste, { x: -x });
    };
    const surSortie = (e) => {
      if (piste.contains(e.relatedTarget)) return;
      const st = tw.scrollTrigger;
      if (st && !st.enabled) st.enable();
    };
    piste.addEventListener('focusout', surSortie);
    const garde = () => { if (boite.scrollLeft) boite.scrollLeft = 0; };
    piste.addEventListener('focusin', surFocus);
    boite.addEventListener('scroll', garde);
    return () => { piste.removeEventListener('focusout', surSortie); piste.removeEventListener('focusin', surFocus); boite.removeEventListener('scroll', garde); piste.setAttribute('tabindex', '0'); piste.setAttribute('role', 'region'); };
  });
}

/* ——— Carte cadeau : le soin choisi se pose sur la carte, qui tourne sur elle-même ——— */
function cadeaux() {
  $$('[data-cadeau]').forEach((boite) => {
    const section = boite.closest('section');
    const carte = $('[data-cadeau-carte]', boite);
    const soin = $('[data-cadeau-soin]', boite), prix = $('[data-cadeau-prix]', boite);
    const choix = $('[data-cadeau-choix]', section);
    const retourner = $('[data-cadeau-retourner]', section);
    let face = 0, enCours = null;
    if (gsap && ST) gsap.fromTo(carte, { rotateX: 6, y: 20 }, { rotateX: -3, y: -10, ease: 'none', scrollTrigger: { trigger: boite, start: 'top bottom', end: 'bottom top', scrub: 0.8 } });
    choix && choix.addEventListener('click', (e) => {
      const b = e.target.closest('[data-prix-cadeau]');
      if (!b) return;
      $$('[data-prix-cadeau]', choix).forEach((x) => x.setAttribute('aria-pressed', String(x === b)));
      const vers = +b.dataset.prixCadeau, depuis = +prix.textContent || vers;
      const poser = () => { soin.textContent = b.dataset.libelleCadeau; };
      if (!gsap) { poser(); prix.textContent = vers; return; }
      if (enCours) enCours.progress(1);
      face = 0; if (retourner) retourner.setAttribute('aria-pressed', 'false');
      const compteur = { v: depuis };
      enCours = gsap.timeline()
        .to(carte, { rotateY: '+=360', duration: 1.1, ease: 'power3.inOut' })
        .call(poser, null, 0.42)
        .to(compteur, { v: vers, duration: 0.7, ease: 'power2.out', onUpdate: () => { prix.textContent = Math.round(compteur.v); } }, 0.3)
        .fromTo(boite, { scale: 1 }, { scale: 1.035, duration: 0.25, yoyo: true, repeat: 1, ease: 'power2.out' }, 0.85);
    });
    retourner && retourner.addEventListener('click', () => {
      face = face ? 0 : 1;
      retourner.setAttribute('aria-pressed', String(!!face));
      if (gsap) gsap.to(carte, { rotateY: face ? 180 : 0, duration: 0.9, ease: 'power3.inOut' });
      else carte.style.transform = face ? 'rotateY(180deg)' : '';
    });
  });
}

/* ——— Bol tibétain : un son synthétisé, seulement au clic, avec une pastille pour l'arrêter ——— */
function bols() {
  const boutons = $$('[data-bol]');
  if (!boutons.length) return;
  let ctx = null, sortie = null, fin = null, actif = null, pastille = null;
  const libelle = (b, jouer) => { const s = $('[data-libelle-bouton]', b); if (s) s.textContent = jouer ? b.dataset.libelleArreter : b.dataset.libelleJouer; };
  const arreter = () => {
    if (sortie && ctx) { const t = ctx.currentTime; sortie.gain.cancelScheduledValues(t); sortie.gain.setTargetAtTime(0, t, 0.08); }
    clearTimeout(fin);
    if (actif) { actif.classList.remove('est-actif'); libelle(actif, false); actif.setAttribute('aria-pressed', 'false'); }
    actif = null;
    if (pastille) pastille.hidden = true;
  };
  const jouer = (b) => {
    try { ctx = ctx || new (window.AudioContext || window.webkitAudioContext)(); } catch { return; }
    if (ctx.state === 'suspended') ctx.resume();
    const t = ctx.currentTime;
    sortie = ctx.createGain(); sortie.gain.setValueAtTime(0.0001, t); sortie.gain.exponentialRampToValueAtTime(0.32, t + 0.02);
    sortie.gain.exponentialRampToValueAtTime(0.0001, t + 7);
    sortie.connect(ctx.destination);
    [[196, 1], [197.4, 0.7], [531, 0.35], [534, 0.25], [1016, 0.12]].forEach(([f, g]) => {
      const o = ctx.createOscillator(), v = ctx.createGain();
      o.type = 'sine'; o.frequency.value = f; v.gain.value = g;
      o.connect(v); v.connect(sortie); o.start(t); o.stop(t + 7.2);
    });
    actif = b; b.classList.add('est-actif'); libelle(b, true); b.setAttribute('aria-pressed', 'true');
    if (!pastille) {
      pastille = document.createElement('div');
      pastille.className = 'pastille-son'; pastille.setAttribute('role', 'status');
      pastille.innerHTML = `<span>${b.dataset.libelleEnCours || 'Le bol sonne'}</span><button type="button" class="bouton bouton--or bouton--petit">${b.dataset.libelleArreter}</button>`;
      $('button', pastille).addEventListener('click', arreter);
      document.body.append(pastille);
    }
    pastille.hidden = false;
    fin = setTimeout(arreter, 7000);
  };
  boutons.forEach((b) => {
    b.setAttribute('aria-pressed', 'false');
    b.addEventListener('click', () => { const etait = actif === b; arreter(); if (!etait) jouer(b); });
  });
}

/* ——— Entrée du premier écran (intro, voile, état final) ——— */
function entree(tl, t) {
  if ($('.hero-ligne')) tl.fromTo('.hero-ligne', { yPercent: 135, y: 0 }, { yPercent: 0, y: 0, duration: 0.85, stagger: 0.1, ease: 'power3.out' }, t);
  if ($('.hero-anime')) tl.fromTo('.hero-anime', { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.6, stagger: 0.07, ease: 'power2.out' }, t + 0.15);
  if ($('.hero-par path')) tl.fromTo('.hero-par path', { strokeDashoffset: 1 }, { strokeDashoffset: 0, duration: 0.9, ease: 'power2.inOut' }, t + 0.05);
  return tl;
}

demarrer({
  preparer() {
    statuts();
    chaleurs();
    parentheses();
    envies();
    filtres();
    rangee();
    cadeaux();
    bols();
  },
  /* Intro : deux parenthèses d'or se dessinent, le M apparaît entre elles, elles s'écartent,
     le M glisse jusqu'à l'objet d'ouverture de la page et le panneau s'ouvre en cercle depuis lui. */
  jouer() {
    if (!gsap) return null;
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    const ecart = Math.min(window.innerWidth * 0.32, 420);
    tl.fromTo('.ouverture-par path', { strokeDashoffset: 1 }, { strokeDashoffset: 0, duration: 0.75, ease: 'power2.inOut', stagger: 0.06 }, 0.08)
      .fromTo('.ouverture-logo', { opacity: 0 }, { opacity: 1, duration: 0.5 }, 0.3)
      .fromTo('.ouverture-ligne', { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: 0.45 }, 0.42)
      .to('.ouverture-ligne', { opacity: 0, duration: 0.25 }, 0.95)
      .to('.ouverture-par.parenthese--g', { x: -ecart, opacity: 0, duration: 0.6, ease: 'power3.in' }, 0.95)
      .to('.ouverture-par.parenthese--d', { x: ecart, opacity: 0, duration: 0.6, ease: 'power3.in' }, 0.95);
    versObjet(tl, { a: 1.0 });
    entree(tl, 1.45);
    return tl;
  },
  etatFinal() {
    if (!gsap) return;
    gsap.set('.hero-ligne', { yPercent: 0, y: 0 });
    gsap.set('.hero-anime', { opacity: 1, y: 0 });
    gsap.set('.hero-par path', { strokeDashoffset: 0 });
  },
  arrivee() {
    if (!gsap) return;
    entree(gsap.timeline({ delay: 0.12 }), 0);
  },
});

quand('pret', () => { if (ST) ST.refresh(); });
