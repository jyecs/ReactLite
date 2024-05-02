export default function Deck() {
    const cards = [];
    
    const getCards = () => cards;
    const addCards = (card) => cards.push(card);

    return { getCards, addCards };
}