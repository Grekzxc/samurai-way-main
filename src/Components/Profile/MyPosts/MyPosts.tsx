import React from 'react'
import { PostType } from '../../../redux/state'
import s from './MyPosts.module.css'
import Posts from './Posts/Posts'

type PropsType = {
  posts: PostType[]
  addPost: (postText: string) => void
}

const MyPosts = (props: PropsType) => {
  const postEl = props.posts.map(el =>
    <Posts id={el.id} message={el.message} likesCount={el.likesCount} />)

  const newPostElement = React.createRef<HTMLTextAreaElement>()

  const onAddPostHandler = () => {
    const text: any = newPostElement.current?.value
    props.addPost(text)
  }


  return (
    <div>
      <h3>My post</h3>
      <div>
        <div>
          <textarea ref={newPostElement}></textarea>
        </div>
        <div>
          <button onClick={onAddPostHandler}>Add post</button>
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

