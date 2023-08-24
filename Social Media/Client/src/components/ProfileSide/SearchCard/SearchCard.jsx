import "./SearchCard.scss";

import { FaSearch } from "react-icons/fa";

import Logo from "../../../images/logo.svg";

function SearchCard() {
    return (
        <div className="searchCard">
            <div className="logo"><img src={Logo} alt="logo" /></div>
            <div className="searchInput">
                <input type="text" placeholder="#Explore" />
                <span><FaSearch /></span>
            </div>

        </div>
    );
}

export default SearchCard;