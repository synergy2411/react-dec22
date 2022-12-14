import { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import AuthContext from '../../context/authContext';

const Header = () => {
    const context = useContext(AuthContext);
    const navigate = useNavigate();
    const logoutClickHandler = () => {
        context.setIsLoggedIn(false);
        navigate("/auth")
    }
    return (
        <header>
            <nav>
                <ul className="nav nav-tabs">
                    {!context.isLoggedIn && <li className="nav-item">
                        <NavLink className="nav-link" to="/auth">Login</NavLink>
                    </li>}
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/">Expenses</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/reducer">Reducer</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/hooks">Hooks</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/products">Products</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/counter">Counter</NavLink>
                    </li>
                    {context.isLoggedIn && <li className="nav-item">
                        <button className="btn btn-outline-danger btn-sm"
                            onClick={logoutClickHandler} >Logout</button>
                    </li>}
                </ul>
            </nav>
        </header>
    )
}

export default Header;