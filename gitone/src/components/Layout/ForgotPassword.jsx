import React, { useState } from "react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://api.dtopaz.com/api/password/email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ email })
        }
      );

      const data = await response.json();
      if (response.ok) {
        setMessage(data.message);
      } else {
        setMessage("Error sending password reset email");
      }
    } catch (error) {
      setMessage("Error sending password reset email");
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
          Forgot Password
        </h2>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-2 text-white font-org"
        >
          <div className="flex flex-col gap-1 ">
            <label>Email:</label>
            <input
              className="h-8 px-2 rounded-lg outline-none w-60 bg-transparent border border-white"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <br />
          <button
           className=" w-[100%] h-9 bg-white text-[#1e81b0] font-bold  rounded-2xl"
           type="submit">Send Reset Link</button>
        </form>
        {message && <p className="text-white">{message}</p>}
      </div>
    </div>
  );
};

export default ForgotPassword;
