const PromptSync = require("prompt-sync")();


let a = Number(PromptSync("Entrez un nombre n "));

let result=0;
for (let i = 1; i <= a; i++) {
    result = result + i;
}
console.log(` la somme de n est ${result}.`);