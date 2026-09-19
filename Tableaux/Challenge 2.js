const PromptSync = require("prompt-sync")();


const numberElement = Number(PromptSync("Entrez les nombres des elements "));
const arr = [];


for (let i = 0; i < numberElement; i++) {
    
    arr[i] =  Number(PromptSync(`entre le number ${i+1} de tableaux `));
}

console.log(arr)