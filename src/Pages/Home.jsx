import React from 'react';
import homeImg from '../assets/undraw_lost_online_re_upmy.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


export default function Home({ searchMovie }) {

  return (
    <div className='home'>
        <div className="home__details">
            <h1 className='purple h1__animation'>
                Movie's information platform
            </h1>
            <h2>
                FIND THE DETAILS WITH <span className='purple'>BLINKER</span>
            </h2>
            <div className='input__wrapper'>
                <input type="text" placeholder='Search by Movie Name' className='home__input' id='movie__input'/>
                <Link to="/search">
                    <button className='home__button' onClick={() => searchMovie(document.getElementById('movie__input').value)}>
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </Link>
            </div>
            <figure>
                <img src={homeImg} alt="" className='searchImage'/>
            </figure>
        </div>
    </div>
  );
}
