const PromptSync = require("prompt-sync")();


let a = Number(PromptSync("Entrez un nombre n "));

let count = 1;
let i = 1;
while (count <= a) {

    if (i % 2 !== 0) {
        console.log(`${i}`);
        count++;
    }
    i++
}

