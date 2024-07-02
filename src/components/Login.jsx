import React, { useState } from "react";
import styles from "../style";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <section
        className={`${styles.padding} text-center bg-black-gradient-2 rounded-[20px] box-shadow min-w-[50%]`}
      >
        <div className="flex-1 flex flex-col">
          <h2 className={`${styles.heading2} text-gradient`}>Login</h2>
          <form onSubmit={handleLogin} className="flex flex-col gap-4 mt-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="py-2 px-4 rounded-[10px] bg-white text-gray-800 outline-none"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="py-2 px-4 rounded-[10px] bg-white text-gray-800 outline-none"
              required
            />
            <button
              type="submit"
              className={`text-center py-2 px-2 font-poppins font-medium text-[16px] text-primary bg-blue-gradient rounded-[10px] outline-none min-w-32 max-w-32 mx-auto`}
            >
              Login
            </button>
            <p className="text-white font-poppins">
              Don't have account?{" "}
              <a href="/register" className="underline">
                Register
              </a>
            </p>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Login;
