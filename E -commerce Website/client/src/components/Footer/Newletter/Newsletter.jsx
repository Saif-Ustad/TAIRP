import "./Newsletter.scss";

import {BiLogoLinkedin} from "react-icons/bi";
import {BiLogoFacebook} from "react-icons/bi";
import {AiOutlineInstagram} from "react-icons/ai";
import {BiLogoTwitter} from "react-icons/bi";

function Newsletter() {
    return (
        <div className="Newsletter-section">
            <div className="Newsletter-img">
                <div className="Newsletter-content">
                    <div className="small-text">NEWSLETTER</div>
                    <div className="big-text">SIGN UP FOR LATEST UPDATE AND OFFERS</div>
                    <div className="subscribe-btn">
                        <input type="email" placeholder="Email Address" />
                        <button>Subscribe</button>
                    </div>
                    <div className="text">Will be used in accordance with our privacy policy </div>
                    <div className="social-icons">
                        <span className="icon"><BiLogoLinkedin /></span>
                        <span className="icon"><BiLogoFacebook /></span>
                        <span className="icon"><AiOutlineInstagram /></span>
                        <span className="icon"><BiLogoTwitter /></span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Newsletter;