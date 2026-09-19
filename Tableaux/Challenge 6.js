const PromptSync = require("prompt-sync")();


const numberElement = Number(PromptSync("Entrez les nombres des elements "));
const arr = [];


for (let i = 0; i < numberElement; i++) {
    
    arr[i] =  Number(PromptSync(`entre le number ${i+1} de tableaux `));
}

const facteur  = Number(PromptSync("Entrez les facteur de multiplication. "));

arr2 = arr.map((n)=> n*2)

console.log(arr2)