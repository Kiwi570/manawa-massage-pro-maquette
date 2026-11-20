/* Contact et accès : grand titre et statut, puis le bandeau de l'estuaire ; horaires, plan schématique, formulaire simulé. */
import { html, brut } from '../../outils/gabarit.mjs';
import { reserver, statut, ext } from '../gabarits/elements.mjs';
import { fin } from '../gabarits/blocs.mjs';

export const page = { cle: 'contact', fichier: 'contact', imagePartage: 'grok/contact-ouverture-1280.webp' };

const heure = (h) => { const [hh, mm] = h.split(':').map(Number); return mm ? `${hh} h ${String(mm).padStart(2, '0')}` : `${hh} h`; };

const PLAN = (titre) => brut(`<svg class="plan" viewBox="0 0 600 400" role="img" aria-labelledby="plan-titre" data-fx="trace" data-visuel>
  <title id="plan-titre">%TITRE%</title>
  <rect width="600" height="400" class="plan-eau" data-audit-ignorer/>
  <path class="plan-terre" data-audit-ignorer d="M0 0 H600 V122 C 560 126 520 138 470 150 C 430 160 395 168 352 172 C 320 176 300 182 262 182 C 220 182 196 176 168 178 C 120 182 60 186 0 190 Z"/>
  <path class="plan-terre" data-audit-ignorer d="M600 196 C 560 196 500 198 452 204 C 410 210 380 214 352 228 C 320 246 300 270 280 300 C 262 328 236 352 196 368 C 160 382 130 392 110 400 H600 Z"/>
  <path class="plan-cote" data-fx-trait d="M0 190 C 60 186 120 182 168 178 C 196 176 220 182 262 182 C 300 182 320 176 352 172 C 395 168 430 160 470 150 C 520 138 560 126 600 122"/>
  <path class="plan-cote" data-fx-trait d="M600 196 C 560 196 500 198 452 204 C 410 210 380 214 352 228 C 320 246 300 270 280 300 C 262 328 236 352 196 368 C 160 382 130 392 110 400"/>
  <circle class="plan-ville" cx="170" cy="160" r="6"/>
  <text class="plan-texte" x="150" y="140" text-anchor="middle" data-repere>Brest</text>
  <text class="plan-texte plan-texte--eau" x="150" y="270" text-anchor="middle">Rade de Brest</text>
  <text class="plan-texte plan-texte--eau" x="500" y="186" text-anchor="middle">l'Elorn</text>
  <text class="plan-texte" x="420" y="300" text-anchor="middle">Plougastel-Daoulas</text>
  <g class="plan-cabinet" data-repere>
    <circle class="plan-halo" cx="352" cy="156" r="22"/>
    <circle class="plan-point" cx="352" cy="156" r="9"/>
    <text class="plan-texte plan-texte--fort" x="352" y="120" text-anchor="middle">Le Relecq-Kerhuon</text>
  </g>
</svg>`.replace('%TITRE%', titre.replace(/&/g, '&amp;').replace(/</g, '&lt;')));

