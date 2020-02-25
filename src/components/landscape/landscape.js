import React from 'react';
import BurntTree from '../../assets/images/landscape/burnt tree.jpg';
import BvValley from '../../assets/images/landscape/bvvalley.jpg';
import OgrenTruck from '../../assets/images/landscape/ogren.jpg';
import StarBar from '../../assets/images/landscape/StarBar.jpg';
import Flatiron from '../../assets/images/landscape/flatirondrone.jpg';
import TetonRoad from '../../assets/images/landscape/tetonRoad-1.jpg';
import TetonLake from '../../assets/images/landscape/tetonlake.jpg';
import Campers from '../../assets/images/landscape/meredithcampers.jpg';
import YellowstoneRiver from '../../assets/images/landscape/bwyellowstone.jpg';
import Schoolhouse from '../../assets/images/landscape/SHwLM (1 of 1).jpg';
import BurntMoon from '../../assets/images/landscape/Burnt Moon.jpg';
import Firework from '../../assets/images/landscape/flatheadfireworks.jpg';
import DroneCreek from '../../assets/images/landscape/dronecreek.jpg';
import SoprisBW from '../../assets/images/landscape/SoprisBW.jpg';
import Lookout from '../../assets/images/landscape/LO.jpg';
import AdamsLake from '../../assets/images/landscape/Glacierlake.jpg'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'jquery/dist/jquery.min.js'
// import 'bootstrap/dist/js/bootstrap.min.js'

function Landscape () {
   return (
      <>
         <h3 className="subHead">Landscape</h3>
            
            <div className="r1">
            
               <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">

                  <div className="carousel-inner">
                     <div className="carousel-item active">
                        <img src={BurntTree} className="d-block w-100" alt="..." />
                     </div>
                     <div className="carousel-item">
                        <img src={BvValley} className="d-block w-100" alt="..."/>
                     </div>
                     <div className="carousel-item">
                        <img src={OgrenTruck} className="d-block w-100" alt="..."/>
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
                  <img className="soloStill" src={StarBar} alt=""/>
               </div>
               
            </div>

            <div className="stills">
               <img src={Lookout} alt="" className="still" />
               <img src={AdamsLake} alt="" className="still" />
            </div>


            <div className="r1">

               <div id="carouselExampleIndicators4" className="carousel slide" data-ride="carousel">
                  <div className="carousel-inner">
                     <div className="carousel-item active">
                        <img src={TetonRoad} className="d-block w-100" alt="..." />
                     </div>
                     <div className="carousel-item">
                        <img src={Flatiron} className="d-block w-100" alt="..." />
                     </div>
                     <div className="carousel-item">
                        <img src={TetonLake} className="d-block w-100" alt="..." />
                     </div>
                  </div>
                  <a className="carousel-control-prev" href="#carouselExampleIndicators4" role="button" data-slide="prev">
                     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                     <span className="sr-only">Previous</span>
                  </a>
                  <a className="carousel-control-next" href="#carouselExampleIndicators4" role="button" data-slide="next">
                     <span className="carousel-control-next-icon" aria-hidden="true"></span>
                     <span className="sr-only">Next</span>
                  </a>
               </div>
            </div>

            <div className="stills">
               <img src={Campers} alt="" className="still" />
               <img src={YellowstoneRiver} alt="" className="still" />
            </div>
            <div class="stills">
               <img src={Schoolhouse} alt="" className="still" />
               <img src={BurntMoon} alt="" className="still" />
            </div>

            <div className="r1">

               <div id="carouselExampleIndicators5" className="carousel slide" data-ride="carousel">

                  <div className="carousel-inner">
                     <div className="carousel-item active">
                        <img src={Firework} className="d-block w-100" alt="..." />
                     </div>
                     <div className="carousel-item">
                        <img src={DroneCreek} className="d-block w-100" alt="..." />
                     </div>
                     <div className="carousel-item">
                        <img src={SoprisBW} className="d-block w-100" alt="..." />
                     </div>
                  </div>
                  <a className="carousel-control-prev" href="#carouselExampleIndicators5" role="button" data-slide="prev">
                     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                     <span className="sr-only">Previous</span>
                  </a>
                  <a className="carousel-control-next" href="#carouselExampleIndicators5" role="button" data-slide="next">
                     <span className="carousel-control-next-icon" aria-hidden="true"></span>
                     <span className="sr-only">Next</span>
                  </a>
               </div>
         </div>
      </>
   )
}

export default Landscape;