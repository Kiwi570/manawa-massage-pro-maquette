# Rapport d’audit

Projet : `manawa-massage-pro-maquette` · 20/11/2026 22:32:24 · 19 min · 6 page(s) · audit standard

## Résumé

- Statut : **7 échec(s)**
- Passe : `20261120-211307-standard` · version ?v=1
- Échecs : **7**
- À regarder : **36**
- Non lancé : **2**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (7), mesures (66), balayage (5), films d’ouverture (9), films de transition (10), bords de l’écran (6), intro accélérable et passable (7), menu (1), clavier (6), liens et boutons (6), liens profonds (16), liens vers la page en cours (5), changements de hauteur (5), parcours du projet (1), fluidité (10), défilement selon l’appareil (5), mouvement (10), effets du plan (7), souris immobile (9), vitesse (5), captures (1)

## Grille wouahou

| Point | État | Détail |
|---|---|---|
| 1. L’effet signature se manipule | ✓ présent | accueil et 1 autre(s) page(s) |
| 2. L’intro devient la page | ✓ présent | objet d’ouverture sur 5 page(s), versObjet dans l’intro |
| 3. La transition reprend le motif | ✓ présent | voile en iris |
| 4. Quelque chose relie les sections et les pages | ✓ présent | sur les 5 page(s) |
| 5. Un titre fait l’événement sur chaque page | ✓ présent | sur les 5 page(s) |
| 6. La scène est un geste du métier | · sans objet | aucune scène épinglée marquée ni galerie générique |
| 7. L’action principale a un retour physique | ✓ présent | sur /, /offrir |

Le script vérifie les marques (`data-grille`, `data-iris-centre`, forme du voile, `versObjet`) ; la force et la justesse de chaque point se jugent sur les captures et les films.

## Passes de cette version (?v=1)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261120-203050-standard | standard | toutes | toutes | 78 | 42 | 1 | échecs |
| 20261120-205347-rapide-cible | rapide | /,/soins,/marie,/offrir,/contact | toutes | 21 | 36 | 1 | échecs |
| **20261120-211307-standard** (celle-ci) | standard | toutes | toutes | 7 | 36 | 2 | échecs |

## Échecs

### contenu inaccessible (1)

- **contenu inaccessible** — `/` — section#carte > div.rangee:nth-of-type(2) > div.rangee-piste > article.phare:nth-of-type(5) « Illustration générée TIBET Sonore aux bols tibétai » — 2 élément(s) de galerie hors de l'écran, sans défilement possible _(1366×768 sansJs)_

### textes qui se chevauchent (2)

- **textes qui se chevauchent** — `/offrir` — div.cadeau.cadeau--pose > div.cadeau-carte > div.cadeau-face.cadeau-recto:nth-of-type(1) > p.cadeau-soin:nth-of-type(2) « Suédois-Californien, 1 h » — avec div.cadeau-carte > div.cadeau-face.cadeau-recto:nth-of-type(1) > p.cadeau-montant:nth-of-type(3) > span « 70 » _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1920×1080 normal, +5)_
- **textes qui se chevauchent** — `/offrir` — div.cadeau.cadeau--pose > div.cadeau-carte > div.cadeau-face.cadeau-recto:nth-of-type(1) > p.cadeau-soin:nth-of-type(2) « Suédois-Californien, 1 h » — avec div.cadeau.cadeau--pose > div.cadeau-carte > div.cadeau-face.cadeau-recto:nth-of-type(1) > p.cadeau-montant:nth-of-type(3) « 70 € » _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1920×1080 normal, +5)_

### contraste sur image (1)

- **contraste sur image** — `/soins` — section#debut > div.conteneur.soins-tete-texte > p.hero-actions.hero-anime:nth-of-type(3) > a.bouton « Réserver sur Planity (nouvel onglet) » — 3.83:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(1366×768 normal)_

### clavier (3)

- **clavier** — `/` — a « Illustration générée
Suède et  » — le focus arrive sur un élément caché _(1366×768)_
- **clavier** — `/` — a « Illustration générée
HawaïLomi » — le focus arrive sur un élément caché _(1366×768)_
- **clavier** — `/` — a « Outils de boisMadérothérapiedè » — le focus arrive sur un élément caché _(1366×768)_

## À regarder

### « à compléter » visible (1)

