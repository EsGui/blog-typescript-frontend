import { configureStore } from '@reduxjs/toolkit';
import blogSlice from './features/blogs/blogsSlice';
import usersSlice from './features/blogs/usersSlice';

export const makeStore = () => {
    return configureStore({
        reducer: {
            blog: blogSlice,
            users: usersSlice
        },
    })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch'];