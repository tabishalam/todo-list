import React from 'react'

import classes from "./Task.module.scss"
import { useDispatch } from 'react-redux';
import { TasksListAction } from '../../store/TasksList';

function Task({ task, id, isCompleted }) {
  const dispatch = useDispatch();

  function handleChange() {
    dispatch(TasksListAction.handleStatusChange(id))
  }
  
  return (
    <div className={classes.checkbox__wrapper}>
        <input className={classes.checkbox__input} id={id} type="checkbox" onChange={handleChange} checked={isCompleted} />
        <label className={classes.checkbox__label} htmlFor={id}>
            <span>
                <svg width="18px" height="15px" viewBox="0 0 12 9">
                    <polyline points="1 5 4 8 11 1"></polyline>
                </svg>
            </span>
            <span className={classes.task}>{task}</span>
        </label>
    </div>
  )
}

export default Task;