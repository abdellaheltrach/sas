const PromptSync = require("prompt-sync")();
let n = Number(PromptSync("Entrez un nombre: "));

let string = "";
const key= "*"

for (let i = n; i >= 1; i--) {
    
    for (let j = i; j <= n; j++) {
        string = string + key
        
    }
     string = string + "\n"
}
console.log(string);