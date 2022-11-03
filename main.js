function createGame (player1, hour, player2) {
    return `
         <li>
            <img src="assets/icon-${player1}.svg" alt="Bandeira do ${player1}"/>
            <strong>${hour}</strong>
            <img src="assets/icon-${player2}.svg" alt="Bandeira da ${player2}">
        </li>
    `
}

function createCard(date, day,games) {
    return `
        <div class="card">
            <h2>${date}<span>${day}</span></h2>
            <ul>
            ${games}
            </ul>
        </div>

    `
}

document.querySelector('#app').innerHTML = `
    <header>
        <img src="assets/logo.svg" alt="Logo da NLW">
    </header>
    <main id="cards">
     ${createCard("24/11", "quinta",
     createGame("brazil", "16:00", "serbia") +
     createGame("portugal", "13:00", "ghana") +
     createGame("colombia", "20:00", "japan")
     )}
     ${createCard("28/11", "segunda",
     createGame("brazil", "08:00", "cameroon") +
     createGame("portugal", "16:00", "urugay") +
     createGame("hungary", "13:00", "argentina")
     )}
     ${createCard("02/12", "sexta",
     createGame("brazil", "16:00", "switzerland") +
     createGame("ghana", "08:00", "south korea") +
     createGame("india", "13:00", "armenia") 
     )}

    </main>
` 
