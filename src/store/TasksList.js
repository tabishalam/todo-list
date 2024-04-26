import { createSlice } from "@reduxjs/toolkit";

const initialState = []

const TasksListSlice = createSlice({
    name: "tasksList",
    initialState,
    reducers: {
        addTask(state, action) {
            state.push({
                title: action.payload,
                isCompleted: false
            })
        },        
        handleStatusChange(state, action) {
            state[action.payload].isCompleted = !state[action.payload].isCompleted
        },  
        clearCompletedTask(state) {
            state = state.filter(task => task.isCompleted === false);
            return state;
        },
        clearAllTask(state) {
            state = [];
            return state;
        }
    }
})

export const TasksListAction = TasksListSlice.actions;
export default TasksListSlice.reducer;