import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/inicio" element={<Home />} />
    </Routes>
  );
}

export default AppRoutes;