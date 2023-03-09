import React from 'react';
import s from './Dialogs.module.css'


const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.item + ' ' + s.active}>
                    Dimych
                </div>
                <div className={s.item}>
                    Andrew
                </div>
                <div className={s.item}>
                    Alex
                </div>
                <div className={s.item}>
                    Kisa
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi, how are you</div>
                <div className={s.message}>Hi, i am like you</div>
                <div className={s.message}>Hi, your fine</div>
            </div>
        </div>

    )
}

export default Dialogs