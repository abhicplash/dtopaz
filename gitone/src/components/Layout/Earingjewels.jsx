import React, { useEffect, useState } from "react";
import { CiCircleChevRight } from "react-icons/ci";
import { Link } from "react-router-dom";
import SmallNav from "./SmallNav";
import ShopLayout from "./ShopLayout";
import Shimmer from "./Shimmer";

function Earingjewels() {
  const [products, setProducts] = useState([]);
  const [pagination, setPagination] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    fetch(`https://api.dtopaz.com/api/products?article=earring&page=${pageNumber}`)
      .then((response) => response.json())
      .then((result) => {
        if (result.data) {
          setProducts(result.data);
          setPagination(result);
        } else {
          console.error("Data not found in response:", result);
        }
      })
      .catch((error) => console.error("Fetch error:", error));
  }, [pageNumber]);

  const totalPages = [];
  for (let i = 1; i <= pagination.last_page; i++) {
    totalPages.push(i);
  }

  return (
    <ShopLayout>
      <div>
        <SmallNav />
        {products.length === 0 ? (
          <Shimmer />
        ) : (
          <div>
            <div className="flex flex-wrap gap-9 md:px-32 justify-center pb-10   ">
              {products.map((jwel, index) => {
                return (
                  <div
                    key={index}
                    className="font-org md:w-56  w-32 h-56 md:h-96 bg-white flex flex-col
                justify-center  items-center border  border-[#c08f52]
                 shadow-sm shadow-[#e0d5af]"
                  >
                    <img
                      src={jwel.image_url}
                      alt=""
                      className="h-40 md:h-72 w-full md:mt-4  "
                    />
                    <div className="flex justify-between items-center w-full p-3 ">
                      <div className="text-left flex flex-col gap-1 text-[#2e728f]">
                        <h1 className=" md:text-lg capitalize font-bold font-Numbers">
                          {jwel.product_code}
                        </h1>
                        <h1 className="font-Numbers font-bold text-xs">
                          {jwel.article}
                        </h1>
                        <h1 className=" font-Numbers text-sm">
                          <span className="text-">{jwel.mrp}</span> AED
                        </h1>
                      </div>
                      <Link to={"/product/" + jwel.product_id}>
                        {/* /watch?v=" + video.id */}
                        <CiCircleChevRight className="text-4xl text-[#c08f52] font-extrabold" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
            <div
              className="w-full 0 px-10 md:px-32 flex flex-wrap gap-3  my-10
         justify-center"
            >
              {totalPages.map((page, index) => (
                <button
                  key={index}
                  className=" cursor-pointer border text-[#15303e] border-[#c08f52] py-1 px-3 
         shadow-sm justify-center items-center active:text-red-600"
                  onClick={(e) => {
                    setPageNumber(e.target.innerHTML);
                  }}
                >
                  {page}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </ShopLayout>
  );
}

export default Earingjewels;
