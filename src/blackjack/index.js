import _ from 'underscore';
import { getCrad, cardValue, createDeck, computerTurn, createCardHtml } from "./usecases";

let deck = [];
const types = ['C', 'D', 'H', 'S'];
const special = ['A', 'J', 'Q', 'K'];

let playerPoints = 0,
    computerPoints = 0;

// Referencias del HTML
const btnGet = document.querySelector('#btnGet');
const btnStop = document.querySelector('#btnStop');
const btnNew = document.querySelector('#btnNew');

const divPlayerCard = document.querySelector('#player-card');
const divComputerCard = document.querySelector('#computer-cards');

const pointsHTML = document.querySelectorAll('small');

deck = createDeck(types, special);

// Eventos
btnGet.addEventListener('click', () => {

    const card = getCrad( deck );

    playerPoints = playerPoints + cardValue(card);
    pointsHTML[0].innerText = playerPoints;

    const imgCard = createCardHtml(card)
    divPlayerCard.append(imgCard);

    if (playerPoints > 21) {
        console.warn('Lo siento mucho, perdiste');
        btnGet.disabled = true;
        btnStop.disabled = true;
        computerTurn(playerPoints, pointsHTML[1], divComputerCard, deck);

    } else if (playerPoints === 21) {
        console.warn('21, genial!');
        btnGet.disabled = true;
        btnStop.disabled = true;
        computerTurn(playerPoints, pointsHTML[1], divComputerCard, deck);
    }

});

btnStop.addEventListener('click', () => {
    btnGet.disabled = true;
    btnStop.disabled = true;

    computerTurn(playerPoints, pointsHTML[1], divComputerCard, deck);
});

btnNew.addEventListener('click', () => {

    console.clear();
    deck = [];
    deck = createDeck(types, special);

    playerPoints = 0;
    computerPoints = 0;

    pointsHTML[0].innerText = 0;
    pointsHTML[1].innerText = 0;

    divComputerCard.innerHTML = '';
    divPlayerCard.innerHTML = '';

    btnGet.disabled = false;
    btnStop.disabled = false;

});