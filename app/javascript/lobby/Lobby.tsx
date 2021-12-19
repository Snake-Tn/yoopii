import React, {useContext, useEffect, useState} from 'react';
import NewRoom from './NewRoom';
import ListRooms from "./ListRooms";
import {Room} from "../types";
import AuthorizationContext from "../hooks/AuthorizationContext";
import HostedRoom from "./room/HostedRoom";
import JoinedRoom from "./room/JoinedRoom";

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
        {hostedRoom && <HostedRoom setHostedRoom={setHostedRoom} room={hostedRoom}/>}
        {joinedRoom && <JoinedRoom setJoinedRoom={setJoinedRoom} room={joinedRoom}/>}
    </div>
}
export default Lobby