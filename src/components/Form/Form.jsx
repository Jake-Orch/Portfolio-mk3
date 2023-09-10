import React from "react";
import "./form.css";

const Form = () => {
  return (
    <form className="form_container">
      <div className="form_section form_fname">
        <label htmlFor="fname">First Name</label>
        <input type="text" id="fname" name="fname"></input>
      </div>
      <div className="form_section">
        <label htmlFor="lname">Last Name</label>
        <input type="text" id="lname" name="lname"></input>
      </div>
      <div className="form_section form_email">
        <label htmlFor="email">Email</label>
        <input type="text" id="email" name="email"></input>
      </div>
      <div className="form_section form_message">
        <label htmlFor="message">Message</label>
        <textarea type="text" id="message" name="message"></textarea>
      </div>
      <div className="form_button_container">
        <button className="form_button">Submit</button>
      </div>
    </form>
  );
};

export default Form;
