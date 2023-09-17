import React from "react";
import "./title.css";

const Title = ({name}) => {
  return (
    <div className="page_title">
      <h1>{name}</h1>
      <span>{name}</span>
    </div>
  );
};

export default Title;