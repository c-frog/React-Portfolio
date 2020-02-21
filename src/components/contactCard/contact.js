import React from 'react';

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
               <a className="contact-links" href="https://github.com/c-frog"><i class="fab fa-github"></i> Github</a><br/>
               <a className="contact-links" href="https://www.linkedin.com/in/clyde-plasencia-600523196/"><i class="fab fa-linkedin-in"></i> LinkedIn</a><br/>
               <a className="contact-links" href="./assets/docs/Resume.pdf"><i class="fas fa-file"></i> Resume</a><br/>
               <a className="contact-links" href=""><i class="fas fa-phone-alt"></i>(720) 354-2419</a>
            </div>

         </div>
      </div>     
   )
}

export default ContactCard;