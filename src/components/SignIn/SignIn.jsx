import './sign-in.scss'
import {BaseInput, Button} from "../index"
import {useDispatch,useSelector} from "react-redux"
import { useNavigate } from 'react-router-dom'
const SignIn = ({title = 'Bine ai revenit'}) => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    // const handleSignIn = ({key,value}) => {
    //     dispatch(SIGN_IN({key, value}))
    // }

    // const handleSubmit = async (ev) => {
    //     ev.preventDefault();
    //     try {
    //         const response = await dispatch(userLogin(data));
    //         if (response && response.status === 200) {
    //             navigate('/')
    //         }
    //     } catch (err) {
    //         console.log(err)
    //     }
    // };

    return (
        <div className="form sign-in">
            <h2>{title}</h2>
            <BaseInput required nickname='email' type='email'  label='Email'/>
            <BaseInput required nickname='password' type='password'  label='Password'/>
            <Button type='submit' title="Autentificare"/>
        </div>
    )
}
export default SignIn