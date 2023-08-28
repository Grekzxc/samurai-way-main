import React, { ChangeEvent, FunctionComponent } from 'react';
import { ActionTypes, DialogsType, MessageType, RootStateType, StoreType, sendMessageAC, updeatNewMessageAC } from '../../redux/state';
import { DialogItem } from './DialogItem/DialogItem';
import s from './Dialogs.module.css'
import Message from './Message/Message';

type DialogPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessageType>
    dispatch: (action: ActionTypes) => void
    state: RootStateType
}


const Dialogs = (props: DialogPageType) => {
    let dialogEl = props.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)
    let messageEl = props.messages.map(m => <Message message={m.message} />)
    let onSendMessageClick = () => {
        props.dispatch(sendMessageAC())
    }
    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value
        props.dispatch(updeatNewMessageAC(body))
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogEl}
            </div>
            <div className={s.messages}>
                <div> {messageEl}</div>
                <div>
                    <div><textarea
                        onChange={onNewMessageChange}
                        value={props.state.dialogPage.newMessageBody}
                        placeholder='Enter your message'></textarea></div>
                    <div> <button onClick={onSendMessageClick}>add message</button> </div>
                </div>
            </div>
        </div>
    )
}
export default Dialogs
