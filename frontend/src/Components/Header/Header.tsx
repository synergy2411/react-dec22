import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <nav>
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/">Expenses</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/auth">Login</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/reducer">Reducer</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/hooks">Hooks</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;