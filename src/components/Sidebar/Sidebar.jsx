import React from "react";
import { sidebarData } from "../../data";
import CustomLink from "../../utils/CustomLink";
import { Link } from "react-router-dom";
import "./sidebar.css"

const Sidebar = () => {
  return (
    <ul className="nav_side">
      {sidebarData.map((item, index) => {
        return (
            <CustomLink key={index} to={item.path} className={item.cName}>
              {item.icon1}
            </CustomLink>
        );
      })}
    </ul>
  );
};

export default Sidebar;
