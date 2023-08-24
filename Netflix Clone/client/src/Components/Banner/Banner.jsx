import "./Banner.scss";

import { FaStar } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { MdClose } from  "react-icons/md";

import { movies } from "../../data/CardData";
import Card from "../Card/Card";

function Banner() {
    return (
        <>
            <div className="banner-page">
                <div className="banner-section">
                    <div className="container" >
                        <div className="banner-content">
                            <h3>Duration: 1h 47m</h3>
                            <div className="rating">
                                <FaStar />
                                <h6>9.5</h6>
                                <h5>Action | Adventures | Sci-Fi</h5>
                            </div>
                            <h1>Jurassic Park</h1>
                            <p>When three different animals infected with different pathogen <br />
                                a primatologist and a geneticist team up to stop them from <br />destroying Chicago
                            </p>
                            <div className="btns">
                                <div className="red-btn btn">
                                    <FaPlay />
                                    <span>WATCH</span>
                                </div>
                                <div className="black-btn btn">
                                    <FaPlus />
                                    <span>ADD LIST</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bottom-links">
                        <div className="active">GENERAL INFORMATION</div>
                        <div>WATCH TRAILER</div>
                        <div>SIMILAR</div>
                        <div>REVIEWS AND DETAILS</div>
                        <div><FaHeart /></div>
                        <div><FaEye /></div>
                    </div>
                    <div className="close">
                        <MdClose />
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="movies-list">
                    {movies.map((movie) => {
                        return (
                            <Card movie={movie} />
                        )
                    })}
                </div>
                <div className="more">
                    <div><FaPlus /></div>
                </div>
            </div>

        </>

    )
}

export default Banner;