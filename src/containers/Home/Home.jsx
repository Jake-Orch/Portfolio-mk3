import React from "react";
import { Portrait, Welcome } from "../../components";
import "./home.css";

const Home = () => {
  return (
    <div className="container home_container">
      <div className="home_body">
        <Welcome />
        <Portrait cl={"home_portrait"} />
      </div>
    </div>
  );
};

export default Home;
