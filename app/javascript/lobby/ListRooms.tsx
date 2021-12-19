import React, {useEffect, useState} from "react";
import {Room} from "../types";
import axios from "axios";
import params from "../parameters";

const join = async (room: Room, setJoinedRoom: (room: Room) => void) => {
    const response = await axios.post(params.api_guests_path.replace('{room_id}', room.id))
    if (response.status == 201) {
        setJoinedRoom(room)
    }
}
const ListRooms = ({setJoinedRoom}: { setJoinedRoom: (room: Room) => void }) => {
    const [rooms, setRooms] = useState<Array<Room>>([])
    const fetchAllRooms = async () => {
        const response = await axios.get(params.api_rooms_path)
        setRooms(response.data)
    }
    useEffect(() => {
        fetchAllRooms()
        const interval = setInterval(fetchAllRooms, 10000)
        return () => {
            clearInterval(interval)
        }
    }, [])


    const roomsList = rooms.map((room) => {
        return <tr key={room.id}>
            <th>{room.game.name}</th>
            <td>{room.title}</td>
            <td>{room.host.username}</td>
            <td>
                <button
                    onClick={() => join(room, setJoinedRoom)}
                    className={'button has-text-weight-semibold has-text-white-ter has-background-success-dark'}>Join
                </button>
            </td>
        </tr>
    })

    return <div>

        <div>Rooms list</div>
        <table className="table is-size-6 is-narrow is-striped is-fullwidth ">
            <thead>
            <tr>
                <th>Game</th>
                <th>Title</th>
                <th>Hosted-by</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            {roomsList}
            </tbody>
        </table>
        <div className={"is-size-6 my-4 has-text-centered"}>
            ___________________________
        </div>

    </div>
}

export default ListRooms