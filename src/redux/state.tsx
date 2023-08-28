import { _callSubscriber } from ".."

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

const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'

type PropsType = {
    store: StoreType;
    _state: RootStateType; // Добавлено свойство _state
    dispath: (action: ActionTypes) => void;
    newPostText: string;
};

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
        if (action.type === ADD_POST) {
            const newPost: PostType = {
                id: 5,
                message: action.postText,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(store)
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.NewText
            this._callSubscriber(store)
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogPage.newMessageBody = action.body
            this._callSubscriber(store)
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogPage.newMessageBody
            this._state.dialogPage.newMessageBody = ''
            this._state.dialogPage.messages.push({ id: 5, message: body })
            this._callSubscriber(store)
        }
    }
}
export const addPostAC = (postText: string) => {
    return {
        type: 'ADD_POST',
        postText: postText
    } as const
}
export const updateNewPostAC = (NewText: string) => {
    return {
        type: 'UPDATE_NEW_POST_TEXT',
        NewText: NewText
    } as const
}

export const updeatNewMessageAC = (body: string) => {
    return {
        type: 'UPDATE_NEW_MESSAGE_BODY',
        body: body
    } as const
}
export const sendMessageAC = () => {
    return {
        type: 'SEND_MESSAGE'

    } as const
}


// export type AddPostActionType = {
//     type: 'ADD_POST'
//     postText: string
// }
// export type ChangeNewTextActionType = {
//     type: 'UPDATE_NEW_POST_TEXT'
//     NewText: string
// }
// export type NewMessageBody = {
//     type: 'UPDATE_NEW_MESSAGE_BODY'
//     body: string
// }
// export type SendMessage = {
//     type: 'SEND_MESSAGE'
// }

// export type AddPostActionTypes = ReturnType<typeof addPostAC>
// export type ChangeNewTextActionTypes = ReturnType<typeof updateNewPostAC>


export default store;