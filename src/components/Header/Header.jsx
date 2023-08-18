import React from "react";
import {Navbar, Sidebar} from "../"
import './header.css';

const Header = () => {
    return (
        <div className="header_container">
            <div className="header_name_container">
                <h1 className="header_name">&lt; Jake Orchard /&gt;</h1>
            </div>
            <Navbar />
            <Sidebar/>
        </div>
    )
}

export default Header;