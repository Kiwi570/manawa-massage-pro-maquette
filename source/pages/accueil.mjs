/* Accueil de Manawa Massage Pro : la parenthèse. */
import { html, brut } from '../../outils/gabarit.mjs';
import { reserver, statut, parenthese, etoiles, prix } from '../gabarits/elements.mjs';
import { fin, cadeau, choixCadeau, sumup } from '../gabarits/blocs.mjs';

export const page = { cle: 'accueil', fichier: 'index', imagePartage: 'mains-epaule-1168.webp' };

const minPrix = (s) => Math.min(...s.tarifs.map(([, p]) => p));
const PHARES = [
  ['suedois-californien', 'grok/soin-table'], ['lomi-lomi', 'grok/soin-lomi'], ['pierres-chaudes', 'grok/soin-pierres'],
  ['kobido', 'grok/soin-visage'], ['bols-tibetains', 'grok/soin-bol'], ['maderotherapie', 'madero'],
];

export default (c) => {
  const S = c.donnees.soins, parId = Object.fromEntries(S.liste.map((s) => [s.id, s]));
  const alt = (n) => c.donnees.images[n]?.alt || '';
  return html`
<section class="hero" id="debut">
  <div class="hero-texte">
    <p class="surtitre hero-anime masque-ecran-tres-bas" data-anime="gsap">${c.t('accueil.hero.surtitre')}</p>
    <h1 class="hero-titre" data-anime="gsap" data-grille="typo"><span class="ligne-masque"><span class="hero-ligne">${c.t('accueil.hero.titre1')}</span></span><span class="ligne-masque"><span class="hero-ligne">${c.t('accueil.hero.titre2')} <em>${c.t('accueil.hero.titreMot')}</em>.</span></span></h1>
    <p class="hero-intro hero-anime masque-ecran-bas" data-anime="gsap">${c.t('accueil.hero.texte')}</p>
    <p class="hero-actions hero-anime" data-anime="gsap">${reserver(c, { attrs: 'data-action-principale data-survol="magnetique"' })}${c.lien('offrir', { classe: 'bouton bouton--contour', texte: c.t('accueil.hero.offrir') })}</p>
    <p class="hero-info hero-anime" data-anime="gsap" data-info-cle><span class="note-courte"><span class="note-etoile" aria-hidden="true">★</span> ${c.t('commun.note')} · ${c.t('commun.avis')}</span>${statut(c)}</p>
  </div>
  <div class="hero-visuel" data-grille="fil">
    ${parenthese('g', 'hero-par', 'data-effet="parentheses"')}
    ${c.media({ nom: 'mains-epaule', alt: c.s('accueil.hero.alt'), cadrage: '52% 34%', priorite: true, classe: 'hero-media', sizes: '(max-width: 760px) 86vw, 38vw', attrs: 'data-fx="onde" data-iris-centre' })}
    <span class="chaleur" data-chaleur data-effet="chaleur" data-souris aria-hidden="true" data-audit-ignorer></span>
    ${parenthese('d', 'hero-par', 'data-effet="parentheses"')}
  </div>
</section>

<section class="envies fond-sable" id="envies">
  <div class="conteneur envies-grille">
    <div class="envies-tete">
      <p class="surtitre">${c.t('accueil.envies.surtitre')}</p>
      <h2 data-anime="lignes">${c.t('accueil.envies.titre')}</h2>
      <p class="envies-texte" data-anime>${c.t('accueil.envies.texte')}</p>
      <div class="envies-choix puces" role="group" aria-label="${c.s('accueil.envies.groupe')}" data-anime="cascade" data-envies-choix data-grille="manipuler">
        ${S.envies.map((e, i) => html`<button type="button" class="puce" aria-pressed="${i === 0 ? 'true' : 'false'}" data-envie="${e.id}">${e.libelle}</button>`)}
      </div>
      <p class="envies-sansjs">${c.t('accueil.envies.sansJs')}</p>
    </div>
    <div class="envies-images" data-envies-images aria-hidden="true">
      ${S.envies.map((e, i) => c.media({ nom: e.image, alt: '', classe: `envies-image${i === 0 ? ' est-active' : ''}`, sizes: '(max-width: 760px) 40vw, 24vw', attrs: `data-envie-image="${e.id}"` }))}
    </div>
    <ul class="envies-liste" data-envies-liste data-effet="envies" aria-live="polite">
      ${S.envies.flatMap((e, i) => e.selection.map((id) => {
        const s = parId[id];
        return html`<li class="mini-soin" data-pour="${e.id}"${i === 0 ? '' : brut(' hidden')}>
          ${c.lien('soins', { ancre: s.id, classe: 'mini-soin-lien', texte: html`<span class="mini-soin-origine">${s.origine}</span><span class="mini-soin-nom">${s.nom}</span><span class="mini-soin-tarifs">${s.tarifs.map(([d, p]) => html`<span>${d} · ${p}&nbsp;€</span>`)}</span>` })}
        </li>`;
      }))}
      <li class="mini-soin mini-soin--tout">${c.lien('soins', { classe: 'lien-fleche', texte: c.t('accueil.envies.tout') })}</li>
    </ul>
  </div>
</section>

<section class="carte-soins" id="carte">
  <div class="conteneur carte-tete">
    <div>
      <p class="surtitre">${c.t('accueil.carte.surtitre')}</p>
      <h2 data-anime="lignes">${c.t('accueil.carte.titre')}</h2>
    </div>
    <div>
      <p data-anime>${c.t('accueil.carte.texte')}</p>
      <p data-anime>${c.lien('soins', { classe: 'lien-fleche', texte: c.t('accueil.carte.tout') })}</p>
    </div>
  </div>
  <div class="rangee" data-rangee>
    <div class="rangee-piste" data-rangee-piste data-galerie data-effet="rangee" role="region" aria-label="${c.s('accueil.carte.region')}" tabindex="0">
      ${PHARES.map(([id, img]) => {
        const s = parId[id];
        return html`<article class="phare">
          ${c.lien('soins', { ancre: id, classe: 'phare-lien', texte: html`${c.media({ nom: img, alt: alt(img), classe: 'phare-media', sizes: '(max-width: 760px) 72vw, 26vw' })}<span class="phare-origine">${s.origine}</span><span class="phare-nom">${s.nom}</span><span class="phare-prix">${c.t('commun.des')} ${prix(minPrix(s))}</span>` })}
        </article>`;
      })}
    </div>
  </div>
</section>

<section class="marie-bloc fond-sombre" id="marie">
  <div class="conteneur marie-grille">
    <div class="marie-visuel">
      ${c.media({ nom: 'marie-au-travail', alt: c.s('accueil.marie.alt'), cadrage: '53% 40%', classe: 'marie-media', sizes: '(max-width: 760px) 92vw, 42vw', attrs: 'data-fx="parallaxe"' })}
      <span class="chaleur chaleur--sombre" data-chaleur data-effet="chaleur" data-souris aria-hidden="true" data-audit-ignorer></span>
    </div>
    <div class="marie-texte">
      <p class="surtitre">${c.t('accueil.marie.surtitre')}</p>
      <h2 data-anime="lignes">${c.t('accueil.marie.titre')}</h2>
      <p data-anime>${c.t('accueil.marie.texte')}</p>
      <figure class="citation" data-anime>
        ${c.media({ nom: 'marie-portrait', alt: '', classe: 'citation-portrait', sizes: '96px', cadrage: '40% 40%' })}
        <blockquote><p>« ${c.t('accueil.marie.citation')} »</p></blockquote>
        <figcaption>${c.t('accueil.marie.signature')}</figcaption>
      </figure>
      <p data-anime>${c.lien('marie', { classe: 'bouton bouton--contour', texte: c.t('accueil.marie.lien') })}</p>
    </div>
  </div>
</section>

<section class="lieux" id="lieux">
  <div class="conteneur">
    <p class="surtitre">${c.t('accueil.lieux.surtitre')}</p>
    <h2 data-anime="lignes">${c.t('accueil.lieux.titre')}</h2>
    <div class="lieux-grille">
      <article class="lieu">
        ${c.media({ nom: 'cabinet', alt: alt('cabinet'), cadrage: '44% 42%', classe: 'lieu-media', sizes: '(max-width: 760px) 92vw, 45vw', attrs: 'data-anime="rideau"' })}
        <h3>${c.t('accueil.lieux.cabinetTitre')}</h3>
        <p>${c.t('accueil.lieux.cabinetTexte')}</p>
        <p class="lieu-adresse">${c.site.contact.adresseCourte}</p>
        <p>${c.lien('contact', { ancre: 'horaires', classe: 'lien-fleche', texte: c.t('accueil.lieux.acces') })}</p>
      </article>
      <article class="lieu lieu--decale">
        ${c.media({ nom: 'grok/domicile', alt: alt('grok/domicile'), classe: 'lieu-media', sizes: '(max-width: 760px) 92vw, 45vw', attrs: 'data-anime="rideau"' })}
        <h3>${c.t('accueil.lieux.domicileTitre')}</h3>
        <p>${c.t('accueil.lieux.domicileTexte')}</p>
        <p class="lieu-note">${c.t('accueil.lieux.domicileFrais')}</p>
      </article>
    </div>
  </div>
</section>

<section class="offrir-bloc fond-sable" id="offrir">
  <div class="conteneur offrir-grille">
    ${cadeau(c, { attrs: 'data-grille="retour"' })}
    <div class="offrir-texte">
      <p class="surtitre"><span class="badge-noel" data-noel hidden>${c.t('accueil.offrir.noel')}</span> ${c.t('accueil.offrir.surtitre')}</p>
      <h2 data-anime="lignes">${c.t('accueil.offrir.titre')}</h2>
      <p data-anime>${c.t('accueil.offrir.texte')}</p>
      ${choixCadeau(c)}
      <p class="offrir-actions">${sumup(c)}${c.lien('offrir', { classe: 'lien-fleche', texte: c.t('accueil.offrir.tout') })}</p>
    </div>
  </div>
</section>

<section class="confiance" id="confiance">
  <div class="conteneur confiance-grille">
    <div class="confiance-note">
      <p class="surtitre">${c.t('accueil.confiance.surtitre')}</p>
      <h2 data-anime="lignes">${c.t('accueil.confiance.titre')}</h2>
      <p class="note-grande"><span class="note-chiffre">5,0</span><span class="note-sur">${c.t('accueil.confiance.sur')}</span></p>
      ${etoiles('confiance-etoiles')}
      <p class="note-avis"><strong data-compteur="38">38</strong> ${c.t('accueil.confiance.avis')}</p>
      <p>${reserver(c, { classe: 'lien-fleche', texte: c.t('accueil.confiance.lire') })}</p>
    </div>
    <div class="confiance-engagements">
      <h3>${c.t('accueil.confiance.engagements')}</h3>
      <ol class="engagements" data-anime="cascade">
        <li>${c.t('accueil.confiance.e1')}</li><li>${c.t('accueil.confiance.e2')}</li><li>${c.t('accueil.confiance.e3')}</li><li>${c.t('accueil.confiance.e4')}</li>
      </ol>
      <p class="confiance-cadre" data-anime>${c.t('accueil.confiance.cadre')}</p>
      <p class="ffmbe" data-anime><img src="/assets/images/ffmbe.jpg" alt="${c.s('accueil.confiance.ffmbeAlt')}" width="800" height="210" loading="lazy"></p>
    </div>
  </div>
</section>

${fin(c, { titre1: c.t('accueil.fin.titre1'), titre2: c.t('accueil.fin.titre2'), texte: c.t('accueil.fin.texte') })}
`;
};
