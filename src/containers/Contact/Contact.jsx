import React from "react";
import "./contact.css";
import { Title, Form, ContactMethod, Links } from "../../components";
import { contactInfo } from "../../data";

const Contact = () => {
  return (
    <div className="contact_container">
      <Title name={"Contact"} />
      <div className="container">
        <div className="contact_box">
          <div className="contact_form">
            <Form />
          </div>
          <Links cl="contact_links"/>
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
        </div>
      </div>
    </div>
  );
};

export default Contact;
