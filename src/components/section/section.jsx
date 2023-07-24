import React from 'react';
import img1 from './images/illustration-1.png';
import './section.css';

function Section() {
    return(
        <div className="section_container">
            <div className="firstsection">
                <h1>All your files in one secure location
                    , accessible anywhere.
                </h1>

                <p>Fylo stores your most important files in one secure location.
                    Access them whenever you need, share and collaborate with 
                    friends, family and co-workers.
                </p>
                <form action="#">
                    <input type="text" placeholder='Enter your email...' />
                    <button>Get Started</button>
                </form>
            </div>
            <div className="secondsection">
                <img src={img1} alt="" />



            </div>




        </div>

    )
}
export default Section;