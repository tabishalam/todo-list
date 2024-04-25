import React, { useCallback, useMemo, useState } from "react"

import Input from "./components/Input/Input";
import Button from "./components/Button/Button";
import Task from "./components/Task/Task";

import classes from "./App.module.scss"
import Footer from "./components/footer/Footer";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");


  // Handle input change of task input field 
  const handleTaskInput = useCallback(function handleTaskInput(event) {
    setNewTask(event.target.value);
  }, [])


  // Adds New task to task list
  const addTask = useCallback(function addTask(event) {
    event.preventDefault();
    
    setTasks(prevTasks => {
      return [...prevTasks, {
        title: newTask,
        completed: false
      }]
    })
    
    setNewTask("")
  }, [newTask])


  // Handels the status change of todo list item
  const handleStatusChange = useCallback(function handleStatusChange(event) {
    const id = event.target.id;
  
    // We can also acheive same result using map function but that's little bit tough to understand therefore 
    // for the shake of simplicity we are using this approach...
    const newData = {
      title: tasks[id].title,
      completed: !tasks[id].completed
    }

    setTasks(prevTasks => {
      prevTasks[id] = newData;  
      return [...prevTasks ]
    })
  }, [tasks])

  
  const clearCompletedTask = useCallback(function clearCompletedTask() {
    const updatedTasks = tasks.filter(task => task.completed === false)
    setTasks([...updatedTasks])
  }, [tasks])

  const clearAllTask = useCallback(function clearAllTask() {
    setTasks([])
  }, [])

  // Maps task from task list to render it on screen
  const tasksList = useMemo(() => tasks.map((task, index) => <Task key={`task-${index}`} task={task.title} id={index} status={task.status} onChange={handleStatusChange} isCompleted={task.completed} />), [tasks, handleStatusChange])

  return (
  <main>
      <h1 className={classes.header}>Daily To Do List</h1>
      <form onSubmit={addTask}>
        <Input value={newTask} onChange={handleTaskInput} />
        <Button />
      </form>
      
      <div className={classes.tasks}>
        {tasksList}
      </div>
      <Footer clearCompletedTask={clearCompletedTask} clearAllTask={clearAllTask} />
  </main>)
}

export default App
