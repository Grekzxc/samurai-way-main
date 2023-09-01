import React from 'react';
import { NavLink } from 'react-router-dom';
import { DialogsType } from '../../../redux/store';
import s from './../Dialogs.module.css'

// type DialogItemType = {
//     name: string
//     id: number
// }
export const DialogItem = (props: DialogsType) => {
    let path = '/dialogs/' + props.id
    return (
        <div className={s.item + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}


export default DialogItem