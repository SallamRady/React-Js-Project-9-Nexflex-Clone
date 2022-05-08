import React from 'react';
import {Link} from "react-router-dom";

function Tab2(){
    return (
        <div className='Tab-2-content'>
            <div className='topPart'>
                <p>Watch TV shows and movies anytime,anywhere --
                    <br/> Personalized for you.</p>
                <Link to='netflix-show'>
                    Watch 30 Days Free
                </Link>
            </div>
            <div className='content'>
                <div className='item'>
                    <img src='https://i.ibb.co/DpdN7Gn/tab-content-2-1.png' width={'80%'} alt='error in loading image.'/>
                    <br/>
                    <p>Watch On Your TV</p>
                    <br/>
                    <small>smart TVs, Playstation, Xbox, Chromecast,<br/> Apple TV,Blu-ray players and more.</small>
                    <br/>
                </div>
                <div className='item'>
                    <img src='https://i.ibb.co/R3r1SPX/tab-content-2-2.png' width={'80%'} alt='error in loading image.'/>
                    <br/>
                    <p>Watch instantly or download for later</p>
                    <br/>
                    <small>Available on phone an tablet, wherever you<br/>go.</small>
                    <br/>
                </div>
                <div className='item'>
                    <img src='https://i.ibb.co/gDhnwWn/tab-content-2-3.png' width={'80%'} alt='error in loading image.'/>
                    <br/>
                    <p>Use any computer</p>
                    <br/>
                    <small>Watch right on Netflix.com.</small>
                    <br/>
                </div>
            </div>
        </div>
    );
}

export default Tab2;