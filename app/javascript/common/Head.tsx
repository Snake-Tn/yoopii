import React, {useContext} from "react";
import AuthorizationContext from "../hooks/AuthorizationContext";

const Head = () => {
    const authorizationContext = useContext(AuthorizationContext)

    const logout = () => {
        authorizationContext.setPlayer(undefined)
    }
    return <div className=" has-background-black-ter">
        <div className="columns is-mobile is-vcentered">

            <div className="is-size-1 is-four-fifths column ">YooPii</div>
            {authorizationContext.player &&
            <div onClick={logout} className="is-size-3 has-text-centered  column">
                <button className="button is-normal is-dark">X</button>
            </div>
            }

        </div>
    </div>
}

export default Head