import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Description from "../pages/Description";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/inicio" element={<Home />} />
      <Route path="/descricao" element={<Description />} />
    </Routes>
  );
}

export default AppRoutes;