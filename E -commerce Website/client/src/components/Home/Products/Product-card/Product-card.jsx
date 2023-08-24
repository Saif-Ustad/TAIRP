import "./Product-card.scss";
import {AiOutlineHeart} from "react-icons/ai";
import {AiFillHeart} from "react-icons/ai";

import { useNavigate } from "react-router-dom";

import { Context } from "../../../../utils/Context";
import { useContext, useState, useEffect } from "react";

function ProductCard({id, data, product}) {
    const Navigate = useNavigate();
    const {handleAddToFavorite,handleRemoveFromFavorite, favoriteItems} = useContext(Context);
    const [isLiked, setIsLiked] = useState(false);

    const isItemInFavorites = favoriteItems.some(item => item.id === product.id);

    useEffect(() => {
        setIsLiked(isItemInFavorites);
      }, [isItemInFavorites]);

    // const handleLikeButtonClick = () => {
    //   if (isItemInFavorites) {
    //     setIsLiked(true);
    //   } else {
    //     setIsLiked(false);
    //   }
    // };
    return (
        <div className="card">
            <div className="product-card" onClick={() => Navigate("/singleproduct/" + id)}>
                <img src={process.env.REACT_APP_STRIPE_APP_DEV_URL + data.img.data[0].attributes.url} alt="product-img" />
            </div>
            <div className={`like-btn ${isLiked ? 'active' : ''}`}>
                {isLiked? <AiFillHeart onClick={()=> {handleRemoveFromFavorite(product)}}/>:<AiOutlineHeart onClick={()=> {handleAddToFavorite(product)}} /> }
            </div>
        </div>
    );
}

export default ProductCard;