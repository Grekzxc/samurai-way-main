import React from 'react'
import { addPost, PostType } from '../../redux/state'
import MyPosts from './MyPosts/MyPosts'
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'

type PropsType = {
  addPost: (postText: string) => void
  posts: PostType[]
  newPostText: string
  updateNewPostText: (NewText: string) => void
}
function Profile(props: PropsType) {
  return (
    <div>
      <ProfileInfo />
      <MyPosts
        posts={props.posts}
        addPost={props.addPost}
        newPostText={props.newPostText}
        updateNewPostText={props.updateNewPostText}
      />
    </div>
  )
}

export default Profile