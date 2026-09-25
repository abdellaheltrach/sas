const PromptSync = require("prompt-sync")();
let choix = 0;


const candidats = [
    {
        cin: "1234",
        nom: "abdellah",
        prenom: "eltrach",
        partiPolitique: "Independant",
        age: 35,
        electeurs: []
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




function choix1AjouteNouveauCandidat() {
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

function choix2AjouterPlusieursCandidatsALaFois() {
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
function choix3AfficherLaListeDesCandidats() {
    console.clear()
    console.log(`=== LISTE DES CANDIDATS === \n\n\n`)


    let choix = 0;
    console.log("[1] Afficher la liste des candidats par les nombre de votes")
    console.log("[2] Afficher les candidats d'un parti politique spécifique")

    choix = parseInt(PromptSync("Quelles votre choix?. "))

    if (choix === 1) {
        BubbleSortCandidats();
        for (let i = candidats.length - 1; i >= 0; i--) {
            PrintCandidats(candidats[i])
            console.log(`\n\n`);
        }

    } else if (choix === 2) {
        BubbleSortCandidats();
        let found = false;
        let partiPolitique = PromptSync("Entre le parti politique : ")

        for (let i = candidats.length - 1; i >= 0; i--) {
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
function choix4VoterPourUnCandidat() {
    console.clear()
    console.log(`=== VOTER POUR UN CANDIDAT === \n\n\n`)
    let electeursCin = PromptSync("Entre electeurs CIN : ").toUpperCase();
    if (IsCinUniqueInElecteurs(electeursCin)) {

        let found = false;

        let candidatCin = PromptSync("Entre candidat CIN : ")
        for (let i = 0; i < candidats.length; i++) {
            if (candidats[i].cin === candidatCin) {
                found = true;
                candidats[i].electeurs.push(candidatCin)

                console.log(`Vote enregistré ! \n\n\n`);

            }
        }


        if (!found) {
            console.log(`Candidat pas trouver! \n`);
        }

    } else {
        console.log(`Electeur est deja vote.`);


    }

    PromptSync("continue?. ");
    console.clear();

}

function choix5ModifierLesInformationsDunCandidat() {
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

            let newAge = parseInt(PromptSync("Entre le neveaux parti politique : "))
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

function choix6SupprimerUnCandidat() {
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

function choix7RechercherDesCandidats() {
    console.clear()
    console.log(`=== RECHERCHER DES CANDIDATS === \n\n\n`)



    let foundIndex = -1;

    let candidatnom = PromptSync("Entre candidat nom : ")
    for (let i = 0; i < candidats.length; i++) {
        if (candidats[i].nom === candidatnom) {
            foundIndex = i;
            break;
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




function choix8StatistiquesDeLélection() {
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


// Helpers


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
            if (candidats[j].electeurs.length > candidats[j + 1].electeurs.length) {
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
    let count = 1;
    for (let i = candidats.length - 1; i >= candidats.length - 3; i--) {
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
        for (let j = 0; j < candidats.length; j++) {
            if (candidats[j].partiPolitique === pariesPolitques[i]) {
                count++;
            }
        }
        console.log(`Parti ${pariesPolitques[i]} : ${count} candidat(s)`);
    }
}