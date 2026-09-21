const PromptSync = require("prompt-sync")();

do {
    let choix = 0;
    let loop = true;

    console.log("[1] Ajouter un apprenant.")
    console.log("[2] Afficher tous les apprenants enregistres.")
    console.log("[3] Rechercher un apprenant par son prenom.")
    console.log("[4] Mettre a jour la note d'un apprenant existant.")
    console.log("[5] Supprimer un apprenant par son prenom.")
    console.log("[6] Quitter le programme.")
    choix = PromptSync("Quelles votre choix?. ")



    switch (choix) {
        case 1:
            console.log("[1] choix .")

            break;
        case 2:
            console.log("[2] choix .")

            break;
        case 3:
            console.log("[3] choix .")

            break;
        case 4:
            console.log("[4] choix .")

            break;
        case 5:
            console.log("[5] choix .")

            break;
        case 6:
            loop = false;
            break;
        default:

            break;
    }


} while (loop)