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
    console.log("[6] Afficher la moyenne de la classe.")
    console.log("[7] Afficher le meilleur et le moins bon apprenant.")
    console.log("[0] Quitter le programme.")
    choix = parseInt(PromptSync("Quelles votre choix?. "))



    switch (choix) {
        case 0:
            repeat = false;
            break;
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
            choix6MoyenneDeClasse(tableaux);

            break;
        case 7:
            choix7AfficherMeilleurEtMoinBonApprenant(tableaux);

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
    let found = false;


    console.log("Entrer le noveaux apprenant details pour ajouter: ")


    let nom = PromptSync("Entrer le nom d'apprenant: ")
    let prenom = PromptSync("Entrer le prenom d'apprenant: ")
    let notes = Number(PromptSync("Entrer les notes d'apprenant /20: "))
    let skills = ajouterLesSkillsDapparenant()

    while (notes < 0 || notes > 20) {
        notes = Number(PromptSync("Entrer un valid note d'apprenant /20: "))

    }


    for (const apprenant of tableaux) {
        if (apprenant.prenomDappareant === prenom) {
            console.log("\n\n\n\apparent est deja exist!! ")
            PrintApprenant(apprenant);
            found = true;
            break;
        }
    }


    if (found === false) {

        const apprenant = {
            nomDapparenant: nom,
            prenomDappareant: prenom,
            notesDapparent: notes,
            skillsDapparent: skills
        }
        tableaux.push(apprenant)
    }


    PromptSync("continue?. ");
    console.clear();
}
function choix2AfficherTousLesApprenants(tableaux) {
    console.clear()


    let choix = 0;


    console.log("[1] Afficher tous les apprenants enregistres.")
    console.log("[2] Afficher tous les apprenants par un skill.")

    choix = parseInt(PromptSync("Quelles votre choix?. "))

    if (choix === 1) {

        if (tableaux.length === 0)
            console.log("Table Dapprenants est vide! ")

        if (tableaux)
            tableaux.forEach(apprenant => {

                PrintApprenant(apprenant);

            });
    } else if (choix === 2) {
        let skill = PromptSync(`entrer un skill pour la recherche: `);
        let apparenantAvecSkill= [];

        for (let i = 0; i < tableaux.length; i++) {
            for (let j = 0; j < tableaux[i].skillsDapparent.length; j++) {
                if(tableaux[i].skillsDapparent[j] === skill)
                {
                    apparenantAvecSkill.push(tableaux[i])
                    break;
                }
            }
        }

        if (apparenantAvecSkill.length === 0){
            console.log(`accune apparenant avec cette skill`)
        }

        for (let i = 0; i < apparenantAvecSkill.length; i++) {
            PrintApprenant(apparenantAvecSkill[i])            
        }
  
            
        

    } else {
        console.log("fault choix!!")

    }




    PromptSync("continue?. ");
    console.clear();
}

function choix3RechercherApparennantParPrenom(tableaux) {
    console.clear()
    let prenomRechercher = PromptSync("Entrer le prenom de apprenant pour la recherch: ")
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
    let prenomRechercher = PromptSync("Entrer le prenom de apprenant pour la recherch: ")
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
    let prenomRechercher = PromptSync("Entrer le prenom de apprenant pour la recherch: ")
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

function choix6MoyenneDeClasse(tableaux) {
    console.clear()

    if (tableaux.length === 0) {
        console.log(`accune Appatnant dans le class. `)
        PromptSync("continue?. ");

        return
    }


    let somme = 0;
    for (const apprenant of tableaux) {

        somme += Number(apprenant.notesDapparent);
    }

    console.log(`la moyenn de la class egal ${somme / tableaux.length}! `)

    PromptSync("continue?. ");
    console.clear();

}

function choix7AfficherMeilleurEtMoinBonApprenant(tableaux) {
    console.clear();

    if (tableaux.length === 0) {
        console.log(`Aucun apprenant dans la classe.`);
        PromptSync("Continue? ");
        return;
    }

    // Call the helper functions
    let mieleurAppIndex = trouverIndexMeilleur(tableaux);
    let MoinBonAppIndex = trouverIndexMoinsBon(tableaux);

    console.log(`Le meilleur apprenant est :`);
    PrintApprenant(tableaux[mieleurAppIndex]);

    console.log(`Le moins bon apprenant est :`);
    PrintApprenant(tableaux[MoinBonAppIndex]);

    PromptSync("Continue? ");
    console.clear();
}

//healpers-----------------------------
function PrintApprenant(apprenant) {
    console.log("------------------------------------------");
    console.log(`le nome d'apparenant: ${apprenant.nomDapparenant}.`);
    console.log(`le prenom d'apparenant: ${apprenant.prenomDappareant}.`);
    console.log(`le note d'apparenant: ${apprenant.notesDapparent}.`);
    console.log(`les skills d'apparenant: ${apprenant.skillsDapparent}`);


    console.log("------------------------------------------");
}

function mettreAJourApprenantNotes(apprenant) {
    let notes = Number(PromptSync("Entrer les notes de apprenant /20: "))
    while (notes < 0 || notes > 20) {
        notes = Number(PromptSync("Entrer un valid note d'apprenant /20: "))

    }
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

function trouverIndexMeilleur(tableaux) {
    let indexMax = 0;
    let maxNote = tableaux[0].notesDapparent;

    for (let i = 1; i < tableaux.length; i++) {
        if (tableaux[i].notesDapparent > maxNote) {
            maxNote = tableaux[i].notesDapparent;
            indexMax = i;
        }
    }
    return indexMax;
}

function trouverIndexMoinsBon(tableaux) {
    let indexMin = 0;
    let minNote = tableaux[0].notesDapparent;

    for (let i = 1; i < tableaux.length; i++) {
        if (tableaux[i].notesDapparent < minNote) {
            minNote = tableaux[i].notesDapparent;
            indexMin = i;
        }
    }
    return indexMin;
}


function ajouterLesSkillsDapparenant() {
    const skillsTableaux = [];
    console.log("Entrer les skills d'apparenant: ")
    let conferm = "";

    do {
        let skill = PromptSync("Entrer la skill d'apparenant: ")
        skillsTableaux.push(skill);


        conferm = PromptSync("Ajouter d'autres skill [Y/N]? ").toLocaleLowerCase();


    } while (conferm === "y");

    return skillsTableaux;

}