export default (c) => {
  const H = c.donnees.horaires;
  const alt = (n) => c.donnees.images[n]?.alt || '';
  return html`
<section class="contact-tete" id="debut">
  <div class="conteneur contact-tete-grille">
    <div>
      <p class="surtitre hero-anime" data-anime="gsap">${c.t('contact.tete.surtitre')}</p>
      <h1 class="page-titre" data-anime="gsap" data-grille="typo"><span class="ligne-masque"><span class="hero-ligne">${c.t('contact.tete.titre1')} <em>${c.t('contact.tete.titreMot')}</em>.</span></span></h1>
    </div>
    <div class="contact-tete-infos">
      <p class="statut-grand hero-anime" data-anime="gsap" data-info-cle>${statut(c, 'statut--grand')}</p>
      <p class="hero-intro hero-anime" data-anime="gsap">${c.t('contact.tete.texte')}</p>
      <p class="hero-actions hero-anime" data-anime="gsap">${reserver(c, { attrs: 'data-action-principale' })}<a class="bouton bouton--contour" href="tel:${c.site.contact.telephoneLien}">${c.t('commun.appeler')} ${c.site.contact.telephone}</a></p>
      <p class="lieu-adresse hero-anime" data-anime="gsap">${c.site.contact.adresse}</p>
    </div>
  </div>
  ${c.media({ nom: 'grok/contact-ouverture', alt: c.s('contact.tete.alt'), cadrage: '55% 60%', cadrageMobile: '50% 70%', priorite: true, classe: 'contact-bandeau', sizes: '100vw', attrs: 'data-fx="parallaxe" data-fx-force="8" data-iris-centre' })}
</section>

<section class="horaires fond-sable" id="horaires">
  <div class="conteneur horaires-grille">
    <div>
      <p class="surtitre">${c.t('contact.horaires.surtitre')}</p>
      <h2 data-anime="lignes">${c.t('contact.horaires.titre')}</h2>
      <table class="horaires-table" data-horaires-table>
        <tbody data-anime="cascade">
          ${H.jours.map((j) => html`<tr data-jour="${j.jour}"><th scope="row">${j.nom}</th><td>${j.plages.length ? j.plages.map(([a, b]) => `${heure(a)} – ${heure(b)}`).join(', ') : c.s('contact.horaires.ferme')}</td></tr>`)}
        </tbody>
      </table>
      <p class="lieu-note">${c.t('contact.horaires.source')}</p>
    </div>
    <figure class="plan-cadre" data-grille="fil">
      ${PLAN(c.s('contact.horaires.carteAlt'))}
      <figcaption>${c.t('contact.horaires.itineraire')}</figcaption>
    </figure>
  </div>
</section>

<section class="ecrire" id="ecrire">
  <div class="conteneur ecrire-grille">
    <div class="ecrire-intro">
      <p class="surtitre">${c.t('contact.formulaire.surtitre')}</p>
      <h2 data-anime="lignes">${c.t('contact.formulaire.titre')}</h2>
      <p data-anime>${c.t('contact.formulaire.texte')}</p>
      ${c.media({ nom: 'cabinet', alt: c.s('contact.formulaire.alt'), cadrage: '44% 42%', classe: 'ecrire-media', sizes: '(max-width: 760px) 92vw, 34vw', attrs: 'data-fx="zoom"' })}
      <div class="coordonnees">
        <h3>${c.t('contact.coordonnees.titre')}</h3>
        <p><a href="tel:${c.site.contact.telephoneLien}">${c.site.contact.telephone}</a><br><span class="email">${c.site.contact.email}</span></p>
        <p>${ext(c, c.site.liens.instagram, c.t('commun.instagram'))} · ${ext(c, c.site.liens.facebook, c.t('commun.facebook'))}</p>
      </div>
    </div>
    <form data-formulaire class="formulaire" action="#" novalidate>
      <div class="champ"><label for="f-nom">${c.t('contact.formulaire.nom')}</label><input id="f-nom" name="nom" autocomplete="name" required></div>
      <div class="champs-duo">
        <div class="champ"><label for="f-tel">${c.t('contact.formulaire.tel')}</label><input id="f-tel" name="tel" type="tel" autocomplete="tel" inputmode="tel"></div>
        <div class="champ"><label for="f-email">${c.t('contact.formulaire.email')}</label><input id="f-email" name="email" type="email" autocomplete="email" required></div>
      </div>
      <div class="champ"><label for="f-sujet">${c.t('contact.formulaire.sujet')}</label>
        <select id="f-sujet" name="sujet">
          <option value="rdv">${c.t('contact.formulaire.sujetRdv')}</option>
          <option value="cadeau">${c.t('contact.formulaire.sujetCadeau')}</option>
          <option value="forfait">${c.t('contact.formulaire.sujetForfait')}</option>
          <option value="evenement">${c.t('contact.formulaire.sujetEvenement')}</option>
          <option value="autre" selected>${c.t('contact.formulaire.sujetAutre')}</option>
        </select></div>
      <fieldset class="champ champ-radios"><legend>${c.t('contact.formulaire.lieu')}</legend>
        <label class="radio"><input type="radio" name="lieu" value="cabinet" checked> ${c.t('contact.formulaire.lieuCabinet')}</label>
        <label class="radio"><input type="radio" name="lieu" value="domicile"> ${c.t('contact.formulaire.lieuDomicile')}</label>
      </fieldset>
      <div class="champ"><label for="f-message">${c.t('contact.formulaire.message')}</label><textarea id="f-message" name="message" rows="5" required></textarea></div>
      <p class="mention-donnees">${c.t('contact.formulaire.donnees')}</p>
      <button type="submit" class="bouton">${c.t('contact.formulaire.envoyer')}</button>
      <p data-message-envoi role="status" tabindex="-1" hidden></p>
    </form>
  </div>
</section>

${fin(c, { titre1: c.t('contact.fin.titre1'), titre2: c.t('contact.fin.titre2'), texte: c.t('contact.fin.texte') })}
`;
};
