import React from "react";
import { GiBigDiamondRing } from "react-icons/gi";
import { GiCrystalEarrings } from "react-icons/gi";
import { GiHeartNecklace } from "react-icons/gi";
import { GiFeatherNecklace } from "react-icons/gi";
import { GiGemChain } from "react-icons/gi";
import { Link } from "react-router-dom";
import ring from "../../Assets/home/ring.png";
import earring from "../../Assets/home/earing.png";
import brace from "../../Assets/home/brace.png";
import neck from "../../Assets/home/neck.png";
import all from "../../Assets/home/all.png";

function Homeitems() {
  return (
    <div>
      <h1 className="text-5xl font-org text-center py-6">Feature Products</h1>
      <div className=" flex py-8 flex-wrap justify-center gap-5">
        <Link to={"/ring"}>
          <div className="rounded-lg border border-gray-100 shadow-sm flex flex-col items-center">
            <img src={ring} alt="ring" className="w-40 h-52    " />
            <h1 className="font-org font-semibold">Rings</h1>
          </div>
        </Link>
        {/* <Link to={"/ring"}>
        <div className="flex items-center justify-center flex-col gap-3 text-[#005b96]">
          <GiBigDiamondRing className="text-7xl  rounded-full p-4 bg-[#eff6f9]" />
          <h1 className="font-org font-semibold">Rings</h1>
        </div>
      </Link> */}
        <Link to={"/earing"}>
          <div className="rounded-lg border border-gray-100 shadow-sm flex flex-col items-center">
            <img src={earring} alt="ring" className="w-40 h-52    " />
            <h1 className="font-org font-semibold">Earings</h1>
          </div>
        </Link>
        {/* <Link to={"/earing"}>
        <div className="flex items-center justify-center flex-col gap-3 text-[#005b96]">
          <GiCrystalEarrings className="text-7xl  rounded-full p-4 bg-[#eff6f9]" />
          <h1 className="font-org font-semibold">Earrings</h1>
        </div>
      </Link> */}
        <Link to={"/necklace"}>
          <div className="rounded-lg border border-gray-100 shadow-sm flex flex-col items-center">
            <img src={neck} alt="ring" className="w-40 h-52    " />
            <h1 className="font-org font-semibold">Necklace</h1>
          </div>
        </Link>
        {/* <Link to={"/necklace"}>
        <div className="flex items-center justify-center flex-col gap-3 text-[#005b96]">
          <GiHeartNecklace className="text-7xl  rounded-full p-4 bg-[#eff6f9]" />
          <h1 className="font-org font-semibold">Necklace</h1>
        </div>
      </Link> */}
        <Link to={"/bracelet"}>
          <div className="rounded-lg border border-gray-100 shadow-sm flex flex-col items-center">
            <img src={brace} alt="ring" className="w-40 h-52    " />
            <h1 className="font-org font-semibold">Bracelet</h1>
          </div>
        </Link>
        {/* <Link to={"/bracelet"}>
        <div className="flex items-center justify-center flex-col gap-3 text-[#005b96]">
          <GiFeatherNecklace className="text-7xl  rounded-full p-4 bg-[#eff6f9]" />
          <h1 className="font-org font-semibold">Bracelet</h1>
        </div>
      </Link> */}
        {/* <Link to={"/shop"}>
        <div className="flex items-center justify-center flex-col gap-3 text-[#005b96]">
          <GiGemChain className="text-7xl  rounded-full p-4 bg-[#eff6f9]" />
          <h1 className="font-org font-semibold">Explore All</h1>
        </div>
      </Link> */}
        <Link to={"/shop"}>
          <div className="rounded-lg border border-gray-100 shadow-sm flex flex-col items-center">
            <img src={all} alt="ring" className="w-40 h-52    " />
            <h1 className="font-org font-semibold">Explore All</h1>
          </div>
        </Link>

        {/* <div className="flex items-center justify-center flex-col gap-3 text-[#005b96]">
        <GiDropEarrings className="text-8xl  rounded-full p-4 bg-[#eff6f9]" />
        <h1 className="font-org font-semibold">Fancy</h1>
      </div> */}
      </div>
    </div>
  );
}

export default Homeitems;
