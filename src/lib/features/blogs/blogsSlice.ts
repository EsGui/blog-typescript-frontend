import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from '../../store';
import BlogsApi from "@/api/BlogsApi";

const url = "http://localhost:3001/list-blogs";

export const fetchAllBlogs = createAsyncThunk(
    '/list-blogs',
    async () => {
        const response = await BlogsApi.listBlog(url);
        return response;
    }
)

export const sendBlogToolkit = createAsyncThunk(
    'send-blog',
    async () => {
        
    }
)

export interface BlogState {
    listBlogs: Array<Object>
}

const initialState: BlogState = {
    listBlogs: []
}

export const blogSlice = createSlice({
    name: "blog",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchAllBlogs.fulfilled, (state, action) => {
            state.listBlogs = action.payload
        })
    },
})

export const selectBlog = (state: RootState) => state.blog

export default blogSlice.reducer;