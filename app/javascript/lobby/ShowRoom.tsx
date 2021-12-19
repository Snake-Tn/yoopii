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
    const isHostedByMe = room.id == me.player?.id

    const [guests, setGuests] = useState<Array<Player>>([])

    useEffect(() => {
        fetchAllGuests(room, setGuests)
        setInterval(() => {
            fetchAllGuests(room, setGuests)
        }, 5000)
    }, [])

    const guestsList = guests.map((guest) => <tr key={guest.id}>
        <td>{guest.username}</td>
    </tr>)

    return <div className={'p-1 has-background-grey-dark'}>

        <div className={'columns is-mobile'}>
            <div className={'has-text-success-dark column'}>{room.game.name}</div>
            <div className={'column'}>{room.title}</div>
            <div className={'column has-text-right'}>
                <button className={'button is-normal is-dark'}>X</button>
            </div>
        </div>

        <div className={'is-size-6'}>{room.description}</div>

        <table className="table is-narrow is-fullwidth ">
            <tbody>
            {guestsList}
            </tbody>
        </table>


    </div>
}
export default ShowRoom