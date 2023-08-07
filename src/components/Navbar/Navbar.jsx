import React from "react";
import Hamburger from "hamburger-react";
import CustomLink from "../../utils/CustomLink";
import "./navbar.css";

const Navbar = () => {
  const handleToggle = (toggle) => {
    const frf = document.getElementsByClassName("nav_side");
    if (toggle) {
      console.log("open");
      frf[0].id = "on";
    } else {
      console.log("close");
      frf[0].id = "off";

    }
  };

  return (
    <div className="nav_container">
      <Hamburger onToggle={(toggle) => handleToggle(toggle)} />
      <ul>
        <CustomLink to="/Portfolio-mk3/" className="nav_button">
          Home
        </CustomLink>
        <CustomLink to="/Portfolio-mk3/about" className="nav_button">
          About
        </CustomLink>
        <CustomLink to="/Portfolio-mk3/projects" className="nav_button">
          Projects
        </CustomLink>
        <CustomLink to="/Portfolio-mk3/contact" className="nav_button">
          Contact
        </CustomLink>
      </ul>
    </div>
  );
};

export default Navbar;
