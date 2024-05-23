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
      md:px-32 text-[#2e728f] py-16 items-center bg-white "
    >
      <div className="md:w-1/4 h-96 flex flex-col gap-12 md:text-left text-center  items-center ">
        <h1 className="font-org text-5xl  capitalize drop-shadow-xl">
          Our <br /> Limited <br className="md:Hidden" /> editions
        </h1>
        <Link to={"/shop"}>
          <button
            className="border border-[#15303e] rounded-full px-6 justify-center w-44 font-org
          text-lg py-1  flex items-center gap-4"
          >
            Shop now
            <FaAnglesRight className="text-lg" />
          </button>
        </Link>
      </div>
      <div className="md:w-3/4 md:h-[25rem] flex md:flex-row flex-col gap-12 md:gap-5 justify-center items-center">
        <div className="border md:w-56 border-[#e0d5af] flex flex-col shadow-xl shadow-[#e0d5af]">
          <img src={limited1} alt="" className=" w-56 h-80  " />
          <div className="w-56 h-20 font-Numbers font-bold  text-center flex flex-col justify-end pb-2">
            <h1 className=" text-lg">Customized Lockets</h1>
            <h1 className=" text-[#e0d5af]">by Dtopaz</h1>
          </div>
        </div>
        <div className="border md:w-56 border-[#e0d5af] flex flex-col shadow-xl shadow-[#e0d5af]">
          <img src={limited2} alt="" className=" w-56 h-80  " />
          <div className="w-56 h-20 font-Numbers font-bold  text-center flex flex-col justify-end pb-2">
            <h1 className=" text-lg">Customized Glasses</h1>
            <h1 className=" text-[#e0d5af]">by Dtopaz</h1>
          </div>
        </div>
        <div className="border md:w-56 border-[#e0d5af] flex flex-col shadow-xl shadow-[#e0d5af]">
          <img src={limited3} alt="" className=" w-56 h-80  " />
          <div className="w-56 h-20 font-Numbers font-bold  text-center flex flex-col justify-end pb-2">
            <h1 className=" text-lg">Customized Keys</h1>
            <h1 className=" text-[#e0d5af]">by Dtopaz</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeLimited;
