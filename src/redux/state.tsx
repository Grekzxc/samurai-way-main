
// 1 урок по типизации Социальной сети

type MessageType = {
    id: number
    message: string
}
type DialogsType = {
    id: number
    name: string
}
type PostType = {
    id: number
    message: string
    likesCount: number
}
type ProfilePageType = {
    posts: Array<PostType>
}
type DialogPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessageType>
}
type SidebarType = {}

type RootStateType = {
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
        ]
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

export default state;