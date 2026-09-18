const PromptSync = require("prompt-sync")();

let base = Number(PromptSync("Entrez un nombre de base "));
let exposant = Number(PromptSync("Entrez un nombre de exposant "));


let result = 1;

for (let i = 1; i <= exposant; i++) {

    result = result * base;
    
}
console.log(`${base} ^ ${exposant} = ${result}.`);