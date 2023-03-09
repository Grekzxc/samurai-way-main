import React from 'react'
import s from './MyPosts.module.css'
import Posts from './Posts/Posts'

const MyPosts = () => {
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
      <Posts message='Hi, how are you' likesCount='23' />
      <Posts message='It`s my first post' likesCount='12' />
    </div>
  )
}

export default MyPosts

