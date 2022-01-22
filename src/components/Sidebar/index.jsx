import React from "react";
import "./styles.scss";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PersonOutline,
  Storefront,
  AttachMoney,
  Assessment,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";

const sidebarData = [
  { icon: <LineStyle />, title: "Home", path: "/" },
  { icon: <Timeline />, title: "Analytics", path: "/analytics" },
  { icon: <TrendingUp />, title: "Sales", path: "/sales" },
  { icon: <PersonOutline />, title: "Users", path: "/users" },
  { icon: <Storefront />, title: "Products", path: "/products" },
  { icon: <AttachMoney />, title: "Transactions", path: "/transactions" },
  { icon: <Assessment />, title: "Reports", path: "/reports" },
  { icon: <MailOutline />, title: "Mail", path: "/mail" },
  { icon: <DynamicFeed />, title: "Feedback", path: "/feedback" },
  { icon: <ChatBubbleOutline />, title: "Messages", path: "/messages" },
  { icon: <WorkOutline />, title: "Manage", path: "/manage" },
  { icon: <Report />, title: "Reports", path: "/reports" },
];

const Sidebar = () => {
  const { pathname } = useLocation();
  const active = sidebarData.findIndex((e) => e.path === pathname);

  return (
    <div className="sidebar">
      {sidebarData.map((item, index) => (
        <SidebarItem
          icon={item.icon}
          title={item.title}
          path={item.path}
          className={index === active && "active"}
          key={index}
        />
      ))}
    </div>
  );
};

const SidebarItem = ({ icon, title, path, className }) => {
  return (
    <Link to={path}>
      <div className={`sidebar__item hover-effect ${className}`}>
        <div className="icon">{icon}</div>
        <div className="title">{title}</div>
      </div>
    </Link>
  );
};

export default Sidebar;
