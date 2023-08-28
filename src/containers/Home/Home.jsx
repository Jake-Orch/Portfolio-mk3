import React from "react";
import { Portrait, Welcome } from "../../components";
import "./home.css";

const Home = () => {
    return (
        <div className="home_container">
            <Welcome />
            <Portrait cl={"home_portrait"} />
        </div>
    )
};

export default Home;