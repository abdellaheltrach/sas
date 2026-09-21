const PromptSync = require("prompt-sync")();

let strr = PromptSync("enter une chaîne de caractères! ");
let char = PromptSync("entre un charactere pour la compte! ");


let count = 0;
for(let i =0; i<strr.length ; i ++)
{
    if (strr[i]===char){
        count++;
    }

}


console.log(`le char ${char} compte dans la chaine egal ${count}`);