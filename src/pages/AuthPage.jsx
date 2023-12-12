import { useDispatch, useSelector } from "react-redux"
import { TOGGLE_SIGNUP } from "../store/modules/auth"
import "./css/auth.scss"
import {SignIn,SignUp} from "../components/index"

const AuthPage = () => {

    const dispatch = useDispatch()
    const { isSignUp } = useSelector((state) => state.auth)

    const toggleSignUp = () => {
        dispatch(TOGGLE_SIGNUP())
    }


    return (
        <section className='auth-section'>
            <div className={`cont ${isSignUp ? 's--signup' : ''}`}>
                <SignIn/>
                <div className="sub-cont">
                    <div className="img">
                        <div className="img__text m--up">
                        </div>
                        <div className="img__text m--up">
                            <p>Aventura Gustului: Împărtășește Pasiunea lui Roman Batin</p>
                        </div>
                        <div className="img__text m--in">
                            <p>Control Total, Eficiență Maximă: Aplicația Noastră pentru Inventariere, Soluția Ta Instant!</p>
                        </div>
                        <div onClick={() => toggleSignUp()} className="img__btn">
                            <span  className="m--up">Înregistrare</span>
                            <span  className="m--in">Autentificare</span>
                        </div>
                    </div>
                    <SignUp/>
                </div>
            </div>
        </section>
    )
}

export default AuthPage;