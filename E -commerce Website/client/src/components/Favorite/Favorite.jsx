import "./Favorite.scss";
import Favorite_Item from "./Favorite_Item/Favorite_Item";

import { BsCartX } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";

import { Context } from "../../utils/Context";
import { useContext } from "react";


function Favorite() {
    const {  setShowFavorite, favoriteItems } = useContext(Context);
    return (
        <div className="favorite-section">
        <div className="favorite-content">
            <div className="favorite-heading">
                <h2>FAVORITE ITEMS</h2>
                <div className="close-btn" onClick={() => setShowFavorite(false)}>
                    <RxCross2 />
                    <span >Close</span>
                </div>
            </div>
            <hr className="first_hr"/>
            <div className="favorite-items-section">
                { !favoriteItems?.length && <div className="Empty_favorite_condition">
                    <div className="empty-favorite-icon"><BsCartX /></div>
                    <div className="text">No product in the favorite section</div>
                    <button onClick={ () => setShowFavorite(false)}>Return to Shop</button>
                </div>}

                {!!favoriteItems?.length && <div className="Non-empty-favorite-condition" >
                    
                    <div className="each-single-favorite-item-grp">
                        <Favorite_Item />
                    </div>
                
                </div>}

            </div>
        </div>
    </div>
    );
}

export default Favorite;