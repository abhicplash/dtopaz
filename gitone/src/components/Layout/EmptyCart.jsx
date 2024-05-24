import React from "react";
import cartImage from "../../Assets/Images/EmptyCart/cartImage.jpg";
import { IoIosWarning } from "react-icons/io";
import { Link } from "react-router-dom";
import { FaAnglesRight } from "react-icons/fa6";

function EmptyCart() {
  return (
    <div
      className="flex flex-col gap-5 items-center 
    justify-center w-full py-20"
    >
      <div className="relative w-72 flex justify-center">
        <img src={cartImage} alt="cart_Image" className="w-40 md:w-72 " />
        <IoIosWarning
          className="text-6xl md:text-7xl absolute top-2 text-yellow-800 
         md:left-[30%]"
        />
      </div>
      {/* <div className="flex flex-col items-center justify-center gap-5"> */}
      <h1 className="md:text-5xl text-2xl capitalize font-mubu text-center">
        your cart is <span className="text-yellow-800 font-org ">empty</span>
      </h1>
      <Link to={"/shop"}>
        <button
          className="border-2 border-bg-800 rounded-full md:px-6 px-4  py-2 
          justify-center md:h-16 font-org
          text-xl  flex items-center gap-4  text-white
           bg-yellow-800 duration-700"
        >
          Return to Shop
          <FaAnglesRight className="" />
        </button>
      </Link>
      {/* </div> */}
    </div>
  );
}

export default EmptyCart;
