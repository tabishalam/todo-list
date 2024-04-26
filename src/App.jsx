import React from "react"

import classes from "./App.module.scss"
import Footer from "./components/footer/Footer";
import TasksList from "./components/TasksList/TasksList";
import Form from "./components/Form/Form";

function App() {
  return (
    <main>
        <h1 className={classes.header}>Daily To Do List</h1>      
        <Form />        
        <TasksList />
        <Footer />
    </main>
  )
}

export default App
