import "./MobileSearch.scss";

import { RxCross2 } from "react-icons/rx";

import { Context } from "../../utils/Context";
import { useContext } from "react";
import Search from "../Header/Search/Search";

import { TbSearch } from "react-icons/tb";


function MobileSearch() {
    const { setshowMobileSearch, setQuery } = useContext(Context);

    const onChange = (event) => {
        setQuery(event.target.value);
    }

    return (
        <div className="favorite-section">
        <div className="favorite-content">
            <div className="favorite-heading">
                <div className="search-bar">
                    <input onChange={onChange} placeholder="Search for items" />
                    <TbSearch className="search-icon" />
                </div>
                <div className="close-btn" onClick={() => setshowMobileSearch(false)}>
                    <RxCross2 />
                    <span >Close</span>
                </div>
            </div>
            <hr className="first_hr"/>
            <div className="favorite-items-section">
                <Search />        
            </div>
        </div>
    </div>
    );
}

export default MobileSearch;