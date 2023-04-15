import React from 'react'
import { PostType } from '../../redux/state'
import MyPosts from './MyPosts/MyPosts'
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import { log } from 'console'

type PropsType = {
  // addPost: (postText: string) => void
  posts: PostType[]
  newPostText: string
  // updateNewPostText: (NewText: string) => void
  dispath: (action: any) => void
}
function Profile(props: PropsType) {
  return (
    <div>
      <ProfileInfo />
      <MyPosts
        posts={props.posts}
        newPostText={props.newPostText}
        dispath={props.dispath}
      // addPost={props.addPost}
      // updateNewPostText={props.updateNewPostText}
      />
    </div>
  )
}

export default Profile