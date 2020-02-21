import React from 'react';
import ContactCard from '../../components/contactCard/contact';
// import {Link} from "react-router-dom";
import StarsPic from '../../assets/images/landscape/bunchostars.jpg';

function Contact () {
   return (

      <div>

         <ContactCard />

         <img src={StarsPic} alt="" className="background-image" />
      </div>
   )
}

export default Contact;