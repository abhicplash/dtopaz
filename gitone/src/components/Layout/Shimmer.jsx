import React from "react";

function Shimmer() {
  const twenty = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2];
  return (
    <div className="flex flex-wrap gap-9 md:px-32 justify-center pb-10   ">
      {twenty.map((list) => (
        <div
          className="font-org w-56 h-96 bg-yellow-100 
       border border-[#c08f52] shadow-sm shadow-[#e0d5af]"
        />
      ))}
    </div>
  );
}

export default Shimmer;
