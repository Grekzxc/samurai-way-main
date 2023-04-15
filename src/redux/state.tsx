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
}
type SidebarType = {}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogPage: DialogPageType
    sidebar: SidebarType
}
export type AddPostActionType = {
    type: 'ADD_POST'
    postText: string
}
export type ChangeNewTextActionType = {
    type: 'UPDATE_NEW_POST_TEXT'
    NewText: string
}
export type ActionTypes = AddPostActionType | ChangeNewTextActionType

export type StoreType = {
    _state: RootStateType
    // addPost: (postText: string) => void
    // updateNewPostText: (NewText: string) => void
    _callSubscriber: (store: StoreType) => void
    subscribe: (observer: any) => void
    getState: () => RootStateType
    dispath: (action: AddPostActionType | ChangeNewTextActionType) => void
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
            ]
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
        if (action.type === 'ADD_POST') {
            const newPost: PostType = {
                id: 5,
                message: action.postText,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(store)
        } else if (action.type === 'UPDATE_NEW_POST_TEXT') {
            this._state.profilePage.newPostText = action.NewText
            this._callSubscriber(store)
        }
    }
}



export default store;