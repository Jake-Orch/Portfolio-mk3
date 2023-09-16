import React from "react";
import Hamburger from "hamburger-react";
import CustomLink from "../../utils/CustomLink";
import "./navbar.css";

const Navbar = () => {
  const handleToggle = (toggle) => {
    const side = document.getElementsByClassName("nav_side");
    if (toggle) {
      console.log("open");
      side[0].id = "on";
    } else {
      console.log("close");
      side[0].id = "off";
    }
  };

  // const resume = "http://localhost:3000/Portfolio-mk3/Resume.pdf";
  // const downloadFile = (resume) => {
  //   const fileName = resume.split("/").pop();
  //   console.log(fileName);
  //   const aTag = document.createElement("a");
  //   aTag.href = fileName;
  //   aTag.setAttribute("download", fileName);
  //   document.body.appendChild(aTag);
  //   aTag.click();
  //   aTag.remove();
  // };

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
        <a href="files/Resume.pdf" download="Jake Orchard's Resume.pdf">
          <li className="nav_download">Download Resume</li>
        </a>
      </ul>
    </div>
  );
};

export default Navbar;
