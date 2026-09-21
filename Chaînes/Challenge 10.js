const PromptSync = require("prompt-sync")();

let strr = PromptSync("enter une chaîne de caractères! ");
let sousStrr = PromptSync("enter une sous chaîne de caractères! ");

let trouver = false;

for (let i = 0; i <= strr.length - sousStrr.length; i++) {
    let match = true;
    for (let j = 0; j < sousStrr.length; j++) {

        if (strr[i + j] !== sousStrr[j]) {
            match = false;
            break;

        }

    }
    if (match) {
        trouver = true;
        
    }

}
if (trouver) {
    console.log("le sous chaine est trouver")
} else {
    console.log("le sous chaine non trouver")
}