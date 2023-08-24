import "./Header.scss";

import Men from "../../assets/Icons/man.svg";
import Women from "../../assets/Icons/woman.svg";

import { AiFillHeart } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { TbSearch } from "react-icons/tb";

import Cart from "../Cart/Cart";

import { useContext, useEffect, useState } from "react";
import { Context } from "../../utils/Context";

import { useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Favorite from "../Favorite/Favorite";

import Search from "./Search/Search";
import MobileSearch from "../MobileSearch/MobileSearch";



function Header() {
    const { showCart, setShowCart, cartCount, setShowSearch, showFavorite, setShowFavorite,favoriteCount,showMobileSearch,setSearchData,showSearch,setshowMobileSearch, query, setQuery } = useContext(Context);
    const Navigate = useNavigate();
    
    const onChange = (event) => {
        setQuery(event.target.value);
    }

    // useEffect(() => {
    //     const { data } = useFetch(`/api/products?populate=*&filters[title][$contains]=${query}`);
    //     setSearchdata(data);
    //     console.log(data);

    // }, [query])

    let { data } = useFetch(`/api/products?populate=*&filters[title][$contains]=${query}`);
    
    useEffect(()=> {
        setSearchData(data);
    },[data])
    

    if(!query.length)
    {
        data=null;
    }

    
    return (
        <header className="main-heading">
            <div className="heading-content">
                <div className="left">
                    <span onClick={()=> Navigate("/")}>ClothCenter</span>
                    <div className="gender-toggle">
                        <div className="Men">
                            <img src={Men} alt="men-icon" />
                            Men
                        </div>
                        <div className="Women">
                            <img src={Women} alt="women-icon" />
                            Women
                        </div>
                    </div>
                </div>

                <div className="right">
                    <div className="search-bar">
                        <input  onChange={onChange} placeholder="Search for items, brand, inspiration" />
                        <TbSearch className="search-icon" onClick={ () => setShowSearch(true)}/>
                    </div>
                    <div className="header-icons">
                        <TbSearch className="search-icon-sm" onClick={ () => setshowMobileSearch(true)}/>
                        <div><AiFillHeart className="heart-icon" onClick={ () => setShowFavorite(true)}/>{!!favoriteCount && <span className="fv-count">{favoriteCount}</span>}</div>
                        <div><FaShoppingCart className="cart-icon" onClick={ () => setShowCart(true)}/>{!!cartCount && <span className="cart-count">{cartCount}</span>}</div>
                    </div>
                </div>

            </div>
            { !!showCart && <Cart />}
            { !!showFavorite && <Favorite /> }
            {!!showSearch && <Search />}
            {!!showMobileSearch && <MobileSearch />}
        
        </header>
        
    );
}

export default Header;