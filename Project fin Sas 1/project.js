
const trips = [
    {
        id: 1,
        departure: "Safi",
        destination: "Youssoufia",
        departureTime: "07:30",
        arrivalTime: "08:30",
        price: 25,
        availableSeats: 50
    },
    {
        id: 2,
        departure: "Safi",
        destination: "Marrakech",
        departureTime: "08:00",
        arrivalTime: "10:30",
        price: 90,
        availableSeats: 50
    },
    {
        id: 3,
        departure: "Safi",
        destination: "Casablanca",
        departureTime: "09:00",
        arrivalTime: "13:00",
        price: 140,
        availableSeats: 50
    },
    {
        id: 4,
        departure: "Youssoufia",
        destination: "Marrakech",
        departureTime: "09:15",
        arrivalTime: "11:00",
        price: 65,
        availableSeats: 50
    },
    {
        id: 5,
        departure: "Youssoufia",
        destination: "Casablanca",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 110,
        availableSeats: 50
    },
    {
        id: 6,
        departure: "Marrakech",
        destination: "Casablanca",
        departureTime: "11:30",
        arrivalTime: "14:30",
        price: 120,
        availableSeats: 50
    },
    {
        id: 7,
        departure: "Marrakech",
        destination: "Rabat",
        departureTime: "12:00",
        arrivalTime: "16:00",
        price: 150,
        availableSeats: 50
    },
    {
        id: 8,
        departure: "Casablanca",
        destination: "Rabat",
        departureTime: "14:00",
        arrivalTime: "15:15",
        price: 40,
        availableSeats: 50
    },
    {
        id: 9,
        departure: "Casablanca",
        destination: "Kenitra",
        departureTime: "15:00",
        arrivalTime: "16:45",
        price: 55,
        availableSeats: 50
    },
    {
        id: 10,
        departure: "Rabat",
        destination: "Kenitra",
        departureTime: "16:00",
        arrivalTime: "16:45",
        price: 30,
        availableSeats: 50
    },
    {
        id: 11,
        departure: "Rabat",
        destination: "Fes",
        departureTime: "17:00",
        arrivalTime: "19:30",
        price: 95,
        availableSeats: 50
    },
    {
        id: 12,
        departure: "Kenitra",
        destination: "Fes",
        departureTime: "17:30",
        arrivalTime: "20:00",
        price: 85,
        availableSeats: 50
    },
    {
        id: 13,
        departure: "Fes",
        destination: "Meknes",
        departureTime: "08:30",
        arrivalTime: "09:20",
        price: 35,
        availableSeats: 50
    },
    {
        id: 14,
        departure: "Fes",
        destination: "Oujda",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 130,
        availableSeats: 50
    },
    {
        id: 15,
        departure: "Meknes",
        destination: "Rabat",
        departureTime: "11:00",
        arrivalTime: "13:30",
        price: 80,
        availableSeats: 50
    },
    {
        id: 16,
        departure: "Meknes",
        destination: "Casablanca",
        departureTime: "12:00",
        arrivalTime: "15:00",
        price: 105,
        availableSeats: 50
    },
    {
        id: 17,
        departure: "Casablanca",
        destination: "El Jadida",
        departureTime: "16:30",
        arrivalTime: "18:00",
        price: 50,
        availableSeats: 50
    },
    {
        id: 18,
        departure: "El Jadida",
        destination: "Safi",
        departureTime: "18:30",
        arrivalTime: "20:30",
        price: 60,
        availableSeats: 50
    },
    {
        id: 19,
        departure: "Marrakech",
        destination: "Agadir",
        departureTime: "15:00",
        arrivalTime: "18:30",
        price: 100,
        availableSeats: 50
    },
    {
        id: 20,
        departure: "Agadir",
        destination: "Safi",
        departureTime: "19:00",
        arrivalTime: "22:00",
        price: 95,
        availableSeats: 50
    }
];




const PromptSync = require("prompt-sync")();
const tickets = [];
let ticketcount = 0;

do {
    console.clear();
    let choix = 0;
    let repeat = true;


    console.log(
        `================================= 
           RAILWAY MANAGER 
================================= `)

    console.log("[1] Afficher les trajets")
    console.log("[2] Acheter un ticket")
    console.log("[3] Afficher les tickets")
    console.log("[4] Annuler un ticket")
    console.log("[5] Rechercher un ticket")
    console.log("[6] Filtrer les trajets")
    console.log("[7]  Trier les trajets")
    console.log("[0] Quitter le programme")

    choix = parseInt(PromptSync("Quelles votre choix?. "))



    switch (choix) {
        case 0:
            repeat = false;
            break;
        case 1:
            choix1AfficherTrajetsDisponible(trips);
            break;
        case 2:
            choix2AcheterUnTicket(trips, tickets);

            break;
        case 3:
            choix3AfficherLesTickets(tickets);

            break;
        case 4:
            choix4AnnulerTicket();

            break;
        case 5:
            choix5(trips);

            break;
        case 6:
            choix6(trips);
            break;
        case 7:
            choix7(trips);
            break;
        default:
            console.log("fault choix!!")

            break;
    }

    if (!repeat)
        break;

} while (true);




function choix1AfficherTrajetsDisponible(trips) {
    console.clear()
    console.log(`=== TRAJETS DISPONIBLES === \n\n\n`)
    for (let i = 0; i < trips.length; i++) {
        console.log(`#${trips[i].id} ${trips[i].departure} ---> ${trips[i].destination}`);
        console.log(`Départ : ${trips[i].departureTime}`)
        console.log(`Arrivée : ${trips[i].arrivalTime}`)
        console.log(`Prix : ${trips[i].price}`)
        console.log(`Places disponibles : ${trips[i].availableSeats} \n\n\n`)
    }
    PromptSync("continue?. ");
    console.clear();

}

