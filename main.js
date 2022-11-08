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
     createGame("brazil", "16:00", "serbia")
     ) +

     createCard("02/12", "sexta",
     createGame("brazil", "16:00", "cameroon") +
     createGame("ghana", "12:00", "urugay")
     ) +
     
     createCard("03/12", "sabado",
     createGame("colombia", "08:00", "south korea") +
     createGame("india", "15:30", "japan")
     )

document.querySelector('#toggle').addEventListener('click', (e) => {
    theme = e.target.checked ? 'blue' : 'green'
    document.body.classList = [theme]
})

