const PromptSync = require("prompt-sync")();


let tempEnCiel = Number ( PromptSync("Quel la temp on Celsius? "));


if (tempEnCiel<0)
{
    console.log("l'eau est solide!")
}
else if (0 <=tempEnCiel && tempEnCiel<100)
{
    console.log("l'etat de l'eau est lequide!")
}

else if (tempEnCiel>=100)
{
    console.log("l'etat de l'eau est gas!")
}