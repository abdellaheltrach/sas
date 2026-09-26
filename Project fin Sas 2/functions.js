const PromptSync = require("prompt-sync")();
const candidats = require("./data");

const {
  ShowPartiPolitiqueByNumberOfCandidats,
  PrintTop3Candidats,
  totalVotes,
  DeleteCandidate,
  IsCinUniqueInElecteurs,
  PrintCandidats,
  BubbleSortCandidats,
  AjouterUnCandidate,
} = require('./helper');




function AjouteNouveauCandidat() {
    console.clear()
    console.log(`=== AJOUTE NOUVEAU CANDIDAT === \n\n\n`)

    let isAdded = AjouterUnCandidate();

    if (isAdded) {
        console.log(`Candidat ajouté avec succès\n`)

    } else {
        console.log(`Le CIN du candidat est déjà enregistré dans la liste des candidats.\n`)

    }


    PromptSync("continue?. ");
    console.clear();

}

function AjouterPlusieursCandidatsALaFois() {
    console.clear()
    console.log(`=== AJOUTER PLUSIEURS CANDIDATS === \n\n\n`)

    let CandidatesNumber = parseInt(PromptSync(`Saisissez le nombre de candidats que vous souhaitez ajouter : `));

    for (let i = 1; i <= CandidatesNumber; i++) {

        console.log(`\nEntrez le numéro de candidat ${i}`);

        let isAdded = AjouterUnCandidate();
        if (isAdded) {
            console.log(`\nCandidat ajouté avec succès\n`)

        } else {
            console.log(`\nLe CIN du candidat est déjà enregistré dans la liste des candidats.\n`)

        }

    }



    PromptSync("continue?. ");
    console.clear();

}
function AfficherLaListeDesCandidats() {
    console.clear()
    console.log(`=== LISTE DES CANDIDATS === \n\n\n`)


    let choix = 0;
    console.log("[1] Afficher la liste des candidats par les nombre de votes")
    console.log("[2] Afficher les candidats d'un parti politique spécifique")

    choix = parseInt(PromptSync("Quelles votre choix?. "))

    if (choix === 1) {
        BubbleSortCandidats();


        for (let i = 0; i < candidats.length; i++) {
            PrintCandidats(candidats[i])
            console.log(`\n\n`);

        }

    } else if (choix === 2) {
        BubbleSortCandidats();
        let found = false;
        let partiPolitique = PromptSync("Entre le parti politique : ")


        for (let i = 0; i < candidats.length; i++) {
            if (candidats[i].partiPolitique.toUpperCase() === partiPolitique.toUpperCase()) {
                found = true;
                console.log(`\n`);
                PrintCandidats(candidats[i])
                console.log(`\n`);
            }

        }



        if (!found) {
            console.log(`Il n'y a pas de parti politique portant ce nom.\n\n`);
        }


    } else {
        console.log(`fault choix!!`);
    }

    PromptSync("continue?. ");
    console.clear();

}
function VoterPourUnCandidat() {
    console.clear()
    console.log(`=== VOTER POUR UN CANDIDAT === \n\n\n`)
    let electeursCin = PromptSync("Entre electeurs CIN : ").toUpperCase();
    if (IsCinUniqueInElecteurs(electeursCin)) {

        let found = false;

        let candidatCin = PromptSync("Entre candidat CIN : ")
        for (let i = 0; i < candidats.length; i++) {
            if (candidats[i].cin === candidatCin) {
                found = true;
                candidats[i].electeurs.push(electeursCin)

                console.log(`Vote enregistré ! \n\n\n`);

            }
        }


        if (!found) {
            console.log(`Candidat pas trouver! \n`);
        }

    } else {
        console.log(`Vous avez déjà voté et vous n'avez pas le droit de modifier votre vote ni de voter à nouveau.`);


    }

    PromptSync("continue?. ");
    console.clear();

}

