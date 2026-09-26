const PromptSync = require("prompt-sync")();
const {
  StatistiquesDeLélection,
  RechercherDesCandidats,
  SupprimerUnCandidat,
  ModifierLesInformationsDunCandidat,
  VoterPourUnCandidat,
  AfficherLaListeDesCandidats,
  AjouterPlusieursCandidatsALaFois,
  AjouteNouveauCandidat
} = require('./functions');

function menu() {
    
    let choix = 0;
    
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
                break;
            case 1:
                AjouteNouveauCandidat();
                break;
            case 2:
                AjouterPlusieursCandidatsALaFois();
    
                break;
            case 3:
                AfficherLaListeDesCandidats();
    
                break;
            case 4:
                VoterPourUnCandidat();
    
                break;
            case 5:
                ModifierLesInformationsDunCandidat();
    
                break;
            case 6:
                SupprimerUnCandidat();
                break;
            case 7:
                RechercherDesCandidats();
                break;
            case 8:
                StatistiquesDeLélection();
                break;
            default:
                console.log("fault choix!!")
    
                break;
        }
    
    
    
    } while (choix !== 0);
}

module.exports = {menu};
