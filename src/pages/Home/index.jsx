import React from "react";
import Charts from "../../components/Charts";
import FeaturedInfo from "../../components/FeaturedInfo";
import "./styles.scss";

const Home = () => {
  return (
    <div className="home">
      <FeaturedInfo />
      <Charts title="Active User Details" dataKey="Active User" />
    </div>
  );
};

export default Home;
