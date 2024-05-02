export default function Entity(name) {
    const entityName = name;
    const status = { HP: -1, maxHP: -1 };
    
    const getHP = () => status.HP;
    const getMaxHP = () => status.maxHP;
    const getName = () => entityName;

    return { getHP, getMaxHP, getName };
 }