import {SET_IS_ERROR, TOGGLE_SIGNUP_BANNER} from "../../../store/modules/auth";
import {useDispatch, useSelector} from "react-redux";
import {Button} from "../../index";

const AuthBanner = ({descSignUp = "A Culinary Adventure: Sharing Roman Batin's Passion",descSignIn = 'Total Control, Maximum Efficiency: Our Inventory Application, Your Instant Solution!'}) => {

    const {isSignUpBanner} = useSelector((state) => state.auth)
    const dispatch = useDispatch()
    const toggleSignUpBanner = () => {
        dispatch(TOGGLE_SIGNUP_BANNER())
        dispatch(SET_IS_ERROR(''))
    }

    return (
        <div className="img">
            <div className="img__text m--up">
            </div>
            <div className="img__text m--up">
                <p>{descSignUp}</p>
            </div>
            <div className="img__text m--in">
                <p>{descSignIn}</p>
            </div>
            <div onClick={() => toggleSignUpBanner()} className="img__btn">
                {isSignUpBanner ?
                    <Button title='Login' className='btn-transparent'/>
                    :
                    <Button title='Registration' className='btn-transparent'/>
                }
            </div>
        </div>
    )
}
export default AuthBanner
