import './sign-in.scss'
import {Button,Spinner} from "../../index"
import {useDispatch,useSelector} from "react-redux"
import {useForm} from "react-hook-form"
import {userLogin} from "../../../store/modules/auth"
const SignIn = ({title = 'Welcome back!'}) => {

    const dispatch = useDispatch()
    const {register, handleSubmit, watch, formState: { errors },} = useForm()
    const {inputs,loading} = useSelector((state) => state.auth)


    const submitForm = (data) => {
        dispatch(userLogin(data))
    }

    return (
        <form onSubmit={handleSubmit(submitForm)} className="form sign-in">
            <h3>{title}</h3>
            {loading ?
                <Spinner/>
                    :
            <>
                {inputs.map(({type,id,label},idx) => {
                    return(
                        idx > 0 &&
                        <label key={id} htmlFor={label}>
                            <span>{label}</span>
                            <input
                                type={type}
                                className='form-input'
                                {...register(label)}
                                required
                            />
                        </label>
                    )
                })}
            </>
            }
            <Button className='btn-primary' type='submit' title="Login"/>
        </form>
    )
}
export default SignIn