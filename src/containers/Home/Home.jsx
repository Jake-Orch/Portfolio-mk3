import React from "react";
import { Portrait, Welcome } from "../../components";
import "./home.css";

const Home = () => {
    return (
        <div className="home_container">
            <Welcome />
            <Portrait />
        </div>
    )
};

export default Home;