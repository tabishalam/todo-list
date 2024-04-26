import { configureStore } from "@reduxjs/toolkit"

import NewTaskReducer from "./NewTask";
import TasksListReducer from "./TasksList";

const store = configureStore({
    reducer: {
        tasksList: TasksListReducer,
        newTask: NewTaskReducer
    }
})

export default store;
