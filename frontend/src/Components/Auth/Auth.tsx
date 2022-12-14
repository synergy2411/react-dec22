import { useContext } from "react";
import { useNavigate } from 'react-router-dom';

import AuthContext from "../../context/authContext";

const Auth = () => {

    const context = useContext(AuthContext)
    const navigate = useNavigate()

    const loginClickHandler = () => {
        // context.token = token
        context.setIsLoggedIn(!context.isLoggedIn)
        navigate("/")
    }

    return (
        <>
            <button className="btn btn-dark" onClick={loginClickHandler}>Login In</button>
            <h3>User is {!context.isLoggedIn && 'NOT'} logged in</h3>
        </>
    )

}

export default Auth;