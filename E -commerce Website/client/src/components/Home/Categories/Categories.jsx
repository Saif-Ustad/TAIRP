import "./Categories.scss";

import Fire from "../../../assets/Icons/fire.svg";

function Categories({categories}) {
    return (
        <div className="categories-section">
            {categories.data.map((item) => (
                <div key={item.id} className="category-card">
                    <span>
                        {item.attributes.title}
                    </span>
                    <span>
                        <img 
                            src={process.env.REACT_APP_STRIPE_APP_DEV_URL +
                                item.attributes.icon.data.attributes.url} 
                            alt="icon" 
                        />
                    </span>
                </div>
            ))}
            
        </div> 
       
    );
}

export default Categories;