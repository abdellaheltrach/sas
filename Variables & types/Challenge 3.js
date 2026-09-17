const PromptSync = require("prompt-sync")();

let distanceKm = PromptSync("Quelles la distance en km? ");
let Yards = Number(distanceKm) * 1093.61;

console.log(`la distance ${distanceKm} km egal ${Yards} yards! `)
