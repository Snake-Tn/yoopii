import React, {useState} from "react";
import Input from "../common/Input";
import {Room} from "../types";


const NewRoom = () => {
    const [room, setRoomData] = useState<Room>({
            title: '',
            description: '',
            game_id: '',
        }
    )
    const setValue = (value: string, name: string) => {
        setRoomData({...room, [name]: value})
    }

    const selectGame = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setRoomData({...room, game_id: e.target.value})
    }


    return <form>
        <div className={"is-size-4"}>New room</div>
        <div className="field">
            <div className="control">
                <Input name={"title"} value={room.title} setValue={setValue} className="input" type="text"
                       placeholder="Title"/>
            </div>
        </div>
        <div className="field">
            <div className="control">
                <Input name={"description"} value={room.description} setValue={setValue} className="input" type="text"
                       placeholder="Description"/>
            </div>
        </div>
        <div className="field">
            <div className="control">
                <div className="select">
                    <select name={"game_id"} value={room.game_id} onChange={selectGame}>
                        <option value={''} disabled>--Game</option>
                        <option value={'1'}>SmartBash</option>
                        <option value={'2'}>SmartBash2</option>
                    </select>
                </div>
            </div>
        </div>
        <div className="buttons is-right">
            <button className="button has-text-weight-semibold has-background-grey-lighter">Host</button>
        </div>

    </form>
}

export default NewRoom