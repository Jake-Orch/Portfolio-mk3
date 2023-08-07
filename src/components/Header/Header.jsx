import React from "react";
import Navbar from "../Navbar/Navbar";
import './header.css';

const Header = () => {
    return (
        <div className="header_container">
            <div className="header_name_container">
                <h1 className="header_name">Jake Orchard</h1>
            </div>
            <Navbar />
        </div>
    )
}

export default Header;