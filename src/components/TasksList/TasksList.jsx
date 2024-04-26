import React from 'react'
import { useSelector } from 'react-redux';

import Task from "../Task/Task";
import classes from "./TasksList.module.scss"

function TasksList() {
    const Tasks = useSelector(state => state.tasksList);

    const tasksList = Tasks.map((task, index) => <Task key={`task-${index}`} task={task.title} isCompleted={task.isCompleted} id={index} />);
    return(
        <div className={classes.tasks}> 
            {tasksList}
        </div>)
}

export default TasksList;