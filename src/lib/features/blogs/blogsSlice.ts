import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from '../../store';

export interface BlogState {
    title: String,
    content: String,
    author: String,
    likes?: number,
}

const initialState: BlogState = {
    title: "",
    content: "",
    author: "",
    likes: 0
}

export const blogSlice = createSlice({
    name: "blog",
    initialState,
    reducers: {
        addBlog: (state, action: PayloadAction<any>) => {
            return {
                ...state,
                title: action.payload.title,
                content: action.payload.content,
                author: action.payload.author
            }
        },
    }
})

export const { addBlog } = blogSlice.actions;

export const selectBlog = (state: RootState) => state.blog

export default blogSlice.reducer