import { useForm } from 'react-hook-form'
import './sign-up.scss'
import {Button, Spinner} from '../../index'
import { registerUser } from '../../../store/modules/auth'
import {useDispatch, useSelector} from 'react-redux'

const SignUp = ({ title = 'Effortless Management: Register Now and Take Control!' }) => {

    const dispatch = useDispatch()
    const {loading,inputs} = useSelector((state) => state.auth)
    const {register, handleSubmit, watch, formState: { errors },} = useForm()

    const submitForm = (data) => {
        dispatch(registerUser(data))
    }

    return (
        <form onSubmit={handleSubmit(submitForm)} className="form sign-up">
            <h3>{title}</h3>
            {loading ?
                <Spinner/>
                :
                <>
                    {inputs.map(({id,label,type}) => (
                        <label key={id} htmlFor={label}>
                            <span>{label}</span>
                            <input
                                type={type}
                                className='form-input'
                                {...register(label)}
                                required
                            />
                        </label>
                    ))}
                </>
            }
            <Button className='btn-primary' type='submit' title='Create Account'/>
        </form>
    )
}

export default SignUp
