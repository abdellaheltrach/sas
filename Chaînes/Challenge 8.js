const PromptSync = require("prompt-sync")();

let strr = PromptSync("enter une chaîne de caractères! ");



console.log(`la chaine "${strr}" en Minuscules est ${strr.toLowerCase()}`);