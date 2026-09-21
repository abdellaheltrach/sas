# Mini-projet : Gestion des apprenants

## Ce que fait l'exemple fourni (exemple-menu.js)

Le tableau `apprenants` commence **vide**. Le programme propose un menu qui
permet de :

- **1. Ajouter** un apprenant (prenom + note), qui devient un objet ajoute
  au tableau
- **2. Afficher** tous les apprenants enregistres
- **3. Rechercher** un apprenant par son prenom
- **4. Mettre a jour** la note d'un apprenant existant
- **5. Supprimer** un apprenant par son prenom
- **0. Quitter** le programme

Lisez le code en entier, ligne par ligne, avant de commencer l'extension.
Chaque fonction est commentee pour expliquer ce qu'elle fait et pourquoi.

## Comment lancer le programme

```bash
node exemple-menu.js
```

## Ce que vous devez ajouter (dans un nouveau fichier mon-projet.js)

Copiez d'abord le code de l'exemple dans un nouveau fichier, puis ajoutez :

1. **Empecher les doublons** : lors de l'ajout, verifiez si un apprenant
   avec le meme prenom existe deja. Si oui, affichez un message et
   n'ajoutez pas le nouvel apprenant.

2. **Calculer la moyenne generale** : ajoutez une option "6. Afficher la
   moyenne de la classe" qui calcule et affiche la moyenne de toutes les
   notes du tableau.

3. **Trouver le meilleur et le moins bon** : ajoutez une option "7.
   Afficher le meilleur et le moins bon apprenant" (celui avec la note la
   plus haute, et celui avec la note la plus basse).

4. **Validation des notes** : lors de l'ajout ou de la mise a jour d'une
   note, verifiez qu'elle est bien comprise entre 0 et 20. Si ce n'est pas
   le cas, affichez un message d'erreur et redemandez la valeur.

5. **Bonus difficile** : ajoutez une propriete `skills` (tableau de
   chaines) a chaque apprenant lors de l'ajout, et une option pour afficher
   les apprenants ayant une compétence precise (par exemple tous ceux qui
   connaissent "JavaScript").

## Contraintes

- Utilisez uniquement ce que vous avez appris : variables, conditions,
  boucles, chaines de caracteres, tableaux, objets.
- Le menu doit rester dans une boucle `while (true)` avec `break` pour
  quitter, exactement comme dans l'exemple.
- Testez chaque nouvelle option plusieurs fois avant de passer a la
  suivante (ajoutez plusieurs apprenants, essayez de chercher un
  apprenant qui n'existe pas, etc.)
