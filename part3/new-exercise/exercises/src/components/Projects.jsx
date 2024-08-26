import data from './../data.json';
import { useState } from 'react';

export default function MyGames() {
    const [index, setIndex] = useState(0);

    
    function handleClick() {
        if (index < data.games.length - 1) {
            setIndex(index + 1);
        }
        else {
            setIndex(0);
        }
    }
    let gamesList = data.games;
    let game = gamesList[index];

    return (
        <div>
            <button onClick={handleClick}>
                Next
            </button>
            <h2>{game.name} by {game.designer}</h2>
            <img src={game.photo} alt={game.alt} />
        </div>
    )
}
