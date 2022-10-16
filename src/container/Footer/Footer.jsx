import React from 'react';
import { Newsletter } from '../../components';
import {FiFacebook,FiTwitter,FiInstagram} from "react-icons/fi"

import './Footer.css';
import { images } from '../../constants';

const Footer = () => (
  <div className='app__footer section__padding'>
  
    <Newsletter/>
    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">road no 3 jhunjhunu rajasthan</p>
        <p className="p__opensans">+918765432100</p>
        <p className="p__opensans">+918765432199</p>

      </div>
      <div className="app__footer-links_logo">
        {/* <img src={images.gericht} alt="footer logo" /> */}
        <div className="logo" style={{marginBottom:"1rem"}}>
        <h3>AJ-FOODS</h3>
      </div>
        <p className="p__opensans">"The best way to find yourself is to lose yourself in the service of others."</p>
        <img src={images.spoon} alt="spoon" className='spoon__img' style={{marginTop:"15px"}} />
        <div className="app__footer-links_icons">
          <FiFacebook/>
          <FiTwitter/>
          <FiInstagram/>
        </div>

      </div>
      <div className="app__footer-links_work">
      <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday-Friday:</p>
        <p className="p__opensans">08:00 am - 11:00 pm</p>
        <p className="p__opensans">Saturday-Sunday:</p>
        <p className="p__opensans">08:00 am - 10:00 pm</p>
        

      </div>
    </div>
    <div className="footer__copyright">
      <p className="p__opensans">2022 Gericht. All Rights reserved.</p>
    </div>
  </div>
);

export default Footer;
