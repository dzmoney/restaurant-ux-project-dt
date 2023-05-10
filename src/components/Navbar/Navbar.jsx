import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlinerestaurantMenu } from "react-icons/md";
import images from "../../constants/images";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.gravitas} alt="app logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans"></li>
      </ul>
    </nav>
  );
};

export default Navbar;
