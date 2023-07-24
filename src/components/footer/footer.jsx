import React from "react";
import img1 from "./logo.svg";
import img2 from "./icon-phone.svg";
import img3 from "./icon-email.svg";
import "./footer.css";
import {  FaFacebookF} from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


function Footer() {
  return (
    <div className="mainFooter">
      <div className="footer1">
        <img src={img1} alt="" />
          <div className="firsticon">
            <div className="svg1">
              <img src={img2} alt="" />
            </div>
            <div className="svg2">
              <p>Phone: 07037476266</p>
            </div>
          </div>
          <div className="secondicon">
            <div className="svg3">
              <img src={img3} alt="" />
            </div>

            <div className="svg4">
              <p>demilade3chub@gmail.com</p>
            </div>
          </div>
        
      </div>
      <div className="footer2">
           <p>About Us</p>
           <p>Jobs</p>
           <p>Press</p>
           <p>Blogs</p>
      </div>
      <div className="footer3">
        <p>Contact Us</p>
        <p>Terms</p>
        <p>Privacy</p>
      </div>
      <div className="footer4">
      <FaFacebookF size="1rem" className="foricons" />
      <FaTwitter size="1rem" className="foricons" />
      <FaInstagram size="1rem" className="foricons"  />
     
      </div>
      
      
    </div>
  );
}

export default Footer;
