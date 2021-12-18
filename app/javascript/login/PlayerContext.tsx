import React from "react";
import {Player} from "../types";

const PlayerContext = React.createContext<{
    player: Player | undefined,
    setPlayer: (player: Player | undefined) => void,
    hosting: boolean,
    joining: boolean
}>({
    player: undefined,
    setPlayer: () => undefined,
    hosting: false,
    joining: false
});

export const PlayerContextProvider = ({children}: { children: any }) => {

    const [player, setPlayer] = React.useState<Player | undefined>({
        username: 'u',
        password: 'HIDDEN',
        accessToken: 'eyJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJ1In0.fSVE810SNVqwvBEw-vAMYK1fHoOxILXUtJZxk2AXON0'
    },)
    console.log(player)
    return <PlayerContext.Provider value={{
        player,
        setPlayer,
        hosting: false,
        joining: false
    }}>{children}</PlayerContext.Provider>
}

export default PlayerContext