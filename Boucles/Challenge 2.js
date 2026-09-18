const PromptSync = require("prompt-sync")();


let n = Number(PromptSync("Entrez un nombre "));

let result = 1;

for (let i = 1; i <= n; i++) {

    result = result * i;   

    
}
console.log(`${n}! = ${result} .`);