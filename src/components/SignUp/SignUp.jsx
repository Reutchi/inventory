import './sign-up.scss'
import {BaseAvatar, BaseInput, Button} from "../index";
import React, {useCallback} from "react";
import {HANDLE_FORM, userRegister} from "../../store/modules/auth";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

const SignUp = ({title = 'E timpul să te simți ca acasă'}) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {  registerForm, avatarUrl , token} = useSelector((state) => state.auth);

    localStorage.setItem('token',token)

    const handleInput = useCallback(({ key, value }) => {
        dispatch(HANDLE_FORM({ key, value }));
    }, [dispatch]);

    const handleSubmit = useCallback((ev) => {
        ev.preventDefault();

        const formData = new FormData();

        Object.entries(registerForm).forEach(([key, value]) => {
            formData.append(key, value);
        });

        formData.append('avatar', avatarUrl);

        dispatch(userRegister(formData,navigate));
    }, [dispatch, registerForm, avatarUrl]);


    const inputsType = [
        {id:1,label:'Name',type:'text',name:'name'},
        {id:2,label:'Email',type:'email',name:'email'},
        {id:3,label:'Password',type:'password',name:'password'},
    ]


    return (
        <form onSubmit={ev => handleSubmit(ev)} className="form sign-up">
            <h2>{title}</h2>
            <BaseAvatar/>
            {inputsType.map(({label,type,name,id}) => {
                return(
                    <BaseInput
                        key={id}
                        onInput={handleInput}
                        label={label}
                        type={type}
                        required
                        name={name}
                    />
                )
            })}
            <Button type='submit' title='Creaza Cont'/>
        </form>
    )
}
export default SignUp
