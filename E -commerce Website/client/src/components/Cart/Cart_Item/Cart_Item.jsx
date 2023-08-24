import "./Cart_Item.scss";

import { RxCross2 } from "react-icons/rx";

import tempImg from "../../../assets/img/f1.jpg";

import { Context } from "../../../utils/Context";
import { useContext } from "react";

function CartItem() {

    const { cartItems, handleAddToCart, handleRemoveFromCart } = useContext(Context);
    return (
        <div>
            {cartItems.map((item) => (
                <div className="cart_items" key={item.id}>
                    <div className="left">
                        <div className="cart-item-img">
                            <img src={process.env.REACT_APP_STRIPE_APP_DEV_URL + item.attributes.img.data[0].attributes.url} alt="cart-item" />
                        </div>
                        <div className="cart-item-details">
                            <div className="upper">
                                <h2>{item.attributes.title}</h2>
                                <span><RxCross2 onClick={ () => handleRemoveFromCart(item)}/></span>
                            </div>
                            <div className="lower">
                                <div className="quantity">
                                    <span>Quantity : </span>
                                    <span>{item.attributes.quantity}</span>
                                </div>
                                <div className="price">
                                    <span>Price : </span>
                                    <span>${item.attributes.price}</span>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="right">
                        <div className="upper">
                            <span>Total</span>
                        </div>
                        <div className="lower">
                            <span>{item.attributes.quantity} x </span>
                            <span>${item.attributes.price * item.attributes.quantity }</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>

    );
}

export default CartItem;