const prompt = require("prompt-sync")();

let tempEnCelsius = prompt('Quel la temp on Celsius?');
let Kelvin = tempEnCelsius + 273.15;

console.log(`${tempEnCelsius} on Celsius egal ${Kelvin} on Kelvin!`);