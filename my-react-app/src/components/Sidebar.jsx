// src/components/Sidebar.jsx
import React from "react";
import { NavLink } from "react-router-dom";
// import "./Sidebar.css"; // Make sure to style your sidebar

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="logo">
        <h2>Vibe Vault Admin</h2>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/manage-music"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Manage Music
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/manage-comedy"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Manage Comedy
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/artists"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Artists
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/analytics"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Analytics
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/settings"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Settings
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/feedback"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Feedback
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
