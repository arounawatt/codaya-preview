---
name: generate-prospect
description: Génère un composant prospect TSX adapté au métier d'une entreprise
---

Génère un nouveau composant prospect TSX pour une entreprise.

## Entrée utilisateur

$ARGUMENTS

L'utilisateur fournit les infos au format libre, par exemple :
- **slug** : identifiant URL (ex: artisanduval)
- **companyName** : nom complet affiché (ex: Artisan Duval Couvreur)
- **metier** : secteur d'activité (ex: couvreur, plombier, électricien, serrurier, construction, impression 3D…)

## Instructions

1. **Étudie tous les fichiers existants** dans `components/prospects/` pour comprendre la structure commune, les patterns récurrents, et comment chaque prospect adapte couleurs/contenu/ton à son métier. Inspire-toi de tous ces exemples mais ne copie aucun d'entre eux à l'identique.

2. **Crée le fichier** `components/prospects/{slug}.tsx` avec :
   - Un **univers visuel unique** adapté au métier : palette de couleurs cohérente (gradient hero, boutons, accents, shadows, hover states), choisie pour coller au secteur (ex: bleu pour plomberie, orange pour BTP, vert pour énergie, rouge pour urgences…)
   - Des **textes hero** (badge, titre, sous-titre) percutants et spécifiques au métier
   - **6 services** pertinents au métier avec des icônes adaptées
   - **4 points forts** "Pourquoi nous choisir" contextualisés
   - Un **CTA** et **footer** adaptés au nom et métier
   - Le script widget en bas : `<script src="https://trustly.codaya.fr/api/widget/{slug}.js" defer></script>`

3. **Garde la même interface Props** que les autres prospects :
   ```tsx
   interface {PascalName}Props {
     testimonials?: TestimonialItem[]
     companyName?: string
     totalReviews?: number
     score?: number
   }
   ```

4. **Garde la même structure technique** : styles inline React.CSSProperties, mêmes sections (hero → services → why → testimonials → CTA → footer), animations CSS identiques, responsive breakpoints identiques. Seuls le contenu, les couleurs et le ton changent.

5. **Enregistre le prospect dans le routeur** `app/apps/[subdomain]/page.tsx` :
   - Ajoute l'import du nouveau composant en haut du fichier
   - Ajoute une entrée `'{slug}': NomComposant` dans l'objet `clients`
