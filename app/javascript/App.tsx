import React from 'react';
import "bulma/css/bulma.min.css"
import Foot from "./common/Foot";
import Head from "./common/Head";
import Login from "./login/Login";
import Lobby from "./lobby/Lobby";

import {PlayerContextProvider} from "./login/PlayerContext";

const App = () => {

    return (<section style={{height: '100vh', overflowX: 'hidden', overflowY: 'hidden'}}
                     className="hero is-primary is-fullheight has-background-dark ">
        <PlayerContextProvider>
            <Head/>
            <Login/>
            <Lobby/>
            <Foot/>
        </PlayerContextProvider>
    </section>)
}

export default App