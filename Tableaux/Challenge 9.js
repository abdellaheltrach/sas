const PromptSync = require("prompt-sync")();


const numberElement = Number(PromptSync("Entrez les nombres des elements "));
const arr = [];


for (let i = 0; i < numberElement; i++) {

    arr[i] = Number(PromptSync(`entre le number ${i + 1} de tableaux `));
}

function copyArr(arroriginal, copyArr) {
    for (let i = 0; i < arroriginal.length; i++) {
        copyArr[i] = arroriginal[i];
        
    }
    return copyArr;
}

function inversion(arr) {
    let temp = [];
    for (let i = 0; i < arr.length; i++) {  
        temp[i]= arr[arr.length - 1 - i]
        
    }
    return copyArr( temp, arr);
}
console.log(`Tableau ${arr}`)

inversion(arr);

console.log(`Inversion de Tableau ${arr}`)
