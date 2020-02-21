import React from 'react';

import ElizaAisle from '../../assets/images/w&e/elizaAisle.jpg';
import JamesAlter from '../../assets/images/w&e/jamesAlter.jpg';
import Groomsmen from '../../assets/images/w&e/jamesGroomsmen.jpg';
import Gazebo from '../../assets/images/w&e/updatedje-1 copy.jpg';
import WeddingParty from '../../assets/images/w&e/weddingPary.jpg';
import Alter from '../../assets/images/w&e/jeAlter.jpg';
import ExitAisle from '../../assets/images/w&e/jeExit.jpg';

// import ElizaAisle from '../../assets/images/w&e/elizaAisle.jpg';

function Weddings () {
   return (
      <div>

         <h3 className="subHead">Weddings and Events</h3>
            
            <div className="r1">
            
               <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                  <div className="carousel-inner">
                     <div className="carousel-item active">
                        <img src={ElizaAisle} className="d-block w-100" alt="..." />
                     </div>
                     <div className="carousel-item">
                        <img src={JamesAlter} className="d-block w-100" alt="..."/>
                     </div>
                     <div className="carousel-item">
                        <img src={Groomsmen} className="d-block w-100" alt="..."/>
                     </div>
                  </div>
                  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                     <span className="sr-only">Previous</span>
                  </a>
                  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                     <span className="carousel-control-next-icon" aria-hidden="true"></span>
                     <span className="sr-only">Next</span>
                  </a>
               </div>
            
               <div>
                  <img className="soloStill" src={Gazebo} alt=""/>
               </div>
            
               
            </div>
            
            <div className="stills">
               <img src={WeddingParty} alt="" className="still"/>
               <img src={Alter} alt="" className="still"/>
            </div>
            
            <div className="stills">
               <img src={ExitAisle} alt="" className="rando"/>
            </div>




      </div>

   )
}

export default Weddings;