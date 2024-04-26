import { createSlice } from "@reduxjs/toolkit";

const initialState = { title: "" }

const NewTaskSlice = createSlice({
    name: "newTask",
    initialState,
    reducers: {
        handleChange(state, action) {
            state.title = action.payload;
        }
    }
})

export const NewTaskAction = NewTaskSlice.actions;
export default NewTaskSlice.reducer;
