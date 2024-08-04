// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { FaPlus, FaMinus } from "react-icons/fa6";
// import CartSummery from "./CartSummery";
// import { IoMdClose } from "react-icons/io";
// import {
//   addToCart,
//   clearCart,
//   decreaseQuantity,
//   removeItem
// } from "../../utils/store/cartSlice";

// function CartItems() {
//   const cartItems = useSelector((state) => state.cart.cartItems);

//   const dispatch = useDispatch();
//   const handleClearCart = () => {
//     dispatch(clearCart());
//   };
//   const handleAddToCart = (product) => {
//     dispatch(addToCart(product));
//   };
//   const handleRemoveCart = (product) => {
//     dispatch(removeItem(product));
//   };
//   function handleDecreaseQty(items) {
//     dispatch(decreaseQuantity(items));
//   }

//   return (
//     <div className="flex md:flex-row flex-col items-center md:items-start md:px-32 gap-5 py-10 ">
//       <div className="md:w-[70%] w-80 border   rounded-xl my-10 bg-blue-50">
//         <div className="flex justify-between items-center p-5">
//           <h1 className="  font-Numbers font-semibol text-2xl">Cart</h1>
//           <h1
//             onClick={() => {
//               handleClearCart();
//             }}
//             className="text-sm capitalize flex gap-1
//             font-semibold font-Numbers cursor-pointer
//              text-red-600 active:text-red-900"
//           >
//             <IoMdClose className="text-lg" /> clear cart
//           </h1>
//         </div>
//         {console.log(cartItems)}
//         {cartItems.map((list) => {
//           return (
//             <div>
//               <div
//                 key={list.product_id}
//                 className="border rounded-lg m-5 flex md:flex-row flex-col md:gap-0 gap-5  items-center
//                 justify-between px-1 pr-2 py-5 bg-white "
//               >
//                 <div className="flex md:flex-row flex-col items-center">
//                   <img
//                     src={list.image_url}
//                     alt="image_jewel"
//                     className="w-32 h-32 m-3 rounded-md border"
//                   />
//                   <div className="font-Numbers md:text-start text-center">
//                     <h1 className="text-xl font-semibold text-[#15303e]">
//                       {list.product_code}
//                     </h1>
//                     <h1>{list.article}</h1>
//                   </div>
//                 </div>
//                 <div className="flex items-center text-sm">
//                   <FaPlus
//                     onClick={() => {
//                       handleAddToCart(list);
//                     }}
//                     className="cursor-pointer active:text-yellow-600 border rounded-full p-1 text-xl font-bold"
//                   />
//                   <input
//                     type="text"
//                     value={list.quantity}
//                     className=" text-center w-8"
//                   />
//                   <FaMinus
//                     onClick={() => handleDecreaseQty(list)}
//                     className="cursor-pointer active:text-yellow-600 border rounded-full p-1 text-xl font-bold"
//                   />
//                 </div>
//                 <div>
//                   <h1 className="text-lg font-bold text-[#15303e] font-Numbers">{list.mrp} AED</h1>
//                 </div>
//                 <IoMdClose
//                   onClick={() => {
//                     handleRemoveCart(list);
//                   }}
//                   className="text-red-600 active:text-red-900 text-xl"
//                 />
//               </div>
//             </div>
//           );
//         })}
//       </div>
//       <div className="mt-10">
//         <CartSummery />
//       </div>
//     </div>
//   );
// }

// export default CartItems;
// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { FaPlus, FaMinus } from "react-icons/fa6";
// import CartSummery from "./CartSummery";
// import { IoMdClose } from "react-icons/io";
// import {
//   addToCart,
//   clearCart,
//   decreaseQuantity,
//   removeItem
// } from "../../utils/store/cartSlice";

// function CartItems() {
//   const cartItems = useSelector((state) => state.cart.cartItems);
//   const dispatch = useDispatch();

//   const handleClearCart = () => {
//     dispatch(clearCart());
//   };

//   const handleAddToCart = (product) => {
//     dispatch(addToCart(product));
//   };

