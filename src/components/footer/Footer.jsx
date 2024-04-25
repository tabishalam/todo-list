import React from 'react'

import classes from "./Footer.module.scss"

function Footer({ clearCompletedTask, clearAllTask }) {
  return (
    <footer>
        <button className={classes.button} type='button' onClick={clearCompletedTask}>Clear Completed Task</button>
        <button className={classes.button} type='button' onClick={clearAllTask}>Clear All Task</button>
    </footer>
  )
}

export default Footer;