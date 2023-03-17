import React from 'react'
import s from './Posts.module.css'


type PostsType = {
  id: number
  message: string
  likesCount: number
}

const Posts = (props: PostsType) => {

  return (
    <div>
      <div className={s.item}>
        <img src="https://i.kinja-img.com/gawker-media/image/upload/t_original/ijsi5fzb1nbkbhxa2gc1.png" />
        {props.message}
        <div>
          <span>{props.likesCount}</span>
        </div>
      </div>
    </div>
  )
}

export default Posts