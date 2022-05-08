import React from 'react';
import {Link} from "react-router-dom";

function Tab3(){
    return (
        <div className='Tab-2-content'>
            <div className='topPart'>
                <p>Choose one plan and watch every thing in Netflix</p>
                <Link to='netflix-show'>
                    Watch 30 Days Free
                </Link>
            </div>
            <div className='data'>
                <table>
                    <thead>
                    <tr>
                        <th>
                            <span>Basic</span>
                            &emsp;&emsp;
                            <span>Standard</span>
                            &emsp;&emsp;
                            <span>Premium</span>
                        </th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Monthly price after free month</td>
                        <td>$ 6.99</td>
                        <td>$ 11.99</td>
                        <td>$ 15.99</td>
                    </tr>
                    <tr>
                        <td>HD Available</td>
                        <td>
                            <i className='fas fa-remove no'></i>
                        </td>
                        <th>
                            <i className='fas fa-check yes'></i>
                        </th>
                        <th>
                            <i className='fas fa-check yes'></i>
                        </th>
                    </tr>
                    <tr>
                        <td>Ultra HD Available</td>
                        <td>
                            <i className='fas fa-remove no'></i>
                        </td>
                        <th>
                            <i className='fas fa-remove no'></i>
                        </th>
                        <th>
                            <i className='fas fa-check yes'></i>
                        </th>
                    </tr>
                    <tr>
                        <td>Screen you can watch on at the same time</td>
                        <td>
                            1
                        </td>
                        <th>
                            2
                        </th>
                        <th>
                            4
                        </th>
                    </tr>
                    <tr>
                        <td>Watch on your laptop, TV, phone and tablet</td>
                        <td>
                            <i className='fas fa-check yes'></i>
                        </td>
                        <th>
                            <i className='fas fa-check yes'></i>
                        </th>
                        <th>
                            <i className='fas fa-check yes'></i>
                        </th>
                    </tr>
                    <tr>
                        <td>Unlimited movies and TV shows</td>
                        <td>
                            <i className='fas fa-check yes'></i>
                        </td>
                        <th>
                            <i className='fas fa-check yes'></i>
                        </th>
                        <th>
                            <i className='fas fa-check yes'></i>
                        </th>
                    </tr>
                    <tr>
                        <td>First month Free</td>
                        <td>
                            <i className='fas fa-check yes'></i>
                        </td>
                        <th>
                            <i className='fas fa-check yes'></i>
                        </th>
                        <th>
                            <i className='fas fa-check yes'></i>
                        </th>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Tab3;