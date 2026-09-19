const PromptSync = require("prompt-sync")();


const numberElement = Number(PromptSync("Entrez les nombres des elements "));
const arr = [];
let min;

for (let i = 0; i < numberElement; i++) {

    arr[i] = Number(PromptSync(`entre le number ${i + 1} de tableaux `));
    if (i === 0) {
        min = arr[0]
    }
    if (arr[i] < min) {
        min = arr[i];
    }
}

console.log(` le plus petit élément dans un tableau est ${min}`)