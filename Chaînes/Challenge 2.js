const PromptSync = require("prompt-sync")();

let strr = PromptSync("enter une chaîne de caractères! ");

let count = 0;
for (const char of strr) {
    count++;
}

console.log(count)
