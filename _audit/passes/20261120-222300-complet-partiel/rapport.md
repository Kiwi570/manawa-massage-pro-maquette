# Rapport d’audit

Projet : `manawa-massage-pro-maquette` · 20/11/2026 23:28:54 · 6 min · 6 page(s) · audit complet (étapes : mesures, ecran)

## Résumé

- Statut : **2 échec(s)**
- Passe : `20261120-222300-complet-partiel` · version ?v=1
- Échecs : **2**
- À regarder : **35**
- Non lancé : **0**
- Contrôles passés : mesures (234), balayage (5)

## Passes de cette version (?v=1)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261120-203050-standard | standard | toutes | toutes | 78 | 42 | 1 | échecs |
| 20261120-205347-rapide-cible | rapide | /,/soins,/marie,/offrir,/contact | toutes | 21 | 36 | 1 | échecs |
| 20261120-211307-standard | standard | toutes | toutes | 7 | 36 | 2 | échecs |
| 20261120-213623-standard | standard | toutes | toutes | 3 | 37 | 1 | échecs |
| 20261120-215643-standard | standard | toutes | toutes | 1 | 36 | 1 | échecs |
| 20261120-221823-standard-partiel | standard | toutes | fichiers, parcours | 0 | 2 | 0 | complet |
| **20261120-222300-complet-partiel** (celle-ci) | complet | toutes | mesures, ecran | 2 | 35 | 0 | échecs |

## Échecs

### premier écran : information clé hors de l’écran (2)

- **premier écran : information clé hors de l’écran** — `/marie` — section#debut > div.marie-tete-texte:nth-of-type(2) > p.hero-info.hero-anime:nth-of-type(4) « Au cabinet ou à domicile · 5,0 sur 5 sur Planity » _(1000×560 sansJs)_
- **premier écran : information clé hors de l’écran** — `/soins` — section#debut > div.conteneur.soins-tete-texte > p.hero-actions.hero-anime:nth-of-type(3) > span.hero-info « De 20 € à 130 € · au cabinet ou à domicile » _(1000×560 sansJs)_

## À regarder

### section sans visuel (1)

- **section sans visuel** — `/` — section#confiance « EN CONFIANCE La note de celles et ceux qui sont ve » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 375×667 normal, 320×568 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_

### texte de contenu sous 13 px (ordinateur) (34)

- **texte de contenu sous 13 px (ordinateur)** — `/` — div.conteneur.envies-grille > div.envies-images:nth-of-type(2) > figure.media.envies-image:nth-of-type(1) > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — article.phare:nth-of-type(1) > a.phare-lien > figure.media.phare-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — article.phare:nth-of-type(2) > a.phare-lien > figure.media.phare-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — article.phare:nth-of-type(3) > a.phare-lien > figure.media.phare-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — article.phare:nth-of-type(4) > a.phare-lien > figure.media.phare-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — article.phare:nth-of-type(5) > a.phare-lien > figure.media.phare-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — div.lieux-grille > article.lieu.lieu--decale:nth-of-type(2) > figure.media.lieu-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — div.cadeau:nth-of-type(1) > div.cadeau-carte > div.cadeau-face.cadeau-recto:nth-of-type(1) > p.cadeau-titre:nth-of-type(1) « CARTE CADEAU » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1024×768 sansJs, 1024×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — div.cadeau:nth-of-type(1) > div.cadeau-carte > div.cadeau-face.cadeau-recto:nth-of-type(1) > p.cadeau-pied:nth-of-type(4) « Valable un an » — 12.3 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1024×768 sansJs, 1024×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/404` — section#debut > figure.media.introuvable-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/contact` — section#debut > figure.media.contact-bandeau > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/marie` — section#domicile > div.conteneur.deux-colonnes > figure.media.domicile-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1920×1080 normal, 1728×1000 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/offrir` — div.conteneur.offrir-tete-grille > div.offrir-tete-visuel:nth-of-type(2) > figure.media.offrir-tete-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/offrir` — div.cadeau.cadeau--pose > div.cadeau-carte > div.cadeau-face.cadeau-recto:nth-of-type(1) > p.cadeau-titre:nth-of-type(1) « CARTE CADEAU » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/offrir` — div.cadeau.cadeau--pose > div.cadeau-carte > div.cadeau-face.cadeau-recto:nth-of-type(1) > p.cadeau-pied:nth-of-type(4) « Valable un an » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/offrir` — div.cadeau.cadeau--pose > div.cadeau-carte > div.cadeau-face.cadeau-verso:nth-of-type(2) > p.cadeau-titre:nth-of-type(1) « VALABLE UN AN » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1024×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/offrir` — div.cadeau.cadeau--pose > div.cadeau-carte > div.cadeau-face.cadeau-verso:nth-of-type(2) > p:nth-of-type(2) « À réserver au cabinet du Relecq-Kerhuon ou à domic » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1024×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/offrir` — div.cadeau.cadeau--pose > div.cadeau-carte > div.cadeau-face.cadeau-verso:nth-of-type(2) > p.cadeau-papier:nth-of-type(3) « Bons cadeaux papier de 30 € à 900 € disponibles au » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1024×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/offrir` — section#forfaits > div.conteneur.forfaits-grille > figure.media.forfaits-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/offrir` — div.conteneur.cures-grille > div:nth-of-type(1) > figure.media.cures-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/offrir` — section#evenements > div.conteneur.deux-colonnes > figure.media.evenement-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/soins` — section#debut > figure.media.soins-tete-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/soins` — div#suedois-californien > article.soin > figure.media.soin-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/soins` — div#lomi-lomi > article.soin > figure.media.soin-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/soins` — div#pierres-chaudes > article.soin > figure.media.soin-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- … et 9 autres (rapport.json)

## Non lancé

Tout a été lancé.


## Repères

- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Tient dans l'écran / : aucune section épinglée ou plein écran.
- Tient dans l'écran /contact : aucune section épinglée ou plein écran.
- Tient dans l'écran /marie : aucune section épinglée ou plein écran.
- Tient dans l'écran /offrir : aucune section épinglée ou plein écran.
- Tient dans l'écran /soins : aucune section épinglée ou plein écran.

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --complet --pages=/,/marie,/soins --seulement=fichiers,mesures
```
