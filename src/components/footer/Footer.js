import React from 'react';
import './Footer.scss';
import {Link} from "react-router-dom";

function Footer(){
        return (
            <div className='footer'>
                <p>Question?call 777-777-777</p>
                <div className='content'>
                    <ul>
                        <li>
                            FAQ
                        </li>
                        <li>
                            Account
                        </li>
                        <li>
                            Help Center
                        </li>
                        <li>
                            Jobs
                        </li>
                    </ul>
                    <ul>
                        <li>
                            FAQ
                        </li>
                        <li>
                            Account
                        </li>
                        <li>
                            Help Center
                        </li>
                        <li>
                            Jobs
                        </li>
                    </ul>
                    <ul>
                        <li>
                            FAQ
                        </li>
                        <li>
                            Account
                        </li>
                        <li>
                            Help Center
                        </li>
                        <li>
                            Jobs
                        </li>
                    </ul>
                </div>
                <div className='me'>
                    Created and designed by&emsp;
                    <Link to='mailto:sallamraady@gmail.com'>
                        Sallam Rady Ramadan
                    </Link>
                </div>
            </div>
        );
}

export default Footer;