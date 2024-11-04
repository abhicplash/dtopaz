import React from "react";
import Layout from "./Layout";

function ShopLayout({ children }) {
  return (
    <Layout>
      <div
        className="w-full h-72 bg-shop bg-center bg-cover  flex justify-center 
      items-center"
      >
        <h1 className="text-5xl font-org w-full text-center h-full flex items-center justify-center
          text-[#f3f3f3]  bg-[#00000088] ">
          Shop
        </h1>
      </div>
      {children}
    </Layout>
  );
}

export default ShopLayout;
