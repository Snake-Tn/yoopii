import {useContext, useEffect} from "react";
import PlayerContext from "../login/PlayerContext";
import axios from "axios"

const useAuthorization = () => {

    const playerContext = useContext(PlayerContext)

    let authenticated = false
    let accessToken = ''

    if (playerContext.player) {
        authenticated = true
        accessToken = playerContext.player.accessToken
    }
    useEffect(() => {
        axios.defaults.headers.common['Authorization'] = accessToken;
    }, [accessToken])

    return {authenticated}
}

export default useAuthorization