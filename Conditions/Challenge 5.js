const PromptSync = require("prompt-sync")();

let année = Number(PromptSync("entre comme bien d'année. "));


let choix = Number(PromptSync(
    `[1] calculer les Mois.
[2] calculer les jours.
[3] calculer les Heures.
[4] calculer les Minutes.
[5] calculer les Secondes.

Quelles votre shoix? `));

let result = null;
switch (choix) {
    case 1:
        result = année * 12;
        console.log(`le nomber d'année ${annes} est egal ${result} mois.`)

        break;
    case 2:
        result = année * 12 * 30;
        console.log(`le nomber d'année ${annes} est egal ${result} jours.`)
        break;
    case 3:
        result = année * 12 * 30 * 24;
        console.log(`le nomber d'année ${annes} est egal ${result} Heures.`)
        break;
    case 4:
        result = année * 12 * 30 * 24 * 60;
        console.log(`le nomber d'année ${annes} est egal ${result} Minutes.`)
        break;
    case 5:
        result = année * 12 * 30 * 24 * 60 * 60;
        console.log(`le nomber d'année ${annes} est egal ${result} Secondes.`)
        break;

    default:
        break;
}