import { Link } from 'react-router-dom';
import './NavBar.css';
import React from 'react';

function NavBar(){
    var showDate = new Date();
    var td=showDate.toDateString();

    

    return(
        <div>
            <div className="Header-bar">
                <h1 className='appName'>Currency Nonverter</h1>
                <div className='date'>
                <p className='day'>{td}</p>

              </div>
               

            </div>
        </div>
    )
}
export default NavBar;