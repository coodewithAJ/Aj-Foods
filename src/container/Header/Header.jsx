import React from 'react';
import {SubHeading} from "../../components"

import './Header.css';
import images from "../../constants/images";

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavour"/>
      <h1 className="app__header-h1">The Key to Fine Dining</h1>
      <p className="p__opensans" style={{margin:"1rem 0"}}> Need food and a good place to eat? Welcome to our humble place where you can eat good food peacefully. </p>
      <button type='button' className='custom__button'><a href="#menu">Explore More</a></button>

    </div>
    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header img" />
      
    </div>
  </div>
);

export default Header;
