import { createAsyncThunk } from "@reduxjs/toolkit";
export const getPosts = createAsyncThunk('getPosts', async () => {
    const response = await fetch('http://localhost:3005/posts');
    const data  = await response.json();
    return data;
});

export const addPost = createAsyncThunk('addPost', async (data) => {
    const response = await fetch('http://localhost:3005/posts', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
    if (response.ok) {
        const data = await response.json();
        return data;
    }
});

/*
createAsyncThunk -> Trả về promise
- pending
- fulfilled
- rejected
*/
// console.log(getPosts.pending());
// console.log(getPosts.fulfilled());
// console.log(getPosts.rejected());