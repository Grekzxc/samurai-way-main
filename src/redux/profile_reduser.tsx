import { ActionTypes, PostType, ProfilePageType, StoreType } from "./store"

const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'

export const addPostAC = (postText: string) => {
    return {
        type: ADD_POST,
        postText: postText
    } as const
}
export const updateNewPostAC = (NewText: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        NewText: NewText
    } as const
}

let initialSate: ProfilePageType = {
    posts: [
        { id: 1, message: 'hi,how are you', likesCount: 12 },
        { id: 2, message: 'hi,my friend, go like me', likesCount: 13 },
        { id: 3, message: 'hi,how are you', likesCount: 12 },
        { id: 4, message: 'hi,how are you', likesCount: 12 }
    ],
    newPostText: ''
}

const profileReduser = (store = initialSate, action: ActionTypes) => {

    switch (action.type) {
        case ADD_POST:
            const newPost: PostType = {
                id: 5,
                message: action.postText,
                likesCount: 0
            }
            store.posts.push(newPost)
            store.newPostText = ''
            return store
        case UPDATE_NEW_POST_TEXT:
            store.newPostText = action.NewText
            return store
        default:
            return store
    }

}

export default profileReduser