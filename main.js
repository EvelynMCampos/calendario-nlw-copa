function createGame (player1, hour, player2) {
    return `
         <li>
            <img src="assets/icon-${player1}.svg" alt="Bandeira do ${player1}"/>
            <strong>${hour}</strong>
            <img src="assets/icon-${player2}.svg" alt="Bandeira da ${player2}">
        </li>
    `
}

let delay = -.3;
function createCard(date, day,games) {
    delay = delay + .3;
    return `
        <div class="card" style="animation-delay: ${delay}s">
            <h2>${date}<span>${day}</span></h2>
            <ul>
            ${games}
            </ul>
        </div>
    `
}

document.querySelector("#cards").innerHTML = 
     createCard("24/11", "quinta",
     createGame("brazil", "16:00", "serbia") +
     createGame("colombia", "11:30", "armenia")
     ) +

     createCard("01/12", "sexta",
     createGame("brazil", "10:00", "cameroon") +
     createGame("portugal", "16:00", "urugay")
     ) +
     
     createCard("03/12", "sabado",
     createGame("ghana", "08:00", "south korea") +
     createGame("india", "15:30", "japan")
     )
