# Manawa Massage Pro · maquette v1

Maquette de démonstration du futur site de Manawa Massage Pro (Marie, massages du monde, Le Relecq-Kerhuon).
Adresse prévue : https://manawa-massage-pro-maquette.vercel.app

Site statique (HTML, CSS, JavaScript), sans étape de construction. Les pages sont générées depuis `donnees/` par `node outils/generer.mjs` : ne jamais modifier un `.html` à la main.

## Pages

| Page | Ouverture | Sections |
|---|---|---|
| Accueil `/` | « Offrez-vous une parenthèse. », photo des mains de Marie entre deux parenthèses d'or | envies, la carte en rangée, Marie, cabinet ou domicile, carte cadeau, note et engagements, appel final |
| Les soins `/soins` | plein cadre, filtre d'envies dans le premier écran | massages du monde, visage, silhouette, cures et forfaits, bon à savoir |
| Marie & le cabinet `/marie` | sombre, Marie au travail à bord perdu | parcours, cabinet, domicile, déontologie |
| Offrir `/offrir` | la carte cadeau posée sur l'enveloppe | forfaits, cures, événements |
| Contact `/contact` | grand titre, statut « ouvert maintenant », bandeau de l'estuaire | horaires et plan, formulaire simulé |
| 404 | galet sur une serviette | |

Pages du site actuel non reprises en v1 (disponibles en v2) : une page par soin (les 14 fiches sont réunies dans `/soins`, chacune avec son lien `/soins#kobido`…), page Événements à part, page Déontologie à part (reprise dans `/marie#deontologie`), CGV.

## À fournir par le client (à compléter)

- **Mentions légales** : éditrice (nom, statut micro-entreprise, SIRET 848 217 220 00021 à confirmer), hébergeur Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis (adresse à vérifier à la mise en ligne).
- **Politique de confidentialité** : usage des données du formulaire de contact.
- **Assurance** responsabilité civile professionnelle : à indiquer si le client le souhaite.
- **Statut FFMBE** : le logo de la fédération est repris du site actuel ; préciser la nature de l'affiliation.
- **Crédits** : photos de Marie et du cabinet par Céline Cousin (crédit affiché dans le pied de page) ; 18 illustrations générées par IA (Grok), marquées « Illustration générée » : garder cette mention sur le site final.
- **Tarifs à confirmer** (écarts entre le site actuel et Planity) :
  - forfait 5 h : 320 € sur le site, 325 € (valable 6 mois) sur Planity, la maquette affiche 325 € ;
  - soin jeunesse : 1 h 30 à 105 € sur le site, « Soin jeunesse d'Okinawa » 2 h à 110 € sur Planity, la maquette affiche 1 h 30 · 110 € ;
  - Kobido « Perfect Age », L'art du Fascia, IntraGlow Lift, Shape Drain Expert, madérothérapie par zone, cures 10 séances : prix repris de Planity ;
  - durées de L'art du Fascia, IntraGlow Lift, Madérothérapie du visage, Shape Drain Expert : non connues, la maquette dit « durée et déroulé précisés à la réservation ».
- **Frais de déplacement** : au-delà de 10 km (page contact) ou de 5 km (CGV), montant non précisé. La maquette dit « au-delà de quelques kilomètres, des frais s'ajoutent, indiqués à la réservation ».
- **Soins cités sans description** sur le site actuel : Polynésien, Sportif, Drainage brésilien, Drain Sculpt Expert. Ils ne figurent pas dans la maquette ; à décrire si Marie les propose toujours.
- **Avis** : seule la note Planity (5,0 sur 5, 38 avis) est affichée ; aucun texte d'avis n'est repris. Des avis réels (avec l'accord des clientes) peuvent être ajoutés.
- **Horaires** : ceux de l'agenda Planity (lundi, mercredi, jeudi, vendredi). Le statut « ouvert maintenant » est calculé à l'heure de Brest et tient compte des jours fériés ; à confirmer, ainsi que les congés.

Incohérences relevées sur le site actuel : « rue Dixmude » / « rue de Dixmude », « Le Relecq-heruon » dans le pied de page, « Manawa Massage Pro » / « Manawa Massages Pro » sur Planity, les CGV citent www.manawa-massage-pro.com.

Mentions reformulées : le site actuel promet des effets de santé (« élimine les toxines », « soutient les défenses immunitaires », « lissage des rides », « lifting anti-âge »…). La déontologie de Marie précise que les soins n'ont aucun caractère thérapeutique : la maquette décrit les gestes et les sensations, sans promesse de résultat.

## À la mise en ligne définitive

- Retirer : `noindex` (balise robots dans `source/gabarits/commun.mjs`, en-tête X-Robots-Tag dans `vercel.json`), le formulaire simulé (le brancher sur un vrai envoi), les « à compléter » du pied de page.
- Garder : la mention « Illustration générée » sur les images créées par IA.
- Liens réels déjà en place : réservation Planity, cartes cadeaux SumUp, Instagram, Facebook.

## Travailler sur la maquette

```
node outils/generer.mjs          pages
node _audit/audit.mjs            audit standard
```
Textes : `donnees/textes/fr.json` · soins, tarifs, cures, cartes cadeaux : `donnees/soins.json` · horaires : `donnees/horaires.json` · images : `plan-images.json` puis le pipeline de la bibliothèque (`produire.mjs`).
