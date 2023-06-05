import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";

export default function Navbar() {
    const { logout } = useLogout()
 
    const handleClick = () => {
        logout()
    }
    return (
        <header>
            <div className="container">
                <Link to="/">
                    <h1>My Personal Journal</h1>
                </Link>
                <nav>
                <div className="logout">
                    <button onClick={handleClick}>Log Out</button>
                </div>
                    <div className="userForms">
                        <Link to="/signup">Signup</Link>
                        <Link to="/login">Login</Link>
                    </div>
                </nav>
            </div>
        </header>
    )
}