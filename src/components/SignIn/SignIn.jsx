import './sign-in.scss'
import {BaseInput, Button} from "../index";
import {useDispatch,useSelector} from "react-redux";
import {SIGN_IN, userLogin} from "../../store/modules/auth";
import { useNavigate } from 'react-router-dom';
const SignIn = ({title = 'Bine ai revenit'}) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {signInForm,token} = useSelector((state) => state.auth)

    const handleSignIn = ({key,value}) => {
        dispatch(SIGN_IN({key, value}))
    }


    const handleSubmit = (ev) => {
        ev.preventDefault()
        dispatch(userLogin(signInForm,navigate))
    }

    localStorage.setItem('token',token)




    return (
        <div className="form sign-in">
            <h2>{title}</h2>
            <BaseInput required name='email' type='email' onInput={handleSignIn} label='Email'/>
            <BaseInput required name='password' type='password' onInput={handleSignIn} label='Password'/>
            <Button onClick={handleSubmit} type='submit' title="Autentificare"/>
        </div>
    )
}
export default SignIn
