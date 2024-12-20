import React from "react";
import { GiBigDiamondRing } from "react-icons/gi";
import { GiCrystalEarrings } from "react-icons/gi";
import { GiHeartNecklace } from "react-icons/gi";
import img from "../../Assets/Images/bennermodels/2.jpg";

const HomeAbout = () => {
  return (
    <div
      className=" 
      bg-gradient-to-b from-[#1e4e6b] to-[#053351]
      
       w-full py-6 gap-5 md:gap-0
     md:py-0 md:h-[100vh] px-5 md:px-36 flex md:flex-row flex-col 
      items-center justify-between  text-[#ffffff] "
    >
      <div
        className=" md:flex bg-five w-56 h-56 md:w-96  md:h-[30rem]
       bg-center bg-cover shadow  relative rounded-lg"
      />
      <img
        src={img}
        alt=""
        className="hidden md:flex w-52 h-80
          absolute left-[29rem] "
      />
      <div className="flex flex-col gap-9">
        <h1
          className="text-3xl md:text-5xl uppercase font-org 
         text-center md:text-left"
        >
          what we offer
        </h1>
        <div className="flex flex-col gap-5 pl-5 ">
          <div className="">
            <h1
              className="flex items-center text-xl md:text-2xl
             font-org capitalize 
             gap-3 font-bold text-center md:text-left "
            >
              {/* <GiCrystalEarrings className="text-[#c08f52] hidden md:flex" /> */}
              prosperity , Happiness & memories
            </h1>
            <p className="text-sm  font-Numbers font-semibold pt-2  text-center md:text-left">
              Our artisans in Dubai put their heart into every creation. We want
              <br className="md:flex hidden" />
              to make you happy, so we make custom jewelry that shows off your
              <br className="md:flex hidden" />
              style. Let's create amazing memories together with Diana Topaz!
            </p>
          </div>
          <div>
            <h1
              className="flex items-center text-xl md:text-2xl font-org 
            gap-3 font-bold text-center md:text-left capitalize"
            >
              {/* <GiHeartNecklace className="text-[#c08f52] hidden md:flex" /> */}
              affordable & genuine diamonds
            </h1>
            <p className="text-sm  font-Numbers font-semibold pt-2  text-center md:text-left">
              Make our jewelry available to majority of population by being{" "}
              <br />
              affordable using genuine stones and sustainable diamonds.
            </p>
          </div>
          <div>
            <h1
              className="flex items-center text-xl md:text-2xl font-org capitalize
             gap-3 font-bold text-center md:text-left "
            >
              {/* <GiBigDiamondRing className="text-[#c08f52] hidden md:flex " /> */}
              Aesthetic & unique design
            </h1>
            <p className="text-sm  font-Numbers font-semibold pt-2  text-center md:text-left">
              Each piece is unique and designed on special request <br />
              to make you look stunning and feel great.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
