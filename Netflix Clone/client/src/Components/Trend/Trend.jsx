import "./Trend.scss";

import { HiTrendingUp } from "react-icons/hi";
import { FaFire } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import Card from "../Card/Card";
import { movies } from "../../data/CardData";
import { useState } from "react";



function Trend() {

    //type 1
    // const filteredMovies = movies.filter((movie) => movie.genres.includes("biography"))




    //type 2
    // // Define an array of genres you want to filter by
    // const selectedGenres = ['action', 'adventure']; // Filtering for Action and Adventure genres

    // const filteredMovies = movies.filter((movie) => {
    //     // Check if all selected genres are present in the movie's genres array
    //     return selectedGenres.every((selectedGenre) => movie.genres.includes(selectedGenre));
    // });



    //type 3
    const [selectedGenres, setSelectedGenres] = useState(['action']); // Default selected genre
    const [activeCategory, setActiveCategory] = useState("trends now");
    const [activeBtns, setActiveBtns] = useState(['action']); // Default active button(s)

    const btnClick = (btnText) => {
        if (selectedGenres.includes(btnText)) {
            setSelectedGenres(selectedGenres.filter((genre) => genre !== btnText)); // Remove from selectedGenres
            setActiveBtns(activeBtns.filter((btn) => btn !== btnText)); // Remove from activeBtns
        } else {
            setSelectedGenres([...selectedGenres, btnText]); // Add to selectedGenres
            setActiveBtns([...activeBtns, btnText]); // Add to activeBtns
        }
    };

    const categorySelect = (categorySelected) => {
        setActiveCategory(categorySelected);

    }

    
    const filteredMoviesByCategory = movies.filter((movie) =>
        movie.categories.includes(activeCategory)
    );

    const filteredMovies = filteredMoviesByCategory.filter((movie) =>
        selectedGenres.every((selectedGenre) => movie.genres.includes(selectedGenre))
    );    
    

    return (
        <div className="trend-section">
            <div className="container">
                <div className="titles">
                    <div className={`title ${activeCategory === 'trends now' ? 'active' : ''}`} onClick={() => categorySelect('trends now')}>
                        <HiTrendingUp />
                        <span>Trends Now</span>
                    </div>
                    <div className={`title ${activeCategory === 'popular' ? 'active' : ''}`} onClick={() => categorySelect('popular')}>
                        <FaFire />
                        <span>Popular</span>
                    </div>
                    <div className={`title ${activeCategory === 'premieres' ? 'active' : ''}`} onClick={() => categorySelect('premieres')}>
                        <FaStar />
                        <span>Premieres</span>
                    </div>
                    <div className={`title ${activeCategory === 'recently added' ? 'active' : ''}`} onClick={() => categorySelect('recently added')}>
                        <FaPlus />
                        <span>Recently Added</span>
                    </div>
                </div>
                <hr />
                <div className="movie-types">
                    <div className={`btn ${activeBtns.includes('action') ? 'active' : ''}`} onClick={() => btnClick('action')}>Action</div>
                    <div className={`btn ${activeBtns.includes('adventure') ? 'active' : ''}`} onClick={() => btnClick('adventure')}>Adventure</div>
                    <div className={`btn ${activeBtns.includes('animation') ? 'active' : ''}`} onClick={() => btnClick('animation')}>Animation</div>
                    <div className={`btn ${activeBtns.includes('biography') ? 'active' : ''}`} onClick={() => btnClick('biography')}>Biography</div>
                    <div className={`btn ${activeBtns.includes('crime') ? 'active' : ''}`} onClick={() => btnClick('crime')}>Crime</div>
                    <div className={`btn ${activeBtns.includes('comedy') ? 'active' : ''}`} onClick={() => btnClick('comedy')}>Comedy</div>
                    <div className={`btn ${activeBtns.includes('drama') ? 'active' : ''}`} onClick={() => btnClick('drama')}>Drama</div>
                </div>
            </div>
            <div className="trending-movies-scroll">
                {filteredMovies.map((movie) => {
                    return (
                        <Card movie={movie} />
                    )
                })}

            </div>

        </div>
    )
}

export default Trend;