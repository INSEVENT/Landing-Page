import { Routes, Route, Navigate, useLocation } from "react-router-dom";
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
  const location = useLocation();
  const isLoggedIn = localStorage.getItem("token") !== null;
  const isLoginOrRegister = location.pathname === '/Login' || location.pathname === '/register' || location.pathname === '/login';
  return (
    <div>
      <div className={`${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          {!isLoginOrRegister && <Navbar />}
        </div>
      </div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route exact path='/*' element={<Navigate to='/'/>} />
        <Route exact path='*' element={<Navigate to='/'/>} />
        {isLoggedIn? 
        <>
          <Route path='/login' element={<Navigate to='/'/>} />
          <Route path="/event/:id" element={<Event />} />
        </>:
        <>
          <Route path="/talkshow" element={<Talkshow />} />
          <Route path="/lomba" element={<Lomba />} />
          <Route path="/event/:id" element={<Event />} />
          <Route path="/event/1" element={<Navigate to="/talkshow" />} />
          <Route path="/donordarah" element={<DonorDarah />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </>}
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
