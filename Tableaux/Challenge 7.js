const PromptSync = require("prompt-sync")();


const numberElement = Number(PromptSync("Entrez les nombres des elements "));
const arr = [];


for (let i = 0; i < numberElement; i++) {

    arr[i] = Number(PromptSync(`entre le number ${i + 1} de tableaux `));
}

function bubleSort(arr) {
    for (let j = 0; j <  arr.length; j++) {

        for (let i = 0; i < arr.length; i++) {

            if(arr[i + 1]=== undefined)
            {
                break;
            }

            if (arr[i] < arr[i + 1]) {
                let temp = arr[i];
                arr[i]  =  arr[i + 1]
                arr[i+1]= temp;
            }
        }
        
    }

    return arr;
}


console.log(bubleSort(arr))