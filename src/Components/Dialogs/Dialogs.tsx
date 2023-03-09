import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css'


type DialogItemType = {
    name: string
    id: number
}

const DialogItem = (props: DialogItemType) => {
    let path = '/dialogs/' + props.id
    return (
        <div className={s.item + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

type MessageType = {
    message: string
}

const Message = (props: MessageType) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

const Dialogs = (props: DialogItemType) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name='Dimych' id={1} />
                <DialogItem name='Andrew' id={2} />
                <DialogItem name='Alex' id={3} />
                <DialogItem name='Kisa' id={4} />
            </div>
            <div className={s.messages}>
                <Message message='Hi, how are you' />
                <Message message='Hi, i am like you' />
                <Message message='Hi, your fine' />
            </div>
        </div>

    )
}

export default Dialogs