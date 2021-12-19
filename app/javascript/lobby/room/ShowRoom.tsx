import {Room, Player} from "../../types";
import React, {useEffect, useRef, useState} from "react";
import axios from "axios";
import params from "../../parameters";

const ShowRoom = ({
                      room,
                      withKicking = false,
                      onClose,
                      onGuestLeft = () => {
                      },
                      children
                  }: {
    room: Room,
    withKicking?: boolean,
    onClose: () => void,
    onGuestLeft?: (player: Player) => void,
    children?: React.ReactNode
}) => {

    const guestsRef = useRef<Array<Player>>([])

    const [guests, setGuests] = useState<Array<Player>>([])
    guestsRef.current = guests
    const fetchAllGuests = async () => {
        try {
            const response = await axios.get<Array<Player>>(params.api_guests_path.replace('{room_id}', room.id))
            if (response.status < 300) {
                const quitters = guestsRef.current.filter((oldPlayer) => !response.data.some((newPlayer) => oldPlayer.id == newPlayer.id))
                quitters.forEach((p) => {
                    onGuestLeft(p)
                })
                setGuests(response.data)
            }
        } catch (e) {
            onClose()
        }

    }
    const kick = async (player: Player) => {
        const response = await axios.delete(
            params.api_guests_path.replace('{room_id}', room.id) + '/' + player.id
        )
        if (response.status < 300) {
            setGuests(guests.filter((p) => p.id != player.id))
        }
    }
    useEffect(() => {
        fetchAllGuests()
        const interval = setInterval(fetchAllGuests
            , 3000)
        return () => {
            clearInterval(interval)
        }
    }, [])

    const guestsList = guests.map((guest) => <div className={'columns  pl-4 is-mobile'} key={guest.id}>
            <div className={'column is-9 has-text-left'}>{guest.username}</div>

            <div className={'column'}>
                {withKicking &&
                    <div onClick={() => kick(guest)} className={'button is-size-7 is-danger is-outlined'}>Kick</div>}
            </div>
        </div>
    )

    return <div className={'p-1 has-background-grey-dark'}>
        <div className={'columns is-mobile'}>
            <div className={'has-text-success-dark column'}>{room.game.name}</div>
            <div className={'column'}>{room.title}</div>
            <div className={'column has-text-right'}>
                <button onClick={onClose} className={'button is-normal is-dark'}>X</button>
            </div>
        </div>
        <div className={'is-size-6'}>{room.description}</div>
        <div>
            <div className={'columns is-mobile pl-4'}>
                <div className={'column is-9 has-text-left'}>  {room.host.username} <i className={'fas px-2 fa-home'}/>
                </div>
            </div>
            {guestsList}
        </div>
        {children}
    </div>
}
export default ShowRoom