# Rapport d’audit

Projet : `manawa-massage-pro-maquette` · 20/11/2026 21:50:27 · 20 min · 6 page(s) · audit standard

## Résumé

- Statut : **78 échec(s)**
- Passe : `20261120-203050-standard` · version ?v=1
- Échecs : **78**
- À regarder : **42**
- Non lancé : **1**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (6), mesures (66), balayage (5), films d’ouverture (10), films de transition (10), bords de l’écran (6), intro accélérable et passable (7), menu (1), clavier (6), liens et boutons (6), liens profonds (16), liens vers la page en cours (5), changements de hauteur (5), parcours du projet (1), fluidité (10), défilement selon l’appareil (5), mouvement (10), effets du plan (7), souris immobile (9), vitesse (5), captures (1)

## Grille wouahou

| Point | État | Détail |
|---|---|---|
| 1. L’effet signature se manipule | ✓ présent | accueil et 1 autre(s) page(s) |
| 2. L’intro devient la page | ✓ présent | objet d’ouverture sur 5 page(s), versObjet dans l’intro |
| 3. La transition reprend le motif | ✓ présent | voile en iris |
| 4. Quelque chose relie les sections et les pages | ⚠ à regarder | présent sur /, /marie, /offrir, /soins ; absent sur /contact |
| 5. Un titre fait l’événement sur chaque page | ✓ présent | sur les 5 page(s) |
| 6. La scène est un geste du métier | · sans objet | aucune scène épinglée marquée ni galerie générique |
| 7. L’action principale a un retour physique | ✓ présent | sur /, /offrir |

Le script vérifie les marques (`data-grille`, `data-iris-centre`, forme du voile, `versObjet`) ; la force et la justesse de chaque point se jugent sur les captures et les films.

## Échecs

### image de partage (5)

- **image de partage** — `contact.html` — fichier introuvable : /assets/partage/contact-fr.jpg
- **image de partage** — `index.html` — fichier introuvable : /assets/partage/accueil-fr.jpg
- **image de partage** — `marie.html` — fichier introuvable : /assets/partage/marie-fr.jpg
- **image de partage** — `offrir.html` — fichier introuvable : /assets/partage/offrir-fr.jpg
- **image de partage** — `soins.html` — fichier introuvable : /assets/partage/soins-fr.jpg

### premier écran : information clé hors de l’écran (5)

- **premier écran : information clé hors de l’écran** — `/` — section#debut > div.hero-texte:nth-of-type(1) > p.hero-info.hero-anime:nth-of-type(4) « ★ 5,0 sur 5 · 38 avis sur Planity Le cabinet rouvr » _(320×568 normal)_
- **premier écran : information clé hors de l’écran** — `/` — section#debut > div.hero-texte:nth-of-type(1) > p.hero-info.hero-anime:nth-of-type(4) « ★ 5,0 sur 5 · 38 avis sur Planity Horaires du cabi » _(320×568 sansJs)_
- **premier écran : information clé hors de l’écran** — `/marie` — section#debut > div.marie-tete-texte:nth-of-type(2) > p.hero-info.hero-anime:nth-of-type(4) « Au cabinet ou à domicile · 5,0 sur 5 sur Planity » _(320×568 normal, 844×390 normal, 320×568 sansJs)_
- **premier écran : information clé hors de l’écran** — `/offrir` — section#debut > div.conteneur.offrir-tete-grille > div.offrir-tete-texte:nth-of-type(1) > p.hero-info.hero-anime:nth-of-type(4) « Valable un an · commande en ligne sur SumUp » _(320×568 normal, 844×390 normal, 320×568 sansJs)_
- **premier écran : information clé hors de l’écran** — `/soins` — section#debut > div.conteneur.soins-tete-texte > p.hero-actions.hero-anime:nth-of-type(3) > span.hero-info « De 20 € à 130 € · au cabinet ou à domicile » _(320×568 normal, 320×568 sansJs)_

### zone tactile sous 44 px (12)

