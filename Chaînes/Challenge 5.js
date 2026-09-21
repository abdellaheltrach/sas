const PromptSync = require("prompt-sync")();

let strr = PromptSync("enter une chaîne de caractères! ");
let inverStr = "";


for(let i = strr.length-1; i > 0 ; i--)
{
    inverStr = inverStr + strr[i]; 

}
console.log(inverStr)