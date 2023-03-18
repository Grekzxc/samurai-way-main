import React from 'react';
import { DialogItem } from './DialogItem/DialogItem';
import s from './Dialogs.module.css'
import Message from './Message/Message';

type DialogItemType = {
    name: string
    id: number
}

let dialogs = [
    { id: 1, name: 'Dimych' },
    { id: 2, name: 'Alex' },
    { id: 3, name: 'Sveta' },
    { id: 4, name: 'Kisa' }
]
let messages = [
    { id: 1, message: 'hi' },
    { id: 2, message: 'low' },
    { id: 3, message: 'hight' },
    { id: 4, message: 'bye' }
]

let dialogEl = dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)
let messageEl = messages.map(m => <Message message={m.message} />)

const Dialogs = (props: DialogItemType) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogEl}
            </div>
            <div className={s.messages}>
                {messageEl}
            </div>
        </div>

    )
}
export default Dialogs