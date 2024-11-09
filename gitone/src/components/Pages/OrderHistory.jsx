import React from "react";
import Layout from "../Layout/Layout";
import SideBar from "../Layout/SideBar";

const OrderHistory = () => {
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
          <div className="flex flex-col w-[96%]  border border-[#42738f]">
            <h1 className="w-full h-14 bg-[#42738f] text-white text-xl flex items-center justify-center">
              Order History
            </h1>
            <div className="flex flex-col py-5 gap-3 font-org text-[#42738f] text-lg"></div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default OrderHistory;
