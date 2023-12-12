import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import NoAvatar from '../../assets/NoAvatar.svg'

export const registerUser = createAsyncThunk(
    'auth/register',
    async ({ nickname, email, password }, { rejectWithValue }) => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            };
            const response = await axios.post(
                'http://localhost:3002/auth/signup/',
                { nickname, email, password },
                config
            );
            return response.data;
        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message);
            } else {
                return rejectWithValue(error.message);
            }
        }
    }
);

export const userLogin = createAsyncThunk(
    'auth/login',
    async ({ email, password }, { rejectWithValue }) => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
            const { data } = await axios.post(
                `http://localhost:3002/auth/login`,
                { email, password },
                config
            )
            // store user's token in local storage
            localStorage.setItem('role', data.role)
            return data
        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isSignUp: false,
        loading: false,
        userInfo: {},
        authenticated: false,
        error: null,
        success: false,
    },
    reducers: {
        HANDLE_FORM(state, action) {
            const { key, value, formKey } = action.payload;
            state.forms[formKey][key] = value;
        },
        TOGGLE_SIGNUP(state) {
            state.isSignUp = !state.isSignUp;
        },
        // CHANGE_AVATAR(state, action) {
        //     const { imageFile } = action.payload;
        //     state.avatarUrl = URL.createObjectURL(imageFile)
        // },
    },
    extraReducers: (builder) => {
        builder
            // Register
            .addCase(registerUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(registerUser.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.success = true;
                state.authenticated = true;
            })
            .addCase(registerUser.rejected, (state, { payload }) => {
                state.loading = false;
                state.error = payload;
            })
            // Login
            .addCase(userLogin.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(userLogin.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.userInfo = payload;
                state.authenticated = true;
            })
            .addCase(userLogin.rejected, (state, { payload }) => {
                state.loading = false;
                state.error = payload;
            });
    },
});

export const { TOGGLE_SIGNUP, HANDLE_FORM, CHANGE_AVATAR } = authSlice.actions;
export default authSlice.reducer;