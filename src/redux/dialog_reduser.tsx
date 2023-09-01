import { ActionTypes, DialogPageType, StoreType } from "./store"

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'


export const updeatNewMessageAC = (body: string) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: body
    } as const
}
export const sendMessageAC = () => {
    return {
        type: SEND_MESSAGE
    } as const
}
let initialSate: DialogPageType = {
    dialogs: [
        { id: 1, name: 'Dimych' },
        { id: 2, name: 'Alex' },
        { id: 3, name: 'Sveta' },
        { id: 4, name: 'Kisa' }
    ],
    messages: [
        { id: 1, message: 'hi' },
        { id: 2, message: 'low' },
        { id: 3, message: 'hight' },
        { id: 4, message: 'bye' }
    ],
    newMessageBody: ''
}

const dialogReduser = (state = initialSate, action: ActionTypes) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body
            return state
        case SEND_MESSAGE:
            const steteCopy = { ...state }
            let body = steteCopy.newMessageBody

            steteCopy.messages.push({ id: 5, message: body })
            steteCopy.newMessageBody = ''
            return steteCopy
        default:
            return state
    }
}

export default dialogReduser