// App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        {/* Future Pages */}
        {/* <Route path="/services" element={<h1>Services </h1>} /> */}
        {/* <Route path="/about" element={<h1>About Us </h1>} /> */}
        {/* <Route path="/contact" element={<h1>Contact Us </h1>} /> */}
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;