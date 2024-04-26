import React from 'react'

import classes from "./Footer.module.scss"
import { useDispatch } from 'react-redux';
import { TasksListAction } from '../../store/TasksList.js';

function Footer() {
  const dispatch = useDispatch();

  function ClearCompletedTasks() {
    dispatch(TasksListAction.clearCompletedTask());
  }

  function ClearAllTasks() {
    dispatch(TasksListAction.clearAllTask());
  }

  return (
    <footer>
        <button className={classes.button} type='button' onClick={ClearCompletedTasks}>Clear Completed Task</button>
        <button className={classes.button} type='button' onClick={ClearAllTasks}>Clear All Task</button>
    </footer>
  )
}

export default Footer;