import { createContext, useEffect, useState } from "react";

export const Context = createContext();

const  AppContext = ({children}) => {
    const [categories, setCategories] = useState();
    const [products, setProducts] = useState();

    const [showCart, setShowCart] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const [showFavorite, setShowFavorite ] = useState(false);
    const [showMobileSearch, setshowMobileSearch ] = useState(false);

    const [favoriteItems, setfavoriteItems] = useState([]);
    const [favoriteCount, setfavoriteCount] = useState(0);

    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartSubTotal, setCartSubTotal] = useState(0);

    const [searchData, setSearchData ] = useState("");

    const [query, setQuery] = useState("");


    useEffect(() => {
        let count = 0;
        cartItems.map((item) => {
            count += item.attributes.quantity 
        });
        setCartCount(count);

        let subTotal = 0;
        cartItems.map((item) => {
            subTotal += item.attributes.price * item.attributes.quantity
            setCartSubTotal(subTotal)
        })
    }, [cartItems]);

    useEffect(() => {
        let count = 0;
        count = favoriteItems.length;
        setfavoriteCount(count);
    }, [favoriteItems]);

    const handleAddToFavorite = (product) => {
        let items = [...favoriteItems];
        let index = items.findIndex(p => p.id === product.id);
        if(index !== -1){
            //nothing to do
        }else {
            items = [...items, product];
        }
        setfavoriteItems(items);
    }

    const handleRemoveFromFavorite = (product) => {
        let items = [...favoriteItems];
        items = items.filter( (p) => p.id !== product.id);
        setfavoriteItems(items);
    }

    const handleAddToCart = (product, quantity) => {
        let items = [...cartItems];
        let index = items.findIndex(p => p.id === product.id);
        if(index !== -1){
            items[index].attributes.quantity += quantity;
        }else {
            product.attributes.quantity = quantity;
            items = [...items, product];
        }
        setCartItems(items);
    }
    const handleRemoveFromCart = (product) => {
        let items = [...cartItems];
        items = items.filter( (p) => p.id !== product.id);
        setCartItems(items);
    }
    const handleCartProductQuantity = () => {}

    return (
        <Context.Provider
            value={{
                categories,
                setCategories,
                products,
                setProducts,
                showCart,
                setShowCart,
                showSearch,
                setShowSearch,
                showFavorite,
                setShowFavorite,
                favoriteItems,
                setfavoriteItems,
                favoriteCount,
                setfavoriteCount,
                handleAddToFavorite,
                handleRemoveFromFavorite,
                cartItems,
                setCartItems,
                cartCount,
                setCartCount,
                cartSubTotal,
                setCartSubTotal,
                handleAddToCart,
                handleRemoveFromCart,
                handleCartProductQuantity,
                searchData,
                setSearchData,
                showMobileSearch,
                setshowMobileSearch,
                query,
                setQuery,
            }}
        >
            {children}
        </Context.Provider>
    );
}

export default AppContext;