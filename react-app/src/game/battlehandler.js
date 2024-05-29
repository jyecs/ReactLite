import Player from "./player";
export default function Battlehandler(allies, opponents) {
    const party = allies;
    const monsters = opponents;
    const battledeck = [];

    // Load each card from each ally into the deck.
    party.forEach((ally) => {
        let deck = ally.getDeck().getCards()
        for (let i = 0; i < deck.length; i++) {
            battledeck.push(ally.getName(), deck[i]);
        }
    })

    const getAllies = () => party;
    const getOpponents = () => monsters;

    /*
    get target from some sort of targetting system handled by the game.
    
    */

    return { getAllies, getOpponents }
}