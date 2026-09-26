`Consigne : voici un tableau de commandes clients. Calculez le chiffre d'affaires total par client, puis affichez le client ayant généré le plus de chiffre d'affaires.`

const commandes = [
    { client: "Ahmed", montant: 250 },
    { client: "Sara", montant: 400 },
    { client: "Ahmed", montant: 180 },
    { client: "Karim", montant: 320 },
    { client: "Sara", montant: 150 },
    { client: "Ahmed", montant: 90 },
];

const obj = []


for (const element of commandes) {

    if (obj[element.client]) {
        obj[element.client]+=element.montant
    } else {
        obj[element.client] = element.montant
    }

}

console.log(obj);


