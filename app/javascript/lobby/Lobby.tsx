import React, {useContext, useEffect, useState} from 'react';
import NewRoom from './NewRoom';
import ListRooms from "./ListRooms";
import {Room} from "../types";
import RoomPanel from "./RoomPanel";
import AuthorizationContext from "../hooks/AuthorizationContext";

const Lobby = () => {

    const authorizationContext = useContext(AuthorizationContext)
    if (!authorizationContext.player) {
        return null
    }

    const [hostedRoom, setHostedRoom] = useState<Room | undefined>()
    const [joinedRoom, setJoinedRoom] = useState<Room | undefined>()


    return <div className={"container is-fluid my-6 is-size-4"}>

        <ListRooms/>
        {!joinedRoom && !hostedRoom && <NewRoom setHostedRoom={setHostedRoom}/>}
        {hostedRoom && <RoomPanel room={hostedRoom}/>}
    </div>
}
export default Lobby