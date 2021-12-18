import React, {useEffect, useState} from "react";
import {Room} from "../types";
import axios from "axios";
import params from "../parameters";

const fetchAllRooms = async (setRooms: (rooms: Array<Room>) => void) => {
    const response = await axios.get(params.api_rooms_path)
    setRooms(response.data)
}

const ListRooms = () => {
    const [rooms, setRooms] = useState<Array<Room>>([])

    useEffect(() => {
        fetchAllRooms(setRooms)
    }, [])

    const roomsList = rooms.map((room) => {
        return <tr key={room.id}>
            <th>{room.game.name}</th>
            <td>{room.title}</td>
            <td>{room.host.username}</td>
            <td><button className={'button is-dark'}>Join</button></td>
        </tr>
    })

    return <div>

        <div>Rooms list</div>
        <table className="table is-size-6 is-narrow is-striped is-fullwidth">
            <thead>
            <tr>
                <th>Game</th>
                <th>Title</th>
                <th>Host</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            {roomsList}
            </tbody>
        </table>
        <div className={"is-size-6 my-4 has-text-centered"}>
            _______________________________
        </div>
    </div>
}

export default ListRooms