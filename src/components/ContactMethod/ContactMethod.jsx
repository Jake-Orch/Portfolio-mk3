import React from "react";
import "./contactmethod.css";

const ContactMethod = ({ num, title, msg, icon, value }) => {
  const handleRedirect = (e) => {
    if (title === "Email") {
      e.preventDefault();
      window.open(
        `mailto:${value}`,
        "_blank"
      );
    } else if (title === "Mobile Number") {
      e.preventDefault();
      window.open(`https://wa.me/07947552803`, "_blank");
    } else {
      e.preventDefault();
      window.open(
        `https://www.google.com/maps/place/Rugeley/@52.7571918,-1.9573772,14z/data=!3m1!4b1!4m6!3m5!1s0x487a08c6bec715b3:0xefe01f0e5acfb0da!8m2!3d52.761515!4d-1.935967!16zL20vMDIyX3B5?entry=ttu`,
        "_blank"
      );
    }
  };

  return (
    <div className="contactm_container" onClick={(e) => handleRedirect(e)}>
      <div className="contactm_icon">{icon}</div>
      <div className="contactm_body">
        <h3>{title}</h3>
        <p>{msg}</p>
        <p className="contactm_value">{value}</p>
      </div>
    </div>
  );
};

export default ContactMethod;
