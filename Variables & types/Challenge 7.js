const PromptSync = require("prompt-sync")();

let  a = Number( PromptSync("entre le nombre A. "));
let  b = Number( PromptSync("entre le nombre B. "));
let  c = Number( PromptSync("entre le nombre C. "));


let moyyen = (a + b + c) / 3;


console.log(`le moyyen de numbers ${a}, ${b} et ${c} egal ${moyyen}`)
