import React from 'react';
import BonezPic from '../../assets/images/screenshots/bones.png';
import PaintPic from '../../assets/images/screenshots/flintz.png';
import PlannerPic from '../../assets/images/screenshots/planner.png';
import TrackerPic from '../../assets/images/screenshots/tracker.png';
import WeatherPic from '../../assets/images/screenshots/weather.png';
import ProfilePic from '../../assets/images/screenshots/devprofile.png';

function CodeFolio () {
   return (

   <div className="portfolio-container">

   <div className="card-row">
      <div>
         <div>
            <div className="card" style={{ width: 18+'rem' }}>
               <img src={BonezPic} className="card-img-top" alt="..." />
               <div className="card-body">
                  <h5 className="card-title">Bone'z Beatz</h5>
                  <p className="card-text">A front end web application, the user can pair audio samples to their keyboard, and record what they play.</p>
                  <a className="contact-links" href="https://github.com/tzvik15/Bonez-Beatz"><i className="fab fa-github"></i></a>
               </div>
            </div>
         </div>
      </div> 

      <div>
         <div className="card" style={{ width: 18+'rem' }}>
            <img src={PaintPic} className="card-img-top" alt="..." />
            <div className="card-body">
               <h5 className="card-title">Paint Brush</h5>
               <p className="card-text">Why draw on paper? This application allows the user to record what they draw, and store their recording on a Heroku database.</p>
               <a className="contact-links" href="https://github.com/c-frog/Paint-Brush"><i className="fab fa-github"></i></a>
            </div>
         </div>
      </div>
      
   </div>

   <div className="card-row">
      <div>
            <div className="card" style={{ width: 18+'rem' }}>
               <img src={PlannerPic} className="card-img-top" alt="..." />
               <div className="card-body">
                  <h5 className="card-title">Day Planner</h5>
                  <p className="card-text">This app utilizes the front end of a clients browser to set a day planner-- useful to plan your day from your personal computer.</p>
                  <a className="contact-links" href="https://github.com/c-frog/Day-Planner"><i className="fab fa-github"></i></a>
               </div>
            </div>
      </div>

      <div>
         <div className="card" style={{ width: 18+'rem' }}>
            <img src={ProfilePic} className="card-img-top" alt="..." />
            <div className="card-body">
               <h5 className="card-title">Developer Profile</h5>
               <p className="card-text">Using the CLI the user can quickly generate a profile card</p>
               <a className="contact-links" href="https://github.com/c-frog/Developer-Profile"><i className="fab fa-github"></i></a>
            </div>
         </div>
      </div>
   </div>


   <div className="card-row">
      <div>
         <div className="card" style={{ width: 18+'rem' }}>
            <img src={TrackerPic} className="card-img-top" alt="..." />
            <div className="card-body">
               <h5 className="card-title">Employee Tracker</h5>
               <p className="card-text">Through the CLI the user can track and store through a database of employees.</p>
               <a className="contact-links" href="https://github.com/c-frog/Employee-Tracker"><i className="fab fa-github"></i></a>
            </div>
         </div>
      </div>

      <div>
            <div className="card" style={{width: 18+'rem'}}>
               <img src={WeatherPic} className="card-img-top" alt="..." />
               <div className="card-body">
                  <h5 className="card-title">5 Day Forecast</h5>
                  <p className="card-text">Always be prepared. Be sure to always be on the lookout for weather.</p>
                  <a className="contact-links" href="https://github.com/c-frog/Weather-API"><i className="fab fa-github"></i></a>
               </div>
            </div>
         </div>
      </div>

</div>

   )
}

export default CodeFolio;