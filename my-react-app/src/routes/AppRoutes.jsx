// src/routes/AppRoutes.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import ManageMusic from "../pages/ManageMusic";
import ManageComedy from "../pages/ManageComedy";
import Artists from "../pages/Artists";
import Analytics from "../pages/Analytics";
import Settings from "../pages/Settings";
import Feedback from "../pages/Feedback";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/manage-music" element={<ManageMusic />} />
      <Route path="/manage-comedy" element={<ManageComedy />} />
      <Route path="/artists" element={<Artists />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/feedback" element={<Feedback />} />
    </Routes>
  );
};

export default AppRoutes;
