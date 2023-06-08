import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

export default function Navbar() {
    const { logout } = useLogout()
    const { user } = useAuthContext()
    // Logs user out when button is clicked
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
                    {user && (
                        <div>
                            <span className="userEmail">Hello, {user.email}</span>
                            <button className="logout" onClick={handleClick}>Log Out</button>
                        </div>
                    )}
                    {!user && (
                        <div className="userForms">
                            <Link to="/signup">Signup</Link>
                            <Link to="/login">Login</Link>
                        </div>
                    )}
                </nav>
            </div>
        </header>
    )
}