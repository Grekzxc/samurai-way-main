import React from 'react'
import { ActionTypes, ChangeNewTextActionType, PostType } from '../../../redux/state'
import s from './MyPosts.module.css'
import Posts from './Posts/Posts'
import { log } from 'console'

type PropsType = {
  posts: PostType[]
  newPostText: string
  dispath: (action: ActionTypes) => void
}

const MyPosts = (props: PropsType) => {
  const postEl = props.posts.map(el =>
    <Posts id={el.id} message={el.message} likesCount={el.likesCount} />)

  const newPostElement = React.createRef<HTMLTextAreaElement>()

  const onAddPostHandler = () => {
    props.dispath({ type: 'ADD_POST', postText: props.newPostText })
  }
  const onPostChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {

    const text: string = e.currentTarget.value
    let action = ({ type: 'UPDATE_NEW_POST_TEXT', NewText: text } as ChangeNewTextActionType)
    props.dispath(action)
  }

  return (
    <div>
      <h3>My post</h3>
      <div>
        <div>
          <textarea
            ref={newPostElement}
            onChange={onPostChange}
            value={props.newPostText} />
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

