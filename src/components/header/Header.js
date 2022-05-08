import React from 'react';
import logo from '../../images/netflix-82871.png';
import {Link} from "react-router-dom";
import './Header.scss';

//https://i.bb.co/rSkrrdz/logo.png
function Header(){
    return (
        <header>
            <div className='panner-top'>
                <h1>NETFLIX</h1>
                <Link to='/signin'>
                    sign in
                </Link>
            </div>
            <div className='panner-content'>
                <h1>Unlimited movies, TV shows and more</h1>
                <p>watch anywhere,cancel anytime</p>
                <Link to='netflix-show'>
                    Watch Free 30 Days
                    <i className='fas fa-chevron-right'></i>
                </Link>
            </div>
        </header>
    );
}

export default Header;