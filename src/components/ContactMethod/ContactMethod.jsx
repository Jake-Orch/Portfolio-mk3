import React from "react";
import "./contactmethod.css";

const ContactMethod = ({ num, title, msg, icon, value }) => {
  return (
    <div className="contactm_container">
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