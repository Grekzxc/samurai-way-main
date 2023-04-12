
// 1 урок по типизации Социальной сети

import { rerenderEntireTree } from ".."

// import { rerenderEntireTree } from "../render"

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


let state: RootStateType = {
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
}

export const addPost = () => {
    const newPost: PostType = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ''
    rerenderEntireTree(state)
}

export const updateNewPostText = (NewText: string) => {
    state.profilePage.newPostText = NewText
    rerenderEntireTree(state)
}

export default state;