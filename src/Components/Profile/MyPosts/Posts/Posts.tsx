import React from 'react'
import s from './Posts.module.css'

const Posts = () => {
  return (
    <div>
      <div className={s.item}>
        <img src="https://i.kinja-img.com/gawker-media/image/upload/t_original/ijsi5fzb1nbkbhxa2gc1.png" />
        post1
        <div>
          <span>Like</span>
        </div>
      </div>
    </div>
  )
}

export default Posts