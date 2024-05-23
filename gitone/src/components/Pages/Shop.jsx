import React  from "react";
import Layout from "../Layout/Layout";
import Shimmer from "../Layout/Shimmer";

import ALLjewels from "../Layout/ALLjewels";

function Shop() {
  return (
    <Layout>
      <div className="pb-10">
        
        {/* <JwelItems /> */}
        <ALLjewels/>
      </div>
    </Layout>
  );
}

export default Shop;
