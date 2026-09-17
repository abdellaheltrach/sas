const PromptSync = require("prompt-sync")();

let a = Number(PromptSync("entre un nombre. "));

if (a > 0) {
    console.log(`le numbers ${a} est positif.`)

} else if (a < 0) {
    console.log(`le numbers ${a} est negatif.`)

} else {
    console.log(`le numbers ${a} est nul.`)

}
