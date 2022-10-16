import React from 'react';
import { images } from '../../constants';
import { SubHeading } from '../../components';

import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef image" />
    </div>

    <div className="app__wrapper_info">
      <SubHeading title="Chef's Word"/>
      <h1 className='headtext__cormorant'>What We Believe In</h1>
      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote" />
          <p className="p__opensans">We see our customers as invited guests to a party, and we are the hosts.</p>
        </div>
        <p className="p__opensans">It’s our job every day to make every important aspect of the customer experience a little bit better.</p>
      </div>
      <div className="app__chef-sign">
        <p>Ashok Choudhary</p>
        <p className='p__opensans'>Chef & Founder</p>
        <img src={images.sign} alt="sign" />
      </div>
    </div>
  </div>
);

export default Chef;
