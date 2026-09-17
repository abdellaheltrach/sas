const PromptSync = require("prompt-sync")();

let caractère = PromptSync("entre une caractère: ").toLowerCase();


switch (letter) {
    case a:
        console.log(`Le caractère ${caractère} est une voyelle.`)

        break;
    case e:
        console.log(`Le caractère ${caractère} est une voyelle.`)

        break;
    case i:
        console.log(`Le caractère ${caractère} est une voyelle.`)

        break;
    case o:
        console.log(`Le caractère ${caractère} est une voyelle.`)

        break;
    case u:
        console.log(`Le caractère ${caractère} est une voyelle.`)

        break;
    default:
        console.log(`Le caractère ${caractère} est une consonne (ou un autre caractère)..`)

        break;
}