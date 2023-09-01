import React from 'react'
import { PostType } from '../../redux/store'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'

type PropsType = {
  posts: PostType[]
  newPostText: string
  dispatch: (action: any) => void
}
function Profile(props: PropsType) {
  return (
    <div>
      <ProfileInfo />
      <MyPosts
        posts={props.posts}
        newPostText={props.newPostText}
        dispath={props.dispatch}
      />
    </div>
  )
}

export default Profile