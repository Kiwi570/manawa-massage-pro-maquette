/* Page 404 aux couleurs de Manawa. */
import { html } from '../../outils/gabarit.mjs';

export const page = { cle: '404', fichier: '404', partage: false };

export default (c) => html`
<section class="introuvable" id="debut">
  ${c.media({ nom: 'grok/page-404', alt: c.s('introuvable.alt'), cadrage: '60% 50%', priorite: true, classe: 'introuvable-media', sizes: '100vw', attrs: 'data-fx="parallaxe" data-fx-force="6" data-iris-centre' })}
  <div class="conteneur introuvable-texte">
    <p class="surtitre">404</p>
    <h1 class="page-titre" data-anime="lignes">${c.t('introuvable.titre')}</h1>
    <p data-anime>${c.t('introuvable.texte')}</p>
    <p class="hero-actions" data-anime>${c.lien('accueil', { classe: 'bouton', texte: c.t('introuvable.retour'), attrs: 'data-action-principale' })}${c.lien('soins', { classe: 'bouton bouton--contour', texte: c.t('introuvable.soins') })}</p>
  </div>
</section>
`;
