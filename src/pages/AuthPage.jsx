import React, { useEffect } from 'react';

import './css/auth.scss';

import {BaseAvatar,BaseInput} from '../components/index'
import {useDispatch, useSelector} from "react-redux";
import {TOGGLE_SIGNUP,HANDLE_FORM} from "../store/modules/auth";

const AuthPage = () => {
    const dispatch = useDispatch()
    const {isSignUp} =  useSelector((state) => state.auth)

    const handleInput = ({key,value}) => {
        dispatch(HANDLE_FORM({key,value}))
    }

    const handleSubmit = (ev) => {
        ev.preventDefault()
    }
    useEffect(() => {
        const btn = document.querySelector('.img__btn');
        const toggleSignUp = () => {
            dispatch(TOGGLE_SIGNUP())
        };

        btn.addEventListener('click', toggleSignUp);

        return () => {
            btn.removeEventListener('click', toggleSignUp);
        }
    }, [])

    return (
        <section className='auth-section'>
                <div className={`cont ${isSignUp ? 's--signup' : ''}`}>
                    <div className="form sign-in">
                        <h2>Bine ai revenit</h2>
                        <label>
                            <span>Email</span>
                            <input type="email" />
                        </label>
                        <label>
                            <span>Password</span>
                            <input type="password" />
                        </label>
                        <button type="button" className="submit">Autentificare</button>
                    </div>
                    <div className="sub-cont">
                        <div className="img">
                            <div className="img__text m--up">
                            </div>
                            <div className="img__text m--up">
                                <h2>Aventura Gustului: Împărtășește Pasiunea lui Roman Batin</h2>
                            </div>
                            <div className="img__text m--in">
                                <p>Control Total, Eficiență Maximă: Aplicația Noastră pentru Inventariere, Soluția Ta Instant!</p>
                            </div>
                            <div className="img__btn">
                                <span className="m--up">Înregistrare</span>
                                <span className="m--in">Autentificare</span>
                            </div>
                        </div>
                        <form onSubmit={ev => handleSubmit(ev)} className="form sign-up">
                            <h2>E timpul să te simți ca acasă</h2>
                            <BaseAvatar/>
                            <BaseInput onInput={handleInput} label='Name' type='text' name='name'/>
                            <BaseInput onInput={handleInput} label='Email' type='email' name='email'/>
                            <BaseInput onInput={handleInput} label='Password' type='password' name='password' length='4'/>
                            <button type="submit" className="submit">Creare cont</button>
                        </form>
                    </div>
                </div>
        </section>
    );
};

export default AuthPage;
