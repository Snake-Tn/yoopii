import React, {useContext, useEffect, useState} from 'react';
import NewRoom from './NewRoom';
import ListRooms from "./ListRooms";
import {Room} from "../types";
import AuthorizationContext from "../hooks/AuthorizationContext";
import ShowRoom from "./ShowRoom";

const Lobby = () => {

    const authorizationContext = useContext(AuthorizationContext)
    const [hostedRoom, setHostedRoom] = useState<Room | undefined>()
    const [joinedRoom, setJoinedRoom] = useState<Room | undefined>()
    if (!authorizationContext.player) {
        return null
    }

    return <div className={"container is-fluid my-6 is-size-4"}>

        {!joinedRoom && !hostedRoom && <ListRooms setJoinedRoom={setJoinedRoom}/>}
        {!joinedRoom && !hostedRoom && <NewRoom setHostedRoom={setHostedRoom}/>}
        {hostedRoom && <ShowRoom room={hostedRoom}/>}
        {joinedRoom && <ShowRoom room={joinedRoom}/>}
    </div>
}
export default Lobby