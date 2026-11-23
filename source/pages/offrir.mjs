/* Offrir & célébrer : la carte cadeau posée sur l'enveloppe, puis forfaits, cures et événements. */
import { html } from '../../outils/gabarit.mjs';
import { prix } from '../gabarits/elements.mjs';
import { fin, cadeau, choixCadeau, sumup } from '../gabarits/blocs.mjs';

export const page = { cle: 'offrir', fichier: 'offrir', imagePartage: 'grok/offrir-ouverture-1168.webp' };

export default (c) => {
  const S = c.donnees.soins;
  return html`
<section class="offrir-tete fond-sable" id="debut">
  <div class="conteneur offrir-tete-grille">
    <div class="offrir-tete-texte">
      <p class="surtitre hero-anime" data-anime="gsap"><span class="badge-noel" data-noel hidden>${c.t('accueil.offrir.noel')}</span> ${c.t('offrir.tete.surtitre')}</p>
      <h1 class="page-titre" data-anime="gsap" data-grille="typo"><span class="ligne-masque"><span class="hero-ligne">${c.t('offrir.tete.titre1')}</span></span><span class="ligne-masque"><span class="hero-ligne"><em>${c.t('offrir.tete.titreMot')}</em>.</span></span></h1>
      <p class="hero-intro hero-anime masque-ecran-bas" data-anime="gsap">${c.t('offrir.tete.texte')}</p>
      <p class="hero-actions hero-anime" data-anime="gsap">${sumup(c, 'data-action-principale')}<button type="button" class="bouton bouton--contour" data-cadeau-retourner aria-pressed="false">${c.t('offrir.tete.retourner')}</button></p>
      <p class="hero-info hero-anime" data-anime="gsap" data-info-cle>${c.t('offrir.tete.info')}</p>
      <div class="hero-anime offrir-choix" data-anime="gsap">${choixCadeau(c)}<div class="champ champ-prenom"><label for="cadeau-prenom">${c.t('offrir.tete.prenom')}</label><input id="cadeau-prenom" name="prenom" data-cadeau-prenom maxlength="18" autocomplete="off" aria-describedby="cadeau-prenom-aide"><p class="champ-aide" id="cadeau-prenom-aide">${c.t('offrir.tete.prenomAide')}</p></div></div>
    </div>
    <div class="offrir-tete-visuel">
      ${c.media({ nom: 'grok/offrir-ouverture', alt: c.s('offrir.forfaits.alt'), classe: 'offrir-tete-media', priorite: true, sizes: '(max-width: 760px) 80vw, 36vw', attrs: 'data-fx="parallaxe" data-fx-force="6"' })}
      ${cadeau(c, { classe: 'cadeau--pose', attrs: 'data-iris-centre data-grille="retour fil"' })}
    </div>
  </div>
</section>

<section class="forfaits" id="forfaits">
  <div class="conteneur forfaits-grille">
    <div>
      <p class="surtitre">${c.t('offrir.forfaits.surtitre')}</p>
      <h2 data-anime="lignes">${c.t('offrir.forfaits.titre')}</h2>
      <p data-anime>${c.t('offrir.forfaits.texte')}</p>
      <ul class="forfaits-liste" data-anime="cascade">
        ${S.forfaits.map((f) => html`<li class="forfait"><span class="forfait-nom">${f.nom}</span><span class="forfait-prix">${prix(f.prix)}</span><span class="forfait-detail">${f.detail}</span></li>`)}
      </ul>
      <p data-anime>${c.lien('contact', { ancre: 'ecrire', params: 'sujet=forfait', classe: 'bouton', texte: c.t('offrir.forfaits.commander') })}</p>
    </div>
    ${c.media({ nom: 'grok/soin-pierres', alt: c.donnees.images['grok/soin-pierres']?.alt || '', classe: 'forfaits-media', sizes: '(max-width: 760px) 92vw, 42vw', attrs: 'data-anime="rideau"' })}
  </div>
</section>

<section class="cures fond-sombre" id="cures">
  <div class="conteneur cures-grille">
    <div>
      <p class="surtitre">${c.t('offrir.cures.surtitre')}</p>
      <h2 data-anime="lignes">${c.t('offrir.cures.titre')}</h2>
      <p data-anime>${c.t('offrir.cures.texte')}</p>
      ${c.media({ nom: 'grok/soin-visage', alt: c.donnees.images['grok/soin-visage']?.alt || '', classe: 'cures-media', sizes: '(max-width: 760px) 92vw, 36vw', attrs: 'data-fx="zoom"' })}
    </div>
    <div class="cures-listes">
      <ul class="liste-prix" data-anime="cascade">${S.cures.map((x) => html`<li><span>${x.nom} <small>${x.detail}</small></span>${prix(x.prix)}</li>`)}</ul>
      <p>${c.lien('contact', { ancre: 'ecrire', params: 'sujet=forfait', classe: 'bouton bouton--or', texte: c.t('offrir.forfaits.commander') })}</p>
    </div>
  </div>
</section>

<section class="evenements" id="evenements">
  <div class="conteneur deux-colonnes deux-colonnes--inverse">
    ${c.media({ nom: 'grok/evenement', alt: c.s('offrir.evenements.alt'), classe: 'evenement-media', sizes: '(max-width: 760px) 92vw, 50vw', attrs: 'data-anime="rideau"' })}
    <div>
      <p class="surtitre">${c.t('offrir.evenements.surtitre')}</p>
      <h2 data-anime="lignes">${c.t('offrir.evenements.titre')}</h2>
      <p data-anime>${c.t('offrir.evenements.texte')}</p>
      <p class="evenements-types" data-anime>${c.t('offrir.evenements.types')}</p>
      <p data-anime>${c.t('offrir.evenements.offre')}</p>
      <p data-anime>${c.lien('contact', { ancre: 'ecrire', params: 'sujet=evenement', classe: 'bouton', texte: c.t('offrir.evenements.demander') })}</p>
    </div>
  </div>
</section>

${fin(c, { titre1: c.t('offrir.fin.titre1'), titre2: c.t('offrir.fin.titre2'), texte: c.t('offrir.fin.texte') })}
`;
};
