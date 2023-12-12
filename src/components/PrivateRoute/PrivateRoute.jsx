import { Navigate } from 'react-router-dom'
import {useSelector} from "react-redux";

function PrivateRoute ({ children }) {
    const authenticated = useSelector((state) => state.auth)

    return <>{authenticated ? children : <Navigate to="/auth" />}</>
}

export default PrivateRoute
