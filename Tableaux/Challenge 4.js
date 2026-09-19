const PromptSync = require("prompt-sync")();


const numberElement = Number(PromptSync("Entrez les nombres des elements "));
const arr = [];
let Maximum = 0;

for (let i = 0; i < numberElement; i++) {
    
    arr[i] =  Number(PromptSync(`entre le number ${i+1} de tableaux `));
    if (arr[i] > Maximum){
        Maximum = arr[i];
    }
}

console.log(` le plus grand élément dans un tableau est ${Maximum}`)