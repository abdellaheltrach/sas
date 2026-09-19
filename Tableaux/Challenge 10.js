const PromptSync = require("prompt-sync")();


const numberElement = Number(PromptSync("Entrez les nombres des elements "));
const arr = [];


for (let i = 0; i < numberElement; i++) {

    arr[i] = PromptSync(`entre le element ${i + 1} de tableaux `);
}

const recherchElement = PromptSync("Entrez la recherch Element ");


function isElementInArr(arr, recherchElement) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === recherchElement)
            return true;
    }
    return false;
}



let isFound = isElementInArr(arr, recherchElement);

if (isFound === true) {
    console.log(`la recherch Element ${recherchElement} est presont dans le tableaux`)
}
else {
    console.log(`la recherch Element ${recherchElement} est absent dans le tableaux`)

}
