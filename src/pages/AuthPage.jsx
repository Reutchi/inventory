import { useSelector } from "react-redux"
import "./css/auth.scss"
import {AuthBanner, SignIn, SignUp} from "../components/index"
import {useEffect} from "react"
import {useNavigate} from "react-router-dom"

const AuthPage = () => {
    const navigate = useNavigate()
    const { isSignUpBanner,authenticated} = useSelector((state) => state.auth)

    useEffect(() => {
        if (authenticated){
            navigate('/')
        }
    }, [authenticated]);

    return (
        <section className='auth-section'>
            <div className={`cont ${isSignUpBanner && 's--signup' }`}>
                <SignIn/>
                <div className="sub-cont">
                    <AuthBanner/>
                    <SignUp/>
                </div>
            </div>
        </section>
    )
}

export default AuthPage;