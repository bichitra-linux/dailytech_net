import logo from "../imgs/logo.png"
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/" className="flex-none w-10">
                <img src={logo} className="w-full" />
            </Link>
        </nav>
    )
}

export default Navbar;