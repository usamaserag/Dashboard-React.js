import React from "react";
import "./styles.scss";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const userData = [
  {
    name: "Jan",
    "Active User": 4000,
  },
  {
    name: "Feb",
    "Active User": 3000,
  },
  {
    name: "Mar",
    "Active User": 2000,
  },
  {
    name: "Apr",
    "Active User": 1000,
  },
  {
    name: "May",
    "Active User": 2000,
  },
  {
    name: "Jun",
    "Active User": 4000,
  },
  {
    name: "Jul",
    "Active User": 3000,
  },
  {
    name: "Agu",
    "Active User": 2000,
  },
  {
    name: "Sep",
    "Active User": 3000,
  },
  {
    name: "Oct",
    "Active User": 5000,
  },
  {
    name: "Nov",
    "Active User": 3000,
  },
  {
    name: "Dec",
    "Active User": 5000,
  },
];

const Charts = ({ title, dataKey }) => {
  return (
    <div className="charts card">
      <h3 className="charts__title">{title}</h3>
      <ResponsiveContainer width="99%" height={200}>
        <LineChart data={userData}>
          <XAxis dataKey="name" stroke="#5550bd" />
          <Line type="monotone" dataKey={dataKey} stroke="#5550bd" />
          <Tooltip />
          <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Charts;
