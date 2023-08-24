import "./Movies.scss";

import { BsPlayBtn } from "react-icons/bs";
import { BiMovie } from "react-icons/bi";
import { FaCheck } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { movies } from "../../data/CardData";
import Card from "../Card/Card";

import { useState } from "react";

function Movies() {

    const [activeSort, setActiveSort] = useState("Latest");

    const [selectedGenres, setSelectedGenres] = useState(['action']); // Default selected genre
    const [activeCategory, setActiveCategory] = useState("movies");
    const [activeBtns, setActiveBtns] = useState(['action']); // Default active button(s)

    const [ratingValue, setRatingValue] = useState(5.5); // Default value, change as needed




    const sortSelect = (sortSelected) => {
        setActiveSort(sortSelected)
    }


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

    console.log(filteredMovies);

    return (
        <div className="Movies">
            <div className="container">
                <div className="titles">
                    <div className={`title ${activeCategory === 'movies' ? 'active' : ''}`} onClick={() => categorySelect('movies')}>
                        <BsPlayBtn />
                        <span>Movies</span>
                    </div>
                    <div className={`title ${activeCategory === 'series' ? 'active' : ''}`} onClick={() => categorySelect('series')}>
                        <BiMovie />
                        <span>Series</span>
                    </div>
                    <div className={`title ${activeCategory === 'original series' ? 'active' : ''}`} onClick={() => categorySelect('original series')}>
                        <FaCheck />
                        <span>Original Series</span>
                    </div>
                    <div className="title">
                        <FaSearch />
                        <span>Search</span>
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
                <div className="filter">
                    <div className="filters_type">
                        <h2>Sorted by :</h2>
                        <div className="btns">
                            <div className={`btn ${activeSort === 'Latest' ? 'active' : ''}`} onClick={() => sortSelect('Latest')}>Latest</div>
                            <div className={`btn ${activeSort === 'Year' ? 'active' : ''}`} onClick={() => sortSelect('Year')}>Year</div>
                            <div className={`btn ${activeSort === 'A to Z' ? 'active' : ''}`} onClick={() => sortSelect('A to Z')}>A to Z</div>
                        </div>
                    </div>
                    <div className="rating">
                        <FaStar />
                        <input
                            type="range"
                            min="0"
                            max="10"
                            step="0.1"
                            value={ratingValue}
                            onChange={(event) => setRatingValue(parseFloat(event.target.value))}
                        />
                        <span>{ratingValue.toFixed(1)}</span>

                    </div>
                </div>
                <div className="movies-list">

                    {filteredMovies
                        .slice()
                        .sort((a, b) => {
                            if (activeSort === 'Latest') {
                                return b.year - a.year; // Sort by release year in descending order (latest first)
                            } else if (activeSort === 'Year') {
                                return a.year - b.year; // Sort by release year in ascending order
                            } else if (activeSort === 'A to Z') {
                                return a.title.localeCompare(b.title); // Sort alphabetically by movie title
                            }
                            return 0;
                        })
                        .filter((movie) => movie.rating >= ratingValue) // Filter movies by selected rating value
                        .map((movie) => <Card movie={movie} key={movie.id} />)}
                </div>
            </div>
        </div>
    )
}

export default Movies;