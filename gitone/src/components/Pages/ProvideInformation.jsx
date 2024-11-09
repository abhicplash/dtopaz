import React from "react";
import SideBar from "../Layout/SideBar";
import Layout from "../Layout/Layout";

const ProvideInformation = () => {
  return (
    <Layout>
      <div
        className="w-full h-72 bg-shop bg-center bg-cover  flex justify-center 
      items-center"
      >
        <h1
          className="text-5xl font-org w-full text-center h-full flex items-center justify-center
          text-[#f3f3f3]  bg-[#00000088] "
        >
          My Account
        </h1>
      </div>
      <div className="font-org flex md:flex-row flex-col md:w-full py-5 md:px-16 gap-5">
        <SideBar />
        <div className="w-full flex justify-center items-center">
          <div className="flex flex-col w-[96%] md:w-[80%]  border border-[#42738f]">
            <h1 className="w-full h-14 bg-[#42738f] text-white text-xl flex items-center justify-center">
              Enter Your Information
            </h1>
            <div className="flex flex-col py-5 gap-3 font-org text-[#42738f] text-lg">
              <div className="flex px-2 gap-2 flex-col md:flex-row justify-center">
                <label className="md:w-[30%]  ">Full Name :</label>
                <input
                  type="text"
                  name=""
                  id=""
                  className="border-[#42738f] border md:w-48 outline-none"
                />
              </div>
              <div className="flex px-2 gap-2 flex-col md:flex-row justify-center">
                {/* <h1>Date Of Birth :</h1> */}
                <label className="md:w-[30%]   ">Date Of Birth :</label>

                <input
                  type="date"
                  name=""
                  id=""
                  className="border-[#42738f] border md:w-48 outline-none"
                />
              </div>
              <div className="flex px-2 gap-2 flex-col md:flex-row justify-center">
                <label className="md:w-[30%]   ">Phone Number :</label>

                <input
                  type="text"
                  name=""
                  id=""
                  className="border-[#42738f] border md:w-48 outline-none"
                />
              </div>
              <div className="flex px-2 gap-2 flex-col md:flex-row justify-center">
                <label className="md:w-[30%]  ">Email Address :</label>

                <input
                  type="email"
                  name=""
                  id=""
                  className="border-[#42738f] border md:w-48 outline-none"
                />
              </div>
              <div className="flex px-2 gap-2 flex-col md:flex-row justify-center items-start">
                <label className="md:w-[30%] ">Address</label>
                <textarea
                  className="border-[#42738f] border md:w-48
                 h-36 outline-none w-full"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProvideInformation;
