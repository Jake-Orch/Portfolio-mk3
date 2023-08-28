import React from "react";
import { info } from "../../data";
import "./info.css";

const Info = () => {
    return (
        <div className="info_container">
            <h2>{info.tagline}</h2>
            <p>{info.desc}</p>
        </div>
    )
}

export default Info;