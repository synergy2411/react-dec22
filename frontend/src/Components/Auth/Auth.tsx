import { useContext } from "react";
import AuthContext from "../../context/authContext";

const Auth = () => {

    const context = useContext(AuthContext)

    const loginClickHandler = () => {
        // context.token = token
        context.setIsLoggedIn(!context.isLoggedIn)
    }

    return (
        <>
            <button className="btn btn-dark" onClick={loginClickHandler}>Login In</button>
            <h3>User is {!context.isLoggedIn && 'NOT'} logged in</h3>
        </>
    )

}

export default Auth;