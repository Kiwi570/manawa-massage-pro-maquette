# Rapport d’audit

Projet : `manawa-massage-pro-maquette` · 23/11/2026 14:51:46 · 23 min · 6 page(s) · audit complet

## Résumé

- Statut : **2 échec(s)**
- Passe : `20261123-132837-complet` · version ?v=2
- Échecs : **2**
- À regarder : **10**
- Non lancé : **1**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (7), mesures (234), balayage (5), films d’ouverture (10), films de transition (10), bords de l’écran (6), intro accélérable et passable (7), menu (1), clavier (6), liens et boutons (6), liens profonds (16), liens vers la page en cours (5), changements de hauteur (5), parcours du projet (1), fluidité (10), défilement selon l’appareil (5), mouvement (10), effets du plan (7), souris immobile (9), vitesse (5), captures (1)

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

## Échecs

### accessibilité (axe) : color-contrast (1)

- **accessibilité (axe) : color-contrast** — `/` — p[data-fx-rangee=""]:nth-child(1) ; p[data-sens="-1"] — Elements must meet minimum color contrast ratio thresholds _(390×844 normal, 1366×768 normal)_

### premier écran : information clé hors de l’écran (1)

- **premier écran : information clé hors de l’écran** — `/marie` — section#debut > div.marie-tete-texte:nth-of-type(2) > p.hero-info.hero-anime:nth-of-type(4) « Au cabinet ou à domicile · 5,0 sur 5 sur Planity » _(844×390 sansJs)_

## À regarder

### « à compléter » visible (1)

