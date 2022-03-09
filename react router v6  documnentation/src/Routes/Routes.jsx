import React from "react";
import Productitem from "./Productitem";
import Home from "./Home";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import ProductPage from "../Routes/Product";

export default function RoutesCom() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* NESTED path h yye so plz dihan parhana */}
        <Route path="product" element={<ProductPage />}>
         <Route path="/" element={<Productitem />} />
        </Route >
        {/* nested route h ye */}
      </Routes>
    </Router>
  );
}
