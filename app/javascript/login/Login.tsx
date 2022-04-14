import params from '../parameters'
import Input from '../common/Input'
import axios from 'axios'
import React, {useContext, useState} from 'react';

import {Player} from '../types'
import AuthorizationContext from "../hooks/AuthorizationContext";

const createPlayer = async (playerData: { username: string, password: string }): Promise<Player> => {
    const response = await axios.post<Player>(params.api_players_path, playerData)
    return response.data
}

const createToken = async (player: { username: string, password: string }): Promise<string> => {
    const {data} = await axios.post(params.api_token_path, player)
    axios.defaults.headers.common['Authorization'] = data.token;
    return data.token
}

const Login = () => {
    const authorizationContext = useContext(AuthorizationContext)
    if (authorizationContext.player) {
        return null
    }
    const [username, setUsername] = useState('')
    const [error, setError] = useState<string>('')

    const onSubmit = async (event: React.FormEvent) => {
        event.preventDefault()
        setError('')
        try {
            const playerData = {
                username: username,
                password: Math.random().toString().substring(2, 6),
            }
            let player
            try {
                player = await createPlayer(playerData)
            } catch (e) {
                playerData.username = playerData.username + Math.random().toString().substring(2, 4)
                player = await createPlayer(playerData)
            }

            const accessToken = await createToken(playerData)

            authorizationContext.setPlayer(player)
            authorizationContext.setAccessToken(accessToken)
        } catch (error) {
            setError('Whoops.. not working.')
        }
    }
    return <div className="m-6">
        <form onSubmit={onSubmit}>
            <Input setValue={setUsername} value={username} name={"username"}
                   className="mt-4 has-background-grey-lighter input is-size-5" type="text" placeholder="Username"/>
            {error && <div>{error}</div>}
        </form>
    </div>


}

export default Login