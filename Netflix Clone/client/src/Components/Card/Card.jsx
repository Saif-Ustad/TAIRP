import "./Card.scss";

import { FaHeart } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

function Card({movie}) {
    return (
        <div className="Card">
            <div className="card-img">
                <img src={movie.img} alt="card-img" />
            </div>
            <div className="details">
                <div className="cart-title">{movie.title}</div>
                <div className="card-details">
                    <div className="year">{movie.year}</div>
                    <div className="icons">
                        <FaHeart  className="heart-icon"/>
                        <FaEye className="eye-icon" />
                        <span>
                            <FaStar />
                            <h6>{movie.rating}</h6>
                        </span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Card;