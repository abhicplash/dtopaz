import React from "react";
import { IoLocation, IoCall } from "react-icons/io5";
import { FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../Assets/logo/logo.png";

function Footer() {
  return (
    <div
      className="bg-gradient-to-b from-[#0d2535] to-[#053351] text-[#a7babb]  relative z-40
    font-org border-t border-[#e0d5af] w-full md:h-80   md:flex-row flex-col
    flex justify-between md:px-32 items-center gap-10 py-12 md:py-0 "
    >
      <div className="flex-col flex  justify-center items-center">
        <Link to={"/"}>
          <img src={logo} alt="" className="w-40 h-36 " />
        </Link>
        <p className="w-64 text-[#a7babb] text-center font-semibold">
          Jewellery Designed by Diana Alshehhi. Customized gold and diamonds
          selection Deliver worldwide Order through{" "}
          <a href="https://wa.me/9710505590994/?text=let me know more about Diana Topaz">
            whatsApp +9710505590994
          </a>
        </p>
      </div>
      <div className="flex flex-col gap-3 ">
        <h1 className="font- text-xl font-org">Customer Services</h1>
        <ul>
          <Link to={"/contact"}>
            <li className="hover:underline hover:text-blue-300">Contact</li>
          </Link>
          <Link to={"/Privacy-policy"}>
            <li className="hover:underline hover:text-blue-300">
              Privacy Policy
            </li>
          </Link>
          <Link to={"/Shipping-and-Returns"}>
            <li className="hover:underline hover:text-blue-300">
              Shipping and Returns
            </li>
          </Link>
          <Link to={"/Terms-and-Conditions"}>
            <li className="hover:underline hover:text-blue-300">
              Terms and Conditions
            </li>
          </Link>
        </ul>
      </div>
      <div className="flex flex-col gap-3 md:items-start items-center md:justify-center text-center font-semibold ">
        <h1 className="text-left font-thin text-xl font-org">Contact</h1>
        <a href="https://www.google.com/maps/place/25%C2%B007'59.6%22N+55%C2%B011'06.8%22E/@25.1332207,55.1826554,17z/data=!3m1!4b1!4m4!3m3!8m2!3d25.1332207!4d55.1852303?entry=ttu">
          <h1 className="flex  items-center gap-3">
            <IoLocation /> Dubai ,UAE-57068
          </h1>
        </a>

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
