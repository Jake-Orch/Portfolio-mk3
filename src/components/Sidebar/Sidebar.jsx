import React from "react";
import Hamburger from "hamburger-react";
import { SidebarData } from "../../data";
import { Link } from "react-router-dom";
import "./navbar.css";

const Sidebar = () => {
  return (
    <>
      {SidebarData.map((item, index) => {
        return (
          <li key={index}>
            <Link to={item.path}>
              {item.icon1}
              <span>{item.title}</span>
            </Link>
          </li>
        );
      })}
    </>
  );
};

export default Sidebar;