import { createSlice } from '@reduxjs/toolkit';
import NoAvatar from '../../assets/NoAvatar.svg'
import axios from "axios";

const initialState = {
    registerForm :{
        name:'',
        password:'',
        email:'',
    },
    avatarUrl: '',
    avatar : NoAvatar,
    isSignUp: false,
    signInForm: {
        email:'',
        password:'',
    }
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
        SIGN_IN(state,action) {
          const {key,value} = action.payload
          const updateSignInForm = {...state.signInForm}
          updateSignInForm[key] = value;

          return{
              ...state,
              signInForm: updateSignInForm
          }
        },
        TOGGLE_SIGNUP(state){
            state.isSignUp = !state.isSignUp
        },
        CHANGE_AVATAR(state,action) {
            const {imageURL,imageFile} = action.payload
            state.avatar = imageURL
            state.avatarUrl = imageFile
        }
    },
});



export const userRegister = function (userData,navigate) {
    return async function (dispatch,state) {
        try {
            const url = 'http://localhost:3000/register'
            const response = await axios.post(url,userData)
            response.status === 200 && navigate('/')
        } catch (err) {
            console.log(err)
        }
    }
}

export const userLogin = function (userData,navigate) {
    return async function () {
        try {
            const url = 'http://localhost:3000/login'
            const response = await axios.post(url,userData)
            response.status ===  200 && navigate('/')
        } catch (err) {
            console.log(err)
        }
    }
}

export const {TOGGLE_SIGNUP,HANDLE_FORM,CHANGE_AVATAR,SIGN_IN} = auth.actions;

export default auth.reducer;


