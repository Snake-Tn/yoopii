import React from "react";
import {Player} from "../types";

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

    const [player, setPlayer] = React.useState<Player | undefined>()

    const [accessToken, setAccessToken] = React.useState<string>('')

    return <AuthorizationContext.Provider value={{
        player,
        setPlayer,
        accessToken,
        setAccessToken,
    }}>{children}</AuthorizationContext.Provider>
}

export default AuthorizationContext