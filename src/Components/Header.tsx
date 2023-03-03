import React from 'react'
import classes from './Header.module.css'

function Header(){
    return(
        <header className={classes.header}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/500px-LEGO_logo.svg.png" alt="" />
      </header>
    )
}

export default Header