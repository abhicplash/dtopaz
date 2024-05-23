import React from "react";
import cartImage from "../../Assets/Images/EmptyCart/cartImage.jpg";
import { IoIosWarning } from "react-icons/io";
import { Link } from "react-router-dom";
import { FaAnglesRight } from "react-icons/fa6";

function EmptyCart() {
  return (
    <div className="flex flex-col gap-5 items-center justify-center w-full py-20">
      <div className="relative w-72">
        <img src={cartImage} alt="cart_Image" className="w-60 " />
        <IoIosWarning className="text-7xl absolute top-2 text-yellow-800 left-[30%]" />
      </div>
      {/* <div className="flex flex-col items-center justify-center gap-5"> */}
      <h1 className="text-5xl capitalize font-mubu">
        your cart is <span className="text-yellow-800 font-org ">empty</span>
      </h1>
      <Link to={"/shop"}>
        <button
          className="border-2 border-bg-800 rounded-full px-6 py-1 justify-center h-16 font-org
          text-xl  flex items-center gap-4  text-white bg-yellow-800 duration-700"
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
