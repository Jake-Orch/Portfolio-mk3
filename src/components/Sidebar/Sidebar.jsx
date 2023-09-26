import React from "react";
import { sidebarData } from "../../data";
import CustomLink from "../../utils/CustomLink";
import Resume from "../../assets/Resume.pdf";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <ul className="nav_side" id="off">
      {sidebarData.map((item, index) => {
        if (item.title !== "Download") {
          return (
            <CustomLink key={index} to={item.path} className={item.cName}>
              {item.icon1}
            </CustomLink>
          );
        }
        return (
          <li key={index} className={item.cName}>
            <a href={Resume} download="Jake Orchard's Resume.pdf">{item.icon1}</a>
          </li>
        );
      })}
      ;
    </ul>
  );
};

export default Sidebar;
