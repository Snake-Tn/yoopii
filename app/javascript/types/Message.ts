import Player from "./Player";

interface Message {
    sender: Player
    content: string,
    id: string,
}

export default Message