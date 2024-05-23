import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";

import { useParams } from "react-router-dom";
import ProductShimmer from "../Shimmer/ProductShimmer";
import { addToCart, clearCart, removeItem } from "../../utils/store/cartSlice";
import { useDispatch } from "react-redux";

function Product() {
  const dispatch = useDispatch();
  const { productId } = useParams();

  const [single, setSingle] = useState([]);

  useEffect(() => {
    fetch(`http://localhost/api/product/${productId}`)
      .then((response) => response.json())
      .then((result) => {
        if (result) {
          setSingle(result);
        } else {
          console.error("Data not found in response:", result);
        }
      })
      .catch((error) => console.error("Fetch error:", error));
  }, [productId]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  return single.length === 0 ? (
    <ProductShimmer />
  ) : (
    <Layout>
      {/* {console.log(single)} */}
      <div
        className="flex flex-col md:flex-row md:py-20 py-10 justify-center  md:px-40
       items-center gap-4 "
      >
        <img
          src={single.image_url}
          alt=""
          className="border border-[#e0d5af] shadow shadow-[#e0d5af] w-72 h-80 md:h-96 md:w-80"
        />
        <div className="px-8 flex flex-col gap-3 text-[#15303e] md:w-1/2 md:gap-6">
          <h1 className="text-3xl md:text-5xl text-center font-org">
            {single.article}
          </h1>
          <p className="text-justify font-Head ">{single.description}</p>
          <p className="text-justify font-Head font-semibold">
            {single.product_code} <br /> Karat {single.karat}
          </p>
          <div className="flex items-center justify-between py-6">
            <h1 className="font-bold text-xl font-Numbers">{single.mrp} AED</h1>
            <button
              onClick={() => {
                handleAddToCart(single);
              }}
              className="border-2 border-[#15303e] py-2 w-36
          rounded-full font- cursor-pointer drop-shadow-lg font-org font-bold"
            >
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Product;
