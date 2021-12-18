import React from 'react';
import "bulma/css/bulma.min.css"
import Foot from "./common/Foot";
import Head from "./common/Head";
import Login from "./login/Login";
import Lobby from "./lobby/Lobby";

import {AuthorizationContextProvider} from "./hooks/AuthorizationContext";

const App = () => {

    return (<section style={{height: '100vh', overflowX: 'hidden', overflowY: 'hidden'}}
                     className="hero is-primary is-fullheight has-background-dark ">
        <AuthorizationContextProvider>
            <Head/>
            <Login/>
            <Lobby/>
            <Foot/>
        </AuthorizationContextProvider>
    </section>)
}

export default App