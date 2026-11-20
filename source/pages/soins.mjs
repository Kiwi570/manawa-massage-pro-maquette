/* La carte des soins : l'outil d'abord (filtre d'envies dans le premier écran), puis chaque famille. */
import { html, brut } from '../../outils/gabarit.mjs';
import { reserver, prix } from '../gabarits/elements.mjs';
import { fin, carteSoin } from '../gabarits/blocs.mjs';

export const page = { cle: 'soins', fichier: 'soins', imagePartage: 'grok/soins-ouverture-1280.webp' };

export default (c) => {
  const S = c.donnees.soins;
  const alt = (n) => c.donnees.images[n]?.alt || '';
  return html`
<section class="soins-tete" id="debut">
  ${c.media({ nom: 'grok/soins-ouverture', alt: c.s('soins.tete.alt'), cadrage: '62% 50%', cadrageMobile: '60% 70%', priorite: true, classe: 'soins-tete-media', sizes: '100vw', attrs: 'data-fx="parallaxe" data-fx-force="6" data-iris-centre' })}
  <div class="conteneur soins-tete-texte">
    <p class="surtitre hero-anime" data-anime="gsap">${c.t('soins.tete.surtitre')}</p>
    <h1 class="page-titre" data-anime="gsap" data-grille="typo"><span class="ligne-masque"><span class="hero-ligne">${c.t('soins.tete.titre1')}</span></span><span class="ligne-masque"><span class="hero-ligne">${c.t('soins.tete.titre2')} <em>${c.t('soins.tete.titreMot')}</em>.</span></span></h1>
    <p class="hero-intro hero-anime masque-ecran-bas" data-anime="gsap">${c.t('soins.tete.texte')}</p>
    <div class="filtres puces hero-anime" data-anime="gsap" role="group" aria-label="${c.s('soins.tete.filtre')}" data-filtres data-grille="manipuler fil">
      <button type="button" class="puce" aria-pressed="true" data-envie="tout">${c.t('soins.tete.tout')}</button>
      ${S.envies.map((e) => html`<button type="button" class="puce" aria-pressed="false" data-envie="${e.id}">${e.court}</button>`)}
    </div>
    <p class="hero-actions hero-anime" data-anime="gsap">${reserver(c, { attrs: 'data-action-principale' })}<span class="hero-info" data-info-cle>${c.t('soins.tete.info')}</span></p>
    <p class="visuellement-cache" role="status" data-filtres-resultat data-gabarit="${c.s('soins.tete.resultat')}"></p>
  </div>
</section>

${S.familles.map((f, i) => html`<section class="famille ${i % 2 ? 'fond-sable' : ''}" id="${f.id}" data-famille>
  <div class="conteneur">
    <div class="famille-tete">
      <h2 data-anime="lignes">${f.titre}</h2>
      <p data-anime>${f.texte}</p>
    </div>
    <div class="soins-grille">
      ${S.liste.filter((s) => s.famille === f.id).map((s) => carteSoin(c, s))}
    </div>
    <p class="famille-vide" data-famille-vide hidden>${c.t('soins.vide')}</p>
    ${S.aussi.some((a) => a.famille === f.id) ? html`<div class="aussi">
      <h3>${c.t('soins.aussi')}</h3>
      <ul>${S.aussi.filter((a) => a.famille === f.id).map((a) => html`<li><span>${a.nom}</span>${prix(a.prix)}</li>`)}</ul>
      <p class="aussi-note">${c.t('soins.aussiTexte')}</p>
    </div>` : ''}
  </div>
</section>`)}

<section class="cures fond-sombre" id="cures">
  <div class="conteneur cures-grille">
    <div>
      <p class="surtitre">${c.t('soins.cures.surtitre')}</p>
      <h2 data-anime="lignes">${c.t('soins.cures.titre')}</h2>
      <p data-anime>${c.t('soins.cures.texte')}</p>
      ${c.media({ nom: 'grok/offrir-ouverture', alt: c.s('soins.cures.alt'), classe: 'cures-media', sizes: '(max-width: 760px) 92vw, 36vw', attrs: 'data-fx="zoom"' })}
    </div>
    <div class="cures-listes">
      <h3>${c.t('soins.cures.cures')}</h3>
      <ul class="liste-prix" data-anime="cascade">${S.cures.map((x) => html`<li><span>${x.nom} <small>${x.detail}</small></span>${prix(x.prix)}</li>`)}</ul>
      <h3>${c.t('soins.cures.forfaits')}</h3>
      <ul class="liste-prix" data-anime="cascade">${S.forfaits.map((x) => html`<li><span>${x.nom} <small>${x.detail}</small></span>${prix(x.prix)}</li>`)}</ul>
      <p>${c.lien('offrir', { ancre: 'forfaits', classe: 'lien-fleche', texte: c.t('soins.cures.lien') })}</p>
    </div>
  </div>
</section>

<section class="pratique" id="pratique">
  <div class="conteneur pratique-grille">
    ${c.media({ nom: 'grok/domicile', alt: c.s('soins.pratique.alt'), classe: 'pratique-media', sizes: '(max-width: 760px) 92vw, 40vw', attrs: 'data-anime="rideau"' })}
    <div>
      <p class="surtitre">${c.t('soins.pratique.surtitre')}</p>
      <h2 data-anime="lignes">${c.t('soins.pratique.titre')}</h2>
      <dl class="pratique-liste" data-anime="cascade">
        <div><dt>${c.t('soins.pratique.annulationTitre')}</dt><dd>${c.t('soins.pratique.annulation')}</dd></div>
        <div><dt>${c.t('soins.pratique.paiementTitre')}</dt><dd>${c.t('soins.pratique.paiement')}</dd></div>
        <div><dt>${c.t('soins.pratique.domicileTitre')}</dt><dd>${c.t('soins.pratique.domicile')}</dd></div>
        <div><dt>${c.t('soins.pratique.cadreTitre')}</dt><dd>${c.t('soins.pratique.cadre')}</dd></div>
      </dl>
    </div>
  </div>
</section>

${fin(c, { titre1: c.t('soins.fin.titre1'), titre2: c.t('soins.fin.titre2'), texte: c.t('soins.fin.texte') })}
`;
};
