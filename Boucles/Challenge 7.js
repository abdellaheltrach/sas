
const PromptSync = require("prompt-sync")();


let number = Number(PromptSync("Entrez un nombre "));

let inverNumber = 0;

while (number > 0) {
    let premierNum = number % 10;
    number = parseInt(number / 10)
    inverNumber = inverNumber * 10 + premierNum

}
console.log(inverNumber)