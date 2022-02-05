import React from 'react';
import blinkerLogo from '../assets/blinker-icon.png';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <div className='navigation'>
        <nav className='home__nav'>
            <Link to="/">
              <figure>
                  <img className='home__logo' src={blinkerLogo} alt="logo" />
              </figure>
            </Link>
            <ul className='nav__links'>
                <Link to="/">
                  <li className='nav__link link__trans purple'>Home</li>
                </Link>
                <li className='nav__link link__trans nav__black link__remove'>Find your movie</li>
                <li className='nav__link nav__button link__remove'>CONTACT</li>
            </ul>
        </nav>
    </div>
  );
}