- **« à compléter » visible** — `contact.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### grille : objet d’ouverture hors du premier écran (1)

- **grille : objet d’ouverture hors du premier écran** — `/offrir` — 300 × 0 px visibles : l’intro et le voile s’ouvrent depuis le centre de l’écran à cette taille _(390×844)_

### section sans visuel (1)

- **section sans visuel** — `/` — section#confiance « EN CONFIANCE La note de celles et ceux qui sont ve » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1920×1080 normal, +5)_

### texte de contenu sous 13 px (ordinateur) (29)

- **texte de contenu sous 13 px (ordinateur)** — `/` — div.conteneur.envies-grille > div.envies-images:nth-of-type(2) > figure.media.envies-image:nth-of-type(1) > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1920×1080 normal, 1366×768 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — article.phare:nth-of-type(1) > a.phare-lien > figure.media.phare-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1920×1080 normal, 1366×768 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — article.phare:nth-of-type(2) > a.phare-lien > figure.media.phare-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1920×1080 normal, 1366×768 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — article.phare:nth-of-type(3) > a.phare-lien > figure.media.phare-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1920×1080 normal, 1366×768 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — article.phare:nth-of-type(4) > a.phare-lien > figure.media.phare-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1920×1080 normal, 1366×768 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — article.phare:nth-of-type(5) > a.phare-lien > figure.media.phare-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1920×1080 normal, 1366×768 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — div.lieux-grille > article.lieu.lieu--decale:nth-of-type(2) > figure.media.lieu-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1920×1080 normal, 1366×768 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/404` — section#debut > figure.media.introuvable-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/contact` — section#debut > figure.media.contact-bandeau > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/marie` — section#domicile > div.conteneur.deux-colonnes > figure.media.domicile-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/offrir` — div.conteneur.offrir-tete-grille > div.offrir-tete-visuel:nth-of-type(2) > figure.media.offrir-tete-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1920×1080 normal, 1366×768 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/offrir` — div.cadeau.cadeau--pose > div.cadeau-carte > div.cadeau-face.cadeau-recto:nth-of-type(1) > p.cadeau-titre:nth-of-type(1) « CARTE CADEAU » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1920×1080 normal, 1366×768 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/offrir` — div.cadeau.cadeau--pose > div.cadeau-carte > div.cadeau-face.cadeau-recto:nth-of-type(1) > p.cadeau-pied:nth-of-type(4) « Valable un an » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1920×1080 normal, 1366×768 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/offrir` — section#forfaits > div.conteneur.forfaits-grille > figure.media.forfaits-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1920×1080 normal, 1366×768 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/offrir` — div.conteneur.cures-grille > div:nth-of-type(1) > figure.media.cures-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1920×1080 normal, 1366×768 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/offrir` — section#evenements > div.conteneur.deux-colonnes > figure.media.evenement-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1920×1080 normal, 1366×768 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/soins` — section#debut > figure.media.soins-tete-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1920×1080 normal, 1366×768 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/soins` — div#suedois-californien > article.soin > figure.media.soin-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1920×1080 normal, 1366×768 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/soins` — div#lomi-lomi > article.soin > figure.media.soin-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1920×1080 normal, 1366×768 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/soins` — div#pierres-chaudes > article.soin > figure.media.soin-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1920×1080 normal, 1366×768 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/soins` — div#ayurvedique > article.soin > figure.media.soin-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1920×1080 normal, 1366×768 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/soins` — div#thai-pieds > article.soin > figure.media.soin-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1920×1080 normal, 1366×768 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/soins` — div#cranien > article.soin > figure.media.soin-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1920×1080 normal, 1366×768 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/soins` — div#bols-tibetains > article.soin > figure.media.soin-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1920×1080 normal, 1366×768 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/soins` — div#prenatal > article.soin > figure.media.soin-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1920×1080 normal, 1366×768 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- … et 4 autres (rapport.json)

### rechargement au milieu de la page (1)

- **rechargement au milieu de la page** — `/` — écran différent à la même position après rechargement (20.6 %), voir comparaisons/rechargement-*.png _(1366×768)_

### effet qui ne bouge pas au défilement (3)

