import "./Products.scss";
import ProductCard from "./Product-card/Product-card";


function Products({products}) {
    return (
        <div className="products-container">
            {products.data.map((item) => (
                <ProductCard key={item.id} id={item.id} data={item.attributes} product={item}/>
            ))}
            
           
        </div>
    );
}

export default Products;