import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    registerForm :{
        name:'',
        password:'',
        email:'',
    },
    avatar: {

    },
    isSignUp: false
};

export const auth = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        HANDLE_FORM(state, action) {
            const { key, value } = action.payload;
            const updatedRegisterForm = { ...state.registerForm };
            updatedRegisterForm[key] = value;

            return {
                ...state,
                registerForm: updatedRegisterForm,
            };
        },
        TOGGLE_SIGNUP(state){
            state.isSignUp = !state.isSignUp
        }
    },
});

export const {TOGGLE_SIGNUP,HANDLE_FORM} = auth.actions;

export default auth.reducer;


