const PromptSync = require("prompt-sync")();

let chaine1 = PromptSync("enter la premiers chaîne de caractères! ");


let chaine2 = PromptSync("enter la deuxieme chaîne de caractères! ");


if (chaine1 === chaine2) {
    console.log("les chaînes sont égales ")
} else {
    console.log("les chaînes sont differentes ")
}