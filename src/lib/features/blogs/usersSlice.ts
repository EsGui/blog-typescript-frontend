import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from '../../store';
import UsersApi from "@/api/UsersApi";

const url = "http://localhost:3001/";

export const fetchCreateUsers = createAsyncThunk(
    '/register-user',
    async ({ name, email, nickname, password }: any) => {
        const response = await UsersApi.registerUser(url, name, email, nickname, password);
        return response;
    }
)

export const fetchLoginUser = createAsyncThunk(
    '/login',
    async ({ email, password }: any) => {
        const response = await UsersApi.loginUser(url, email, password);
        localStorage.setItem("Token", JSON.stringify(response.token));
    }
)

export const fetchPersistLogin = createAsyncThunk(
    '/persist-login',
    async () => {
        const response = await UsersApi.persistLogin(url);
        console.log(response);
        return response;
    }
)

interface UsersState {
    user: any;
}

const initialState: UsersState = {
    user: {
        id: "",
        name: "",
        email: "",
        nickname: "",
    }
}

export const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        
    },
    extraReducers(builder) {
        builder.addCase(fetchPersistLogin.fulfilled, (state, action) => {
            console.log("action payload ===>>> ", action.payload)
            state.user.id = action.payload.user._id
            state.user.name = action.payload.user.name,
            state.user.email = action.payload.user.email,
            state.user.nickname = action.payload.user.nickname
        });
    },
});

export const selectTokenUser = (state: RootState) => state.users.user;

export default usersSlice.reducer;