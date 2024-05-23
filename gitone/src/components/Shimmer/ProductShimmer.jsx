import React from "react";
import Layout from "../Layout/Layout";

function ProductShimmer() {
  return (
    <Layout>
      <div
        className="flex flex-col md:flex-row md:py-20 py-10 justify-center  md:px-40
       items-center gap-4 "
      >
        <div
          className="border border-[#e0d5af] shadow shadow-[#e0d5af] 
        bg-gray-300 w-72 h-80 md:h-96 md:w-80"
        />
        <div className="px-8  flex flex-col gap-3 text-[#15303e]  items-center md:w-1/2 md:gap-6">
          <p className="text-justify font-Head text-sm  w-60 h-16 bg-gray-200">
            {" "}
          </p>
          <p className="text-justify font-Head text-sm  w-full h-24 bg-gray-200">
            {" "}
          </p>
          <div className="flex items-center mx-5 justify-center gap-52 py-6">
            <h1 className="w-20 h-8 bg-gray-200  border"> </h1>
            <button
              className="border-2 border-gray-200 py-2 w-36 h-12
          rounded-full  bg-gray-200 cursor-pointer drop-shadow-lg font-org font-bold"
            ></button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ProductShimmer;
