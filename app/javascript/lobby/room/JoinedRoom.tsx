import {Room, Player} from "../../types";
import React, {useContext, useEffect, useState} from "react";
import axios from "axios";
import params from "../../parameters";
import AuthorizationContext from "../../hooks/AuthorizationContext";
import ShowRoom from "./ShowRoom";

const JoinedRoom = ({room, setJoinedRoom}: { room: Room, setJoinedRoom: (room: Room | undefined) => void }) => {

    const me = useContext(AuthorizationContext).player

    const onLeave = async () => {
        const response = await axios.delete(
            params.api_guests_path.replace('{room_id}', room.id) + '/' + me?.id
        )
        if (response.status < 300) {
            setJoinedRoom(undefined)
        }
    }

    const onGuestLeft = (player: Player) => {
        if (me?.id == player.id) {
            setJoinedRoom(undefined)
        }
    }

    return <ShowRoom room={room} onGuestLeft={onGuestLeft} onClose={onLeave}/>
}
export default JoinedRoom