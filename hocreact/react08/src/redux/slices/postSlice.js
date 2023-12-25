import { createSlice } from "@reduxjs/toolkit";
import { addPost, getPosts } from "../middlewares/postMiddleware";
const initialState = {
  postList: [],
  status: 'idle'
};
export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(getPosts.pending, (state) => {
        state.status = 'pending';
    });
    builder.addCase(getPosts.fulfilled, (state, action) => {
        state.postList = action.payload;
        state.status = 'success';
    });
    builder.addCase(getPosts.rejected, (state) => {
        state.status = 'error';
    });
    
    builder.addCase(addPost.fulfilled, (state, action) => {
      state.postList.push(action.payload);
    })
  }
});
