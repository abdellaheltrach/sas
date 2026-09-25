const PromptSync = require("prompt-sync")();
let choix = 0;


const condidats = [];


do {
    console.clear();


    console.log(
        `================================= 
       Gestion des Élections 
================================= `)

    console.log("[1] Ajouter un nouveau candidat")
    console.log("[2] Ajouter plusieurs candidats à la fois")
    console.log("[3] Afficher la liste des candidats")
    console.log("[4] Voter pour un candidat")
    console.log("[5] Modifier les informations d'un candidat")
    console.log("[6] Supprimer un candidat ")
    console.log("[7] Rechercher des candidats")
    console.log("[8] Statistiques de l'élection")
    console.log("[0] Quitter le programme")

    choix = parseInt(PromptSync("Quelles votre choix?. "))



    switch (choix) {
        case 0:
            repeat = false;
            break;
        case 1:
            choix1AjouteNouveauCandidat();
            break;
        case 2:
            choix2AjouterPlusieursCandidatsALaFois();

            break;
        case 3:
            choix3AfficherLaListeDesCandidats();

            break;
        case 4:
            choix4VoterPourUnCandidat();

            break;
        case 5:
            choix5ModifierLesInformationsDunCandidat();

            break;
        case 6:
            choix6SupprimerUnCandidat();
            break;
        case 7:
            choix7RechercherDesCandidats();
            break;
        case 8:
            choix8StatistiquesDeLélection();
            break;
        default:
            console.log("fault choix!!")

            break;
    }



} while (choix !== 0);




function choix1AjouteNouveauCandidat(trips) {
    console.clear()
    console.log(`=== AJOUTE NOUVEAU CANDIDAT === \n\n\n`)

    let isAdded = AjouterUnCondidate();

    if (isAdded) {
        console.log(`Candidat ajouté avec succès\n`)

    } else {
        console.log(`Le CIN du candidat est déjà enregistré dans la liste des candidats.\n`)

    }


    PromptSync("continue?. ");
    console.clear();

}

function choix2AjouterPlusieursCandidatsALaFois(trips) {
    console.clear()
    console.log(`=== AJOUTER PLUSIEURS CANDIDATS === \n\n\n`)

    let condidatesNumber = parseInt(PromptSync(`Saisissez le nombre de candidats que vous souhaitez ajouter : `));

    for (let i = 1; i <= condidatesNumber; i++) {

        console.log(`\nEntrez le numéro de candidat ${i}`);

        let isAdded = AjouterUnCondidate();
        if (isAdded) {
            console.log(`\nCandidat ajouté avec succès\n`)

        } else {
            console.log(`\nLe CIN du candidat est déjà enregistré dans la liste des candidats.\n`)

        }

    }



    PromptSync("continue?. ");
    console.clear();

}
function choix3AfficherLaListeDesCandidats() {
    console.clear()
    console.log(`=== LISTE DES CANDIDATS === \n\n\n`)


    let choix = 0;
    console.log("[1] Afficher la liste des candidats par les nombre de votes")
    console.log("[2] Ajouter plusieurs candidats à la fois")

    choix = parseInt(PromptSync("Quelles votre choix?. "))

    if (choix===1) {

    } else if (choix===2) {

    } else {
        console.log(`fault choix!!`);
    }

    PromptSync("continue?. ");
    console.clear();

}
function choix4VoterPourUnCandidat() {
    console.clear()
    console.log(`=== VOTER POUR UN CANDIDAT === \n\n\n`)


    PromptSync("continue?. ");
    console.clear();

}

function choix5ModifierLesInformationsDunCandidat() {
    console.clear()
    console.log(`=== MODIFIER LES INFORMATIONS DUN CANDIDAT === \n\n\n`)


    PromptSync("continue?. ");
    console.clear();

}

function choix6SupprimerUnCandidat() {
    console.clear()
    console.log(`=== SUPPRIMER UN CANDIDAT === \n\n\n`)



    PromptSync("Continue?. ")
}

function choix7RechercherDesCandidats() {
    console.clear()
    console.log(`=== RECHERCHER DES CANDIDATS === \n\n\n`)


    PromptSync("continue?. ");
    console.clear();

}




function choix8StatistiquesDeLélection(tickets) {
    console.clear()



    PromptSync("continue?. ");
    console.clear();
}


// Helpers


function AjouterUnCondidate() {
    let condidateCin = PromptSync(`Enter votre CIN : `);
    //LOOP CIN IN CANDIDATE
    if (condidats.length !== 0) {

        for (let i = 0; i < condidats.length; i++) {
            if (condidats[i].cin === condidateCin) {
                return false;
            }
        }

    }


    let condidateNom = PromptSync(`Enter votre nom : `);
    let CondidatePrenom = PromptSync(`Enter votre prenom : `);
    let condidatePartiPolitique = PromptSync(`Enter votre partiPolitique : `);
    let condidateAge = parseInt(PromptSync(`Enter votre age : `));

    if (condidatePartiPolitique === "") {
        condidatePartiPolitique = "Indépendant";
    }

    let candidat = {
        cin: condidateCin,
        nom: condidateNom,
        prenom: CondidatePrenom,
        partiPolitique: condidatePartiPolitique,
        age: condidateAge,
        electeurs: []
    };

    condidats.push(candidat)

    return true;
}