- **zone tactile sous 44 px** — `/` — nav > ul > li:nth-of-type(3) > a « Offrir » — 39 × 44 px _(768×1024 normal, 844×390 normal)_
- **zone tactile sous 44 px** — `/` — nav > ul > li:nth-of-type(4) > a « Offrir » — 43 × 44 px _(768×1024 normal, 390×844 normal, 320×568 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **zone tactile sous 44 px** — `/404` — nav > ul > li:nth-of-type(4) > a « Offrir » — 41 × 44 px _(320×568 normal, 390×844 normal, 768×1024 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **zone tactile sous 44 px** — `/404` — nav > ul > li:nth-of-type(3) > a « Offrir » — 39 × 44 px _(768×1024 normal, 844×390 normal)_
- **zone tactile sous 44 px** — `/contact` — nav > ul > li:nth-of-type(4) > a « Offrir » — 41 × 44 px _(390×844 normal, 320×568 normal, 768×1024 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **zone tactile sous 44 px** — `/contact` — nav > ul > li:nth-of-type(3) > a « Offrir » — 39 × 44 px _(844×390 normal, 768×1024 normal)_
- **zone tactile sous 44 px** — `/marie` — nav > ul > li:nth-of-type(4) > a « Offrir » — 41 × 44 px _(320×568 normal, 390×844 normal, 768×1024 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **zone tactile sous 44 px** — `/marie` — nav > ul > li:nth-of-type(3) > a « Offrir » — 39 × 44 px _(768×1024 normal, 844×390 normal)_
- **zone tactile sous 44 px** — `/offrir` — nav > ul > li:nth-of-type(3) > a « Offrir » — 39 × 44 px _(768×1024 normal, 844×390 normal)_
- **zone tactile sous 44 px** — `/offrir` — nav > ul > li:nth-of-type(4) > a « Offrir » — 43 × 44 px _(768×1024 normal, 390×844 normal, 320×568 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **zone tactile sous 44 px** — `/soins` — nav > ul > li:nth-of-type(3) > a « Offrir » — 39 × 44 px _(768×1024 normal, 844×390 normal)_
- **zone tactile sous 44 px** — `/soins` — nav > ul > li:nth-of-type(4) > a « Offrir » — 43 × 44 px _(768×1024 normal, 390×844 normal, 320×568 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_

### texte coupé (15)

- **texte coupé** — `/` — article.phare:nth-of-type(3) > a.phare-lien > figure.media.phare-media > figcaption.mention-ia « Illustration générée » — coupé par section#carte > div.rangee:nth-of-type(2) « Illustration générée SUÈDE ET CALIFORNIE Suédois-C » _(768×1024 normal)_
- **texte coupé** — `/` — div.rangee-piste > article.phare:nth-of-type(3) > a.phare-lien > span.phare-origine:nth-of-type(1) « AMÉRIQUE DU NORD ET HAWAÏ » — coupé par section#carte > div.rangee:nth-of-type(2) « Illustration générée SUÈDE ET CALIFORNIE Suédois-C » _(768×1024 normal)_
- **texte coupé** — `/` — div.cadeau:nth-of-type(1) > div.cadeau-carte > div.cadeau-face.cadeau-recto:nth-of-type(1) > span.cadeau-m « M » — coupé par div.conteneur.offrir-grille > div.cadeau:nth-of-type(1) > div.cadeau-carte > div.cadeau-face.cadeau-recto:nth-of-type(1) « M CARTE CADEAU Suédois-Californien, 1 h 70 € Une p » _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1920×1080 normal, +5)_
- **texte coupé** — `/` — div.rangee-piste > article.phare:nth-of-type(4) > a.phare-lien > span.phare-origine:nth-of-type(1) « JAPON » — coupé par section#carte > div.rangee:nth-of-type(2) « Illustration générée SUÈDE ET CALIFORNIE Suédois-C » _(844×390 normal)_
- **texte coupé** — `/` — div.rangee-piste > article.phare:nth-of-type(4) > a.phare-lien > span.phare-nom:nth-of-type(2) « Kobido » — coupé par section#carte > div.rangee:nth-of-type(2) « Illustration générée SUÈDE ET CALIFORNIE Suédois-C » _(844×390 normal)_
- **texte coupé** — `/` — div.rangee-piste > article.phare:nth-of-type(4) > a.phare-lien > span.phare-prix:nth-of-type(3) « dès 60 € » — coupé par section#carte > div.rangee:nth-of-type(2) « Illustration générée SUÈDE ET CALIFORNIE Suédois-C » _(844×390 normal)_
- **texte coupé** — `/` — div.rangee-piste > article.phare:nth-of-type(5) > a.phare-lien > span.phare-origine:nth-of-type(1) « TIBET » — coupé par section#carte > div.rangee:nth-of-type(2) « Illustration générée SUÈDE ET CALIFORNIE Suédois-C » _(1920×1080 normal)_
- **texte coupé** — `/` — div.rangee-piste > article.phare:nth-of-type(5) > a.phare-lien > span.phare-nom:nth-of-type(2) « Sonore aux bols tibétains » — coupé par section#carte > div.rangee:nth-of-type(2) « Illustration générée SUÈDE ET CALIFORNIE Suédois-C » _(1920×1080 normal)_
- **texte coupé** — `/` — div.rangee-piste > article.phare:nth-of-type(5) > a.phare-lien > span.phare-prix:nth-of-type(3) « dès 40 € » — coupé par section#carte > div.rangee:nth-of-type(2) « Illustration générée SUÈDE ET CALIFORNIE Suédois-C » _(1920×1080 normal)_
- **texte coupé** — `/` — article.phare:nth-of-type(4) > a.phare-lien > figure.media.phare-media > figcaption.mention-ia « Illustration générée » — coupé par section#carte > div.rangee:nth-of-type(2) « Illustration générée SUÈDE ET CALIFORNIE Suédois-C » _(1366×768 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte coupé** — `/offrir` — div.cadeau.cadeau--pose > div.cadeau-carte > div.cadeau-face.cadeau-recto:nth-of-type(1) > span.cadeau-m « M » — coupé par div.offrir-tete-visuel:nth-of-type(2) > div.cadeau.cadeau--pose > div.cadeau-carte > div.cadeau-face.cadeau-recto:nth-of-type(1) « M CARTE CADEAU Suédois-Californien, 1 h 70 € Une p » _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **texte coupé** — `/offrir` — div.cadeau-carte > div.cadeau-face.cadeau-recto:nth-of-type(1) > p.cadeau-montant:nth-of-type(3) > span « 70 » — coupé par div.offrir-tete-visuel:nth-of-type(2) > div.cadeau.cadeau--pose > div.cadeau-carte > div.cadeau-face.cadeau-recto:nth-of-type(1) « M CARTE CADEAU Suédois-Californien, 1 h 70 € Une p » _(768×1024 normal)_
- **texte coupé** — `/offrir` — div.cadeau.cadeau--pose > div.cadeau-carte > div.cadeau-face.cadeau-recto:nth-of-type(1) > p.cadeau-montant:nth-of-type(3) « 70 € » — coupé par div.offrir-tete-visuel:nth-of-type(2) > div.cadeau.cadeau--pose > div.cadeau-carte > div.cadeau-face.cadeau-recto:nth-of-type(1) « M CARTE CADEAU Suédois-Californien, 1 h 70 € Une p » _(768×1024 normal)_
- **texte coupé** — `/offrir` — div.cadeau.cadeau--pose > div.cadeau-carte > div.cadeau-face.cadeau-recto:nth-of-type(1) > p.cadeau-pied:nth-of-type(4) « Une parenthèse pour vous · Valable un an » — coupé par div.offrir-tete-visuel:nth-of-type(2) > div.cadeau.cadeau--pose > div.cadeau-carte > div.cadeau-face.cadeau-recto:nth-of-type(1) « M CARTE CADEAU Suédois-Californien, 1 h 70 € Une p » _(768×1024 normal, 320×568 normal, 844×390 normal, 320×568 sansJs)_
- **texte coupé** — `/offrir` — div.cadeau.cadeau--pose > div.cadeau-carte > div.cadeau-face.cadeau-verso:nth-of-type(2) > p.cadeau-titre:nth-of-type(1) « VALABLE UN AN » — coupé par div.offrir-tete-visuel:nth-of-type(2) > div.cadeau.cadeau--pose > div.cadeau-carte > div.cadeau-face.cadeau-verso:nth-of-type(2) « VALABLE UN AN À réserver au cabinet du Relecq-Kerh » _(768×1024 normal, 320×568 normal)_

### textes qui se chevauchent (20)

- **textes qui se chevauchent** — `/` — div.cadeau:nth-of-type(1) > div.cadeau-carte > div.cadeau-face.cadeau-recto:nth-of-type(1) > span.cadeau-m « M » — avec div.cadeau:nth-of-type(1) > div.cadeau-carte > div.cadeau-face.cadeau-recto:nth-of-type(1) > p.cadeau-soin:nth-of-type(2) « Suédois-Californien, 1 h » _(768×1024 normal, 320×568 normal, 844×390 normal, 320×568 sansJs)_
- **textes qui se chevauchent** — `/` — div.cadeau:nth-of-type(1) > div.cadeau-carte > div.cadeau-face.cadeau-recto:nth-of-type(1) > span.cadeau-m « M » — avec div.cadeau:nth-of-type(1) > div.cadeau-carte > div.cadeau-face.cadeau-recto:nth-of-type(1) > p.cadeau-pied:nth-of-type(4) « Une parenthèse pour vous · Valable un an » _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 390×844 sansWebgl, +1)_
- **textes qui se chevauchent** — `/` — div.cadeau:nth-of-type(1) > div.cadeau-carte > div.cadeau-face.cadeau-recto:nth-of-type(1) > p.cadeau-soin:nth-of-type(2) « Suédois-Californien, 1 h » — avec div.cadeau-carte > div.cadeau-face.cadeau-recto:nth-of-type(1) > p.cadeau-montant:nth-of-type(3) > span « 70 » _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1920×1080 normal, +5)_
- **textes qui se chevauchent** — `/` — div.cadeau:nth-of-type(1) > div.cadeau-carte > div.cadeau-face.cadeau-recto:nth-of-type(1) > p.cadeau-soin:nth-of-type(2) « Suédois-Californien, 1 h » — avec div.cadeau:nth-of-type(1) > div.cadeau-carte > div.cadeau-face.cadeau-recto:nth-of-type(1) > p.cadeau-montant:nth-of-type(3) « 70 € » _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1920×1080 normal, +5)_
- **textes qui se chevauchent** — `/` — section#confiance > div.conteneur.confiance-grille > div.confiance-note:nth-of-type(1) > h2 « La note de celles et ceux qui sont venus. » — avec div.conteneur.confiance-grille > div.confiance-note:nth-of-type(1) > p.note-grande:nth-of-type(2) > span.note-chiffre:nth-of-type(1) « 5,0 » _(768×1024 normal, 390×844 normal, 844×390 normal, 390×844 sansJs, 1920×1080 normal, 1366×768 normal, +3)_
- **textes qui se chevauchent** — `/` — div.cadeau:nth-of-type(1) > div.cadeau-carte > div.cadeau-face.cadeau-recto:nth-of-type(1) > span.cadeau-m « M » — avec section#offrir > div.conteneur.offrir-grille > div.offrir-texte:nth-of-type(2) > p.surtitre:nth-of-type(1) « POUR NOËL CARTE CADEAU » _(390×844 normal, 320×568 normal, 390×844 sansWebgl)_
- **textes qui se chevauchent** — `/` — div.cadeau:nth-of-type(1) > div.cadeau-carte > div.cadeau-face.cadeau-recto:nth-of-type(1) > span.cadeau-m « M » — avec section#offrir > div.conteneur.offrir-grille > div.offrir-texte:nth-of-type(2) > h2 « Offrez une parenthèse. » _(320×568 normal)_
- **textes qui se chevauchent** — `/offrir` — div.conteneur.offrir-tete-grille > div.offrir-tete-visuel:nth-of-type(2) > figure.media.offrir-tete-media > figcaption.mention-ia « Illustration générée » — avec div.cadeau.cadeau--pose > div.cadeau-carte > div.cadeau-face.cadeau-recto:nth-of-type(1) > span.cadeau-m « M » _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **textes qui se chevauchent** — `/offrir` — div.conteneur.offrir-tete-grille > div.offrir-tete-visuel:nth-of-type(2) > figure.media.offrir-tete-media > figcaption.mention-ia « Illustration générée » — avec div.cadeau.cadeau--pose > div.cadeau-carte > div.cadeau-face.cadeau-recto:nth-of-type(1) > p.cadeau-soin:nth-of-type(2) « Suédois-Californien, 1 h » _(768×1024 normal, 390×844 normal, 844×390 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **textes qui se chevauchent** — `/offrir` — div.cadeau.cadeau--pose > div.cadeau-carte > div.cadeau-face.cadeau-recto:nth-of-type(1) > span.cadeau-m « M » — avec div.cadeau.cadeau--pose > div.cadeau-carte > div.cadeau-face.cadeau-recto:nth-of-type(1) > p.cadeau-titre:nth-of-type(1) « CARTE CADEAU » _(768×1024 normal, 320×568 normal, 844×390 normal, 320×568 sansJs)_
- **textes qui se chevauchent** — `/offrir` — div.cadeau.cadeau--pose > div.cadeau-carte > div.cadeau-face.cadeau-recto:nth-of-type(1) > span.cadeau-m « M » — avec div.cadeau.cadeau--pose > div.cadeau-carte > div.cadeau-face.cadeau-recto:nth-of-type(1) > p.cadeau-soin:nth-of-type(2) « Suédois-Californien, 1 h » _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **textes qui se chevauchent** — `/offrir` — div.cadeau.cadeau--pose > div.cadeau-carte > div.cadeau-face.cadeau-recto:nth-of-type(1) > span.cadeau-m « M » — avec div.cadeau-carte > div.cadeau-face.cadeau-recto:nth-of-type(1) > p.cadeau-montant:nth-of-type(3) > span « 70 » _(768×1024 normal, 844×390 normal)_
- **textes qui se chevauchent** — `/offrir` — div.cadeau.cadeau--pose > div.cadeau-carte > div.cadeau-face.cadeau-recto:nth-of-type(1) > span.cadeau-m « M » — avec div.cadeau.cadeau--pose > div.cadeau-carte > div.cadeau-face.cadeau-recto:nth-of-type(1) > p.cadeau-montant:nth-of-type(3) « 70 € » _(768×1024 normal, 320×568 normal, 844×390 normal, 320×568 sansJs)_
- **textes qui se chevauchent** — `/offrir` — div.cadeau.cadeau--pose > div.cadeau-carte > div.cadeau-face.cadeau-recto:nth-of-type(1) > span.cadeau-m « M » — avec div.cadeau.cadeau--pose > div.cadeau-carte > div.cadeau-face.cadeau-recto:nth-of-type(1) > p.cadeau-pied:nth-of-type(4) « Une parenthèse pour vous · Valable un an » _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **textes qui se chevauchent** — `/offrir` — div.cadeau.cadeau--pose > div.cadeau-carte > div.cadeau-face.cadeau-recto:nth-of-type(1) > p.cadeau-titre:nth-of-type(1) « CARTE CADEAU » — avec div.cadeau.cadeau--pose > div.cadeau-carte > div.cadeau-face.cadeau-recto:nth-of-type(1) > p.cadeau-soin:nth-of-type(2) « Suédois-Californien, 1 h » _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **textes qui se chevauchent** — `/offrir` — div.cadeau.cadeau--pose > div.cadeau-carte > div.cadeau-face.cadeau-recto:nth-of-type(1) > p.cadeau-soin:nth-of-type(2) « Suédois-Californien, 1 h » — avec div.cadeau-carte > div.cadeau-face.cadeau-recto:nth-of-type(1) > p.cadeau-montant:nth-of-type(3) > span « 70 » _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **textes qui se chevauchent** — `/offrir` — div.cadeau.cadeau--pose > div.cadeau-carte > div.cadeau-face.cadeau-recto:nth-of-type(1) > p.cadeau-soin:nth-of-type(2) « Suédois-Californien, 1 h » — avec div.cadeau.cadeau--pose > div.cadeau-carte > div.cadeau-face.cadeau-recto:nth-of-type(1) > p.cadeau-montant:nth-of-type(3) « 70 € » _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **textes qui se chevauchent** — `/offrir` — div.cadeau-carte > div.cadeau-face.cadeau-recto:nth-of-type(1) > p.cadeau-montant:nth-of-type(3) > span « 70 » — avec div.cadeau.cadeau--pose > div.cadeau-carte > div.cadeau-face.cadeau-recto:nth-of-type(1) > p.cadeau-pied:nth-of-type(4) « Une parenthèse pour vous · Valable un an » _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **textes qui se chevauchent** — `/offrir` — div.cadeau.cadeau--pose > div.cadeau-carte > div.cadeau-face.cadeau-recto:nth-of-type(1) > p.cadeau-montant:nth-of-type(3) « 70 € » — avec div.cadeau.cadeau--pose > div.cadeau-carte > div.cadeau-face.cadeau-recto:nth-of-type(1) > p.cadeau-pied:nth-of-type(4) « Une parenthèse pour vous · Valable un an » _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **textes qui se chevauchent** — `/offrir` — div.conteneur.offrir-tete-grille > div.offrir-tete-visuel:nth-of-type(2) > figure.media.offrir-tete-media > figcaption.mention-ia « Illustration générée » — avec div.cadeau.cadeau--pose > div.cadeau-carte > div.cadeau-face.cadeau-recto:nth-of-type(1) > p.cadeau-titre:nth-of-type(1) « CARTE CADEAU » _(320×568 normal, 320×568 sansJs)_

### élément sans nom accessible (6)

- **élément sans nom accessible** — `/` — body#haut > header > div.entete-rangee > a.entete-logo _(390×844 normal, 390×844 sansJs, 1366×768 normal, 1366×768 sansJs)_
- **élément sans nom accessible** — `/404` — body#haut > header > div.entete-rangee > a.entete-logo _(390×844 normal, 390×844 sansJs, 1366×768 normal, 1366×768 sansJs)_
- **élément sans nom accessible** — `/contact` — body#haut > header > div.entete-rangee > a.entete-logo _(390×844 normal, 390×844 sansJs, 1366×768 normal, 1366×768 sansJs)_
- **élément sans nom accessible** — `/marie` — body#haut > header > div.entete-rangee > a.entete-logo _(390×844 normal, 390×844 sansJs, 1366×768 normal, 1366×768 sansJs)_
- **élément sans nom accessible** — `/offrir` — body#haut > header > div.entete-rangee > a.entete-logo _(390×844 normal, 390×844 sansJs, 1366×768 normal, 1366×768 sansJs)_
- **élément sans nom accessible** — `/soins` — body#haut > header > div.entete-rangee > a.entete-logo _(390×844 normal, 1366×768 normal, 390×844 sansJs, 1366×768 sansJs)_

### premier écran : titre hors de l’écran (1)

- **premier écran : titre hors de l’écran** — `/contact` — section#debut > div.conteneur.contact-tete-grille > div:nth-of-type(1) > h1.page-titre « Venir à Manawa. » — haut 403 px, bas 447 px, zone 73–397 px _(844×390 normal)_

### élément recouvert (1)

- **élément recouvert** — `/contact` — div.conteneur.horaires-grille > figure.plan-cadre > svg.plan > g.plan-cabinet — par div.conteneur.horaires-grille > figure.plan-cadre > svg.plan > path.plan-terre:nth-of-type(1) _(390×844 normal, 768×1024 normal, 1366×768 normal, 1920×1080 normal)_

### premier écran : bouton principal hors de l’écran (2)

- **premier écran : bouton principal hors de l’écran** — `/offrir` — div.conteneur.offrir-tete-grille > div.offrir-tete-texte:nth-of-type(1) > p.hero-actions.hero-anime:nth-of-type(3) > a.bouton « Commander sur SumUp (nouvel onglet) » _(320×568 normal, 844×390 normal, 320×568 sansJs)_
- **premier écran : bouton principal hors de l’écran** — `/soins` — section#debut > div.conteneur.soins-tete-texte > p.hero-actions.hero-anime:nth-of-type(3) > a.bouton « Réserver sur Planity (nouvel onglet) » _(320×568 normal, 320×568 sansJs)_

### contraste sur image (2)

- **contraste sur image** — `/soins` — section#debut > div.conteneur.soins-tete-texte > p.hero-actions.hero-anime:nth-of-type(3) > a.bouton « Réserver sur Planity (nouvel onglet) » — 3.16:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(390×844 normal)_
- **contraste sur image** — `/soins` — section#debut > div.conteneur.soins-tete-texte > p.hero-actions.hero-anime:nth-of-type(3) > a.bouton « Réserver sur Planity (nouvel onglet) » — 4.34:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(1366×768 normal)_

### accessibilité (axe) : color-contrast (1)

- **accessibilité (axe) : color-contrast** — `/soins` — p[data-audit-surimage="0"] — Elements must meet minimum color contrast ratio thresholds _(390×844 normal, 1366×768 normal)_

### débordement horizontal (1)

- **débordement horizontal** — `/contact` — page large de 360 px — largeurs : 320, 800, 840 px _(balayage 320–1920 normal)_

### clavier (3)

- **clavier** — `/` — a « Illustration générée
Suède et  » — le focus arrive sur un élément caché _(1366×768)_
- **clavier** — `/` — a « Illustration générée
HawaïLomi » — le focus arrive sur un élément caché _(1366×768)_
- **clavier** — `/` — a « Outils de boisMadérothérapiedè » — le focus arrive sur un élément caché _(1366×768)_

### positions non recalculées après un changement de hauteur (4)

- **positions non recalculées après un changement de hauteur** — `/soins` — Énergie — décalage de 7 px _(1366×768)_
- **positions non recalculées après un changement de hauteur** — `/soins` — Visage — décalage de 5 px _(1366×768)_
- **positions non recalculées après un changement de hauteur** — `/soins` — Silhouette — décalage de 8 px _(1366×768)_
- **positions non recalculées après un changement de hauteur** — `/soins` — Future maman — décalage de 4 px _(1366×768)_

## À regarder

### « à compléter » visible (1)

- **« à compléter » visible** — `contact.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### grille : rien ne relie les sections (point 4) (1)

- **grille : rien ne relie les sections (point 4)** — `/contact` — absent de cette page : élément du métier qui relie les sections et les pages (fil dans la marge, objet unique qui change, lumière qui passe, carte, folio, frise), marqué data-grille="fil"

### grille : objet d’ouverture hors du premier écran (1)

- **grille : objet d’ouverture hors du premier écran** — `/offrir` — 309 × 0 px visibles : l’intro et le voile s’ouvrent depuis le centre de l’écran à cette taille _(390×844)_

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
- **texte de contenu sous 13 px (ordinateur)** — `/` — div.cadeau:nth-of-type(1) > div.cadeau-carte > div.cadeau-face.cadeau-recto:nth-of-type(1) > p.cadeau-titre:nth-of-type(1) « CARTE CADEAU » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1920×1080 normal, 1366×768 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/404` — section#debut > figure.media.introuvable-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/contact` — section#debut > figure.media.contact-bandeau > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/marie` — section#domicile > div.conteneur.deux-colonnes > figure.media.domicile-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/offrir` — div.conteneur.offrir-tete-grille > div.offrir-tete-visuel:nth-of-type(2) > figure.media.offrir-tete-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/offrir` — div.cadeau.cadeau--pose > div.cadeau-carte > div.cadeau-face.cadeau-recto:nth-of-type(1) > p.cadeau-titre:nth-of-type(1) « CARTE CADEAU » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/offrir` — section#forfaits > div.conteneur.forfaits-grille > figure.media.forfaits-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/offrir` — div.conteneur.cures-grille > div:nth-of-type(1) > figure.media.cures-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/offrir` — section#evenements > div.conteneur.deux-colonnes > figure.media.evenement-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
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

### typographie française (2)

- **typographie française** — `/` — div.marie-texte:nth-of-type(2) > figure.citation > blockquote > p « « Par le massage, je vous apporte harmonie, évasio » — espace insécable manquante avant ou après « « » » _(1366×768 normal)_
- **typographie française** — `/marie` — div.conteneur.parcours-grille > div.parcours-texte:nth-of-type(1) > blockquote.grande-citation > p « « Nous avons de plus en plus besoin de prendre soi » — espace insécable manquante avant ou après « « » » _(1366×768 normal)_

### identifiant en double (1)

- **identifiant en double** — `/soins` — section#silhouette « Silhouette Des gestes vigoureux et des outils de b » — id="silhouette" _(390×844 normal, 1366×768 normal, 390×844 sansJs, 1366×768 sansJs)_

### ouverture : changement brusque (1)

- **ouverture : changement brusque** — `/soins` — à 2350 ms (différence 29 %) (films/ouverture-soins-1366.png) _(1366×768 film)_

### rechargement au milieu de la page (1)

- **rechargement au milieu de la page** — `/` — écran différent à la même position après rechargement (20.6 %), voir comparaisons/rechargement-*.png _(1366×768)_

### fluidité (1)

- **fluidité** — `/marie` — 3 % d'images de plus de 50 ms _(1366×768 défilement à la molette, processeur ralenti 4 fois)_

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

- Numéro de version des fichiers : ?v=1
- Journal v1 : 5 étape(s) notée(s), 76 min de travail pour 115 min de budget, 9 min d’attente de l’utilisateur.
- Journal : « aperçu de l'accueil en films » 17 min pour 5 prévues.
- Audit standard : étapes lourdes sur /, /contact, /marie, /offrir, /soins.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Ouverture / (1366×768) : 2651 ms depuis le premier octet
- Ouverture /contact (1366×768) : 2663 ms depuis le premier octet
- Ouverture /marie (1366×768) : 2706 ms depuis le premier octet
- film de l'ouverture /marie 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /offrir (1366×768) : 2624 ms depuis le premier octet
- Ouverture /soins (1366×768) : 2591 ms depuis le premier octet
- Ouverture / (390×844) : 2614 ms depuis le premier octet
- Ouverture /contact (390×844) : 2665 ms depuis le premier octet
- Ouverture /marie (390×844) : 2692 ms depuis le premier octet
- Ouverture /offrir (390×844) : 2657 ms depuis le premier octet
- Ouverture /soins (390×844) : 2652 ms depuis le premier octet
- bords de l’écran /marie 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Bords de l’écran : 368 images d’intro, 30 de voile et 130 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Tient dans l'écran / : aucune section épinglée ou plein écran.
- Tient dans l'écran /contact : aucune section épinglée ou plein écran.
- Tient dans l'écran /marie : aucune section épinglée ou plein écran.
- Tient dans l'écran /offrir : aucune section épinglée ou plein écran.
- Tient dans l'écran /soins : aucune section épinglée ou plein écran.
- Fluidité / 1366×768 (molette) : 0 % d'images lentes sur 370, tâche la plus longue 107 ms
- Fluidité /contact 1366×768 (molette) : 0 % d'images lentes sur 235, tâche la plus longue 0 ms
- Fluidité /offrir 1366×768 (molette) : 0 % d'images lentes sur 236, tâche la plus longue 0 ms
- Fluidité /soins 1366×768 (molette) : 0 % d'images lentes sur 507, tâche la plus longue 0 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1338, tâche la plus longue 0 ms
- Fluidité /contact 390×844 (doigt) : 0 % d'images lentes sur 1354, tâche la plus longue 0 ms
- Fluidité /marie 390×844 (doigt) : 0 % d'images lentes sur 1337, tâche la plus longue 0 ms
- Fluidité /offrir 390×844 (doigt) : 0 % d'images lentes sur 1332, tâche la plus longue 0 ms
- Fluidité /soins 390×844 (doigt) : 0 % d'images lentes sur 1336, tâche la plus longue 0 ms
- Vitesse / : 0.74 s de calcul au chargement (téléphone ralenti).
- Vitesse /contact : 0.51 s de calcul au chargement (téléphone ralenti).
- Vitesse /marie : 0.41 s de calcul au chargement (téléphone ralenti).
- Vitesse /offrir : 0.48 s de calcul au chargement (téléphone ralenti).
- Vitesse /soins : 0.60 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --seulement=fichiers,mesures,parcours
```
