import Player from "./player";
export default function Battleutils() {
    const playCard = (user, target, card) => {

    };

    const battleIsOver = (player, opponents) => {
        return (player.getHP < 0 || opponents.length === 0);
    }

    return { playCard, battleIsOver }
}