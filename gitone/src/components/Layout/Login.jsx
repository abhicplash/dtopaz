import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../utils/store/authSlice";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://api.dtopaz.com/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        const data = await response.json();
        sessionStorage.setItem("authToken", data.data.token);
        const savedToken = sessionStorage.getItem("authToken");
        console.log("Token saved in sessionStorage:", savedToken);
        setMessage("Login successful");
        dispatch(login(data.user));
        navigate("/");
      } else {
        const errorData = await response.json();
        setMessage("Login failed: " + errorData.message);
      }
    } catch (error) {
      setMessage("Login failed: " + error.message);
    }
  };
  return (
    <div className="flex flex-col md:flex-row justify-center w-full h-[100vh] items-center">
      <div className="md:w-4/6 w-full bg-shop h-[30vh] md:h-[100vh] bg-cover bg-center"></div>

      <div
        className="md:w-2/6 w-full h-[100vh] flex flex-col justify-center font-org 
      items-center bg-gradient-to-b from-[#1e4f64] to-[#3a89e3] gap-2 text-white"
      >
        <h2 className="font-semibold uppercase text-xl md:text-3xl text-white">
          Sign In
        </h2>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-3 text-white font-org text-lg"
        >
          <div className="flex flex-col justify-center gap-2">
            <label>Email</label>
            <input
              className="h-8 px-2 rounded-lg outline-none w-60 bg-transparent border border-white"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col justify-center gap-2">
            <label>Password</label>
            <input
              className="h-8 px-2 rounded-lg outline-none w-60 bg-transparent border border-white"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button
            className="w-[100%] h-9 bg-white text-[#1e81b0] font-bold rounded-2xl"
            type="submit"
          >
            Login
          </button>
          <p className="text-center">
            New Here!{" "}
            <Link to={"/register"} className="underline">
              Sign Up
            </Link>
          </p>
        </form>
        {message && <p>{message}</p>}
        <p>
          <Link to="/forgot-password">Forgot Password?</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
