import React from 'react';
import { Link } from 'react-router-dom'
import Resume from '../../assets/docs/Resume.pdf'

function ContactCard () {
   return (
      <div className="contact-container">
         <div className="row">

            <div className="column">
               <h2 style={{marginTop: 0}}>Contact</h2>
               <form action="###" id="contact-form">
                  <label for="name">Name</label>
                  <input type="text" id="nameSubmit" name="name" placeholder="Your full name" />
                  <label for="subject">Subject</label>
                  <input type="text" id="subjectSubmit" name="submit" placeholder="Subject" />
                  <textarea name="emailBody" id="emailBody"></textarea>
                  <button type="submit" value="Submit" id="submitBtn">Submit</button>
               </form>
            </div>

            <div className="column">
               <Link className="contact-links" to="https://github.com/c-frog"><i className="fab fa-github"></i> Github</Link><br/>
               <Link className="contact-links" to="https://www.linkedin.com/in/clyde-plasencia-600523196/"><i className="fab fa-linkedin-in"></i> LinkedIn</Link><br/>
               <Link className="contact-links" to={Resume}><i className="fas fa-file"></i> Resume</Link><br/>
               <Link className="contact-links" to=""><i className="fas fa-phone-alt"></i>(720) 354-2419</Link>
            </div>

         </div>
      </div>     
   )
}

export default ContactCard;