import * as  React from "react";
import "bulma/css/bulma.min.css"

import Foot from "./common/Foot";
import Head from "./common/Head";
import Login from "./login/Login";
import Lobby from "./lobby/Lobby";

import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

const App = () => {

    return (<section style={{height: '100vh', overflowX: 'hidden', overflowY: 'hidden'}}
                     className="hero is-primary is-fullheight has-background-dark ">
        <BrowserRouter>
            <Head/>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="login" element={<Login/>}/>
                <Route path="lobby" element={<Lobby/>}/>
            </Routes>
        </BrowserRouter>

        <Foot/>
    </section>)
}

export default App