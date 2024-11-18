import React from "react";
import { FaAnglesRight } from "react-icons/fa6";
import limited1 from "../../Assets/Images/others/2.jpg";
import limited2 from "../../Assets/Images/others/8.jpg";
import limited3 from "../../Assets/Images/others/6.jpg";
import { Link } from "react-router-dom";

function HomeLimited() {
  return (
    <div
      className="w-full md:h-[100vh] flex md:flex-row flex-col 
      md:px-32 text-[#15303e] py-16 items-center bg-white "
    >
      <div className="md:w-1/4 h-96 flex flex-col gap-12 md:text-left text-center  items-center ">
        <h1 className="font-org text-5xl  capitalize drop-shadow-xl">
          Our <br /> Limited <br className="md:Hidden" /> editions
        </h1>
        <Link to={"/shop"}>
          <button
            className="border border-[#15303e] rounded-full px-6 justify-center w-44 font-org
          text-lg py-1  flex items-center gap-4 duration-[2s] hover:bg-gradient-to-b from-[#1e4e6b] to-[#053351] hover:text-white"
          >
            Shop now
            <FaAnglesRight className="text-lg" />
          </button>
        </Link>
      </div>
      <div className="md:w-3/4 md:h-[25rem] font-org flex md:flex-row flex-col gap-12 md:gap-5 justify-center items-center">
        <div className="border md:w-56 hover:scale-105 hover:duration-500 rounded-xl flex flex-col ">
          <img src={limited1} alt="" className=" w-[15rem] h-72 rounded-xl  " />
          <div className="w-56 h-10    font-bold  text-center flex flex-col justify-center">
            <h1 className=" text-lg">Customized Lockets</h1>
          </div>
        </div>
        <div className="border md:w-56 hover:scale-105 hover:duration-500 rounded-xl flex flex-col ">
          <img src={limited2} alt="" className=" w-[15rem] h-72 rounded-xl  " />
          <div className="w-56 h-10    font-bold  text-center flex flex-col justify-center">
            <h1 className=" text-lg">Customized Glasses</h1>
          </div>
        </div>
        <div className="border md:w-56 hover:scale-105 hover:duration-500 rounded-xl flex flex-col ">
          <img src={limited3} alt="" className=" w-[15rem] h-72 rounded-xl  " />
          <div className="w-56 h-10   font-bold  text-center flex flex-col justify-center">
            <h1 className=" text-lg">Customized Keys</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeLimited;