function ModifierLesInformationsDunCandidat() {
    console.clear()
    console.log(`=== MODIFIER LES INFORMATIONS DUN CANDIDAT === \n\n\n`)



    let foundIndex = -1;

    let candidatCin = PromptSync("Entre candidat CIN pour modifier : ")
    for (let i = 0; i < candidats.length; i++) {
        if (candidats[i].cin === candidatCin) {
            foundIndex = i;
            break;

        }
    }


    if (foundIndex !== -1) {
        console.log(`\n\nCandidat info:\n\n`);
        PrintCandidats(candidats[foundIndex]);

        let choix = 0;
        console.log("[1] Modifier le parti politique de candidat")
        console.log("[2] Modifier l'âge d'un candidat\n\n")

        choix = parseInt(PromptSync("Quelles votre choix?. "))

        if (choix === 1) {

            let newPartie = PromptSync("Entre le neveaux parti politique : ").toUpperCase();
            candidats[foundIndex].partiPolitique = newPartie;

            console.log(`Le candidat a été mis à jour avec succès.\n\n`);

        } else if (choix === 2) {

            let newAge = parseInt(PromptSync("Entre le neveaux âge : "))
            candidats[foundIndex].age = newAge;
            console.log(`Le candidat a été mis à jour avec succès.\n\n`);



        } else {
            console.log(`fault choix!!`);
        }

    } else {

        console.log(`Candidat pas trouver! \n`);
    }


    PromptSync("continue?. ");
    console.clear();

}

function SupprimerUnCandidat() {
    console.clear()
    console.log(`=== SUPPRIMER UN CANDIDAT === \n\n\n`)

    let foundIndex = -1;

    let candidatCin = PromptSync("Entre candidat CIN pour suprimer : ")
    for (let i = 0; i < candidats.length; i++) {
        if (candidats[i].cin === candidatCin) {
            foundIndex = i;
            break;
        }
    }



    if (foundIndex !== -1) {
        console.log(`\n\nCandidat info:\n\n`);
        PrintCandidats(candidats[foundIndex]);

        let conferm = PromptSync(`Supprimer ce candidat [o/n]?`).toLocaleLowerCase();

        if (conferm === "o") {
            DeleteCandidate(foundIndex);
            console.log(`\nCandidat supprime avec succes! \n`);
        } else {
            console.log(`\nLe candidat n'a pas supprime! \n`);

        }

    } else {
        console.log(`Candidat pas trouver! \n`);

    }

    PromptSync("Continue?. ")
}

function RechercherDesCandidats() {
    console.clear()
    console.log(`=== RECHERCHER DES CANDIDATS === \n\n\n`)



    let foundIndex = -1;

    let candidatnom = PromptSync("Entre candidat nom : ")
    for (let i = 0; i < candidats.length; i++) {
        if (candidats[i].nom === candidatnom) {
            foundIndex = i;
        }
    }



    if (foundIndex !== -1) {
        console.log(`\n\nCandidat info:\n\n`);
        PrintCandidats(candidats[foundIndex]);

    } else {
        console.log(`Candidat pas trouver! \n`);

    }



    PromptSync("continue?. ");
    console.clear();

}




function StatistiquesDeLélection() {
    console.clear()
    console.log(`=== STATISTIQUES DE L'ÉLECTION === \n\n\n`)

    console.log("[1] Afficher le nombre total de candidats");
    console.log("[2] Afficher le nombre total de votes exprimés");
    console.log("[3] Afficher le Top 3 des candidats ayant le plus de votes");
    console.log("[4] Afficher le nombre de candidats par parti politique");

    let choix = parseInt(PromptSync("Quel est votre choix ? "));
    console.log("\n");

    if (choix === 1) {
        console.log(`Nombre total de candidats : ${candidats.length}`);

    } else if (choix === 2) {
        console.log(`Nombre total de votes exprimés : ${totalVotes()}`);

    } else if (choix === 3) {
        PrintTop3Candidats();

    } else if (choix === 4) {
        ShowPartiPolitiqueByNumberOfCandidats();

    } else {
        console.log("Fault choix!!");
    }

    console.log("\n\n");


    PromptSync("continue?. ");
    console.clear();
}






module.exports = {
    StatistiquesDeLélection,
    RechercherDesCandidats,
    SupprimerUnCandidat,
    ModifierLesInformationsDunCandidat,
    VoterPourUnCandidat,
    AfficherLaListeDesCandidats,
    AjouterPlusieursCandidatsALaFois,
    AjouteNouveauCandidat
}