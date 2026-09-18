const PromptSync = require("prompt-sync")();


let a = Number(PromptSync("Entrez un nombre "));

for (let i = 1; i <= 10; i++) {
    console.log(`${a} * ${i} = ${i * a}.`);

}