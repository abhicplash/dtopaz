import React from "react";
import { IoLocation, IoCall } from "react-icons/io5";
import { FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div
      className="bg-[#2e728f] text-[#a7babb]  
    font-Numbers border-t border-[#e0d5af] w-full md:h-72   md:flex-row flex-col
    flex justify-between md:px-32 items-center gap-10 py-12 md:py-0 "
    >
      <div className="flex-col flex gap-3">
        <Link to={"/"}>
          <h1 className="text-4xl font-bold text-[#c08f52] text-center md:text-left">
            Diana Topaz
          </h1>
        </Link>
        <p className="w-64 text-[#a7babb] text-center">
          Jewellery Designed by Diana Alshehhi. Customized gold and diamonds
          selection💎💍 Delivery worldwide 🌎Order through whatsApp 📲0505590994
        </p>
      </div>
      <div className="flex flex-col gap-3">
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
      </div>
      <div className="flex flex-col gap-3 text-center">
        <h1 className="font-bold text-xl">Contact US</h1>
        <h1 className="flex  items-center gap-3">
          <IoLocation /> Dubai ,UAE-57068
        </h1>
        <h6 className="flex  items-center gap-3">
          <IoCall /> +971505590994
        </h6>
        <h3 className="flex items-center gap-3">
          <FaEnvelope />
          info@Dtopaz.com
        </h3>
      </div>
    </div>
  );
}

export default Footer;
