export default function Cardloader() {
    const cardData = new Map();
    fetch("./src/gamedata/cards.JSON").then((resp) =>{
        return resp.json();
    }).then((data) => {
        data.cards.forEach((card) => {
            let {name, ...rest} = card;
            cardData.set(name, rest);
        })
    })
    
    const getCardData = (name) => {
        return cardData.get(name);
    }
    
    // Only used for debugging purposes.
    const peekCardData = () => {
        return cardData;
    }

    return { getCardData, peekCardData }
}