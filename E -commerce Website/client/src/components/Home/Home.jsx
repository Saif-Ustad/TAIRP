import Products from "./Products/Products";
import Banner from "./Banner/Banner";
import Newsletter from "../Footer/Newletter/Newsletter";

import { useEffect, useContext } from "react";
import { Context } from "../../utils/Context";
import { fetchDataFromApi } from "../../utils/api";
import Categories from "./Categories/Categories";

import Search from "../Header/Search/Search";

import "./Home.scss";

function Home() {
    const { categories, setCategories, products, setProducts, showSearch} = useContext(Context);

    useEffect( () => {
        getCategories();
        getProducts();
    }, []);

    const getProducts = () => {
        fetchDataFromApi("/api/products?populate=*").then((res) => {
            console.log(res);
            setProducts(res);
        });
    };

    const getCategories = () => {
        fetchDataFromApi("/api/categories?populate=*").then((res) => {
            console.log(res);
            setCategories(res);
        });
    };

    return (
        <div>
            {/* {!!showSearch && <Search />} */}
            <Banner />
            <div className="Home-section">
                <div className="product-content">
                    <div className="categories">
                        {categories && categories.data && <Categories categories={categories} />}
                    </div>
                    <div className="products">
                        <div className="text">
                            <div className="text-heading">New Arrivals</div>
                            <div className="text-small"><u>View more</u></div>
                        </div>
                        <div className="product-cards">
                            {products && products.data  && <Products products={products}/>} 
                        </div>
                    </div>

                </div>
            </div>
            <Newsletter />
        </div>
    );
}

export default Home;