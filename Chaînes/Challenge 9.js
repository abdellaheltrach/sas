const PromptSync = require("prompt-sync")();

let strr = PromptSync("enter une chaîne de caractères! ");

let filterString = "";

for (let i = 0; i < strr.length; i++) {
    if (strr[i] !== " ") {
        filterString = filterString + strr[i];
    }

}

console.log(`la chaine avant supprime tous les espace "${strr}" est après ${filterString}`);