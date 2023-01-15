import React from "react";
import Search from "../../component/search/Search";
import "./home.scss";
import Progbar from "../../component/progressBar/progbar";

const Home = () => {
  return (
    <div className="wrapper">
      <Search />
      <Progbar />
    </div>
  );
};

export default Home;
