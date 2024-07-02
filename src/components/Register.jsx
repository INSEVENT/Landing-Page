import React, { useState } from "react";
import styles from "../style";

const Register = () => {
  const [fisrtName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    console.log("First Name :", fisrtName);
    console.log("Last Name :", lastName);
    console.log("Email :", email);
    console.log("Password :", password);
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <section
        className={`${styles.padding} text-center bg-black-gradient-2 rounded-[20px] box-shadow min-w-[50%]`}
      >
        <div className="flex-1 flex flex-col">
          <h2 className={`${styles.heading2} text-gradient`}>Register</h2>
          <form onSubmit={handleRegister} className="flex flex-col gap-4 mt-4">
            <div>
              <input
                type="name"
                placeholder="First Name"
                value={fisrtName}
                onChange={(e) => setFirstName(e.target.value)}
                className="mr-5 py-2 px-4 rounded-[10px] bg-white text-gray-800 outline-none"
                required
              />
              <input
                type="name"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="py-2 px-4 rounded-[10px] bg-white text-gray-800 outline-none"
                required
              />
            </div>
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
              Register
            </button>
            <p className="text-white font-poppins">
              Do you have account?{" "}
              <a href="/login" className="underline">
                Login
              </a>
            </p>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Register;
