export default function Card(name, user, data) {
    const cardName = name;
    const userName = user; // Remeber who the card came from.
    const desc = data.desc;

    // more functions to be addedd later when the battle loop is figured out.


    const getCardName = () => cardName;

    return { getCardName }
}