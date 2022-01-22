import React from "react";
import "./styles.scss";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";

const featuredData = [
  {
    title: "Revanue",
    money: "$2.415",
    rate: "-11.4",
    icon: <ArrowDownward style={{ color: "red" }} />,
    description: "Compared to last month",
  },
  {
    title: "Sales",
    money: "$4.415",
    rate: "-11.4",
    icon: <ArrowDownward style={{ color: "red" }} />,
    description: "Compared to last month",
  },
  {
    title: "Cost",
    money: "$2.225",
    rate: "+2.4",
    icon: <ArrowUpward style={{ color: "green" }} />,
    description: "Compared to last month",
  },
];

const FeaturedInfo = () => {
  return (
    <div className="featured">
      {featuredData.map((item, index) => (
        <FeaturedItem
          title={item.title}
          money={item.money}
          rate={item.rate}
          icon={item.icon}
          description={item.description}
          key={index}
        />
      ))}
    </div>
  );
};

const FeaturedItem = ({ title, money, rate, icon, description }) => {
  return (
    <div className="featured__item hover-effect">
      <h3 className="title">{title}</h3>
      <div className="money-data__container">
        <h4 className="money">{money}</h4>
        <p className="rate">{rate}</p>
        <p className="icon">{icon}</p>
      </div>
      <p className="description">{description}</p>
    </div>
  );
};

export default FeaturedInfo;
