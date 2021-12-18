import React, {useContext} from "react";
import PlayerContext from "../login/PlayerContext";

const Head = () => {
    const playerContext = useContext(PlayerContext)

    const logout = () => {
        playerContext.setPlayer(undefined)
    }
    return <div className=" has-background-black-ter">
        <div className="columns is-mobile is-vcentered">

            <div className="is-size-1 is-four-fifths column ">YooPii</div>
            {playerContext.player &&
            <div onClick={logout} className="is-size-3 has-text-centered  column">
                <button className="button is-normal is-dark">X</button>
            </div>
            }

        </div>
    </div>
}

export default Head