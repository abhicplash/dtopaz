import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaBarsStaggered } from "react-icons/fa6";
import logo from "../../Assets/logo/logo.png";
import { useSelector } from "react-redux";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import { FaEnvelope } from "react-icons/fa";

function Header() {
  const cartItems = useSelector(state => state.cart.cartItems);
  const [view, setView] = useState(false);
  const [login, setLogin] = useState(false);
  const [signUp, setSignUp] = useState(false);
  const loginCloseSignUpOPen = () => {
    setLogin(false);
    setSignUp(true);
  };
  const loginOnSignUpOff = () => {
    setSignUp(false);
    setLogin(true);
  };
  return (
    // bg-[#2e728f]
    // bg-[#0a2532e0]
    <div className="">
      <div className=" drop-shadow-sm  bg-[#2e728f]  border-b-2 z-40 relative font-Numbers 
     border-[#0131347e] px-5 md:px-36 w-full h-14 md:h-16 flex items-center justify-between ">
        <Link to={"/"}>
          <div className="flex justify-center items-center ">
            <img src={logo} alt="" className="w-20 h-14 " />
          </div>
        </Link>
        <ul className="hidden md:flex gap-12 font-org items-center font-semibold  ">
          <Link to={"/"}>
            <li className="text-[#a7babb] hover:text-[#c08f52]">Home</li>
          </Link>
          <Link to={"/shop"}>
            <li className="text-[#a7babb] hover:text-[#c08f52]">Shop</li>
          </Link>
          <Link to={"/contact"}>
            <li className="text-[#a7babb] hover:text-[#c08f52]">Contact us</li>
          </Link>
          <li
            className="text-[#a7babb] hover:text-[#c08f52] cursor-pointer"
            Contact
            us
            onClick={() => {
              setLogin(true);
            }}
          >
            {" "}Login
          </li>
          <Link to={"/cart"}>
            <div className="relative">
              <h1 className="absolute bg-gradient-to-tl from-[#A67c00] 
             to-[#FFBF00] right-0 top-0 rounded-full text-[8px] w-3
              flex justify-center items-center">
                {cartItems.length}
              </h1>
              <FaShoppingCart className="te  text-[#a7babb] hover:text-[#e0d5af] text-2xl" />
            </div>
          </Link>
        </ul>
        {view
          ? <ul className="flex md:hidden flex-col text-2xl absolute z-50 bg-[#2e728f]
        w-full left-0 top-14 py-16 text-center justify-center items-center gap-5 h-72
         border-[#a7babb] border-b-2 duration-700">
              <Link to={"/"}>
                <li className="text-[#a7babb] hover:text-[#e0d5af]">Home</li>
              </Link>
              <Link to={"/shop"}>
                <li className="text-[#a7babb] hover:text-[#e0d5af]">Shop</li>
              </Link>
              <Link to={"/contact"}>
                <li className="text-[#a7babb] hover:text-[#e0d5af]">
                  Contact Us
                </li>
              </Link>
            </ul>
          : null}
        <div className=" md:hidden flex justify-center items-center gap-6">
          <FaUser
            className="text-[#e0d5af] text-2xl cursor-pointer "
            onClick={() => {
              setLogin(true);
            }}
          />
          <Link to={"/cart"}>
            <FaShoppingCart className="text-[#e0d5af] text-2xl " />
          </Link>

          <FaBarsStaggered
            className="text-[#e0d5af] text-2xl cursor-pointer"
            onClick={() => {
              setView(!view);
            }}
          />
        </div>
      </div>
      {login
        ? <div className="fixed top-0 left-0 w-full h-[100vh]  bg-[#2e728f]/50 z-50 flex justify-center items-center">
            <div className="relative flex flex-col justify-center gap-5 items-center bg-white py-8 md:py-20 md:w-96 w-[93%] rounded-md  shadow-2xl">
              {/* <IoIosCloseCircle className="absolute right-0.5 top-0.5 text-lg" /> */}
              <IoMdCloseCircle
                className="absolute right-0.5 top-0.5 text-2xl text-[#2e728f] cursor-pointer"
                onClick={() => {
                  setLogin(false);
                }}
              />
              <h1 className="text-[#2e728f] text-2xl font-org font-bold">
                Login
              </h1>
              <div className="flex flex-col gap-3 justify-center items-center ">
                <div className=" bg-[#d7d8d8] flex  items-center gap-2 px-2 ">
                  <label htmlFor="Username">
                    <FaUser />
                  </label>
                  <input
                    type="text"
                    name="Username"
                    placeholder="Username"
                    className=" bg-[#d7d8d8] outline-none h-10 text-[#2e728f] md:w-60 "
                  />
                </div>
                <div className=" bg-[#d7d8d8] flex  items-center gap-2 px-2">
                  <label htmlFor="Password">
                    <FaLock />
                  </label>
                  <input
                    type="password"
                    name="Password"
                    placeholder="Password"
                    className=" bg-[#d7d8d8] outline-none h-10 text-[#2e728f] md:w-60"
                  />
                </div>
                <button className=" w-56 h-10 text-white bg-[#2e728f] font-semibold font-org md:w-[17.5rem]">
                  Login
                </button>
                <p className="text-sm font-Numbers">
                  {" "}New here?{" "}
                  <span className="cursor-pointer underline text-[#2e728f] font-semibold" onClick={loginCloseSignUpOPen}>
                    Sign Up
                  </span>
                </p>
              </div>
            </div>
          </div>
        : null}

      {signUp
        ? <div className="fixed top-0 left-0 w-full h-[100vh]  bg-[#2e728f]/50 z-50 flex justify-center items-center">
            <div className="relative flex flex-col justify-center gap-5 items-center bg-white py-8 md:py-20 md:w-96 w-[93%] rounded-md  shadow-2xl">
              <IoMdCloseCircle
                className="absolute right-0.5 top-0.5 text-2xl text-[#2e728f] cursor-pointer"
                onClick={() => {
                  setSignUp(false);
                }}
              />
              <h1 className="text-[#2e728f] text-2xl font-org font-bold">
                Sign Up
              </h1>
              <div className="flex flex-col gap-3 justify-center items-center ">
                <div className=" bg-[#d7d8d8] flex  items-center gap-2 px-2 ">
                  <label htmlFor="FullName">
                    <FaUser />
                  </label>
                  <input
                    type="text"
                    name="FullName"
                    placeholder="Full Name"
                    className=" bg-[#d7d8d8] outline-none h-10 text-[#2e728f] md:w-60 "
                  />
                </div>
                <div className=" bg-[#d7d8d8] flex  items-center gap-2 px-2 ">
                  <label htmlFor="Email">
                    <FaEnvelope />
                  </label>
                  <input
                    type="text"
                    name="Email"
                    placeholder="Email"
                    className=" bg-[#d7d8d8] outline-none h-10 text-[#2e728f] md:w-60 "
                  />
                </div>
                <div className=" bg-[#d7d8d8] flex  items-center gap-2 px-2">
                  <label htmlFor="Password">
                    <FaLock />
                  </label>
                  <input
                    type="password"
                    name="Password"
                    placeholder="Password"
                    className=" bg-[#d7d8d8] outline-none h-10 text-[#2e728f] md:w-60"
                  />
                </div>
                <div className=" bg-[#d7d8d8] flex  items-center gap-2 px-2">
                  <label htmlFor="ConfirmPassword">
                    <FaLock />
                  </label>
                  <input
                    type="password"
                    name="ConfirmPassword"
                    placeholder="Confirm Password"
                    className=" bg-[#d7d8d8] outline-none h-10 text-[#2e728f] md:w-60"
                  />
                </div>
                <button className=" w-56 h-10 text-white bg-[#2e728f] font-semibold font-org md:w-[17.5rem]">
                  Sign Up
                </button>
                <p className="text-sm font-Numbers">
                  Already Member?
                  <span className="cursor-pointer underline text-[#2e728f] font-semibold" onClick={loginOnSignUpOff}>
                    Log in
                  </span>
                </p>
              </div>
            </div>
          </div>
        : null}
    </div>
  );
}

export default Header;
