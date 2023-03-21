import React from 'react';
import { DialogsType, MessageType } from '../../redux/state';
import { DialogItem } from './DialogItem/DialogItem';
import s from './Dialogs.module.css'
import Message from './Message/Message';

type DialogPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessageType>
}
const Dialogs = (props: DialogPageType) => {
    let dialogEl = props.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)
    let messageEl = props.messages.map(m => <Message message={m.message} />)
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