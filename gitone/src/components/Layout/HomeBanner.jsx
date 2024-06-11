import React from "react";
import fgpic from "../../Assets/Images/bennermodels/7.jpg";
import bgpic from "../../Assets/Images/bennermodels/3.jpg";
import { FaAnglesRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

function HomeBanner() {
  return (
    <div
      className="w-full md:h-[93vh] py-5
       md:py-0  bg-[#2e728f] font-mub gap-3 flex md:flex-row 
    flex-col-reverse
    md:items-center md:pl-36  relative"
    >
      <div className="text-center md:text-left flex flex-col items-center md:items-start gap-3">
        <h1 className="text-3xl md:text-5xl text-[#c08f52] font-org uppercase  ">
          Diana Topaz, <br />
          the symbol of <br /> prosperity & abundance
        </h1>
        <p className="text- text-[#a7babb] font-Numbers capitalize px-6 md:px-0  pt-5 md:pt-0  ">
          promising to bring happiness through the beautiful topaz stone{" "}
          <br className="md:flex hidden" /> which is the signature of the brand
          and the symbol of <br className="md:flex hidden" /> prosperity and
          abundance
        </p>

        <Link to={"/shop"}>
          <button
            className="border border-[#a7babb] mt-3 md:mt-0  rounded-full px-6 justify-center w-44 font-org
          text-lg py-1  flex items-center gap-4 text-[#e0d5af] hover:text-[#c08f52] hover:border-[#c08f52] duration-700"
          >
            Shop now
            <FaAnglesRight className="text-lg" />
          </button>
        </Link>
      </div>
      <div className="flex gap-3 relative  md:w-[70%]  ">
        <img
          src={bgpic}
          alt=""
          className="rounded-xl md:rounded-sm shadow-sm 
           md:w-[28rem] md:h-[30rem] mt-5 md:mt-0 h-80 w-80 
            ml-5 md:ml-0 "
        />
        <img
          src={fgpic}
          alt=""
          className="absolute w-60 rounded-md md:h-72 
           shadow-lg right-16 top-24 hidden md:flex "
        />
      </div>
    </div>
  );
}

export default HomeBanner;
