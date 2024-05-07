export default function Dataloader() {
    const cardData = new Map();
    const monsterCardData = new Map();
    const monsterData = new Map();

    const loadCardData = () => {
        fetch("./src/gamedata/cards.JSON").then((resp) =>{
            return resp.json();
        }).then((data) => {
            data.cards.forEach((card) => {
                let {name, ...rest} = card;
                cardData.set(name, rest);
            })
        })
    }

    const loadMonsterCardData = () => {
        fetch("./src/gamedata/mosntercards.JSON").then((resp) => {
            return resp.json();
        }).then((data) => {
            data.monsterCard.forEach((card) => {
                let {name, ...rest} = card;
                monsterCardData.set(name, rest)
            })
        })
    }

    const loadMonsterData = () => {
        fetch("./src/gamedata/monsters.JSON").then((resp) => {
            return resp.json();
        }).then((data) => {
            data.monsters.forEach((monster) => {
                let {name, ... rest} = monster;
                monsterData.set(name,rest);
            })
        })
    }
    
    const getCardData = (name) => {
        return cardData.get(name);
    }
    
    // Only used for debugging purposes.
    const peekCardData = () => {
        return cardData;
    }

    loadCardData();
    loadMonsterCardData();
    loadMonsterData();
    return { getCardData, peekCardData }
}