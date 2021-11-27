import React from "react";
import {useNavigate} from "react-router-dom";


const Head = () => {
    const navigate = useNavigate()
    const logout = () => {
        localStorage.removeItem('access_token')
        navigate('login')
    }

    return <div className="  has-background-black-ter">
        <div className="columns is-mobile">
            <div className="column is-1"></div>
            <div className="is-size-1  column is-9">YooPii</div>
            <div onClick={logout} className="column is-size-5 button ">Quit</div>
        </div>
    </div>
}

export default Head