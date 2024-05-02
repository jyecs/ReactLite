import Entity from "./entity";
import Deck from "./deck";
export default function Player(name) {
    const entity = Entity(name);
    const DEFAULT_ACTION_POINTS = 3;
    const deck = Deck();

    // modified later when there are things that modify action points;
    const getActionPoints = () => {
        return DEFAULT_ACTION_POINTS;
    }

    const getDeck = () => { return deck; }

    return Object.assign({}, entity, { getActionPoints, getDeck });
}