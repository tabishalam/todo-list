import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

import classes from "./Input.module.scss"
import { NewTaskAction } from "../../store/NewTask"

function Input() {
  const dispatch = useDispatch();
  const value = useSelector(state => state.newTask.title);

  function handleChange(event) {
    dispatch(NewTaskAction.handleChange(event.target.value))
  }

  return <input className={classes.input} type="text" placeholder="Add new list item" value={value} onChange={handleChange}  />
}

export default Input;