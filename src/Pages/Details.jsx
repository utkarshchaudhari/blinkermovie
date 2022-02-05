import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import searchImg from '../assets/undraw_page_not_found_re_e9o6.svg';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function Details() {
    const [movie, setMovie] = useState();
    const [loading, setLoading] = useState();
    const [ratings, setRatings] = useState();
    const { imdbID } = useParams();

    async function fetchMovieDetails() {
        const detailsEl = document.querySelector(".movie__selected");
        detailsEl.classList += ' spinner--add';

        const { data } = await axios.get(`https://www.omdbapi.com/?apikey=526b6e5e&i=${imdbID}`);
        setMovie(data);
        
        if(data.Ratings.length === 0){
            setRatings(false);
        }
        else{
            setRatings(true);
        }
        setLoading(true);
        detailsEl.classList.remove('spinner--add');
    }

    useEffect(() => {
        fetchMovieDetails();
    }, []);

  return (
    <div className='details'>
        <div className="details__movie">
            <Link to="/search">
                <FontAwesomeIcon icon={faArrowLeft} className='arrow'/>
            </Link>
            <Link to="/search">
                <h3 className='details__title'>Movies</h3>
            </Link>
        </div>
        <div className="movie__selected">
            <FontAwesomeIcon icon={faSpinner} className='movie__loading--spinner'/>
            {
                loading ? (
                    <div className="movie__details">
                        <figure>
                            <img src={movie.Poster} alt="" className="movie__image" />
                        </figure>
                        <div className="movie__info">
                            <h3 className='movie__title'>{movie.Title}</h3>
                            <span className='movie__genre'>{movie.Year} ‧ {movie.Genre} ‧ {movie.Runtime}</span>
                            <div className="movie__description">
                                <h4 className='movie__sub-title'>Summary</h4>
                                <p className='movie__description--para'>
                                    {movie.Plot}
                                </p>
                                <p className='movie__description--details'>
                                    Directed by : <span className='purple'>{movie.Director}</span>
                                </p>
                                <p className='movie__description--details'>
                                    Written by : <span className='purple'>{movie.Writer}</span>
                                </p>
                                <p className='movie__description--details'>
                                    Starring : <span className='purple'>{movie.Actors}</span>
                                </p>
                                <p className='movie__description--details'>
                                    Release date : <span className='purple'>{movie.Released}</span>
                                </p>
                                <p className='movie__description--details'>
                                    Awards : <span className='purple'>{movie.Awards}</span>
                                </p>
                                {
                                    ratings ? (
                                    <p className='movie__description--details'>
                                        Ratings : <span className='purple'>{movie.Ratings[0].Value}</span>
                                    </p>) : (
                                    <p className='movie__description--details'>
                                        Ratings : <span className='purple'>N/A</span>
                                    </p>)
                                }
                                <p className='movie__description--details'>
                                    Box office : <span className='purple'>{movie.BoxOffice}</span>
                                </p>
                            </div>
                        </div>
                    </div>                    
                ) : (
                    <figure className='searchImage__wrapper'>
                        <img src={searchImg} alt="" className='searchImage'/>
                        <figcaption>Sorry! No details were found.</figcaption>
                    </figure>
                )
            }
        </div>
    </div>
  );
}
