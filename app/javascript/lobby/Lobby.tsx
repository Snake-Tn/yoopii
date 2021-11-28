import React from 'react';
import NewRoom from './NewRoom';
import ListRooms from "./ListRooms";

const Lobby = () => {
    return <div className={"container is-fluid my-6 is-size-4"}>
        <NewRoom/>
        <div className={"is-size-6 my-4 has-text-centered"}>
            ----- Or -----
        </div>
        <ListRooms/>
    </div>
}
export default Lobby