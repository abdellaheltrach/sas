
`Consigne : à partir du tableau de chaînes ci-dessous, regroupez les mots par leur première lettre (un objet où chaque clé est une lettre, et chaque valeur est un tableau des mots qui commencent par cette lettre).`

const mots = ["chat", "chien", "banane", "bateau", "avion", "arbre", "chocolat"];
const obj = []

for (let i = 0; i < mots.length; i++) {

    let firstChar = mots[i][0];
    
    if (obj[firstChar]) {
        obj[firstChar].push(mots[i])
    } else {
         obj[firstChar] = [mots[i]]
    }

}

console.log(obj);

