import "./Banner.scss";

function Banner() {
    return (
        <div className="banner-section">
            <div className="banner-img">
                <div className="banner-container">
                    <div className="main-text">Discount up to 50% from <br/>clothcenter club original goods </div>
                    <span>Promocode:  100BC</span>
                    <button>Shop now</button>
                </div>
            </div>
        </div>
    );
}

export default Banner;