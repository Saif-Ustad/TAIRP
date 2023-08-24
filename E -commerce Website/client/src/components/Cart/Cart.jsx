import "./Cart.scss";

import { BsCartX } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";

import { Context } from "../../utils/Context";
import { useContext } from "react";

import CartItem from "./Cart_Item/Cart_Item";

function Cart() {
    const { setShowCart,cartSubTotal,cartItems } = useContext(Context);

    return (
        <div className="cart-section">
            <div className="cart-content">
                <div className="cart-heading">
                    <h2>SHOPPING CART</h2>
                    <div className="close-btn" onClick={() => setShowCart(false)}>
                        <RxCross2 />
                        <span >Close</span>
                    </div>
                </div>
                <hr className="first_hr"/>
                <div className="cart-items-section">
                    { !cartItems?.length && <div className="Empty_cart_condition">
                        <div className="empty-cart-icon"><BsCartX /></div>
                        <div className="text">No product in the cart</div>
                        <button onClick={ () => setShowCart(false)}>Return to Shop</button>
                    </div>}

                    {!!cartItems?.length && <div className="Non-empty-cart-condition" >
                        
                        <div className="each-single-cart-item-grp">
                            <CartItem />
                        </div>
                        
                        <div className="bill-section">
                            <div className="chechout">
                                <hr />
                                <div className="bill">
                                    <div className="left">
                                        <span>SUBTOTAL:</span>
                                    </div>

                                    <div className="right">
                                        <span>${cartSubTotal}</span>
                                    </div>
                                </div>
                                <hr />
                            </div>
                            <div className="checkout-btn">
                                <button>Checkout</button>
                            </div>
                        </div>
                    </div>}
                </div>
            </div>
        </div>
    );
}

export default Cart;