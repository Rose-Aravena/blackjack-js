import _ from 'underscore';

/**
 * Esta funcion crea un nuevo deck
 * @param {array<string>} typeCard Ejemplo: ['C', 'D', 'H', 'S']
 * @param {array<string>} specialType Ejemplo: ['A', 'J', 'Q', 'K']
 * @returns {array} retorna un nuevo deck de cartas
 */
export const createDeck = (typeCard, specialType) => {

    if(!typeCard || typeCard.length === 0 )
        throw Error('typeCard es obligatorio como un arreglo de string');

    if(!specialType || specialType.length === 0 )
        throw Error('specialType es obligatorio como un arreglo de string');

    let deck = [];

    for (let i = 2; i <= 10; i++) {
        for (let type of typeCard) {
            deck.push(i + type);
        }
    }

    for (let type of typeCard) {
        for (let spe of specialType) {
            deck.push(spe + type);
        }
    }
    deck = _.shuffle(deck);

    return deck;
}