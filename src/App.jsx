import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Talkshow from "./pages/Talkshow";
import Event from "./pages/Event";
import Login from "./pages/Login";
import Register from "./pages/Register";
import styles from "./style";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import DonorDarah from "./pages/DonorDarah";
import Lomba from "./pages/Lomba";

function App() {
  return (
    <div>
      <div className={`${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/talkshow" element={<Talkshow />} />
        <Route path="/lomba" element={<Lomba />} />
        <Route path="/event/:id" element={<Event />} />
        <Route path="/event/1" element={<Navigate to="/talkshow" />} />
        <Route path="/donordarah" element={<DonorDarah />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
