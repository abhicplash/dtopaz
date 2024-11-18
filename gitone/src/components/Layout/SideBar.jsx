import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="md:w-[25%] w-full min-h-full">
      <ul className="flex flex-col justify-center items-center text-center w-full gap-1">
        {/* <li className="h-14 text-xl text-[#42738f]  flex justify-center items-center w-[96%] border border-[#42738f]">
          <Link to={"/provideInformation"}>Provide Information</Link>
        </li> */}
        <li className="h-14 text-xl text-[#42738f]  flex justify-center items-center w-[96%] border border-[#42738f]">
          <Link to={"/personal"}>Personal Information</Link>
        </li>
        <li className="h-14 text-xl text-[#42738f]  flex justify-center items-center w-[96%] border border-[#42738f]">
          <Link to={"/OrderHistory"}>Order History</Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
