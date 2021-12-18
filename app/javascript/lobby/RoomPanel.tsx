import {Room} from "../types";
import React from "react";


const RoomPanel = ({room}: { room: Room }) => {

    return <div>

        <div>{room.game.name}</div>
        <div>{room.title}</div>
        <div>{room.description}</div>


    </div>
}
export default RoomPanel