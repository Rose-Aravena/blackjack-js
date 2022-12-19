
/**
 * 
 * @param {string} card
 * @returns {HTMLImageElement} imagen de la carta
 */
export const createCardHtml = (card) => {

    if(!card) throw new Error('La carta es un argumento obligatorio')

    // <img class="carta" src="assets/cartas/2C.png">
    const imgCard = document.createElement('img');
    imgCard.src = `assets/cartas/${card}.png`; //3H, JD
    imgCard.classList.add('carta');

    return imgCard;
} 