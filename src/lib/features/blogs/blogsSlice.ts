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

export const fetchBlogEspecific = createAsyncThunk(
    '/blog-especific',
    async (slug: string) => {
        const response = await BlogsApi.blogEspecific(`http://localhost:3001/blog-especific`, slug);
        return response
    }
)

export interface BlogState {
    listBlogs: Array<Object>
    blogEspecific: any
}

const initialState: BlogState = {
    listBlogs: [],
    blogEspecific: {}
}

export const blogSlice = createSlice({
    name: "blog",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchAllBlogs.fulfilled, (state, action) => {
            state.listBlogs = action.payload
        }),
        builder.addCase(fetchBlogEspecific.fulfilled, (state, action) => {
            state.blogEspecific = action.payload
        })
    },
})

export const selectBlog = (state: RootState) => state.blog

export default blogSlice.reducer;