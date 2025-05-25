// src/App.jsx
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="admin-container">
        <Sidebar />
        <div className="main-container">
          <Navbar />
          <div className="content-area">
            <AppRoutes />
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
