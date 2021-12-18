import Game from "./Game";
import Player from "./Player";

interface Room {
    id: string,
    title: string,
    description: string,
    game: Game,
    host: Player,
}

export default Room