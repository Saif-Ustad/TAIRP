import "./Navbar.scss";

// import { BsFillCaretDownFill } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { SiNetflix } from "react-icons/si";
import Netflix_Logo from "../../Assets/images/Netflix-logo.png";

function Navbar() {
    return (
        <div className="navbar-section">
            <div className="container">
                <img className="netflix-logo" src={Netflix_Logo} alt="netflix-logo" />
                <ul className="navbar-links">
                    <li className="sm-disable">Home</li>
                    <li className="sm-disable">Movies</li>
                    <li className="sm-disable">Series</li>
                    <li className="my-list sm-disable">
                        <span>My List </span>
                        {/* <BsFillCaretDownFill /> */}
                    </li>
                    <li><FaSearch /></li>
                    <li><FaBell /></li>
                    <li className="sm-disable"><SiNetflix /></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;