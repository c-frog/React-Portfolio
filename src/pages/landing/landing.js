import React from 'react';
import MeredithCampers from '../../assets/images/landscape/meredithcampers.jpg'

function Landing() {
   return (
      <div>
         <div className="index-icons">
            <i className="homeIcons fas fa-camera-retro"></i>
            <i className="homeIcons fas fa-plus"></i>
            <i className="homeIcons fas fa-laptop-code"></i>
         </div>

         <img src={MeredithCampers} id="index-image" alt="..." />
      </div>
   )
}

export default Landing;