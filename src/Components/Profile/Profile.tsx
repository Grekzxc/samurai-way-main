import React from 'react'
import { PostType } from '../../redux/state'
import MyPosts from './MyPosts/MyPosts'
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'

type PropsType = {
  posts: Array<PostType>
}
function Profile(props: PropsType) {
  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={props.posts} />
    </div>
  )
}

export default Profile