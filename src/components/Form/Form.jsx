import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Input from '../Input/Input';
import Button from '../Button/Button';
import { TasksListAction } from "../../store/TasksList"

import classes from "./Form.module.scss"
import { NewTaskAction } from '../../store/NewTask';

function Form() {
  const dispatch = useDispatch();
  const task = useSelector(state => state.newTask);

  function handleFormSubmit(event) {
    event.preventDefault();

    dispatch(TasksListAction.addTask(task.title));
    dispatch(NewTaskAction.handleChange(""));
  }

  return (
    <form onSubmit={handleFormSubmit} >
        <Input />
        <Button />
    </form>
  )
}

export default Form;