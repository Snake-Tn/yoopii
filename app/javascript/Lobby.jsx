import React from "react";
import "bulma/css/bulma.min.css"
import Foot from "./Foot";
import Head from "./Head";
import Login from "./Login";


class Lobby extends React.Component {
    render() {
        return <section style ={{height:'100vh',overflowX:'hidden',overflowY:'hidden'}} className="hero is-primary is-fullheight has-background-dark ">

           <Head/>
           <Login/>
           <Foot/>
        </section>

    }
}

export default Lobby