//   const handleRemoveCart = (product) => {
//     dispatch(removeItem(product));
//   };

//   const handleDecreaseQty = (items) => {
//     dispatch(decreaseQuantity(items));
//   };
//   // const cartItems = useSelector((store) => store.cart.cartItems);
//   let totalQuantity = 0;
//   let totalAmount = 0;
//   cartItems.forEach((jewel) => {
//     totalQuantity += jewel.quantity;
//     totalAmount += jewel.quantity * jewel.mrp;
//   });

//   return (
//     <div className="flex flex-col md:flex-row items-center md:items-start md:px-16 lg:px-32 gap-5 py-10">
//       <div className="w-full md:w-3/4 lg:w-[70%] border rounded-xl my-10 bg-blue-50">
//         <div className="flex justify-between items-center p-5">
//           <h1 className="font-Numbers font-semibold text-xl md:text-2xl">
//             Cart
//           </h1>
//           <h1
//             onClick={handleClearCart}
//             className="text-sm md:text-base capitalize flex gap-1 font-semibold font-Numbers cursor-pointer text-red-600 active:text-red-900"
//           >
//             <IoMdClose className="text-lg" /> clear cart
//           </h1>
//         </div>

//         {cartItems.map((list) => (
//           <div
//             key={list.product_id}
//             className="border rounded-lg m-5 flex flex-col md:flex-row items-center justify-between gap-5 p-4 md:p-6 bg-white"
//           >
//             <div className="flex flex-col md:flex-row items-center w-full md:w-auto">
//               <img
//                 src={list.image_url}
//                 alt="image_jewel"
//                 className="w-24 h-24 md:w-32 md:h-32 m-3 rounded-md border object-cover"
//               />
//               <div className="text-center md:text-left">
//                 <h1 className="text-lg md:text-xl font-semibold text-[#15303e]">
//                   {list.product_code}
//                 </h1>
//                 <h1>{list.article}</h1>
//               </div>
//             </div>
//             <div className="flex items-center text-sm">
//               <FaPlus
//                 onClick={() => handleAddToCart(list)}
//                 className="cursor-pointer active:text-yellow-600 border rounded-full p-1 text-base md:text-xl font-bold"
//               />
//               <input
//                 type="text"
//                 value={list.quantity}
//                 readOnly
//                 className="text-center w-8 mx-2"
//               />
//               <FaMinus
//                 onClick={() => handleDecreaseQty(list)}
//                 className="cursor-pointer active:text-yellow-600 border rounded-full p-1 text-base md:text-xl font-bold"
//               />
//             </div>
//             <div className="text-lg md:text-xl font-bold text-[#15303e] font-Numbers">
//               {list.mrp} AED
//             </div>
//             <IoMdClose
//               onClick={() => handleRemoveCart(list)}
//               className="text-red-600 active:text-red-900 text-lg md:text-xl cursor-pointer"
//             />
//           </div>
//         ))}
//       </div>
//       <div className="w-full md:w-1/4 lg:w-[30%] mt-10 md:mt-0">
//         {/* <CartSummery /> */}
//         <div
//           className="flex flex-col justify-between w-72 h-72 rounded-xl font-Numbers p-5 border
//     border-yellow-100  bg-yellow-50"
//         >
//           <h1 className="text-xl">Cart Total</h1>
//           <div>
//             <h1 className="flex justify-between">
//               Total Quantity:<span>{totalQuantity}</span>
//             </h1>
//             <h1 className="flex justify-between">
//               Amount:<span>{totalAmount}</span>
//             </h1>
//             <h1 className="flex justify-between">
//               Service Tax:<span>5%</span>
//             </h1>
//             <h1 className="flex justify-between font-bold text-lg">
//               Cart Total:<span>{totalAmount + totalAmount * (5 / 100)}</span>
//             </h1>
//           </div>
//           <div>
//             <button className="bg-black py-2 text-white px-10 rounded-lg">
//               Continue to Checkout
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CartItems;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaPlus, FaMinus } from "react-icons/fa6";
import CartSummery from "./CartSummery";
import { IoMdClose } from "react-icons/io";
import {
  addToCart,
  clearCart,
  decreaseQuantity,
  removeItem
} from "../../utils/store/cartSlice";

