import React from 'react';
import { SubHeading } from '../../components';
import {images,galleryImages } from '../../constants';
import { BsInstagram,BsArrowLeftShort,BsArrowRightShort } from 'react-icons/bs';
import gallery01 from "../../assets/gallery01.png"
import gallery02 from "../../assets/gallery02.png"
import gallery03 from "../../assets/gallery03.png"
import gallery04 from "../../assets/gallery04.png"
import { motion } from 'framer-motion';


import './Gallery.css';



const Gallery = () => {
  return (
    <div className='app__gallery flex__center'>
      <div className="app__gallery-content">
        <SubHeading title="Instagram"/>
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p className="p__opensans" style={{color:"#AAA", margin:"2rem 0rem",marginRight:"2rem"}}> People who love to eat are always the best people. Meals and memories are made here!</p>
        <button className="custom__button" type='button'>View More</button>
      </div>
      
      <div className="app__gallery-images">
        <motion.img src={gallery01} alt="galleryimage" whileHover={{ scale: 2.5, zIndex:"5" }} />
        <motion.img src={gallery02} alt="galleryimage" whileHover={{ scale: 2.5, zIndex:"5" }} />
        <motion.img src={gallery03} alt="galleryimage" whileHover={{ scale: 2.5, zIndex:"5" }} />
        <motion.img src={gallery04} alt="galleryimage" whileHover={{ scale: 2.5, zIndex:"5" }} />
       
       
      </div>
    </div>
  )
}

export default Gallery



