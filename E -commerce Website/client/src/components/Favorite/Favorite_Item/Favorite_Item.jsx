import "./Favorite_Item.scss";

import { Context } from "../../../utils/Context";
import { useContext } from "react";

import {RxCross2} from "react-icons/rx";

import { useNavigate } from "react-router-dom";

function Favorite_Item() {
    const {handleRemoveFromFavorite,favoriteItems, setShowFavorite} = useContext(Context);
    const Navigate = useNavigate();
    return (
        <div>
            {favoriteItems.map((item) => (
                <div className="favorite_items" key={item.id}>
                    <div className="left">
                        <div className="favorite-item-img">
                            <img src={process.env.REACT_APP_STRIPE_APP_DEV_URL + item.attributes.img.data[0].attributes.url} alt="cart-item" />
                        </div>
                        <div className="favorite-item-details">
                            <div className="upper">
                                <h2>{item.attributes.title}</h2>
                                <span><RxCross2 onClick={ () => handleRemoveFromFavorite(item)}/></span>
                            </div>
                            <div className="lower">
                                <div className="price">
                                    <span>Price : </span>
                                    <span>${item.attributes.price}</span>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="right">
                        <button 
                            className="add-to-cart-btn" 
                            onClick={() => {
                                    Navigate("/singleproduct/" + item.id) 
                                    setShowFavorite(false)
                                }
                            }>
                            Go!
                        </button>
                    </div>
                </div>
            ))}
        </div>

    );
}

export default Favorite_Item;