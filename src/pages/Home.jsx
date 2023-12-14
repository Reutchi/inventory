import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import button from "../components/Utils/Button/Button";
import {userLogout} from "../store/modules/auth";

const Home = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {authenticated} = useSelector((state) => state.auth)

    const handleLogout = () => {
        dispatch(userLogout())
    }

    useEffect(() => {
        if (!authenticated){
            navigate('/auth')
        }
    }, [authenticated]);

     return (
        <div>
            Bine ai revenit
            <button onClick={handleLogout}>LOGOUT</button>
        </div>
    )
}
export default Home
