import React, {useEffect, useState} from 'react';
import logo from '../../images/NetFlixLogo.png';
import avatar from '../../images/NetflixAvatar.png';
import {Link} from "react-router-dom";
import './Nav.scss';

function Nav(){
    const [show, setShow] = useState(false);

    const NavbarVisibility = ()=>{
        if(window.scrollY > 100)
        {
            setShow(true);
        }else{
            setShow(false);
        }
    }
    useEffect(() => {
        window.addEventListener('scroll',NavbarVisibility);
        return () => {
            window.removeEventListener('scroll',NavbarVisibility);
        };
    }, []);

    return (
        <div className={`nav ${show && "nav-black"}`}>
            <Link to='/'>
                <img src={logo} alt='logo' className='nav-logo'/>
            </Link>
            <img src={avatar} alt='logo' className='nav-avatar'/>
        </div>
    );
}

export default Nav;