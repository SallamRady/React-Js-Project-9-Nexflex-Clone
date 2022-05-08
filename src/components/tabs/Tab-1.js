import React from 'react';
import {Link} from "react-router-dom";

function Tab1(){
    return (
        <div className='ActiveTabContent'>
            <div className='tabInfo'>
                <p>If you decide Netflix isn't for you - no problem
                    . No commitment. Cancel online anytime.
                </p>
                <br/>
                <br/>
                <br/>
                <Link to='netflix-show'>
                    unsubscribe
                </Link>
            </div>
            <img src='https://i.ibb.co/J2xDJV7/tab-content-1.png' alt='cancel any time'/>
        </div>
    );
}

export default Tab1;