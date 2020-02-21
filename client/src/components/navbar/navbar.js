import React from "react";
import "./navbar.css";
import {Link} from "react-router-dom";

function Navbar() {
   return (

   <div>
      <div class="navbar">

         <nav class="links">
            <ul class="navlinks">
               <li><a class="navlinks" href="photoPortfolio.html">photography</a></li>
               <li><a class="navlinks" href="aboutme.html">about</a></li>
               <li><a id="name-link" href="aboutme.html">Clyde Plasencia</a></li>
               <li><a class="navlinks" href="contact.html">contact</a></li>
               <li><a class="navlinks" href="codePortfolio.html">code</a></li>
            </ul>
         </nav>

      </div>

      <div class="mobile-navbar">

         <nav class="links">
            <a id="name-link" href="aboutme.html">Clyde Plasencia</a>
               <ul class="navlinks">
                  <li><a class="navlinks" href="photoPortfolio.html">photography</a></li>
                  <li><a class="navlinks" href="aboutme.html">about</a></li>
                  <li><a class="navlinks" href="contact.html">contact</a></li>
                  <li><a class="navlinks" href="codePortfolio.html">code</a></li>
               </ul>
         </nav>
      </div>

   </div>
   );
}

export default Navbar;