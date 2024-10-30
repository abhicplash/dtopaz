import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    password_confirmation: ""
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://api.dtopaz.com/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setMessage("Registration successful");
      } else {
        const errorData = await response.json();
        setMessage("Registration failed: " + errorData.message);
      }
    } catch (error) {
      setMessage("Registration failed: " + error.message);
    }
  };

  return (
    <div className="flex flex-col md:flex-row justify-center w-full h-[100vh]  items-center  ">
      <div className=" md:w-4/6 w-full bg-shop bg-cover bg-center md:h-[100vh] h-[40vh]"></div>
      <div
        className="py-3 gap-2 font-org md:h-[100vh]  w-full md:w-2/6 flex 
      flex-col justify-center items-center 
       bg-gradient-to-b from-[#1e4f64] to-[#3a89e3] "
      >
        <h2 className="font-semibold uppercase text-xl md:text-3xl text-white ">
          Sign up
        </h2>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-2 text-white font-org"
        >
          <div className="flex flex-col  gap-1">
            <label>First Name</label>
            <input
              className="h-8 px-2 rounded-lg outline-none w-60 bg-transparent border border-white"
              type="text"
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col  gap-1">
            <label>Last Name</label>
            <input
              className="h-8 px-2 rounded-lg outline-none border border-white bg-transparent"
              type="text"
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col  gap-1">
            <label>Email</label>
            <input
              className="h-8 px-2 rounded-lg outline-none border border-white bg-transparent"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col  gap-1">
            <label>Password</label>
            <input
              className="h-8 px-2 rounded-lg outline-none border border-white bg-transparent"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col  gap-1">
            <label>Confirm Password</label>
            <input
              className="h-8 px-2 rounded-lg outline-none border border-white bg-transparent"
              type="password"
              name="password_confirmation"
              value={formData.password_confirmation}
              onChange={handleChange}
              required
            />
          </div>
          <button
            className=" w-[100%] h-9 bg-white text-[#1e81b0] font-bold  rounded-2xl"
            type="submit"
          >
            Register
          </button>
          <p className="text-center">
            Already a Member <Link to={"/login"} className="underline">Sign In </Link>
          </p>
        </form>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
};

export default Register;
