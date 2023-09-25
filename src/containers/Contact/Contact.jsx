import React from "react";
import "./contact.css";
import { Title, Form, ContactMethod, Links, Departure } from "../../components";
import { contactInfo } from "../../data";

const Contact = () => {
  return (
    <div className="contact_container">
      <Title name={"Contact"} />
      <div className="container">
        <div className="contact_box">
          <Departure cl="departure_container departure_small" />
          <div className="contact_form">
            <Form />
          </div>
          <div className="contact_links_dep">
            <Departure cl="departure_container"/>
            <Links cl="contact_links" />
          </div>
          <div className="contact_methods">
            {contactInfo.map((info, index) => (
              <ContactMethod
                key={index}
                num={index}
                title={info.title}
                msg={info.msg}
                icon={info.icon}
                value={info.value}
              />
            ))}
          </div>
          <Links cl="contact_links links_small" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
