const PromptSync = require("prompt-sync")();

let a = Number(PromptSync("entre le nombre A. "));
let b = Number(PromptSync("entre le nombre B. "));
let c = Number(PromptSync("entre le nombre C. "));
let d = Number(PromptSync("entre le nombre D. "));



let sommeUn = a + b;
let sommeDeux = c + d;

if (sommeUn === sommeDeux) {
    console.log(` la somme des deux valeurs entières sont identiques!  le triple de leur somme et ${sommeDeux * 3}`)

} else {
    console.log(` la somme des deux valeurs entières sont pas identiques!`)

}