function choix2AcheterUnTicket(trips) {
    console.clear()
    console.log(`=== ACHETER UN TICKET === \n\n\n`)
    let passager = PromptSync("Nom du passager : ")
    let tripId = parseInt(PromptSync("Identifiant du trajet : "))
    let foundTripIndex = -1;

    for (let i = 0; i < trips.length; i++) {
        if (trips[i].id === tripId) {
            foundTripIndex = i;
            break;
        }
    }

    if (foundTripIndex === -1) {
        console.log(`Trajet introuvable. `);
        PromptSync("continue?. ");
        console.clear();
        return;
    }

    if (trips[foundTripIndex].availableSeats === 0) {
        console.log(`Train complet. `)
        PromptSync("continue?. ");
        console.clear();
        return;
    }




    createTiket(foundTripIndex, passager);



    PromptSync("continue?. ");
    console.clear();

}
function choix3AfficherLesTickets() {
    console.clear()
    console.log(`=== TICKETS === \n\n\n`)

    if (tickets.length === 0) {
        console.log(`AUCUN BILLET VENDU POUR L'INSTANT`)

        PromptSync("continue?. ");
        console.clear();
        return;
    }

    for (let i = 0; i < tickets.length; i++) {

        if (tickets[i].status === "annuler") {
            continue;
        }

        let foundTripIndex = -1;
        for (let j = 0; j < trips.length; j++) {
            if (trips[j].id === tickets[i].tripId) {
                foundTripIndex = j;
                break;
            }

        }


        console.log(
            `    Ticket #${tickets[i].id} 
    Passager : ${tickets[i].passengerName}  
    Trajet : ${trips[foundTripIndex].departure}  → ${trips[foundTripIndex].destination}  
    Place : ${tickets[i].seatNumber}  
    Prix : ${trips[foundTripIndex].price} DH\n\n\n`)
    }



    PromptSync("continue?. ");
    console.clear();

}
function choix4AnnulerTicket() {
    console.clear()
    console.log(`=== ANNULER UN TICKET === \n\n\n`)



    if (tickets.length === 0) {
        console.log(`AUCUN BILLET VENDU POUR L'INSTANT`)

        PromptSync("continue?. ");
        console.clear();
        return;
    }

    let ticketIdForCancel = parseInt(PromptSync(`Identifiant du ticket : `))
    let foundTicketIndexForCancel = -1;


    for (let i = 0; i < tickets.length; i++) {
        if (tickets[i].id === ticketIdForCancel && tickets[i].status !== "annuler") {
            foundTicketIndexForCancel = i;
            break;
        }
    }

    if (foundTicketIndexForCancel === -1) {
        console.log(`Ticket introuvable. `)
        PromptSync("continue?. ");
        console.clear();
        return;
    }

    let foundTripIndex = -1;
    for (let j = 0; j < trips.length; j++) {
        if (trips[j].id === tickets[foundTicketIndexForCancel].tripId) {
            foundTripIndex = j;
            break;
        }

    }


    console.log(
        `    Ticket #${tickets[foundTicketIndexForCancel].id} 
Passager : ${tickets[foundTicketIndexForCancel].passengerName}  
Trajet : ${trips[foundTripIndex].departure}  → ${trips[foundTripIndex].destination}  
Place : ${tickets[foundTicketIndexForCancel].seatNumber}  
Prix : ${trips[foundTripIndex].price} DH\n\n\n`)


    let conferme = PromptSync("continue la nullation [y/n]? ").toLocaleLowerCase();

    if (conferme === "y") {
        tickets[foundTicketIndexForCancel].status = "annuler"
        console.log(`Ticket annulé avec succès. `)

    }

    PromptSync("continue?. ");
    console.clear();

}

function choixX() {
    console.clear()

    PromptSync("continue?. ");
    console.clear();

}



// Helpers
function createTiket(foundTripIndex, passager) {

    for (let i = 0; i < tickets.length; i++) {
        if (tickets[i].tripId === trips[foundTripIndex].id && tickets.status === "annuler") {

            const ticket = {
                id: ticketcount + 1,
                passengerName: passager,
                tripId: trips[foundTripIndex].id,
                seatNumber: tickets[i].tripId,
                status: "active",
                price: 90
            }
            tickets.push(ticket);
            ticketcount++;
            trips[foundTripIndex].availableSeats -= 1;

            console.log(`Ticket acheté avec succès.`);
            printTicket(ticket);
            return
        }

    }

    const ticket = {
        id: ticketcount + 1,
        passengerName: passager,
        tripId: trips[foundTripIndex].id,
        seatNumber: 50 - trips[foundTripIndex].availableSeats + 1,
        status: "active",
        price: 90
    }
    tickets.push(ticket);
    ticketcount++;
    trips[foundTripIndex].availableSeats--;

    console.log(`Ticket acheté avec succès.`);
    printTicket(ticket, foundTripIndex);

}

function printTicket(ticket, foundTripIndex) {
    console.log(
        `
Ticket #${ticket.id} 
Passager : ${ticket.passengerName}  
Trajet : ${trips[foundTripIndex].departure}  → ${trips[foundTripIndex].destination}  
Place : ${ticket.seatNumber}  
Prix : ${trips[foundTripIndex].price} DH`)
}