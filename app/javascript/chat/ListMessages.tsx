import React, {useContext, useEffect, useState} from "react";
import {Message} from "../types";
import axios from "axios";
import params from "../parameters";
import authorizationContext from "../hooks/AuthorizationContext";
import AuthorizationContext from "../hooks/AuthorizationContext";

const ListMessages = ({roomId}: { roomId: string }) => {
    const [messages, setMessages] = useState<Array<Message>>([])
    const fetchAllMessages = async () => {
        const response = await axios.get(params.api_messages_path, {params: {room_id: roomId}})
        setMessages(response.data)
    }
    const authorizationContext = useContext(AuthorizationContext)

    useEffect(() => {
        const interval = setInterval(fetchAllMessages, 2000)
        return () => {
            clearInterval(interval)
        }
    }, [])
    if (messages.length === 0) {
        return null
    }
    return <ul className="has-background-grey-light p-4">
        {messages.map((message) =>
            <li key={message.id}>
                <label
                    className={authorizationContext.player?.id === message.sender.id ? "has-text-info-dark" : "has-text-primary-light"}>
                    {message.sender.username}:&nbsp;
                </label>
                {message.content}

            </li>
        )}
    </ul>

}
export default ListMessages