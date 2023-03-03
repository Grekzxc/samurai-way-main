import React from 'react'
import s from './MyPosts.module.css'
import Posts from './Posts/Posts'

const MyPosts = ()=>{
    return (
        <div>
          My post
          <div>
          <textarea></textarea>
          <button>Add post</button>
          </div>
          <div className={s.posts}>
            New post
          </div>
        <Posts message='Hi, how are you'/>
        <Posts message='It`s my first post'/>
        </div>
    )
}

export default MyPosts

