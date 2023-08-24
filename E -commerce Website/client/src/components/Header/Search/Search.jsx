import "./Search.scss";

import { RxCross2 } from "react-icons/rx";

import { Context } from "../../../utils/Context";
import { useContext } from "react";

import { useNavigate } from "react-router-dom";

function Search() {
    const { setShowSearch, searchData, setshowMobileSearch } = useContext(Context);
    const Navigate = useNavigate();

    return (
        <div className="Search-section">
            <div className="Search-content">
                <div className="heading">
                    <h1>Search Result</h1>
                </div>
                <hr />
                <div className="search-result">
                    {searchData?.data?.map((item) => (
                        <div onClick={() => { 
                                Navigate("/singleproduct/" + item.id)
                                setShowSearch(false)
                                setshowMobileSearch(false)
                                }
                            }>
                            <div className="single-item">
                                <div className="item-img">
                                    <img src={process.env.REACT_APP_STRIPE_APP_DEV_URL + item.attributes.img.data[0].attributes.url} alt="item-img" />
                                </div>
                                <div className="item-details">
                                    <h3>{item.attributes.title}</h3>
                                    <h5>{item.attributes.desc}</h5>
                                </div>
                            </div>
                            <hr />
                        </div>
                    ))}
                </div>
                <div className="close-btn">
                    <RxCross2 onClick={() => setShowSearch(false)} />
                </div>
            </div>
        </div>
    );
}

export default Search;