import React from "react";
import {useNavigate, useLocation} from "react-router-dom";
import {Player} from "../types";


const Head = ({currentPlayer, setCurrentPlayer}: {
    currentPlayer: Player | undefined,
    setCurrentPlayer: (player: Player | undefined) => void
}) => {
    const logout = () => {
        setCurrentPlayer(undefined)
    }
    return <div className="  has-background-black-ter">
        <div className="columns is-mobile">
            <div className="column is-1"></div>
            <div className="is-size-1  column is-9">YooPii</div>
            {currentPlayer && <div onClick={logout} className="column is-size-5 button ">Quit</div>}
        </div>
    </div>
}

export default Head