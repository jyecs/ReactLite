export default function Cardloader() {
    const testCardLoad = () =>{
        fetch("./src/gamedata/cards.JSON").then(resp => {
            return resp.json();
        }).then(data => console.log(data));
    }

    return { testCardLoad }
}