function CartItems() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleRemoveCart = (product) => {
    dispatch(removeItem(product));
  };

  const handleDecreaseQty = (items) => {
    dispatch(decreaseQuantity(items));
  };

  let totalQuantity = 0;
  let totalAmount = 0;
  cartItems.forEach((jewel) => {
    totalQuantity += jewel.quantity;
    totalAmount += jewel.quantity * jewel.mrp;
  });

  return (
    <div className="flex flex-col  md:justify-center md:flex-row items-center md:items-start 
     md:px-16 lg:px-32 md:gap-10 py-10">
      <div className="w-full md:w-3/4 lg:w-[70%] border rounded-xl my-10 bg-blue-50">
        <div className="flex justify-between items-center p-5">
          <h1 className="font-Numbers font-semibold text-xl md:text-2xl">
            Cart
          </h1>
          <h1
            onClick={handleClearCart}
            className="text-sm md:text-base capitalize flex gap-1 font-semibold font-Numbers cursor-pointer text-red-600 active:text-red-900"
          >
            <IoMdClose className="text-lg" /> clear cart
          </h1>
        </div>
        {cartItems.map((list) => (
          <div
            key={list.product_id}
            className="border rounded-lg m-5 flex flex-col md:flex-row items-center justify-between gap-5 p-4 md:p-6 bg-white"
          >
            <div className="flex flex-col md:flex-row items-center w-full md:w-auto">
              <div className="flex justify-center items-center flex-col">
                <img
                  src={list.image_url}
                  alt="image_jewel"
                  className="w-24 h-24 md:w-32 md:h-32 m-3 rounded-md border object-cover"
                />
                <div className="text-center md:text-left">
                  <h1 className="text-lg md:text-xl font-semibold text-[#15303e]">
                    {list.product_code}
                  </h1>
                  <h1>{list.article}</h1>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-0  justify-center   text-sm">
              <FaPlus
                onClick={() => handleAddToCart(list)}
                className="cursor-pointer active:text-yellow-600 border rounded-full p-1 text-base md:text-xl font-bold"
              />
              <input
                type="text"
                value={list.quantity}
                readOnly
                className="text-center w-5   font-semibold"
              />
              <FaMinus
                onClick={() => handleDecreaseQty(list)}
                className="cursor-pointer active:text-yellow-600 border rounded-full p-1 text-base md:text-xl font-bold"
              />
            </div>
            <div className="text-lg md:text-xl font-bold text-[#15303e] font-Numbers">
              {list.mrp} AED
            </div>
            <IoMdClose
              onClick={() => handleRemoveCart(list)}
              className="text-red-600 active:text-red-900 text-lg md:text-xl cursor-pointer"
            />
          </div>
        ))}
      </div>
      <div className="w-full md:w-1/4 lg:w-[30%] mt-10 md:mt-10 justify-center items-center flex">
        <div className="flex flex-col  justify-between w-72 h-72 rounded-xl font-Numbers p-5 border border-yellow-100 bg-yellow-50">
          <h1 className="text-xl">Cart Total</h1>
          <div>
            <h1 className="flex justify-between">
              Total Quantity:
              <span>{totalQuantity}</span>
            </h1>
            <h1 className="flex justify-between">
              Amount:
              <span>{totalAmount}</span>
            </h1>
            <h1 className="flex justify-between">
              Service Tax:
              <span>5%</span>
            </h1>
            <h1 className="flex justify-between font-bold text-lg">
              Cart Total:
              <span>{totalAmount + totalAmount * (5 / 100)}</span>
            </h1>
          </div>{" "}
          <div className="flex justify-center">
            <button className="bg-black py-2 text-white px-10 rounded-lg w-full md:w-48">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CartItems;
