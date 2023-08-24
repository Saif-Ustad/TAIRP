import "./Footer.scss";
import Payment from "../../assets/img/payments.png";

import {FaLocationArrow} from "react-icons/fa";
import {FaMobile} from "react-icons/fa";
import {MdEmail} from "react-icons/md";

function Footer() {
    return (
        <footer className="footer-section">
            <div className="footer-container">
                <div className="footer-content">
                    <div className="col">
                        <div className="title">About </div>
                        <p>Voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
                             illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo eaque 
                             ipsa quae ab illo.
                        </p>
                    </div>

                    <div className="col">
                        <div className="title">Contact</div>
                        <ul>
                            <li><FaLocationArrow/> Katraj Rd Pune, K T Appartment, Maharashtra, 411008</li>
                            <li><FaMobile />Phone: 0471 272 0261</li>
                            <li><MdEmail />Email: store@jsdev.com</li>
                        </ul>
                    </div>

                    <div className="col">
                        <div className="title">Category</div>
                        <ul>
                            <li>Bestsellers</li>
                            <li>New Arrivals</li>
                            <li>Tops</li>
                            <li>Pants and tights</li>
                            <li>Inner wear</li>
                        </ul>
                    </div>

                    <div className="col">
                        <div className="title">Pages</div>
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Privacy Policy</li>
                            <li>Returns</li>
                            <li>Terms & Conditions</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="bottom-bar">
                <div className="bottom-bar-content">
                    <span className="text">
                        CLOTHSTORE 2023 CREATED CLOTHSTORE. PREMIUM E-COMMERCE
                        SOLUTIONS.
                    </span>
                    <img src={Payment} alt="payment-img"/>
                </div>
            </div>
        </footer>
    );
}

export default Footer;