import React from "react";
import "./contact.css";
import { Title, Form, ContactMethod } from "../../components";
import { contactInfo } from "../../data";

const Contact = () => {
  return (
    <div className="contact_container">
      <Title name={"Contact"} />
      <div className="contact_form">
        <Form />

        {/* {contactInfo.map((info, index) => (
          <ContactMethod
            key={index}
            num={index}
            title={info.title}
            msg={info.msg}
            icon={info.icon}
          />
        ))} */}
      </div>
    </div>
  );
};

export default Contact;
