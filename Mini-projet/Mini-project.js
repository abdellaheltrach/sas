const PromptSync = require("prompt-sync")();
const tableaux = [];

do {
    console.clear();
    let choix = 0;
    let repeat = true;

    console.log("[1] Ajouter un apprenant.")
    console.log("[2] Afficher tous les apprenants enregistres.")
    console.log("[3] Rechercher un apprenant par son prenom.")
    console.log("[4] Mettre a jour la note d'un apprenant existant.")
    console.log("[5] Supprimer un apprenant par son prenom.")
    console.log("[6] Quitter le programme.")
    choix = parseInt(PromptSync("Quelles votre choix?. "))



    switch (choix) {
        case 1:
            choix1AjouterUnApparenant(tableaux);
            break;
        case 2:
            choix2AfficherTousLesApprenants(tableaux);

            break;
        case 3:
            choix3RechercherApparennantParPrenom(tableaux);

            break;
        case 4:
            choix4MettreAJourNoteApprenant(tableaux);

            break;
        case 5:
            choix5SupprimerApprenant(tableaux);

            break;
        case 6:
            repeat = false;
            break;
        default:
            console.log("fault choix!!")

            break;
    }

    if (!repeat)
        break;

} while (true);


function choix1AjouterUnApparenant(tableaux) {
    console.clear()


    let nom = PromptSync("enter le nom de apprenant: ")
    let prenom = PromptSync("enter le prenom de apprenant: ")
    let notes = PromptSync("enter les notes de apprenant: ")


    const apprenant = {
        nomDapparenant: nom,
        prenomDappareant: prenom,
        notesDapparent: notes

    }
    tableaux.push(apprenant)


    PromptSync("continue?. ");
    console.clear();
}
function choix2AfficherTousLesApprenants(tableaux) {
    console.clear()

    if (tableaux.length === 0)
        console.log("Table Dapprenants est vide! ")

    if (tableaux)
        tableaux.forEach(apprenant => {

            PrintApprenant(apprenant);

        });



    PromptSync("continue?. ");
    console.clear();
}

function choix3RechercherApparennantParPrenom(tableaux) {
    console.clear()
    let prenomRechercher = PromptSync("enter le prenom de apprenant pour la recherch: ")
    let found = false;

    for (const apprenant of tableaux) {
        if (apprenant.prenomDappareant === prenomRechercher) {
            PrintApprenant(apprenant);
            found = true;
            break;
        }
    }

    if (found === false)
        console.log(`no apprenant avec le nome ${prenomRechercher} dans la list d'apprenant! `)

    PromptSync("continue?. ");
    console.clear();

}
function choix4MettreAJourNoteApprenant(tableaux) {
    console.clear()
    let prenomRechercher = PromptSync("enter le prenom de apprenant pour la recherch: ")
    let found = false;

    for (const apprenant of tableaux) {
        if (apprenant.prenomDappareant === prenomRechercher) {
            PrintApprenant(apprenant);
            mettreAJourApprenantNotes(apprenant);

            found = true;
            break;
        }
    }

    if (found === false) {
        console.log(`no apprenant avec le nome ${prenomRechercher} dans la list d'apprenant! `)
    }




    PromptSync("continue?. ");
    console.clear();

}
function choix5SupprimerApprenant(tableaux) {
    console.clear()
    let prenomRechercher = PromptSync("enter le prenom de apprenant pour la recherch: ")
    let appSupprimer = false;

    appSupprimer = SupprimerApprenant(tableaux, prenomRechercher);


    if (appSupprimer) {
        console.log("L'apprenant est supprimé !");
    } else {
        console.log("L'apprenant n'est pas supprimé !");
    }


    PromptSync("continue?. ");
    console.clear();

}


//healpersss-----------------------------
function PrintApprenant(apprenant) {
    console.log("------------------------------------------");
    console.log(`le nome d'apparenant: ${apprenant.nomDapparenant}.`);
    console.log(`le prenom d'apparenant: ${apprenant.prenomDappareant}.`);
    console.log(`le note d'apparenant: ${apprenant.notesDapparent}.`);
    console.log("------------------------------------------");
    console.log("");
}

function mettreAJourApprenantNotes(apprenant) {
    let notes = PromptSync("enter les neveaux notes de apprenant: ")
    apprenant.notesDapparent = notes;

}

function SupprimerApprenant(tableaux, prenomRechercher) {
    let apparenantSupprimer = false;



    for (let i = 0; i < tableaux.length; i++) {
        if (tableaux[i].prenomDappareant === prenomRechercher) {
            PrintApprenant(tableaux[i]);
            const supprimerConfermation = PromptSync("supprimer cet apprenant [Y/N]? ").toLowerCase();

            if (supprimerConfermation === "y") {

                for (let j = i; j < tableaux.length; j++) {
                    tableaux[j] = tableaux[j + 1];

                    apparenantSupprimer = true;
                    break;

                }


                tableaux.length -= 1;


            } else {
                apparenantSupprimer = false;
            }

        }
    }



    return apparenantSupprimer;
}


