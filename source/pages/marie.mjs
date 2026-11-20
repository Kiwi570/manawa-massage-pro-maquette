/* Marie et le cabinet : ouverture sombre, Marie au travail en grand, à bord perdu. */
import { html } from '../../outils/gabarit.mjs';
import { reserver, statut } from '../gabarits/elements.mjs';
import { fin } from '../gabarits/blocs.mjs';

export const page = { cle: 'marie', fichier: 'marie', imagePartage: 'marie-au-travail-1168.webp' };

export default (c) => {
  const alt = (n) => c.donnees.images[n]?.alt || '';
  return html`
<section class="marie-tete fond-sombre" id="debut">
  <div class="marie-tete-visuel">
    ${c.media({ nom: 'marie-au-travail', alt: c.s('marie.tete.alt'), cadrage: '53% 38%', priorite: true, classe: 'marie-tete-media', sizes: '(max-width: 760px) 100vw, 50vw', attrs: 'data-fx="onde" data-iris-centre' })}
    <span class="chaleur chaleur--sombre" data-chaleur data-effet="chaleur" data-souris aria-hidden="true" data-audit-ignorer></span>
  </div>
  <div class="marie-tete-texte">
    <p class="surtitre hero-anime" data-anime="gsap">${c.t('marie.tete.surtitre')}</p>
    <h1 class="page-titre" data-anime="gsap" data-grille="typo"><span class="ligne-masque"><span class="hero-ligne">${c.t('marie.tete.titre1')}</span></span><span class="ligne-masque"><span class="hero-ligne">${c.t('marie.tete.titre2')}</span></span><span class="ligne-masque"><span class="hero-ligne"><em>${c.t('marie.tete.titreMot')}</em></span></span></h1>
    <p class="hero-intro hero-anime masque-ecran-bas" data-anime="gsap">${c.t('marie.tete.texte')}</p>
    <p class="hero-actions hero-anime" data-anime="gsap">${reserver(c, { classe: 'bouton bouton--or', attrs: 'data-action-principale' })}<a class="bouton bouton--contour" href="tel:${c.site.contact.telephoneLien}">${c.t('commun.appeler')}</a></p>
    <p class="hero-info hero-anime" data-anime="gsap" data-info-cle>${c.t('marie.tete.info')}</p>
  </div>
</section>

<section class="parcours" id="parcours">
  <div class="conteneur parcours-grille">
    <div class="parcours-texte">
      <p class="surtitre">${c.t('marie.parcours.surtitre')}</p>
      <h2 data-anime="lignes" data-grille="fil">${c.t('marie.parcours.titre')}</h2>
      <p data-anime>${c.t('marie.parcours.texte1')}</p>
      <p data-anime>${c.t('marie.parcours.texte2')}</p>
      <blockquote class="grande-citation" data-anime="mots"><p>« ${c.t('marie.parcours.citation')} »</p></blockquote>
    </div>
    <div class="parcours-photos">
      ${c.media({ nom: 'marie-jambe', alt: c.s('marie.parcours.altJambe'), cadrage: '40% 45%', classe: 'parcours-grande', sizes: '(max-width: 760px) 70vw, 30vw', attrs: 'data-fx="parallaxe"' })}
      ${c.media({ nom: 'marie-portrait', alt: c.s('marie.parcours.altPortrait'), cadrage: '40% 40%', classe: 'parcours-petite', sizes: '(max-width: 760px) 44vw, 16vw', attrs: 'data-fx="vitesse"' })}
      <p class="credit">${c.t('commun.credit')}</p>
    </div>
  </div>
</section>

<section class="cabinet fond-sable" id="cabinet">
  <div class="conteneur deux-colonnes">
    ${c.media({ nom: 'cabinet', alt: c.s('marie.cabinet.alt'), cadrage: '44% 42%', classe: 'cabinet-media', sizes: '(max-width: 760px) 92vw, 50vw', attrs: 'data-anime="rideau"' })}
    <div>
      <p class="surtitre">${c.t('marie.cabinet.surtitre')}</p>
      <h2 data-anime="lignes">${c.t('marie.cabinet.titre')}</h2>
      <p data-anime>${c.t('marie.cabinet.texte')}</p>
      <p class="lieu-adresse" data-anime>${c.site.contact.adresse}</p>
      <p data-anime>${statut(c)}</p>
      <p data-anime>${c.lien('contact', { ancre: 'horaires', classe: 'lien-fleche', texte: c.t('marie.cabinet.lien') })}</p>
    </div>
  </div>
</section>

<section class="domicile" id="domicile">
  <div class="conteneur deux-colonnes deux-colonnes--inverse">
    ${c.media({ nom: 'grok/domicile', alt: c.s('marie.domicile.alt'), classe: 'domicile-media', sizes: '(max-width: 760px) 92vw, 50vw', attrs: 'data-fx="zoom"' })}
    <div>
      <p class="surtitre">${c.t('marie.domicile.surtitre')}</p>
      <h2 data-anime="lignes">${c.t('marie.domicile.titre')}</h2>
      <p data-anime>${c.t('marie.domicile.texte')}</p>
      <p class="lieu-note" data-anime>${c.t('marie.domicile.frais')}</p>
    </div>
  </div>
</section>

<section class="deontologie fond-sable" id="deontologie">
  <div class="conteneur deonto-grille">
    <div>
      <p class="surtitre">${c.t('marie.deontologie.surtitre')}</p>
      <h2 data-anime="lignes">${c.t('marie.deontologie.titre')}</h2>
      <p data-anime>${c.t('marie.deontologie.texte')}</p>
      <ol class="engagements" data-anime="cascade">
        <li>${c.t('accueil.confiance.e1')}</li><li>${c.t('accueil.confiance.e2')}</li><li>${c.t('accueil.confiance.e3')}</li><li>${c.t('accueil.confiance.e4')}</li>
      </ol>
      <p class="confiance-cadre" data-anime>${c.t('accueil.confiance.cadre')}</p>
      <p data-anime>${c.t('marie.deontologie.valeurs')}</p>
      <p class="ffmbe" data-anime><img src="/assets/images/ffmbe.jpg" alt="${c.s('accueil.confiance.ffmbeAlt')}" width="800" height="210" loading="lazy"></p>
    </div>
    ${c.media({ nom: 'marie-jardin', alt: c.s('marie.deontologie.altJardin'), cadrage: '50% 45%', classe: 'deonto-media', sizes: '(max-width: 760px) 70vw, 24vw', attrs: 'data-fx="parallaxe"' })}
  </div>
</section>

${fin(c, { titre1: c.t('marie.fin.titre1'), titre2: c.t('marie.fin.titre2'), texte: c.t('marie.fin.texte') })}
`;
};
