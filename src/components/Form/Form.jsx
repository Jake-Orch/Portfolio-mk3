import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./form.css";

const Form = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // These useStates is used to  the user if they haven't filled in a required section
  const [fnameError, setFnameError] = useState("");
  const [messageError, setMessageError] = useState("");

  // This useState sets the value of the error if the email is invalid
  const [emailError, setEmailError] = useState("");

  // Here i am defining the email validation function to test the input against this email regex
  function validEmail(email) {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  }

  // This function Checks if the email the user is inputting is a valid email
  const handleEmail = (e) => {
    if (!validEmail(e)) {
      setEmail("");
      setEmailError("Email is invalid!");
    } else {
      setEmailError("");
      return 1;
    }
  };

  const handleBlank = (e) => {

    const error = "Field Required!";

    if (e.fname !== "" && e.email !== "" && e.message !== "") {
      handleEmail(e.email);
      return 1
    } else if (e.fname === "" && e.email === "" && e.message === "") {
      setFnameError(error);
      setEmailError(error);
      setMessageError(error);
    } else if (e.fname === "" && e.message === "") {
      setFnameError(error);
      setMessageError(error);
      handleEmail(e.email);
    } else if (e.fname === "" && e.email === "") {
      setFnameError(error);
      setEmailError(error);
    } else if (e.email === "" && e.message === "") {
      setMessageError(error);
      setEmailError(error);
    } else if (e.fname === "") {
      setFnameError(error)
      handleEmail(e.email);
    } else if (e.email === "") {
      setEmailError(error);
    } else {
      setMessageError(error)
      handleEmail(e.email);
    }
  };

  const handleSubmit = (e) => {
    
    e.preventDefault();

    const serviceId = "service_mn3ezki";
    const templateId = "template_wtxq7jh";
    const publicKey = "8CpfuZH1lqHXu4bkp";

    const templateParams = {
      fname: fname,
      lname: lname,
      email: email,
      message: message,
    };

    if (handleBlank(templateParams) === 1) {
      emailjs.send(serviceId, templateId, templateParams, publicKey).then(
        (res) => {
          console.log("Email sent succesfully!", res.text);
          setFname("");
          setLname("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.error("Error sending email:", error.text);
        }
      );
    }
  };

  return (
    <form className="form_container" onSubmit={handleSubmit}>
      <div className="form_section form_fname">
        <label htmlFor="fname">First Name*</label>
        <input
          type="text"
          id="fname"
          name="fname"
          placeholder={fnameError}
          value={fname}
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
          onChange={(e) => setLname(e.target.value)}
        ></input>
      </div>
      <div className="form_section form_email">
        <label htmlFor="email">Email*</label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder={emailError}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
      </div>
      <div className="form_section form_message">
        <label htmlFor="message">Message*</label>
        <textarea
          type="text"
          id="message"
          name="message"
          placeholder={messageError}
          value={message}
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
