const PromptSync = require("prompt-sync")();
let choix = 0;


const condidats = [
    {
        cin: "1234",
        nom: "abdellah",
        prenom: "eltrach",
        partiPolitique: "Independant",
        age: 35,
        electeurs: ["1589", "5879", "5589", "8889", "7412"]
    },
    {
        cin: "JB45678",
        nom: "el amrani",
        prenom: "fatima",
        partiPolitique: "RNI",
        age: 42,
        electeurs: ["2365", "4125", "9632", "1478"]
    },
    {
        cin: "M589632",
        nom: "benjelloun",
        prenom: "mehdi",
        partiPolitique: "PAM",
        age: 38,
        electeurs: ["8523", "7410", "3698"]
    },
    {
        cin: "HA98765",
        nom: "tazi",
        prenom: "karim",
        partiPolitique: "Istiqlal",
        age: 50,
        electeurs: ["1122", "3344", "5566", "7788", "9900", "2233"]
    },
    {
        cin: "EE12345",
        nom: "chakir",
        prenom: "amina",
        partiPolitique: "USFP",
        age: 45,
        electeurs: ["4455", "6677", "8899"]
    },
    {
        cin: "BK85214",
        nom: "zerouali",
        prenom: "youssef",
        partiPolitique: "MP",
        age: 31,
        electeurs: ["1239", "8745", "6321", "4587"]
    },
    {
        cin: "G741258",
        nom: "bennani",
        prenom: "sara",
        partiPolitique: "PJD",
        age: 46,
        electeurs: ["9871", "6542", "3215", "1597", "7531"]
    },
    {
        cin: "PA96325",
        nom: "idrissi",
        prenom: "hamza",
        partiPolitique: "PPS",
        age: 39,
        electeurs: ["2468", "1357", "3692"]
    },
    {
        cin: "LE35715",
        nom: "mansouri",
        prenom: "khadija",
        partiPolitique: "Independant",
        age: 53,
        electeurs: ["7894", "1230", "4561", "7893"]
    },
    {
        cin: "QB15975",
        nom: "tahiri",
        prenom: "omar",
        partiPolitique: "UC",
        age: 40,
        electeurs: ["3214", "6547", "9874", "1593", "7539", "8526"]
    }
];

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
    console.log("[2] Afficher les candidats d'un parti politique spécifique")

    choix = parseInt(PromptSync("Quelles votre choix?. "))

    if (choix === 1) {
        BubbleSortCondidats();
        for (let i = condidats.length - 1; i >= 0; i--) {
            PrintCondidats(condidats[i])
            console.log(`\n\n`);
        }

    } else if (choix === 2) {
        BubbleSortCondidats();
        let found = false;
        let partiPolitique = PromptSync("Entre le parti politique : ")

        for (let i = condidats.length - 1; i >= 0; i--) {
            if (condidats[i].partiPolitique.toLocaleLowerCase() === partiPolitique.toLocaleLowerCase()) {
                found = true;
                console.log(`\n`);
                PrintCondidats(condidats[i])
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


    let condidatNom = PromptSync(`Enter votre nom : `);
    let CondidatPrenom = PromptSync(`Enter votre prenom : `);
    let condidatPartiPolitique = PromptSync(`Enter votre partiPolitique : `);
    let condidatAge = parseInt(PromptSync(`Enter votre age : `));

    if (condidatPartiPolitique === "") {
        condidatPartiPolitique = "Independant";
    }

    let candidat = {
        cin: condidateCin,
        nom: condidatNom,
        prenom: CondidatPrenom,
        partiPolitique: condidatPartiPolitique,
        age: condidatAge,
        electeurs: []
    };

    condidats.push(candidat)

    return true;
}


function BubbleSortCondidats() {


    for (let i = 0; i < condidats.length - i; i++) {

        for (let j = 0; j < condidats.length - i - 1; j++) {
            if (condidats[j].electeurs.length > condidats[j + 1].electeurs.length) {
                let temp = condidats[j];
                condidats[j] = condidats[j + 1];
                condidats[j + 1] = temp;
            }
        }
    }

}

function PrintCondidats(candidat) {
    console.log(`Candidat Identifiant: ${candidat.cin}`)
    console.log(`Candidat nom et prénom: ${candidat.nom} ${candidat.prenom}`)
    console.log(`Candidat Parti politique: ${candidat.partiPolitique}`)
    console.log(`Candidat Âge: ${candidat.age}`)
    console.log(`Nombre de votes: ${candidat.electeurs.length}`)


}