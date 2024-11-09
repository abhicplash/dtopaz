import React from "react";

function Shimmer() {
  const twenty = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2];
  return (
    <div className="flex flex-wrap gap-9 md:px-32 justify-center pb-10   ">
      {twenty.map((list ,index) => (
        <div key={index}
          className="font-org md:w-56 w-32 h-52 md:h-96 bg-white flex flex-col
          justify-center  items-center border border-[#c08f52]
           shadow-sm shadow-[#e0d5af]"
        />
      ))}
    </div>
  );
}

export default Shimmer;
