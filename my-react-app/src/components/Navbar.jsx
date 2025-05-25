// src/components/Navbar.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa"; // Import the profile icon
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Add logout logic here (clearing tokens, updating auth context, etc.)
    navigate("/login");
  };

  return (
    <nav className="admin-navbar">
      <div className="navbar-left">
        <h2>Vibe Vault Admin</h2>
      </div>
      <div className="navbar-right">
        <div className="profile">
          <FaUserCircle className="profile-icon" size={40} />
          <span className="profile-name">Admin User</span>
        </div>
        <button onClick={handleLogout} className="logout-btn">
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
