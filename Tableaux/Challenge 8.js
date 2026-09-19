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

const arr2=[];
copyArr(arr,arr2);

console.log(`neveax tableaux ${arr2}`)
