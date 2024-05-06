export default function Deck() {
    const cards = [];
    
    const getCards = () => cards;
    const addCard = (card) => cards.push(card);

    return { getCards, addCard };
}