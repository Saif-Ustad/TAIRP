import "./Hero.scss";
import Navbar from "../Navbar/Navbar";
import { FaStar } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

import { useState } from "react";

import { heroMovies } from "../../data/HeroData";

function Hero() {

    const [currentSlide, setCurrentSlide] = useState(1);

    const [heroMovieData, setHeroMovieData ] = useState(heroMovies[0]);

    const handleSlideClick = (slideIndex) => {
        setCurrentSlide(slideIndex);
    };



    return (
        <div className={`home-page slide-${currentSlide}`}>
            <Navbar />
            <div className="hero-section">
                <div className="container" >
                    <div className="hero-content">
                        <h3>Duration: {heroMovieData.duration}</h3>
                        <div className="rating">
                            <FaStar />
                            <h6>{heroMovieData.rating}</h6>
                            <h5>{heroMovieData.genres}</h5>
                        </div>    
                        <h1>{heroMovieData.title}</h1>
                        <p>{heroMovieData.desc}</p>
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
                <div className="slider">
                        <div className={`${currentSlide === 1 ? "active" : ""}`} onClick={() => { handleSlideClick(1); setHeroMovieData(heroMovies[0]) } }></div>
                        <div className={`${currentSlide === 2 ? "active" : ""}`} onClick={() =>{ handleSlideClick(2) ; setHeroMovieData(heroMovies[1]) } }></div>
                        <div className={`${currentSlide === 3 ? "active" : ""}`} onClick={() =>{ handleSlideClick(3) ;  setHeroMovieData(heroMovies[2]) } }></div>
                </div>
            </div>
        </div>
    )
}

export default Hero;