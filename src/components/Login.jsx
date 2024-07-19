import React, { useContext, useState } from "react";
import styles from "../style";
import { GoogleLogin } from "@react-oauth/google";
import { AuthContext } from "./context/AuthContext";
import { jwtDecode } from "jwt-decode";

const Login = () => {
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
  return (
    <div className="flex justify-center items-center min-h-screen">
      <section
        className={`${styles.padding} text-center bg-black-gradient-2 rounded-[20px] box-shadow min-w-[50%]`}
      >
        <GoogleLogin
          shape="rectangular"
          width='auto'
          size="large"
          onSuccess={handleGoogleSuccess}
          onFailure={handleGoogleFailure}
        />
      </section>
    </div>
  );
};

export default Login;
