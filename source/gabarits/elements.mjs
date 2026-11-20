/* Petits éléments partagés par les pages de Manawa : liens externes, boutons Planity et SumUp,
   statut des horaires, parenthèses, étoiles. */
import { html, brut } from '../../outils/gabarit.mjs';

/* Lien externe : nouvel onglet, annoncé aux lecteurs d'écran. */
export function ext(c, url, contenu, { classe = '', attrs = '' } = {}) {
  return html`<a href="${url}" target="_blank" rel="noopener"${classe ? brut(` class="${classe}"`) : ''}${brut(attrs ? ' ' + attrs : '')}>${contenu}<span class="visuellement-cache"> ${c.s('commun.nouvelOnglet')}</span></a>`;
}

export const reserver = (c, { classe = 'bouton', texte, attrs = '' } = {}) =>
  ext(c, c.site.liens.planity, texte ?? c.t('commun.reserver'), { classe, attrs });

/* Statut « ouvert maintenant » : calculé à l'heure du Relecq-Kerhuon par site.js (horaires de donnees/horaires.json).
   Sans JavaScript, la phrase neutre reste. Boîte de largeur fixe : rien ne bouge quand le texte arrive. */
export const statut = (c, classe = '') => html`<span class="statut ${classe}" data-statut><span class="statut-point" aria-hidden="true"></span><span data-statut-texte>${c.t('commun.statutChargement')}</span></span>`;

export const prix = (n) => brut(`<span class="prix" data-prix>${n}&nbsp;€</span>`);

/* Parenthèse dessinée (gauche ou droite), tracé simple pour stroke-dashoffset. */
export const parenthese = (cote, classe = '', attrs = '') => brut(`<svg class="parenthese parenthese--${cote} ${classe}" viewBox="0 0 80 520" preserveAspectRatio="none" aria-hidden="true"${attrs ? ' ' + attrs : ''}><path d="${cote === 'g' ? 'M70 6 C 4 150, 4 370, 70 514' : 'M10 6 C 76 150, 76 370, 10 514'}" pathLength="1"/></svg>`);

export const etoiles = (classe = '') => brut(`<svg class="etoiles ${classe}" viewBox="0 0 260 48" aria-hidden="true" data-fx="trace" data-visuel>${[0, 1, 2, 3, 4].map((i) => {
  const cx = 24 + i * 53, cy = 25, R = 21, r = 9;
  const pts = Array.from({ length: 10 }, (_, k) => {
    const a = -Math.PI / 2 + (k * Math.PI) / 5, rr = k % 2 ? r : R;
    return `${(cx + rr * Math.cos(a)).toFixed(1)},${(cy + rr * Math.sin(a)).toFixed(1)}`;
  }).join(' ');
  return `<polygon points="${pts}" data-fx-trait/>`;
}).join('')}</svg>`);
