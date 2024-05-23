import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaBarsStaggered } from "react-icons/fa6";

function Header() {
  const [view, setView] = useState(false);
  return (
    <div
      className=" drop-shadow-sm bg-[#2e728f] border-b-2 z-50 relative font-Numbers 
     border-[#a7babb] px-5 md:px-36 w-full h-14 md:h-16 flex items-center justify-between "
    >
      <Link to={"/"}>
        <h1 className="text-3xl text-[#c08f52] hover:scale-105 duration-700 font-bold ">
        Diana Topaz
        </h1>
      </Link>
      <ul className="hidden md:flex gap-12 text- items-center font-semibold ">
        <Link to={"/"}>
          <li className="text-[#a7babb] hover:text-[#c08f52]">Home</li>
        </Link>
        <Link to={"/shop"}>
          <li className="text-[#a7babb] hover:text-[#c08f52]">Shop</li>
        </Link>
        <Link to={"/contact"}>
          <li className="text-[#a7babb] hover:text-[#c08f52]">Contact us</li>
        </Link>
        <Link to={"/cart"}>
          <FaShoppingCart className="text-[#c08f52] hover:text-[#e0d5af] text-lg" />
        </Link>
      </ul>
      {view ? (
        <ul
          className="flex md:hidden flex-col text-2xl absolute z-50 bg-[#15303e] 
        w-full left-0 top-14 py-16 text-center justify-center items-center gap-5 h-72
         border-[#a7babb] border-b-2 duration-700"
        >
          <Link to={"/"}>
            <li className="text-[#a7babb] hover:text-[#e0d5af]">Home</li>
          </Link>
          <Link to={"/shop"}>
            <li className="text-[#a7babb] hover:text-[#e0d5af]">Shop</li>
          </Link>
          <Link to={"/contact"}>
            <li className="text-[#a7babb] hover:text-[#e0d5af]">Contact Us</li>
          </Link>
        </ul>
      ) : null}
      <div className=" md:hidden flex justify-center items-center gap-6">
        <Link to={"/cart"}>
          <FaShoppingCart className="text-[#e0d5af] text-2xl " />
        </Link>
        <FaBarsStaggered
          className="text-[#e0d5af] text-2xl"
          onClick={() => {
            setView(!view);
          }}
        />
      </div>
    </div>
  );
}

export default Header;
