import {Room} from "../../types";
import React from "react";
import axios from "axios";
import params from "../../parameters";
import ShowRoom from "./ShowRoom";


const HostedRoom = ({room, setHostedRoom}: { room: Room, setHostedRoom: (room: Room | undefined) => void }) => {

    const close = async () => {
        const response = await axios.delete(params.api_rooms_path + '/' + room.id)
        if (response.status < 300) {
            setHostedRoom(undefined)
        }

    }
    const start = () => {

    }
    return <ShowRoom room={room} onClose={close} withKicking>
        <div className="buttons is-right mt-6">
            <button onClick={start}
                    className="button has-text-weight-semibold has-text-white-ter has-background-success-dark ">Start
            </button>
        </div>
    </ShowRoom>
}
export default HostedRoom