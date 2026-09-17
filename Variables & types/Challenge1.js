const prompt = require('prompt-sync')();

let nom =  prompt('Quel votre nom! ');
let prénom =  prompt('Quel votre prénom! ');
let âge =  prompt('Quel votre âge! ');
let sexe  =  prompt('Quel votre sexe! [M/F] ');
let email  =  prompt('Quel votre email! ');
console.log(
`   votre nom est ${nom}.
    votre prénom est ${prénom}.
    votre âge est ${âge}.
    votre sexe est ${sexe}.
    votre email  est ${email}.
    `

);
