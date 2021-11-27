import params from "../common/parameters"
import Input from "../common/Input"
import axios from "axios"
import React, {useState} from 'react';

import {useNavigate} from "react-router-dom";
import {Player} from '../types'

const createPlayer = async (player: Player) => {
    const {data} = await axios.post(params.api_players_path, player)
    return Object.assign({}, player, data);
}

const createToken = async (username: string, password: string) => {
    const {data} = await axios.post(params.api_token_path, {username, password})
    return data.token
}

const Login = () => {
    const [username, setUsername] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const onSubmit = async (event) => {
        event.preventDefault()
        setError(null)
        try {
            const player = await createPlayer({
                username: username,
                mode: 'guest'
            })
            const token = await createToken(player.username, player.password)
            localStorage.setItem('access_token', token)
            navigate('/lobby');
        } catch (error) {
            setError('Whoops.. not working.')
        }
    }

    return <div className="hero-body is-justify-content-center ">
        <form onSubmit={onSubmit}>
            <Input setValue={setUsername} value={username}
                   className="has-background-grey-lighter input is-size-4" type="text" placeholder="Username"/>
            {error && <div>{error}</div>}
        </form>
    </div>
}

export default Login