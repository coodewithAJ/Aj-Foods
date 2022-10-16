import React from 'react';
import images from "../../constants/images";

import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="g letter" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className='app__aboutus-content_about'>
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className='spoon__img' />
        <p className='p__opensans'> Since our modest beginnings in 2005 with a little space in Jhunjhunu Rajasthan stylish Yorkville locale, ‘Organization Name’ ‘s development has been enlivened with the energy to cook and serve solid, Indian-roused takeout food.</p>
        <button className="custom__button" type='button'>Know More</button>
      </div>
      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about knife" />
      </div>
      <div className='app__aboutus-content_history'>
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className='spoon__img' />
        <p className='p__opensans'> restaurant, establishment where refreshments or meals may be procured by the public. The public dining room that ultimately came to be known as the restaurant originated in India, and the Indian have continued to make major contributions to the restaurant’s development.</p>
        <button className="custom__button" type='button'>Know More</button>
      </div>
    </div>
    
  </div>
);

export default AboutUs;
