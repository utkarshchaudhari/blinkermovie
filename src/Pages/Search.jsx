import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import searchImg from '../assets/undraw_page_not_found_re_e9o6.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

export default function Search({ movie }) {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState();
    const [searchID, setSearchID] = useState(movie);
    const navigate = useNavigate();

    async function fetchMovie(search) {
        const searchResultsEl = document.querySelector(".search__results");
        searchResultsEl.classList += ' spinner--add';

        const { data } = await axios.get(`https://www.omdbapi.com/?apikey=526b6e5e&s=${search}`);
        setMovies(data);

        const results = data.Response;

        if (results === 'True') {
            setLoading(true);
            searchResultsEl.classList.remove('spinner--add');
        }
        else if (results === 'False') {
            setLoading(false);
            searchResultsEl.classList.remove('spinner--add');
        }
    }

    useEffect(() => {
        fetchMovie(searchID);
    }, []);

    return (
        <div className='search'>
            <h1 className='purple'>
                Browse Movies
            </h1>
            <div className="search__results">
                <FontAwesomeIcon icon={faSpinner} className='movie__loading--spinner'/>
                {loading ? (movies.Search.map((mData) => (
                    <div className="movie__card" key={mData.imdbID} onClick={() => navigate(`${mData.imdbID}`)}>
                        <div className="movie-card__container">
                            <img src={mData.Poster} className="movie__image" alt="" />
                            <h3 className="movie__header">{mData.Title}</h3>
                            <p className="movie__para">Year : {mData.Year}</p>
                        </div>
                    </div>))
                ) : (
                    <figure className='searchImage__wrapper'>
                        <img src={searchImg} alt="" className='searchImage'/>
                        <figcaption>Try Another Search?</figcaption>
                    </figure>
                )}
            </div>
        </div>
    );
}
