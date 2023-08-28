import React from "react";
import Me from "../../assets/me.png"
import "./portrait.css"

const Portrait = ({cl}) => {
    return (
        <div className={cl}>
            <img className="home_portrait_image" src={Me} alt="portrait"></img>
        </div>
    )
}

export default Portrait;