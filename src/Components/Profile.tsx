import React from 'react'
import s from './Profile.module.css'

function Profile(){
    return(
        <div className={s.content}>
        <div>
          <img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg' alt="" />
        </div>
        <div>ava+description</div>
        <div>
          My post
          <div className={s.posts}>
            New post
          </div>
          <div className={s.item}>post1</div>
          <div className={s.item}>post2</div>
          <div className={s.item}>post3</div>
        </div>

      </div>
    )
}

export default Profile