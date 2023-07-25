import React from 'react';
import img3 from './bg-curve-desktop.svg'
import './primary.css';
import img4 from './icon-quotes.svg';
import img5 from './avatar-testimonial.jpg'
import img6 from './illustration-2.png'



function Primary() {
    return(
        
        <div className="primaryPath">
            <div className="imagge">
            <img id='img3' src={img3} alt="" />
            </div>
            <div className="firstPry">
                <div className="firstPry1">
                   <h1>Stay productive, wherever you are</h1>
                   <p id='p1'>Never let location be an issue when accessing
                    your files. Fylo has you covered for all your file storage needs.
                   </p>
                   <p id='p2'>Securely share files and folders with friends, family and colleagues for 
                    live collaboration. NO email attachments required.</p>
                    <div className="fortheP">
                    <p id='p3'>See how Fylo works</p>
                    </div>
                   
                </div>
                <div className="firstPry2">
                    <img src={img4} alt="" />
                    <p>Flylo has improved our team productivity by an order
                        of magnitude. Since making the switch our team has become
                        a well-oiled collaboration machine.
                    </p>
                    <div className="Handle">
                        <img id='img5' src={img5} alt=""/>
                        <div className="handleBio">
                            <p id='firstNmae'>Kyle Burlen</p>
                            <p>Founder & Ceo</p>
                        </div>
                    </div>

                </div>

            </div>
            <div className="secondPry">
                <img id='img6' src={img6} alt="" />

            </div>
          



        </div>




    )

}


export default Primary;