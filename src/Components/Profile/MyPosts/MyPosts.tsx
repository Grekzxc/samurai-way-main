import React from 'react'
import state, { PostType, ProfilePageType } from '../../../redux/state'
import s from './MyPosts.module.css'
import Posts from './Posts/Posts'

type PropsType = {
  posts: Array<PostType>
}

const MyPosts = (props: PropsType) => {
  let postEl = props.posts.map(el =>
    <Posts id={el.id} message={el.message} likesCount={el.likesCount} />)
  return (
    <div>
      <h3>My post</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        New post
      </div>
      {postEl}
    </div>
  )
}

export default MyPosts

