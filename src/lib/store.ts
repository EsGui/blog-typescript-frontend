import { configureStore } from '@reduxjs/toolkit';
import { blogSlice } from './features/blogs/blogsSlice';

export const makeStore = () => {
    return configureStore({
        reducer: {
            blog: blogSlice.reducer
        }
    })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch'];