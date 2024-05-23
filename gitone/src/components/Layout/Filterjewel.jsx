// import React, { useEffect, useState } from "react";
// import { allJweldata } from "../../utils/data/JwellData";
// import { ringData } from "../../utils/data/ringData";
// import { CiCircleChevRight } from "react-icons/ci";
// import { neckData } from "../../utils/data/NeckData";
// import { limitedData } from "../../utils/data/limitedData";
// import { braceData } from "../../utils/data/braceletData";
// import { earData } from "../../utils/data/earingData";
// import { Link } from "react-router-dom";
// import sampleimage from "../../Assets/Images/Earings/4.jpg";
// import { fetchLink } from "../../utils/API/constant";
// import ALLjewels from "./ALLjewels";

// function Filterjewel({ jewelItem }) {
//   const [products, setProducts] = useState([]);
//   const [pagination, setPagination] = useState([]);
//   const [pageNumber, setPageNumber] = useState(1);
//   const [linkAPi, setLinkApi] = useState(fetchLink);
//   const [finalApi, setFinalApi] = useState(``);
//   useEffect(() => {
//     fetch(`http://localhost/api/products?article=ring&page=${pageNumber}`)
//       .then((response) => response.json())
//       .then((result) => {
//         if (result.data) {
//           setProducts(result.data);
//           setPagination(result);
//         } else {
//           console.error("Data not found in response:", result);
//         }
//       })
//       .catch((error) => console.error("Fetch error:", error));
//   }, [pageNumber]);

//   const totalPages = [];
//   for (let i = 1; i <= pagination.last_page; i++) {
//     totalPages.push(i);
//   }

//   return (
//     <div>
//       <div className="flex flex-wrap gap-9 md:px-32 justify-center pb-10   ">
//         {products.map((jwel, index) => {
//           return (
//             <div
//               key={index}
//               className="font-org w-56 h-96 bg-white flex flex-col
//                 justify-center  items-center border border-[#c08f52] shadow-sm shadow-[#e0d5af]"
//             >
//               <img src={sampleimage} alt="" className="h-72 w-full  " />
//               <div className="flex justify-between items-center w-full p-3 ">
//                 <div className="text-left flex flex-col gap-1 text-[#2e728f]">
//                   <h1 className=" text- capitalize">{jwel.article}</h1>
//                   <h1 className="font-org text-xs">by Dtopaz</h1>
//                   <h1 className=" font-Numbers text-sm">
//                     <span className="text-">{jwel.mrp}</span> AED
//                   </h1>
//                 </div>
//                 <Link to={`/product/${jwel.id}`}>
//                   <CiCircleChevRight className="text-4xl text-[#c08f52] font-extrabold" />
//                 </Link>
//               </div>
//             </div>
//           );
//         })}{" "}
//       </div>
//       <div className="w-full 0 px-10 md:px-32 flex flex-wrap gap-3 border  justify-center">
//         {totalPages.map((page, index) => (
//           <button
//             key={index}
//             className=" cursor-pointer border text-[#15303e] border-[#c08f52] py-1 px-3 
//            shadow-sm justify-center items-center active:text-red-600"
//             onClick={(e) => {
//               setPageNumber(e.target.innerHTML);
//             }}
//           >
//             {page}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Filterjewel;
