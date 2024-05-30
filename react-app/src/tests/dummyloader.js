export default function Dummyloader() {
    const cards = new Map();

    const card1 = {name: "Hello World",
        data: {effectType: ["dmg", "shield"], effectValue: [4, 3], effectTarget: ["target", "self"], desc:"Dmg: $value$ Shield: $value$", flavorText: "card1 text"} };

    const card2 = {name: "Strike",
        data: {effectType: ["dmg"], effectValue: [6], effectTarget: ["target"], desc:"Dmg: $value$", flavorText: "card2 text"} };

    const card3 = {name: "Block",
        data: {effectType: ["shield"], effectValue: [5], effectTarget: ["self"], desc:"Shield: $value$", flavorText: "card3 text"} };

    cards.set(card1.name, card1.data);
    cards.set(card2.name, card2.data);
    cards.set(card3.name, card3.data);

}