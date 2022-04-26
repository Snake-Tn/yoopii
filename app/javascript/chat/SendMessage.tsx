import Input from "../common/Input";
import React, {useState} from "react";
import axios from "axios";
import params from "../parameters";

const SendMessage = ({roomId}: { roomId: string }) => {
    const [message, setMessage] = useState('')
    const onSubmit = async (event: React.FormEvent) => {
        event.preventDefault()
        if (message.length === 0) return
        
        setMessage('')
        await axios.post(params.api_messages_path, {content: message, receiver_id: roomId})
    }
    return <form onSubmit={onSubmit}>
        <Input type="text" placeholder="Type a message" name="message" className="mt-2 has-background-grey-lighter input is-size-8"  value={message}
               setValue={setMessage}/>
    </form>
}


export default SendMessage