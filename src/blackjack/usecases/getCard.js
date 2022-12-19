
/**
 * 
 * @param {array<string>} deck 
 * @returns {string} retorn la carta del deck
 */
export const getCrad = ( deck ) => {

    if (!deck || deck.length === 0) {
        throw 'No hay cartas en el deck';
    }
    const card = deck.pop();
    return card;
}