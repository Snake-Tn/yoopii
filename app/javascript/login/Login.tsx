import params from "../parameters"
import Input from "../common/Input"
import axios from "axios"
import React, {useContext, useState} from 'react';

import {Player} from '../types'
import PlayerContext from "./PlayerContext";

const createPlayer = async (player: Player): Promise<void> => {
    await axios.post<Player>(params.api_players_path, player)
}

const createToken = async (player: Player): Promise<string> => {
    const {data} = await axios.post(params.api_token_path, player)
    return data.token
}

const Login = () => {
    const playerContext = useContext(PlayerContext)
    if (playerContext.player) {
        return null
    }
    const [username, setUsername] = useState('')
    const [error, setError] = useState<string>('')

    const onSubmit = async (event: React.FormEvent) => {
        event.preventDefault()
        setError('')
        try {
            const player = {
                username: username,
                password: Math.random().toString().substring(2, 6),
                accessToken: ''
            }
            await createPlayer(player)
            player.accessToken = await createToken(player)

            player.password = ''
            playerContext.setPlayer(player)
        } catch (error) {
            setError('Whoops.. not working.')
        }
    }

    return <div className="hero-body is-justify-content-center">
        <form onSubmit={onSubmit}>
            <Input setValue={setUsername} value={username} name={"username"}
                   className="has-background-grey-lighter input is-size-4" type="text" placeholder="Username"/>
            {error && <div>{error}</div>}
        </form>
    </div>
}

export default Login