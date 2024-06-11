import React from "react";
import Layout from "./Layout";

function ShopLayout({ children }) {
  return (
    <Layout>
      <div className="w-full h-72 bg-[#2e728f]  flex justify-center items-center text-[#c08f52]">
        <h1 className="text-5xl font-org ">SHOP</h1>
      </div>
      {children}
    </Layout>
  );
}

export default ShopLayout;
