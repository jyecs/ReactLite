export default function Card(name, data) {
    const cardName = name;
    const desc = data.desc;

    // more functions to be addedd later when the battle loop is figured out.


    const getCardName = () => cardName;

    return { getCardName }
}