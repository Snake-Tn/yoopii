import React, {useState} from 'react';
import "bulma/css/bulma.min.css"
import Foot from "./common/Foot";
import Head from "./common/Head";
import Login from "./login/Login";
import Lobby from "./lobby/Lobby";

import {Player} from "./types";

const App = () => {

    const [currentPlayer, setCurrentPlayer] = useState<Player>()

    return (<section style={{height: '100vh', overflowX: 'hidden', overflowY: 'hidden'}}
                     className="hero is-primary is-fullheight has-background-dark ">

        <Head currentPlayer={currentPlayer} setCurrentPlayer={setCurrentPlayer}/>
        {!currentPlayer && <Login setCurrentPlayer={setCurrentPlayer}/>}
        {currentPlayer && <Lobby/>}
        <Foot/>
    </section>)
}

export default App