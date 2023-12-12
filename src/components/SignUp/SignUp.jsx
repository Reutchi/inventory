import React, {useEffect} from 'react';
import { useForm } from 'react-hook-form';
import './sign-up.scss';
import { Button } from '../index';
import { registerUser } from '../../store/modules/auth';
import { useDispatch, useSelector } from 'react-redux';
import {useNavigate} from "react-router-dom";

const SignUp = ({ title = 'E timpul să te simți ca acasă' }) => {
    const dispatch = useDispatch();
    const {authenticated} = useSelector((state) => state.auth);
    const {register, handleSubmit, watch, formState: { errors },} = useForm()

    const navigate = useNavigate()

    useEffect(() => {
        authenticated ? navigate('/') : navigate('/auth')
    }, [])

    const submitForm = (data) => {
        dispatch(registerUser(data))
    }

    return (
        <form onSubmit={handleSubmit(submitForm)} className="form sign-up">
            <h2>{title}</h2>
            <label htmlFor='nickname'>
                <span>NAME</span>
                <input
                    type='text'
                    className='form-input'
                    {...register('nickname')}
                    required
                />
            </label>
            <label htmlFor='email'>
                <span>Email</span>
                <input
                    type='email'
                    className='form-input'
                    {...register('email')}
                    required
                />
            </label>
            <label htmlFor='password'>
                <span>Password</span>
                <input
                    type='password'
                    className='form-input'
                    {...register('password')}
                    required
                />
            </label>
            <Button type='submit' title='Creaza Cont'/>
        </form>
    );
};

export default SignUp;
