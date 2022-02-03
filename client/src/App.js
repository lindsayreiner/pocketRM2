import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";

import "./styles/App.css";

function App() {
  return (
    <div className="app-wrapper">
      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<LandingPage />} />

          </Routes>
        </main>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
