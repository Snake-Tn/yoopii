import React, {useEffect} from "react";
import {Player} from "../types";
import axios from "axios"

const AuthorizationContext = React.createContext<{
    player: Player | undefined,
    setPlayer: (player: Player | undefined) => void,
    accessToken: string | undefined,
    setAccessToken: (accessToken: string) => void
}>({
    player: undefined,
    setPlayer: () => undefined,
    accessToken: undefined,
    setAccessToken: () => undefined,
});

export const AuthorizationContextProvider = ({children}: { children: any }) => {

    const [player, setPlayer] = React.useState<Player | undefined>(
        {
            id: '1',
            username: 'u',
            password: 'HIDDEN',
        }
    )
    // const [accessToken, setAccessToken] = React.useState<string>('eyJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJ1In0.fSVE810SNVqwvBEw-vAMYK1fHoOxILXUtJZxk2AXON0')
    axios.defaults.headers.common['Authorization'] = 'eyJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJ1In0.fSVE810SNVqwvBEw-vAMYK1fHoOxILXUtJZxk2AXON0'
    const [accessToken, setAccessToken] = React.useState<string>('')



    return <AuthorizationContext.Provider value={{
        player,
        setPlayer,
        accessToken,
        setAccessToken,
    }}>{children}</AuthorizationContext.Provider>
}

export default AuthorizationContext