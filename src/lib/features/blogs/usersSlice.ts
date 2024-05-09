import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from '../../store';
import UsersApi from "@/api/UsersApi";

const url = "http://localhost:3001/register-user"

export const fetchCreateUsers = createAsyncThunk(
    '/register-user',
    async ({ name, email, password }) => {
        const response = await UsersApi.registerUser(url, name, email, password);
        return response;
    }
)

interface UsersState {
    token: String
}

const initialState: UsersState = {
    token: ""
}

export const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {}
})