- **« à compléter » visible** — `contact.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### grille : objet d’ouverture hors du premier écran (1)

- **grille : objet d’ouverture hors du premier écran** — `/offrir` — 294 × 0 px visibles : l’intro et le voile s’ouvrent depuis le centre de l’écran à cette taille _(390×844)_

### texte de contenu sous 13 px (ordinateur) (3)

- **texte de contenu sous 13 px (ordinateur)** — `/offrir` — div.cadeau.cadeau--pose > div.cadeau-carte > div.cadeau-face.cadeau-verso:nth-of-type(2) > p.cadeau-titre:nth-of-type(1) « VALABLE UN AN » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1024×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/offrir` — div.cadeau.cadeau--pose > div.cadeau-carte > div.cadeau-face.cadeau-verso:nth-of-type(2) > p:nth-of-type(2) « À réserver au cabinet du Relecq-Kerhuon ou à domic » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1024×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/offrir` — div.cadeau.cadeau--pose > div.cadeau-carte > div.cadeau-face.cadeau-verso:nth-of-type(2) > p.cadeau-papier:nth-of-type(3) « Bons cadeaux papier de 30 € à 900 € disponibles au » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1024×768 sansWebgl)_

### ouverture : changement brusque (1)

- **ouverture : changement brusque** — `/contact` — à 2250 ms (différence 20 %) (films/ouverture-contact-1366.png) _(1366×768 film)_

### rechargement au milieu de la page (1)

- **rechargement au milieu de la page** — `/` — écran différent à la même position après rechargement (21.0 %), voir comparaisons/rechargement-*.png _(1366×768)_

### effet qui ne bouge pas au défilement (3)

- **effet qui ne bouge pas au défilement** — `/` — ul.envies-liste — envies : il ne bouge ni au défilement ni tout seul à cette taille (effet au survol, au clic, ou réservé à l'ordinateur ?) ; il ne compte pas comme effet de section _(1366×768 normal, 390×844 normal)_
- **effet qui ne bouge pas au défilement** — `/soins` — button.bouton.bouton--contour — bol : il ne bouge ni au défilement ni tout seul à cette taille (effet au survol, au clic, ou réservé à l'ordinateur ?) ; il ne compte pas comme effet de section _(1366×768 normal, 390×844 normal)_
- **effet qui ne bouge pas au défilement** — `/` — div.rangee-piste — rangee : il ne bouge ni au défilement ni tout seul à cette taille (effet au survol, au clic, ou réservé à l'ordinateur ?) ; il ne compte pas comme effet de section _(390×844 normal)_

## Non lancé

- **Safari (WebKit)** : WebKit ne peut pas s’installer ici : vérification à faire dans Safari sur le Mac (liste dans le rapport)

### À vérifier dans Safari sur le Mac (WebKit indisponible ici)

- Ouverture de chaque page : rien qui clignote, intro complète au premier chargement et au rechargement.
- Changement de page : le voile couvre l’écran, pas de page blanche ; retour arrière sans intro ni voile resté.
- Défilement : fluide (natif), en-tête qui se cache et revient sans clignoter, sections épinglées entières.
- Menu sur iPhone (mode Responsive de Safari) : ouverture, fermeture, page bloquée derrière.
- Polices, images, mention « Illustration générée », formulaires et barre fixe du bas.

## Repères

- Numéro de version des fichiers : ?v=2
- Journal v2 : 2 étape(s) notée(s), 8 min de travail pour 65 min de budget, 0 min d’attente de l’utilisateur.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Ouverture / (1366×768) : 2651 ms depuis le premier octet
- Ouverture /contact (1366×768) : 2606 ms depuis le premier octet
- Ouverture /marie (1366×768) : 2657 ms depuis le premier octet
- Ouverture /offrir (1366×768) : 2645 ms depuis le premier octet
- Ouverture /soins (1366×768) : 2579 ms depuis le premier octet
- Ouverture / (390×844) : 2560 ms depuis le premier octet
- Ouverture /contact (390×844) : 2635 ms depuis le premier octet
- film de l'ouverture /contact 390×844 : réussi à la tentative 3 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /marie (390×844) : 2685 ms depuis le premier octet
- film de l'ouverture /marie 390×844 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /offrir (390×844) : 2612 ms depuis le premier octet
- film de l'ouverture /offrir 390×844 : réussi à la tentative 3 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /soins (390×844) : 2642 ms depuis le premier octet
- Bords de l’écran : 469 images d’intro, 33 de voile et 133 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Tient dans l'écran / : aucune section épinglée ou plein écran.
- Tient dans l'écran /contact : aucune section épinglée ou plein écran.
- Tient dans l'écran /marie : aucune section épinglée ou plein écran.
- Tient dans l'écran /offrir : aucune section épinglée ou plein écran.
- Tient dans l'écran /soins : aucune section épinglée ou plein écran.
- Fluidité / 1366×768 (molette) : 0 % d'images lentes sur 373, tâche la plus longue 91 ms
- Fluidité /contact 1366×768 (molette) : 0 % d'images lentes sur 235, tâche la plus longue 0 ms
- Fluidité /marie 1366×768 (molette) : 2 % d'images lentes sur 262, tâche la plus longue 113 ms
- Fluidité /offrir 1366×768 (molette) : 0 % d'images lentes sur 232, tâche la plus longue 0 ms
- Fluidité /soins 1366×768 (molette) : 0 % d'images lentes sur 490, tâche la plus longue 0 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1336, tâche la plus longue 0 ms
- Fluidité /contact 390×844 (doigt) : 0 % d'images lentes sur 1348, tâche la plus longue 0 ms
- Fluidité /marie 390×844 (doigt) : 0 % d'images lentes sur 1332, tâche la plus longue 0 ms
- Fluidité /offrir 390×844 (doigt) : 0 % d'images lentes sur 1333, tâche la plus longue 0 ms
- Fluidité /soins 390×844 (doigt) : 0 % d'images lentes sur 1339, tâche la plus longue 0 ms
- Vitesse / : 0.54 s de calcul au chargement (téléphone ralenti).
- Vitesse /contact : 0.43 s de calcul au chargement (téléphone ralenti).
- Vitesse /marie : 0.41 s de calcul au chargement (téléphone ralenti).
- Vitesse /offrir : 0.35 s de calcul au chargement (téléphone ralenti).
- Vitesse /soins : 0.40 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --complet --pages=/,/marie --seulement=fichiers,mesures
```
