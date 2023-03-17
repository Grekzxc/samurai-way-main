import React from 'react'
import state from '../../../redux/state'
import s from './MyPosts.module.css'
import Posts from './Posts/Posts'

const MyPosts = () => {

  let posts = [
    { id: 1, message: 'hi,how are you', likesCount: 12 },
    { id: 2, message: 'hi,my friend, go like me', likesCount: 13 },
    { id: 3, message: 'hi,home', likesCount: 12 },
    { id: 4, message: 'hi,no maney-no honey', likesCount: 12 }
  ]
  let postEl = posts.map(el => <Posts id={el.id} message={el.message} likesCount={el.likesCount} />)

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

