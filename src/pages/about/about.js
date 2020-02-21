import React from 'react';
import BioPic from '../../assets/images/misc/propic.jpg';
import StarsPic from '../../assets/images/landscape/bunchostars.jpg';

function About () {
   return (
      <div>
         <div className="background-wrapper">

            <div className="bio-container">
               <div className="bio-contents">
                  <img src={BioPic}  alt="" id="bio-pic" />
                  <p id="bio">
                  <p id="bold">
                     Hello,
                  </p>
                     my name is Clyde! Born and raised in Boulder, CO, I am a
                  photographer and software developer. Originally I began photography
                  as a hobby, however during college I found a true passion in taking
                  pictures and working with people and events. Later in life I began
                  software development to make, break, and solve my own puzzles, and
                  through that I hope to work with technology companies that have a
                  real world impact. When I'm not at my computer you'll find me skiing
                  in the winter, racing a J24 sailboat in the summer!
                  </p>
               </div>
      </div>

      </div>

      <img src={StarsPic} alt="" className="background-image" />
      
      </div>
   )
}

export default About;