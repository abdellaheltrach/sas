const PromptSync = require("prompt-sync")();

let a = parseInt(PromptSync("entre le nombre A. "));
let b = parseInt(PromptSync("entre le nombre B. "));
let c = parseInt(PromptSync("entre le nombre C. "));

let delta = b * b - 4 * a * c;
if (delta > 0) {
    console.log(`delta egal ${delta} donc deux posible solution.`);
    let sol1 = (-b + Math.sqrt(delta)) / (2 * a)
    let sol2 = (-b - Math.sqrt(delta)) / (2 * a)
    console.log(`solution 1: ${sol1}.`);
    console.log(`solution 2: ${sol2}.`);

} else if (delta === 0) {
    console.log(`delta egal ${delta} donc un posible solution.`);
    let sol1 = (-b) / (2 * a)
    console.log(`solution : ${sol1}.`);
} else {
    console.log(`Delta est égal à ${delta} (< 0), donc il n'y a pas de solution réelle.`);
}



