import React, { useState } from "react";
import emailjs from '@emailjs/browser';
import "./form.css";

const Form = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");


  const handleFocus = (e) => {
    /// for required areas of the form
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const serviceId = "service_mn3ezki";
    const templateId = "template_wtxq7jh";
    const publicKey = "8CpfuZH1lqHXu4bkp";

    const templateParams = {
      fname: fname,
      lname: lname,
      email: email,
      message: message
    }

    emailjs.send(serviceId, templateId, templateParams, publicKey)
    .then((res) => {
        console.log("Email sent succesfully!", res.text);
        setFname('');
        setLname('');
        setEmail('');
        setMessage('');
    }, (error) => {
        console.error("Error sending email:", error.text);
    });

  }

  return (
    <form className="form_container" onSubmit={handleSubmit}>
      <div className="form_section form_fname">
        <label htmlFor="fname">First Name</label>
        <input
          type="text"
          id="fname"
          name="fname"
          value={fname}
          onFocus={handleFocus}
          onChange={(e) => setFname(e.target.value)}
        ></input>
      </div>
      <div className="form_section form_lname">
        <label htmlFor="lname">Last Name</label>
        <input
          type="text"
          id="lname"
          name="lname"
          value={lname}
          onFocus={handleFocus}
          onChange={(e) => setLname(e.target.value)}
        ></input>
      </div>
      <div className="form_section form_email">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          name="email"
          value={email}
          onFocus={handleFocus}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
      </div>
      <div className="form_section form_message">
        <label htmlFor="message">Message</label>
        <textarea
          type="text"
          id="message"
          name="message"
          value={message}
          onFocus={handleFocus}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
      </div>
      <div className="form_button_container">
        <button className="form_button">Submit</button>
      </div>
    </form>
  );
};

export default Form;
