const PromptSync = require("prompt-sync")();

let strr = PromptSync("enter une chaîne de caractères! ");

for(let i =0; i<strr.length ; i ++)
{
    console.log(strr[i]);

}