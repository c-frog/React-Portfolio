import React from "react";
import "./navbar.css";
import {Link} from "react-router-dom";

function Navbar() {
   return (

   <div>
      <div className="navbar">

         <nav className="links">
            <ul className="navlinks">
               <li><Link className="navlinks" to="/gallery">photography</Link></li>
               <li><Link className="navlinks" to="/about">about</Link></li>
               <li><Link id="name-link" to="/">Clyde Plasencia</Link></li>
               <li><Link className="navlinks" to="/contact">contact</Link></li>
               <li><Link className="navlinks" to="/code">code</Link></li>
            </ul>
         </nav>

      </div>

      <div className="mobile-navbar">

         <nav className="links">
            <Link id="name-link" to="/">Clyde Plasencia</Link>
               <ul className="navlinks">
               <li><Link className="navlinks" to="/gallery">photography</Link></li>
               <li><Link className="navlinks" to="/about">about</Link></li>
               <li><Link className="navlinks" to="/contact">contact</Link></li>
               <li><Link className="navlinks" to="/code">code</Link></li>
               </ul>
         </nav>
      </div>

   </div>
   );
}

export default Navbar;