import { message } from 'antd';
import React from 'react';
import { NavLink } from 'react-router-dom';
import state from '../../redux/state';
import s from './Dialogs.module.css'

type DialogItemType = {
    name: string
    id: number
}
type MessageType = {
    message: string
}
export const DialogItem = (props: DialogItemType) => {
    let path = '/dialogs/' + props.id
    return (
        <div className={s.item + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}
const Message = (props: MessageType) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
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