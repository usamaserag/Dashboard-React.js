import React from "react";
import "./App.scss";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "../src/pages/Home";
import Analytics from "../src/pages/Analytics";
import Sales from "../src/pages/Sales";
import Users from "../src/pages/Users";
import Products from "../src/pages/Products";
import Transactions from "../src/pages/Transactions";
import Reports from "../src/pages/Reports";
import Mail from "../src/pages/Mail";
import Feedback from "../src/pages/Feedback";
import Messages from "../src/pages/Messages";
import Manage from "../src/pages/Manage";

import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="container">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/sales" element={<Sales />} />
            <Route path="/users" element={<Users />} />
            <Route path="/products" element={<Products />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/mail" element={<Mail />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/manage" element={<Manage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
