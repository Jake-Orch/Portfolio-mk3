import React from "react";
import Hamburger from "hamburger-react";
import { SidebarData } from "../../data";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const handleToggle = (toggle) => {
    if (toggle) {
      console.log("open");
    } else {
      console.log("close");
    }
  };
  

  return (
    <div className="nav_container">
      <Hamburger onToggle={toggle => handleToggle(toggle)} />
      <ul>
        <CustomLink to="/Portfolio-mk3/" className="nav_button">Home</CustomLink>
        <CustomLink to="/Portfolio-mk3/about" className="nav_button">About</CustomLink>
        <CustomLink to="/Portfolio-mk3/projects" className="nav_button">Projects</CustomLink>
        <CustomLink to="/Portfolio-mk3/contact" className="nav_button">Contact</CustomLink>
      </ul>
    </div>
  );
};


function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

export default Navbar;
