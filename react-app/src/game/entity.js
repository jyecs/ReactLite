// Contain base functionality for all entities in the game.
export default function Entity(name) {
    const entityName = name;
    const status = { HP: -1, maxHP: -1 };
    
    const getHP = () => status.HP;
    const getMaxHP = () => status.maxHP;
    const getName = () => entityName;

    const setHP = (num) => status.HP = num;
    const setMaxHP = (num) => status.maxHP = num;

    return { getHP, getMaxHP, getName, setHP, setMaxHP };
 }