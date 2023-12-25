import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  todoList: [],
};
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    //action
    addTodo: (state, action) => {
        state.todoList.push(action.payload);
    }
  },
});
