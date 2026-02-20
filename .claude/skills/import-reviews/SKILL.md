---
name: import-reviews
description: Importe à partir du slug et d'une liste de reviews toutes les reviews du prospect
---

Importe moi toutes les reviews que je colle dans le prompt

## Entrée utilisateur

$ARGUMENTS

L'utilisateur fournit les infos au format libre, par exemple :
- **slug** : identifiant URL (ex: artisanduval)
- reviews: grosse listes de toutes les reviews prises depuis sa fiche google

## Instructions

1. **Tu dois insérer toutes les reviews du client** sur mongodb grâce à la fonction updateReviewsBySlug en utilisant le slug du client et les reviews reçu en paramètre. 
