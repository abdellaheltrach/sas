const PromptSync = require("prompt-sync")();
const candidats = require("./data");


function AjouterUnCandidate() {
    let candidateCin = PromptSync(`Enter Candidate CIN : `).toUpperCase();
    //LOOP CIN IN CANDIDATE
    if (candidats.length !== 0) {

        for (let i = 0; i < candidats.length; i++) {
            if (candidats[i].cin === candidateCin) {
                return false;
            }
        }

    }


    let CandidatNom = PromptSync(`Enter votre nom : `);
    let CandidatPrenom = PromptSync(`Enter votre prenom : `);
    let CandidatPartiPolitique = PromptSync(`Enter votre partiPolitique : `);
    let CandidatAge = parseInt(PromptSync(`Enter votre age : `));

    if (CandidatPartiPolitique === "") {
        CandidatPartiPolitique = "Independant";
    }

    let candidat = {
        cin: candidateCin,
        nom: CandidatNom,
        prenom: CandidatPrenom,
        partiPolitique: CandidatPartiPolitique,
        age: CandidatAge,
        electeurs: []
    };

    candidats.push(candidat)

    return true;
}


function BubbleSortCandidats() {


    for (let i = 0; i < candidats.length; i++) {

        for (let j = 0; j < candidats.length - i - 1; j++) {
            if (candidats[j].electeurs.length < candidats[j + 1].electeurs.length) {
                let temp = candidats[j];
                candidats[j] = candidats[j + 1];
                candidats[j + 1] = temp;
            }
        }
    }

}

function PrintCandidats(candidat) {
    console.log(`Candidat Identifiant: ${candidat.cin}`)
    console.log(`Candidat nom et prénom: ${candidat.nom} ${candidat.prenom}`)
    console.log(`Candidat Parti politique: ${candidat.partiPolitique}`)
    console.log(`Candidat Âge: ${candidat.age}`)
    console.log(`Nombre de votes: ${candidat.electeurs.length}`)


}

function IsCinUniqueInElecteurs(cin) {
    for (let i = 0; i < candidats.length; i++) {
        for (let j = 0; j < candidats[i].electeurs.length; j++) {
            if (candidats[i].electeurs[j] === cin) {
                return false;
            }
        }

    }
    return true;
}


function DeleteCandidate(candidateIndex) {

    candidats[candidateIndex] = candidats[candidats.length - 1];

    candidats.length--;

}

//stats

function totalVotes() {
    let somme = 0;
    for (let i = 0; i < candidats.length; i++) {
        somme += candidats[i].electeurs.length;

    }

    return somme;
}


function PrintTop3Candidats() {
    BubbleSortCandidats();



    let stopCounter = 0;

    if (candidats.length <= 3) {
        stopCounter = candidats.length;
    } else {
        stopCounter = candidats.length - 3;
    }

    let count = 1;

    for (let i = 0; i < 3; i++) {
        if (candidats[i] === undefined) {
            break;
        }
        console.log(`Top ${count} : ${candidats[i].nom + " " + candidats[i].prenom} represent --${candidats[i].partiPolitique}-- avec total votes ${candidats[i].electeurs.length} `);

        count++;
    }
}


function ShowPartiPolitiqueByNumberOfCandidats() {

    const pariesPolitques = [];
    for (let i = 0; i < candidats.length; i++) {

        let found = false;

        for (let j = 0; j < pariesPolitques.length; j++) {
            if (candidats[i].partiPolitique === pariesPolitques[j]) {
                found = true;
                break;
            }
        }
        if (!found) {
            pariesPolitques.push((candidats[i].partiPolitique))
        }

    }



    for (let i = 0; i < pariesPolitques.length; i++) {
        let count = 0;
        if (pariesPolitques[i] === undefined) {
            break;
        }

        for (let j = 0; j < candidats.length; j++) {
            if (candidats[j].partiPolitique === pariesPolitques[i]) {
                count++;
            }
        }
        console.log(`Parti ${pariesPolitques[i]} : ${count} candidat(s)`);
    }
}


module.exports = {
  ShowPartiPolitiqueByNumberOfCandidats,
  PrintTop3Candidats,
  totalVotes,
  DeleteCandidate,
  IsCinUniqueInElecteurs,
  PrintCandidats,
  BubbleSortCandidats,
  AjouterUnCandidate,
}

