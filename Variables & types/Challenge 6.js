const PromptSync = require("prompt-sync")();

let A = Number( PromptSync("entre le nombre A. "));
let B = Number( PromptSync("entre le nombre B. "));


console.log(`a + b = ${A+B}`)
console.log(`a - b = ${A-B}`)
console.log(`a * b = ${A*B}`)
console.log(`a / b = ${A/B}`)