const PromptSync = require("prompt-sync")();


const numberElement = Number(PromptSync("Entrez les nombres des elements "));


const arr = [];
let somme = 0;


for (let i = 0; i < numberElement; i++) {
    
    arr[i] =  Number(PromptSync(`entre le number ${i+1} de tableaux `));
}


for (let i = 0; i < numberElement; i++) {

    somme += arr[i];   
}
console.log(`la somme de tableaux egal ${somme} .`);
