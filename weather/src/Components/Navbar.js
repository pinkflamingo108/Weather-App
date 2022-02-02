import React from "react";
import "./Components.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud } from "@fortawesome/free-solid-svg-icons";

export const Navbar = () => {
 return (
  <nav id="navbar">
   <div className="nav-wrapper">
    <div className="logo-container">
     <h3 className="main-logo">
      <FontAwesomeIcon className="cloud-icon" icon={faCloud} />
      My Weather App
     </h3>
    </div>
   </div>
  </nav>
 );
};
