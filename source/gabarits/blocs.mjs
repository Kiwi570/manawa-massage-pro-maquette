/* Blocs partagés par plusieurs pages : appel final aux parenthèses, carte d'un soin, carte cadeau. */
import { html, brut } from '../../outils/gabarit.mjs';
import { reserver, statut, parenthese, prix, ext } from './elements.mjs';

/* Appel final : deux parenthèses qui se referment au défilement autour du texte (effet « parentheses-fin »). */
export function fin(c, { titre1, titre2, texte }) {
  return html`<section class="fin fond-sombre" id="fin">
  <div class="fin-scene" data-visuel>
    ${parenthese('g', 'fin-par', 'data-effet="parentheses-fin"')}
    <div class="fin-texte">
      <h2 class="fin-titre" data-anime="lignes">${titre1}<br><em>${titre2}</em></h2>
      <p data-anime>${texte}</p>
      <p class="fin-actions" data-anime>${reserver(c, { classe: 'bouton bouton--or', attrs: 'data-survol="magnetique"' })}<a class="bouton bouton--contour" href="tel:${c.site.contact.telephoneLien}">${c.t('commun.appeler')} ${c.site.contact.telephone}</a></p>
      <p class="fin-statut" data-anime>${statut(c)}</p>
    </div>
    ${parenthese('d', 'fin-par', 'data-effet="parentheses-fin"')}
  </div>
</section>`;
}

const tarifs = (s) => html`<ul class="tarifs">${s.tarifs.map(([d, p]) => html`<li><span>${d}</span>${prix(p)}</li>`)}</ul>`;

/* Carte d'un soin (page des soins). L'identifiant (lien profond) est sur l'enveloppe, qui ne bouge jamais. */
export function carteSoin(c, s) {
  return html`<div class="soin-ancre" id="${s.id}" data-envies="${s.envies.join(' ')}">
  <article class="soin">
    ${s.image ? c.media({ nom: s.image, alt: c.donnees.images?.[s.image]?.alt || s.nom, classe: 'soin-media', sizes: '(max-width: 760px) 92vw, (max-width: 1100px) 46vw, 30vw', attrs: 'data-fx="zoom"' }) : html`<div class="soin-motif" aria-hidden="true" data-visuel data-fx="vitesse" data-fx-force="2"><span class="soin-motif-mot">${s.motif || s.origine}</span></div>`}
    <div class="soin-corps">
      <p class="soin-origine">${s.origine}</p>
      <h3>${s.nom}</h3>
      <p class="soin-accroche">${s.accroche}</p>
      ${s.pratique ? html`<p class="soin-pratique">${s.pratique}</p>` : ''}
      ${tarifs(s)}
      <p class="soin-actions">${reserver(c, { classe: 'bouton bouton--petit', texte: c.t('soins.reserver') })}${s.son ? html`<button type="button" class="bouton bouton--contour bouton--petit bol-bouton" data-bol data-effet="bol" data-libelle-jouer="${c.s('soins.bol')}" data-libelle-arreter="${c.s('soins.bolArret')}" data-libelle-en-cours="${c.s('soins.bolEnCours')}"><span class="bol-ondes" aria-hidden="true"><i></i><i></i><i></i></span><span data-libelle-bouton>${c.t('soins.bol')}</span></button>` : ''}</p>
    </div>
  </article>
</div>`;
}

/* Carte cadeau : recto (soin choisi, montant) et verso (conditions). Composée par site.js (effet « carte-cadeau »). */
export function cadeau(c, { classe = '', attrs = '' } = {}) {
  const d = c.donnees.soins.cadeaux[1];
  return html`<div class="cadeau ${classe}" data-cadeau data-visuel${brut(attrs ? ' ' + attrs : '')}>
  <div class="cadeau-carte" data-cadeau-carte data-effet="carte-cadeau">
    <div class="cadeau-face cadeau-recto">
      <img class="cadeau-logo" src="/assets/images/logo-clair-372.png" alt="${c.site.nom}" width="372" height="145" loading="lazy">
      <p class="cadeau-titre">${c.t('offrir.carte.titre')}</p>
      <p class="cadeau-soin" data-cadeau-soin>${d.libelle}</p>
      <p class="cadeau-montant"><span data-cadeau-prix>${d.prix}</span>&nbsp;€</p>
      <p class="cadeau-pied"><span data-cadeau-pour data-defaut="${c.s('offrir.carte.pourDefaut')}">${c.t('offrir.carte.pourDefaut')}</span> · ${c.t('offrir.carte.valable')}</p>
    </div>
    <div class="cadeau-face cadeau-verso" data-face="dos">
      <p class="cadeau-titre">${c.t('offrir.carte.valable')}</p>
      <p>${c.t('offrir.carte.verso')}</p>
      <p class="cadeau-papier">${c.t('offrir.carte.papier')}</p>
    </div>
  </div>
</div>`;
}

export function choixCadeau(c) {
  return html`<div class="cadeau-choix" role="group" aria-label="${c.s('offrir.tete.choix')}" data-cadeau-choix>
  ${c.donnees.soins.cadeaux.map((x, i) => html`<button type="button" class="puce" aria-pressed="${i === 1 ? 'true' : 'false'}" data-prix-cadeau="${x.prix}" data-libelle-cadeau="${x.libelle}">${x.libelle} · ${x.prix}&nbsp;€</button>`)}
</div>`;
}

export const sumup = (c, attrs = '') => ext(c, c.site.liens.sumup, c.t('accueil.offrir.commander'), { classe: 'bouton', attrs });
