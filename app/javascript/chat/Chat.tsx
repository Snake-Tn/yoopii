import React from "react";
import ListMessages from "./ListMessages";

import SendMessage from "./SendMessage";

const Chat = ({roomId}: { roomId: string }) => {

    return <div className="is-size-6 m-3">
        <ListMessages roomId={roomId}/>
        <SendMessage roomId={roomId}/>
    </div>

}
export default Chat