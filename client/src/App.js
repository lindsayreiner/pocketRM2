import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
import Login from "./components/Login";
import Register from "./components/Register";

import "./styles/App.css";
import "aos/dist/aos.css";

function App() {
  // AOS init
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="app-wrapper">
      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

          </Routes>
        </main>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
