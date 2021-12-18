import React, {useEffect, useState} from 'react';
import NewRoom from './NewRoom';
import ListRooms from "./ListRooms";

import useAuthorization from "../hooks/UseAuthorization";
import {Room} from "../types";
import RoomPanel from "./RoomPanel";
import axios from "axios";
import params from "../parameters";
import Game from "../types/Game";

const fetchAllGames = async (setGames: (games: Array<Game>) => void) => {
    const response = await axios.get(params.api_games_path)
    setGames(response.data)
}

const Lobby = () => {
    const [games, setGames] = useState<Array<Game>>([])
    const {authenticated} = useAuthorization()
    if (!authenticated) {
        return null
    }

    useEffect(() => {
        fetchAllGames(setGames)
    }, [])

    const [hostedRoom, setHostedRoom] = useState<Room | undefined>()
    console.log(hostedRoom)
    const [joinedRoom, setJoinedRoom] = useState<Room | undefined>()


    return <div className={"container is-fluid my-6 is-size-4"}>

        <ListRooms/>
        {!joinedRoom && !hostedRoom && <NewRoom games={games} setHostedRoom={setHostedRoom}/>}
        {hostedRoom && <RoomPanel room={hostedRoom}/>}
    </div>
}
export default Lobby