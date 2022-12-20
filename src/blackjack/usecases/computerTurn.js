import { getCrad, cardValue, createCardHtml } from "./";
import Swal from 'sweetalert2';

/**
 * turno de la computadora
 * @param {number} minPoints puntos minimos que la computadora necesita para ganar
 * @param {HTMLElement} pointsHTML elemeto HTML para mostrar los puntos
 * @param {HTMLElement} divComputerCard elemeto HTML para mostrar las cartas
 * @param {array<string>} deck 
 */
export const computerTurn = (minPoints, pointsHTML, divComputerCard, deck = []) => {

    if (!minPoints) throw new Error('Puntos minimos son necesarios');
    if (!pointsHTML) throw new Error('Argumento pointsHTML es necesario');

    let computerPoints = 0;

    do {
        const card = getCrad(deck);

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
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Nadie gana',
            });
        } else if (minPoints > 21) {
            Swal.fire({
                title: 'Winner!',
                text: 'Computadora Gana.',
                imageUrl: 'https://seagateapj.s3.us-west-2.amazonaws.com/2022/q4/2204_Gam_APJ_aftershock-campaign_LP_en_AU/build/images/custom-pc-anim.gif',
                imageWidth: 200,
                imageHeight: 200,
                imageAlt: 'Custom image',
            });
        } else if (computerPoints > 21) {
            Swal.fire({
                title: 'Winner!',
                text: 'Jugador Gana.',
                imageUrl: 'https://i.pinimg.com/originals/87/6f/ab/876fab6207f93c293ae77a70f188c402.gif',
                imageWidth: 300,
                imageHeight: 200,
                imageAlt: 'Custom image',
            });
        } else {
            Swal.fire({
                title: 'Winner!',
                text: 'Computadora Gana.',
                imageUrl: 'https://seagateapj.s3.us-west-2.amazonaws.com/2022/q4/2204_Gam_APJ_aftershock-campaign_LP_en_AU/build/images/custom-pc-anim.gif',
                imageWidth: 200,
                imageHeight: 200,
                imageAlt: 'Custom image',
            });
        }
    }, 100);
}