import React from "react";
import { FaAnglesRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

function HomeBanner() {
  return (
    <div
      className="w-full  bg-shop bg-cover bg-center flex items-center
      flex-col justify-center"
    >
      <div
        className="text-center  flex  bg-[#00000088] w-full  min-h-[100vh]
      flex-col items-center justify-center gap-3  md:gap-5" 
      >
        <h1
          className="text-3xl md:text-5xl   text-[#e6f8ff] font-bold font-org
         capitalize  "
        >
          Diana Topaz <br /> the symbol of prosperity & <br /> abundance
        </h1>
        <p className="md:text-xl text-lg text-[#fefdfa] font-org capitalize md:w-[45%] font-bold  ">
          promising to bring happiness through the beautiful topaz stone{" "}
          which is the signature of the brand
          and the symbol of  prosperity and
          abundance
        </p>

        <Link to={"/shop"}>
          <button
            className="  rounded-3xl w-36 font-org text-white bg-[#a5702f] flex items-center justify-center text-lg h-10 capitalize  duration-700"
          >
            Shop now
            {/* <FaAnglesRight className="text-lg" /> */}
          </button>
        </Link>
      </div>
      
    </div>
  );
}

export default HomeBanner;
