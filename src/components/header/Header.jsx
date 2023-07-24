import React from 'react';
import img1 from './images/logo.svg';
import './header.css'


function Header(){
    return (

    <div className='header'>
         <img src={img1} alt="" />

        <ul>
          <li>Features</li>
          <li>Team</li>
          <li>Sign In</li>
        </ul>

       </div>

    )
    
}

export default Header;