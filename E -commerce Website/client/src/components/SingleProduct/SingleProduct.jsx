import "./SingleProduct.scss";
import Pimg from "../../assets/img/f1.jpg";

import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

import RelatedProducts from "./RelatedProducts/RelatedProducts";

import { useContext, useRef } from "react";
import { Context } from "../../utils/Context";

function SingleProduct() {
    const { id } = useParams();
    const { data } = useFetch(`/api/products?populate=*&[filters][id]=${id}`)

    const {handleAddToCart} = useContext(Context);
    const quantityRef = useRef(null);

    //its very imp to fetch data properly through api
    if(!data) return;
    const product = data.data[0].attributes ;

    return (
        <div className="SingleProduct-section">
            <div className="content" >
                <div className="product-img">
                    <img src={process.env.REACT_APP_STRIPE_APP_DEV_URL + product.img.data[0].attributes.url} alt="p-img"></img>
                    <RelatedProducts productId={id} categoryId={product.categories.data[0].id} />
            
                </div>
                <div className="product-details">
                    <h4>Home/T-Shirt</h4>
                    <h2>{product.title}</h2>
                    <h1>${product.price}.00</h1>
                    <select placeholder="Select Size">
                        <option value="" selected data-default>Select Size</option>
                        <option value="S">Small</option>
                        <option value="M">Medium</option>
                        <option value="L">Large</option>
                        <option value="XL">Extra Large</option>
                    </select>
                    <div className="quantity">
                        <input type="number"  defaultValue={1} ref={quantityRef}/>
                        <button 
                            onClick={() => {
                                const quantity = parseInt(quantityRef.current.value, 10);
                                handleAddToCart(data.data[0], quantity); 
                                } 
                            }>
                            Add to Cart
                        </button>

                    </div>
                    <h3>Product Details</h3>
                    <p>{product.desc}</p>
                </div>
            </div>
        </div>
    );
}

export default SingleProduct;