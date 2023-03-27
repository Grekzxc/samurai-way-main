import React from 'react'
import { addPost, PostType } from '../../redux/state'
import MyPosts from './MyPosts/MyPosts'
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'

type PropsType = {
  addPost: (postText: string) => void
  posts: PostType[]
}
function Profile(props: PropsType) {
  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={props.posts} addPost={props.addPost} />
    </div>
  )
}

export default Profile