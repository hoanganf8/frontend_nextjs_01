import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./slices/counterSlice";
import { todoSlice } from "./slices/todoSlice";
import { postSlice } from "./slices/postSlice";
export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    todo: todoSlice.reducer,
    post: postSlice.reducer
  },
});