- **effet qui ne bouge pas au défilement** — `/` — ul.envies-liste — envies : il ne bouge ni au défilement ni tout seul à cette taille (effet au survol, au clic, ou réservé à l'ordinateur ?) ; il ne compte pas comme effet de section _(1366×768 normal, 390×844 normal)_
- **effet qui ne bouge pas au défilement** — `/soins` — button.bouton.bouton--contour — bol : il ne bouge ni au défilement ni tout seul à cette taille (effet au survol, au clic, ou réservé à l'ordinateur ?) ; il ne compte pas comme effet de section _(1366×768 normal, 390×844 normal)_
- **effet qui ne bouge pas au défilement** — `/` — div.rangee-piste — rangee : il ne bouge ni au défilement ni tout seul à cette taille (effet au survol, au clic, ou réservé à l'ordinateur ?) ; il ne compte pas comme effet de section _(390×844 normal)_

## Non lancé

- **film de l'ouverture /offrir 1366×768** : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page (3 tentatives)
- **Safari (WebKit)** : WebKit ne peut pas s’installer ici : vérification à faire dans Safari sur le Mac (liste dans le rapport)

### À vérifier dans Safari sur le Mac (WebKit indisponible ici)

- Ouverture de chaque page : rien qui clignote, intro complète au premier chargement et au rechargement.
- Changement de page : le voile couvre l’écran, pas de page blanche ; retour arrière sans intro ni voile resté.
- Défilement : fluide (natif), en-tête qui se cache et revient sans clignoter, sections épinglées entières.
- Menu sur iPhone (mode Responsive de Safari) : ouverture, fermeture, page bloquée derrière.
- Polices, images, mention « Illustration générée », formulaires et barre fixe du bas.

## Repères

- Numéro de version des fichiers : ?v=1
- Journal v1 : 5 étape(s) notée(s), 76 min de travail pour 115 min de budget, 9 min d’attente de l’utilisateur.
- Journal : « aperçu de l'accueil en films » 17 min pour 5 prévues.
- Audit standard : étapes lourdes sur /, /contact, /marie, /offrir, /soins.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Ouverture / (1366×768) : 2658 ms depuis le premier octet
- Ouverture /contact (1366×768) : 2647 ms depuis le premier octet
- film de l'ouverture /contact 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /marie (1366×768) : 2672 ms depuis le premier octet
- film de l'ouverture /marie 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /soins (1366×768) : 2600 ms depuis le premier octet
- Ouverture / (390×844) : 2655 ms depuis le premier octet
- Ouverture /contact (390×844) : 2617 ms depuis le premier octet
- Ouverture /marie (390×844) : 2691 ms depuis le premier octet
- Ouverture /offrir (390×844) : 2640 ms depuis le premier octet
- Ouverture /soins (390×844) : 2628 ms depuis le premier octet
- bords de l’écran /offrir 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Bords de l’écran : 472 images d’intro, 34 de voile et 134 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Tient dans l'écran / : aucune section épinglée ou plein écran.
- Tient dans l'écran /contact : aucune section épinglée ou plein écran.
- Tient dans l'écran /marie : aucune section épinglée ou plein écran.
- Tient dans l'écran /offrir : aucune section épinglée ou plein écran.
- Tient dans l'écran /soins : aucune section épinglée ou plein écran.
- Fluidité / 1366×768 (molette) : 0 % d'images lentes sur 366, tâche la plus longue 82 ms
- Fluidité /contact 1366×768 (molette) : 0 % d'images lentes sur 216, tâche la plus longue 0 ms
- Fluidité /marie 1366×768 (molette) : 2 % d'images lentes sur 268, tâche la plus longue 119 ms
- Fluidité /offrir 1366×768 (molette) : 0 % d'images lentes sur 225, tâche la plus longue 0 ms
- Fluidité /soins 1366×768 (molette) : 0 % d'images lentes sur 489, tâche la plus longue 0 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1339, tâche la plus longue 0 ms
- Fluidité /contact 390×844 (doigt) : 0 % d'images lentes sur 1339, tâche la plus longue 0 ms
- Fluidité /marie 390×844 (doigt) : 0 % d'images lentes sur 1343, tâche la plus longue 0 ms
- Fluidité /offrir 390×844 (doigt) : 0 % d'images lentes sur 1334, tâche la plus longue 0 ms
- Fluidité /soins 390×844 (doigt) : 0 % d'images lentes sur 1335, tâche la plus longue 0 ms
- Vitesse / : 0.52 s de calcul au chargement (téléphone ralenti).
- Vitesse /contact : 0.33 s de calcul au chargement (téléphone ralenti).
- Vitesse /marie : 0.34 s de calcul au chargement (téléphone ralenti).
- Vitesse /offrir : 0.33 s de calcul au chargement (téléphone ralenti).
- Vitesse /soins : 0.36 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --seulement=fichiers,mesures,parcours,films
```
