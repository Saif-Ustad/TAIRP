import useFetch from "../../../hooks/useFetch";
import { useNavigate } from "react-router-dom";

import "./RelatedProducts.scss";

const RelatedProducts = ({productId, categoryId}) => {

    const { data } = useFetch(`/api/products?populate=*&filters[id][$ne]=${productId}&filters[categories][id]=${categoryId}&pagination[start]=0&pagination[limit]=3`);
    
    const Navigate = useNavigate();
    if(!data) return;
    return (
        <div className="other-p-img" >
            {data.data.map((item) => (
                <div onClick={ () => Navigate("/singleproduct/" + item.id) }><img src={ process.env.REACT_APP_STRIPE_APP_DEV_URL + item.attributes.img.data[0].attributes.url} /></div>
            ))}
        </div>
    )
}

export default RelatedProducts;