import React from "react";
import {Player} from "../types";


const Head = ({currentPlayer, setCurrentPlayer}: {
    currentPlayer: Player | undefined,
    setCurrentPlayer: (player: Player | undefined) => void
}) => {
    const logout = () => {
        setCurrentPlayer(undefined)
    }
    return <div className=" has-background-black-ter">
        <div className="columns is-mobile is-vcentered">

            <div className="is-size-1 is-four-fifths column ">YooPii</div>
            {currentPlayer &&
            <div onClick={logout} className="is-size-3 has-text-centered  column">
                <button className="button is-normal is-dark">X</button>
            </div>
            }


        </div>
    </div>
}

export default Head