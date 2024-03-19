import React from "react";
import DrawerMobileNavigation from "./drawer";
import "./index.css";
import iconB from "../../assets/letter-b.svg"
import { NavLink } from "react-router-dom";

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
          {/* <Link to="/" className="list-style"><li>Home</li></Link>
          <li><Link to = "/about" activeClassName="active" className="list-style">About</Link></li>
          <li><Link to="/projects" className="list-style">Projects</Link></li>
          <li><Link to="/experience" className="list-style">Experience</Link></li>
          <li><Link to="/contact" className="list-style">Contact</Link></li> */}
          <li><NavLink exact to="/" activeClassName="active" className="list-style">Home</NavLink></li>
          <li><NavLink to="/about" activeClassName="active" className="list-style">About</NavLink></li>
          <li><NavLink to="/projects" activeClassName="active" className="list-style">Projects</NavLink></li>
          <li><NavLink to="/experience" activeClassName="active" className="list-style">Experience</NavLink></li>
          <li><NavLink to="/contact" activeClassName="active" className="list-style">Contact</NavLink></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
