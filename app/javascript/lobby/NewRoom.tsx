import React, {useEffect, useState} from "react";
import Input from "../common/Input";
import {Room, Game} from "../types";
import axios from "axios";
import params from "../parameters"

const fetchAllGames = async (setGames: (games: Array<Game>) => void) => {
    const response = await axios.get(params.api_games_path)
    setGames(response.data)
}

const NewRoom = ({setHostedRoom}: { setHostedRoom: (room: Room) => void }) => {

    const [games, setGames] = useState<Array<Game>>([])
    const [error, setError] = useState<string>('')

    useEffect(() => {
        fetchAllGames(setGames)
    }, [])

    const [roomData, setRoomData] = useState<{
        title: string,
        description: string,
        game_id: string
    }>({title: '', description: '', game_id: ''})
    const setValue = (value: string, name: string) => {
        setRoomData({...roomData, [name]: value})
    }

    const selectGame = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setRoomData({...roomData, game_id: e.target.value})
    }

    const submit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            const response = await axios.post(params.api_rooms_path, roomData)
            if (response.status === 201) {
                setHostedRoom(response.data)
            }
        } catch {
            setError('Oups... Are all fields filled in?')
        }
    }

    return <form onSubmit={submit}>
        <div className={"is-size-4"}>New room</div>
        <div className="field">
            <div className="control">
                <Input name={"title"} value={roomData.title} setValue={setValue} className="input" type="text"
                       placeholder="Title"/>
            </div>
        </div>
        <div className="field">
            <div className="control">
                <Input name={"description"} value={roomData.description} setValue={setValue} className="input"
                       type="text"
                       placeholder="Description"/>
            </div>
        </div>
        <div className="field">
            <div className="control">
                <div className="select">
                    <select name={"game_id"} value={roomData.game_id} onChange={selectGame}>
                        <option value={''} disabled>--Game</option>
                        {games.map((game: Game) =>
                            <option key={game.id} value={game.id}>{game.name}</option>
                        )}
                    </select>
                </div>
            </div>
        </div>
        <div className={'has-text-grey-lighter is-size-5'}>{error}</div>
        <div className="buttons is-right">
            <button type={'submit'} value={'submit'}
                    className="button has-text-weight-semibold has-text-white-ter has-background-success-dark ">Host
            </button>
        </div>


    </form>
}

export default NewRoom