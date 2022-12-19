import { getCrad, cardValue, createCardHtml } from "./";

/**
 * turno de la computadora
 * @param {number} minPoints puntos minimos que la computadora necesita para ganar
 * @param {HTMLElement} pointsHTML elemeto HTML para mostrar los puntos
 * @param {HTMLElement} divComputerCard elemeto HTML para mostrar las cartas
 * @param {array<string>} deck 
 */
export const computerTurn = (minPoints, pointsHTML, divComputerCard, deck = []) => {

    if(!minPoints) throw new Error('Puntos minimos son necesarios');
    if(!pointsHTML) throw new Error('Argumento pointsHTML es necesario');

    let computerPoints = 0;

    do {
        const card = getCrad( deck );

        computerPoints = computerPoints + cardValue(card);
        pointsHTML.innerText = computerPoints;

        const imgCard = createCardHtml(card)
        divComputerCard.append(imgCard);

        if (minPoints > 21) {
            break;
        }

    } while ((computerPoints < minPoints) && (minPoints <= 21));

    setTimeout(() => {
        if (computerPoints === minPoints) {
            alert('Nadie gana :(');
        } else if (minPoints > 21) {
            alert('Computadora gana')
        } else if (computerPoints > 21) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100);
}