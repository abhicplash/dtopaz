import React from "react";
import { Link } from "react-router-dom";

function SmallNav() {
  return (
    <div
      className="w-full
       md:h-40 gap-6 md:gap-10 py-10 flex md:flex-row flex-col 
       justify-center items-center "
    >
      <Link to={"/Shop"}>
        <button className="border border-[#c08f52] text-[#2e728f] active:text-yellow-600   active:border-yellow-600 font-org w-40 py-1 rounded-full">
          All
        </button>
      </Link>
      <Link to={"/ring"}>
        <button className="border border-[#c08f52] text-[#2e728f] active:text-yellow-600   active:border-yellow-600 font-org w-40 py-1 rounded-full">
          Ring
        </button>
      </Link>
      <Link to={"/bracelet"}>
        <button className="border border-[#c08f52] text-[#2e728f] font-org w-40 py-1 rounded-full active:text-yellow-600   active:border-yellow-600">
          Bracelet
        </button>
      </Link>
      <Link to={"/necklace"}>
        <button className="border border-[#c08f52] text-[#2e728f] font-org w-40 py-1 rounded-full active:text-yellow-600   active:border-yellow-600">
          Necklace
        </button>
      </Link>
      <Link to={"/earing"}>
        <button className="border border-[#c08f52] text-[#2e728f] font-org w-40 py-1 rounded-full active:text-yellow-600  active:border-yellow-600">
          Earrings
        </button>
      </Link>
    </div>
  );
}

export default SmallNav;
