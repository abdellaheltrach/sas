const PromptSync = require("prompt-sync")();


let vitess =Number( PromptSync("donne la vitess on km/h? "));

let vitessEnms = vitess * 0.27778

console.log(`la vitess ${vitess} km/h egal ${vitessEnms} m/s.`)