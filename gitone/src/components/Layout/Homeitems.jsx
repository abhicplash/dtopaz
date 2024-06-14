import React from "react";
import { GiBigDiamondRing } from "react-icons/gi";
import { GiCrystalEarrings } from "react-icons/gi";
import { GiHeartNecklace } from "react-icons/gi";
import { GiFeatherNecklace } from "react-icons/gi";
import { GiGemChain } from "react-icons/gi";
import { Link } from "react-router-dom";

function Homeitems() {
  return (
    <div
      className="flex  items-center md:flex-row flex-wrap px-8 md:px-0 w-full md:h-60 py-8 
     justify-center gap-14"
    >
      <Link to={"/ring"}>
        <div className="flex items-center justify-center flex-col gap-3 text-[#005b96]">
          <GiBigDiamondRing className="text-7xl  rounded-full p-4 bg-[#eff6f9]" />
          <h1 className="font-org font-semibold">Rings</h1>
        </div>
      </Link>
      <Link to={"/earing"}>
        <div className="flex items-center justify-center flex-col gap-3 text-[#005b96]">
          <GiCrystalEarrings className="text-7xl  rounded-full p-4 bg-[#eff6f9]" />
          <h1 className="font-org font-semibold">Earrings</h1>
        </div>
      </Link>
      <Link to={"/necklace"}>
        <div className="flex items-center justify-center flex-col gap-3 text-[#005b96]">
          <GiHeartNecklace className="text-7xl  rounded-full p-4 bg-[#eff6f9]" />
          <h1 className="font-org font-semibold">Necklace</h1>
        </div>
      </Link>
      <Link to={"/bracelet"}>
        <div className="flex items-center justify-center flex-col gap-3 text-[#005b96]">
          <GiFeatherNecklace className="text-7xl  rounded-full p-4 bg-[#eff6f9]" />
          <h1 className="font-org font-semibold">Bracelet</h1>
        </div>
      </Link>
      <Link to={"/shop"}>
        <div className="flex items-center justify-center flex-col gap-3 text-[#005b96]">
          <GiGemChain className="text-7xl  rounded-full p-4 bg-[#eff6f9]" />
          <h1 className="font-org font-semibold">Explore All</h1>
        </div>
      </Link>

      {/* <div className="flex items-center justify-center flex-col gap-3 text-[#005b96]">
        <GiDropEarrings className="text-8xl  rounded-full p-4 bg-[#eff6f9]" />
        <h1 className="font-org font-semibold">Fancy</h1>
      </div> */}
    </div>
  );
}

export default Homeitems;
