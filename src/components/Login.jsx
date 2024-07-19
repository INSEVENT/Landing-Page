import { useContext, useEffect } from "react";
import styles from "../style";
import { GoogleLogin } from "@react-oauth/google";
import { AuthContext } from "./context/AuthContext";
import { jwtDecode } from "jwt-decode";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import logo from '../assets/logo.png';

const Login = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleGoogleSuccess = (response) => {
    const token = response.credential;
    const decoded = jwtDecode(token);
    const user = {
      username: decoded.name,
      email: decoded.email,
    };
    const expirationTime = new Date(decoded.exp * 1000);
    localStorage.setItem("token", token);
    localStorage.setItem("email", decoded.email);
    localStorage.setItem("expirationTime", expirationTime);

    login(user);
    navigate("/");
    Swal.fire({
      title: "Selamat Datang",
      icon: "success",
    });
  };

  const handleGoogleFailure = (error) => {
    console.error("Google Login Failed:", error);
    setError("Login dengan Google gagal. Coba lagi.");
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="h-full">
      <div className={`${styles.padding} h-full`}>
        <div>
          <h1 className={`${styles.heading} text-black mb-5 text-center`}>Selamat Datang</h1>
          <section
            className={`flex justify-center items-center text-center bg-white rounded-[20px] box-shadow min-w-[50%]`}
          >
            <GoogleLogin

              shape="square"
              width='500'
              size="large"
              onSuccess={handleGoogleSuccess}
              onFailure={handleGoogleFailure}
              ux_mode="popup"
            />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Login;
