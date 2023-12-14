import { createSlice } from '@reduxjs/toolkit'
import axios from "axios";

const initialState = {
    isSignUpBanner: false,
    loading: false,
    userInfo: {},
    authenticated: null,
    error: '',
    success: false,
    inputs : [
        {id:1,label:'nickname',type:'text'},
        {id:2,label:'email',type:'email'},
        {id:3,label:'password',type:'password'}
    ]
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        SET_IS_AUTHENTICATED(state,action){
            state.authenticated = action.payload
        },
        SET_IS_ERROR(state,action){
            state.error = action.payload
        },
        SET_IS_LOADING(state,action){
            state.loading = action.payload
        },
        SET_IS_SUCCESS_AUTH(state,action){
          state.success = action.payload
        },
        SET_USER_INFO(state,action){
          state.userInfo = action.payload
        },

        TOGGLE_SIGNUP_BANNER(state){
            state.isSignUpBanner = !state.isSignUpBanner
        }
    }
})

export const {SET_IS_AUTHENTICATED,TOGGLE_SIGNUP_BANNER,SET_IS_ERROR,SET_IS_LOADING,SET_USER_INFO,SET_IS_SUCCESS_AUTH} = authSlice.actions


export const checkLogin = function () {
    return async function (dispatch) {
        try {
            console.log("Checking login...");
            const response = await axios.get('http://localhost:3002/auth/login', {
                withCredentials: true,
            });
            console.log("Check login response:", response.data);
            dispatch(SET_USER_INFO(response.data));
        } catch (e) {
            console.log("Check login error:", e);
        }
    }
}

export const registerUser = function (data) {
    return async function (dispatch) {
        try{
            dispatch(SET_IS_LOADING(true))
            const {status} = await axios.post(`http://localhost:3002/auth/signup`, data)
            status === 200 && dispatch(SET_IS_AUTHENTICATED(true))
        }catch (e){
            console.log(e)
            dispatch(SET_IS_ERROR(e.response.data.error))
        }finally {
            dispatch(SET_IS_LOADING(false))
        }
    }
}

export const userLogin = function (data) {
    return async function (dispatch) {
        try {
            dispatch(SET_IS_LOADING(true));
            const {status,data: {role}} = await axios.post(`http://localhost:3002/auth/login`, data, {
                withCredentials: true,
            })
            if (status === 200 && role === 'active'){
                dispatch(SET_IS_AUTHENTICATED(true))
                dispatch(SET_USER_INFO(data))
            }
        } catch (e) {
            console.log(e);
            dispatch(SET_IS_ERROR(e.response.data))
        } finally {
            dispatch(SET_IS_LOADING(false))
        }
    }
}
export const userLogout = function () {
    return async function (dispatch) {
        try{
            const {status} = await axios.delete('http://localhost:3002/auth/logout1')
            if (status === 200){
                dispatch(SET_IS_AUTHENTICATED(false))
            }
        }catch (e){
            console.log(e)
        }
    }
}

export default authSlice.reducer
