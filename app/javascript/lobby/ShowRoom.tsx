import {Room, Player} from "../types";
import React, {useContext, useEffect, useState} from "react";
import axios from "axios";
import params from "../parameters";
import AuthorizationContext from "../hooks/AuthorizationContext";

const fetchAllGuests = async (room: Room, setGuests: (guests: Array<Player>) => void) => {
    const response = await axios.get<Array<Player>>(params.api_guests_path.replace('{room_id}', room.id))
    setGuests(response.data)
}


const ShowRoom = ({room}: { room: Room }) => {

    const me = useContext(AuthorizationContext)
    const isHostedByMe = room.host.id == me.player?.id

    const [guests, setGuests] = useState<Array<Player>>([])
    const close = () => {
        if (isHostedByMe) {

        }
    }
    const kick = () => {
        if (isHostedByMe) {

        }
    }
    useEffect(() => {
        fetchAllGuests(room, setGuests)
        setInterval(() => {
            fetchAllGuests(room, setGuests)
        }, 2000)
    }, [])

    const guestsList = guests.map((guest) => <div className={'columns is-mobile'} key={guest.id}>
            <div className={'column is-10 has-text-left'}>{guest.username}</div>

            <div className={'column'}>
                {isHostedByMe && <div onClick={kick} className={'button is-size-7 is-danger is-outlined'}>Kick</div>}
            </div>
        </div>
    )

    return <div className={'p-1 has-background-grey-dark'}>

        <div className={'columns is-mobile'}>
            <div className={'has-text-success-dark column'}>{room.game.name}</div>
            <div className={'column'}>{room.title}</div>
            <div className={'column has-text-right'}>
                <button onClick={close} className={'button is-normal is-dark'}>X</button>
            </div>
        </div>

        <div className={'is-size-6'}>{room.description}</div>

        <div>
            {guestsList}
        </div>


    </div>
}
export default ShowRoom