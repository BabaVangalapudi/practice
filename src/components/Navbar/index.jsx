import React from "react";
import DrawerMobileNavigation from "./drawer";
import "./index.css";
import iconB from "../../assets/letter-b.svg"

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="drawer">
        <img src={iconB} alt="" className="b-icon" />
       <div className="icon">
       <DrawerMobileNavigation/>
       </div>
      </div>
      <div className="nav-list">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Experience</li>
          <li>Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
