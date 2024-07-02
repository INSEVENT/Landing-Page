import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Talkshow from "./pages/Talkshow";
import Event from "./pages/Event";
import Login from "./pages/Login";
import Register from "./pages/Register";
import styles from "./style";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App(){
  return(
    <div>
    <div className={`${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/talkshow" element={<Talkshow />} />
      <Route path="/event/:id" element={<Event />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App;
