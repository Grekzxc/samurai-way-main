import { _callSubscriber } from ".."
import dialogReduser, { sendMessageAC, updeatNewMessageAC } from "./dialog_reduser"
import profileReduser, { addPostAC, updateNewPostAC } from "./profile_reduser"
import sidebarReduser from "./sidebar_reduser"

export type MessageType = {
    id: number
    message: string
}
export type DialogsType = {
    id: number
    name: string
}
export type PostType = {
    id: number
    message: string
    likesCount: number
}
export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}
export type DialogPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessageType>
    newMessageBody: string
}
type SidebarType = {}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogPage: DialogPageType
    sidebar: SidebarType
}

export type ActionTypes =
    ReturnType<typeof addPostAC> |
    ReturnType<typeof updateNewPostAC> |
    ReturnType<typeof updeatNewMessageAC> |
    ReturnType<typeof sendMessageAC>
// ReturnType<typeof dialogReduser>

const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'

export type StoreType = {
    _state: RootStateType
    _callSubscriber: (store: StoreType) => void
    subscribe: (observer: any) => void
    getState: () => RootStateType
    dispath: (action: ActionTypes) => void
}

let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'hi,how are you', likesCount: 12 },
                { id: 2, message: 'hi,my friend, go like me', likesCount: 13 },
                { id: 3, message: 'hi,how are you', likesCount: 12 },
                { id: 4, message: 'hi,how are you', likesCount: 12 }
            ],
            newPostText: ''
        },
        dialogPage: {
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
        },
        sidebar: {}
    },
    getState() {
        return this._state
    },
    _callSubscriber() {
        console.log('state chenget');
    },
    subscribe(observer: any) {
        this._callSubscriber = observer
    },
    dispath(action) {

        this._state.profilePage = profileReduser(this._state.profilePage, action)
        this._state.dialogPage = dialogReduser(this._state.dialogPage, action)
        this._state.sidebar = sidebarReduser(this._state.sidebar, action)
        this._callSubscriber(store)

        // if (action.type === ADD_POST) {
        //     const newPost: PostType = {
        //         id: 5,
        //         message: action.postText,
        //         likesCount: 0
        //     }
        //     this._state.profilePage.posts.push(newPost)
        //     this._state.profilePage.newPostText = ''
        //     this._callSubscriber(store)
        // } else if (action.type === UPDATE_NEW_POST_TEXT) {
        //     this._state.profilePage.newPostText = action.NewText
        //     this._callSubscriber(store)
        // } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
        //     this._state.dialogPage.newMessageBody = action.body
        //     this._callSubscriber(store)
        // } else if (action.type === SEND_MESSAGE) {
        //     let body = this._state.dialogPage.newMessageBody
        //     this._state.dialogPage.newMessageBody = ''
        //     this._state.dialogPage.messages.push({ id: 5, message: body })
        //     this._callSubscriber(store)
        // }
    }
}

export default store;