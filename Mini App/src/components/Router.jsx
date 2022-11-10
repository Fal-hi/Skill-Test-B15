import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Tentang from "../pages/Tentang";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="tentang" element={<Tentang />} />
    </Routes>
  );
}
