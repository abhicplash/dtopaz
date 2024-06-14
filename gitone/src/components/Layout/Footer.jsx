import React from "react";
import { IoLocation, IoCall } from "react-icons/io5";
import { FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../Assets/logo/logo.png";

function Footer() {
  return (
    <div
      className="bg-[#2e728f] text-[#a7babb]  
    font-Numbers border-t border-[#e0d5af] w-full md:h-80   md:flex-row flex-col
    flex justify-between md:px-32 items-center gap-10 py-12 md:py-0 "
    >
      <div className="flex-col flex  justify-center items-center">
        <Link to={"/"}>
          <img src={logo} alt="" className="w-40 h-36 " />
          {/* <h1 className="text-4xl font-bold text-[#c08f52] text-center md:text-left">
            Diana Topaz
          </h1> */}
        </Link>
        <p className="w-64 text-[#a7babb] text-center font-semibold">
          Jewellery Designed by Diana Alshehhi. Customized gold and diamonds
          selection Deliver worldwide Order through{" "}
          <a href="https://wa.me/9710505590994/?text=let me know more about Diana Topaz">
            whatsApp +9710505590994
          </a>
        </p>
      </div>
      {/* <div className="flex flex-col gap-3">
        <h1 className="font-bold text-xl font-Numbers">Links</h1>
        <ul>
          <Link to={"/"}>
            <li>Home</li>
          </Link>
          <Link to={"/contact"}>
            <li>Contact Us</li>
          </Link>
          <Link to={"/shop"}>
            <li>Shop</li>
          </Link>
          <Link to={"/cart"}>
            <li>Cart</li>
          </Link>
        </ul>
      </div> */}
      <div className="flex flex-col gap-3 text-center font-semibold">
        {/* <h1 className="font-bold text-xl">Contact US</h1> */}
        <h1 className="flex  items-center gap-3">
          <IoLocation /> Dubai ,UAE-57068
        </h1>
        <h6 className="flex  items-center gap-3">
          <IoCall /> +971 55 872 2226
        </h6>
        <h6 className="flex  items-center gap-3">
          <IoCall /> +971 50 559 0994
        </h6>

        <h3 className="flex items-center gap-3">
          <FaEnvelope />
          dianatopaz.jewellery@gmail.com
        </h3>
      </div>
    </div>
  );
}

export default Footer;
