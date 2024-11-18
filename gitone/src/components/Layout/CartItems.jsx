// // // // import React from "react";
// // // // import { useDispatch, useSelector } from "react-redux";
// // // // import { FaPlus, FaMinus } from "react-icons/fa6";
// // // // import CartSummery from "./CartSummery";
// // // // import { IoMdClose } from "react-icons/io";
// // // // import {
// // // //   addToCart,
// // // //   clearCart,
// // // //   decreaseQuantity,
// // // //   removeItem
// // // // } from "../../utils/store/cartSlice";

// // // // function CartItems() {
// // // //   const cartItems = useSelector((state) => state.cart.cartItems);

// // // //   const dispatch = useDispatch();
// // // //   const handleClearCart = () => {
// // // //     dispatch(clearCart());
// // // //   };
// // // //   const handleAddToCart = (product) => {
// // // //     dispatch(addToCart(product));
// // // //   };
// // // //   const handleRemoveCart = (product) => {
// // // //     dispatch(removeItem(product));
// // // //   };
// // // //   function handleDecreaseQty(items) {
// // // //     dispatch(decreaseQuantity(items));
// // // //   }

// // // //   return (
// // // //     <div className="flex md:flex-row flex-col items-center md:items-start md:px-32 gap-5 py-10 ">
// // // //       <div className="md:w-[70%] w-80 border   rounded-xl my-10 bg-blue-50">
// // // //         <div className="flex justify-between items-center p-5">
// // // //           <h1 className="  font-Numbers font-semibol text-2xl">Cart</h1>
// // // //           <h1
// // // //             onClick={() => {
// // // //               handleClearCart();
// // // //             }}
// // // //             className="text-sm capitalize flex gap-1
// // // //             font-semibold font-Numbers cursor-pointer
// // // //              text-red-600 active:text-red-900"
// // // //           >
// // // //             <IoMdClose className="text-lg" /> clear cart
// // // //           </h1>
// // // //         </div>
// // // //         {console.log(cartItems)}
// // // //         {cartItems.map((list) => {
// // // //           return (
// // // //             <div>
// // // //               <div
// // // //                 key={list.product_id}
// // // //                 className="border rounded-lg m-5 flex md:flex-row flex-col md:gap-0 gap-5  items-center
// // // //                 justify-between px-1 pr-2 py-5 bg-white "
// // // //               >
// // // //                 <div className="flex md:flex-row flex-col items-center">
// // // //                   <img
// // // //                     src={list.image_url}
// // // //                     alt="image_jewel"
// // // //                     className="w-32 h-32 m-3 rounded-md border"
// // // //                   />
// // // //                   <div className="font-Numbers md:text-start text-center">
// // // //                     <h1 className="text-xl font-semibold text-[#15303e]">
// // // //                       {list.product_code}
// // // //                     </h1>
// // // //                     <h1>{list.article}</h1>
// // // //                   </div>
// // // //                 </div>
// // // //                 <div className="flex items-center text-sm">
// // // //                   <FaPlus
// // // //                     onClick={() => {
// // // //                       handleAddToCart(list);
// // // //                     }}
// // // //                     className="cursor-pointer active:text-yellow-600 border rounded-full p-1 text-xl font-bold"
// // // //                   />
// // // //                   <input
// // // //                     type="text"
// // // //                     value={list.quantity}
// // // //                     className=" text-center w-8"
// // // //                   />
// // // //                   <FaMinus
// // // //                     onClick={() => handleDecreaseQty(list)}
// // // //                     className="cursor-pointer active:text-yellow-600 border rounded-full p-1 text-xl font-bold"
// // // //                   />
// // // //                 </div>
// // // //                 <div>
// // // //                   <h1 className="text-lg font-bold text-[#15303e] font-Numbers">{list.mrp} AED</h1>
// // // //                 </div>
// // // //                 <IoMdClose
// // // //                   onClick={() => {
// // // //                     handleRemoveCart(list);
// // // //                   }}
// // // //                   className="text-red-600 active:text-red-900 text-xl"
// // // //                 />
// // // //               </div>
// // // //             </div>
// // // //           );
// // // //         })}
// // // //       </div>
// // // //       <div className="mt-10">
// // // //         <CartSummery />
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }

// // // // export default CartItems;
// // // // import React from "react";
// // // // import { useDispatch, useSelector } from "react-redux";
// // // // import { FaPlus, FaMinus } from "react-icons/fa6";
// // // // import CartSummery from "./CartSummery";
// // // // import { IoMdClose } from "react-icons/io";
// // // // import {
// // // //   addToCart,
// // // //   clearCart,
// // // //   decreaseQuantity,
// // // //   removeItem
// // // // } from "../../utils/store/cartSlice";

// // // // function CartItems() {
// // // //   const cartItems = useSelector((state) => state.cart.cartItems);
// // // //   const dispatch = useDispatch();

// // // //   const handleClearCart = () => {
// // // //     dispatch(clearCart());
// // // //   };

// // // //   const handleAddToCart = (product) => {
// // // //     dispatch(addToCart(product));
// // // //   };

// // // //   const handleRemoveCart = (product) => {
// // // //     dispatch(removeItem(product));
// // // //   };

// // // //   const handleDecreaseQty = (items) => {
// // // //     dispatch(decreaseQuantity(items));
// // // //   };
// // // //   // const cartItems = useSelector((store) => store.cart.cartItems);
// // // //   let totalQuantity = 0;
// // // //   let totalAmount = 0;
// // // //   cartItems.forEach((jewel) => {
// // // //     totalQuantity += jewel.quantity;
// // // //     totalAmount += jewel.quantity * jewel.mrp;
// // // //   });

// // // //   return (
// // // //     <div className="flex flex-col md:flex-row items-center md:items-start md:px-16 lg:px-32 gap-5 py-10">
// // // //       <div className="w-full md:w-3/4 lg:w-[70%] border rounded-xl my-10 bg-blue-50">
// // // //         <div className="flex justify-between items-center p-5">
// // // //           <h1 className="font-Numbers font-semibold text-xl md:text-2xl">
// // // //             Cart
// // // //           </h1>
// // // //           <h1
// // // //             onClick={handleClearCart}
// // // //             className="text-sm md:text-base capitalize flex gap-1 font-semibold font-Numbers cursor-pointer text-red-600 active:text-red-900"
// // // //           >
// // // //             <IoMdClose className="text-lg" /> clear cart
// // // //           </h1>
// // // //         </div>

// // // //         {cartItems.map((list) => (
// // // //           <div
// // // //             key={list.product_id}
// // // //             className="border rounded-lg m-5 flex flex-col md:flex-row items-center justify-between gap-5 p-4 md:p-6 bg-white"
// // // //           >
// // // //             <div className="flex flex-col md:flex-row items-center w-full md:w-auto">
// // // //               <img
// // // //                 src={list.image_url}
// // // //                 alt="image_jewel"
// // // //                 className="w-24 h-24 md:w-32 md:h-32 m-3 rounded-md border object-cover"
// // // //               />
// // // //               <div className="text-center md:text-left">
// // // //                 <h1 className="text-lg md:text-xl font-semibold text-[#15303e]">
// // // //                   {list.product_code}
// // // //                 </h1>
// // // //                 <h1>{list.article}</h1>
// // // //               </div>
// // // //             </div>
// // // //             <div className="flex items-center text-sm">
// // // //               <FaPlus
// // // //                 onClick={() => handleAddToCart(list)}
// // // //                 className="cursor-pointer active:text-yellow-600 border rounded-full p-1 text-base md:text-xl font-bold"
// // // //               />
// // // //               <input
// // // //                 type="text"
// // // //                 value={list.quantity}
// // // //                 readOnly
// // // //                 className="text-center w-8 mx-2"
// // // //               />
// // // //               <FaMinus
// // // //                 onClick={() => handleDecreaseQty(list)}
// // // //                 className="cursor-pointer active:text-yellow-600 border rounded-full p-1 text-base md:text-xl font-bold"
// // // //               />
// // // //             </div>
// // // //             <div className="text-lg md:text-xl font-bold text-[#15303e] font-Numbers">
// // // //               {list.mrp} AED
// // // //             </div>
// // // //             <IoMdClose
// // // //               onClick={() => handleRemoveCart(list)}
// // // //               className="text-red-600 active:text-red-900 text-lg md:text-xl cursor-pointer"
// // // //             />
// // // //           </div>
// // // //         ))}
// // // //       </div>
// // // //       <div className="w-full md:w-1/4 lg:w-[30%] mt-10 md:mt-0">
// // // //         {/* <CartSummery /> */}
// // // //         <div
// // // //           className="flex flex-col justify-between w-72 h-72 rounded-xl font-Numbers p-5 border
// // // //     border-yellow-100  bg-yellow-50"
// // // //         >
// // // //           <h1 className="text-xl">Cart Total</h1>
// // // //           <div>
// // // //             <h1 className="flex justify-between">
// // // //               Total Quantity:<span>{totalQuantity}</span>
// // // //             </h1>
// // // //             <h1 className="flex justify-between">
// // // //               Amount:<span>{totalAmount}</span>
// // // //             </h1>
// // // //             <h1 className="flex justify-between">
// // // //               Service Tax:<span>5%</span>
// // // //             </h1>
// // // //             <h1 className="flex justify-between font-bold text-lg">
// // // //               Cart Total:<span>{totalAmount + totalAmount * (5 / 100)}</span>
// // // //             </h1>
// // // //           </div>
// // // //           <div>
// // // //             <button className="bg-black py-2 text-white px-10 rounded-lg">
// // // //               Continue to Checkout
// // // //             </button>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }

// // // // export default CartItems;

// // // import React from "react";
// // // import { useDispatch, useSelector } from "react-redux";
// // // import { FaPlus, FaMinus } from "react-icons/fa6";
// // // import CartSummery from "./CartSummery";
// // // import { IoMdClose } from "react-icons/io";
// // // import {
// // //   addToCart,
// // //   clearCart,
// // //   decreaseQuantity,
// // //   removeItem
// // // } from "../../utils/store/cartSlice";
// // // import { Link } from "react-router-dom";

// // // function CartItems() {
// // //   const cartItems = useSelector((state) => state.cart.cartItems);
// // //   const dispatch = useDispatch();

// // //   const handleClearCart = () => {
// // //     dispatch(clearCart());
// // //   };

// // //   const handleAddToCart = (product) => {
// // //     dispatch(addToCart(product));
// // //   };

// // //   const handleRemoveCart = (product) => {
// // //     dispatch(removeItem(product));
// // //   };

// // //   const handleDecreaseQty = (items) => {
// // //     dispatch(decreaseQuantity(items));
// // //   };

// // //   let totalQuantity = 0;
// // //   let totalAmount = 0;
// // //   cartItems.forEach((jewel) => {
// // //     totalQuantity += jewel.quantity;
// // //     totalAmount += jewel.quantity * jewel.mrp;
// // //   });

// // //   return (
// // //     <div
// // //       className="flex flex-col  md:justify-center md:flex-row items-center md:items-start
// // //      md:px-16 lg:px-32 md:gap-10 py-10"
// // //     >
// // //       <div className="w-full md:w-3/4 lg:w-[70%] border rounded-xl my-10 bg-blue-50">
// // //         <div className="flex justify-between items-center p-5">
// // //           <h1 className="font-Numbers font-semibold text-xl md:text-2xl">
// // //             Cart
// // //           </h1>
// // //           <h1
// // //             onClick={handleClearCart}
// // //             className="text-sm md:text-base capitalize flex gap-1 font-semibold font-Numbers cursor-pointer text-red-600 active:text-red-900"
// // //           >
// // //             <IoMdClose className="text-lg" /> clear cart
// // //           </h1>
// // //         </div>
// // //         {cartItems.map((list) => (
// // //           <div
// // //             key={list.product_id}
// // //             className="border rounded-lg m-5 flex flex-col md:flex-row items-center justify-between gap-5 p-4 md:p-6 bg-white"
// // //           >
// // //             <div className="flex flex-col md:flex-row items-center w-full md:w-auto">
// // //               <div className="flex justify-center items-center flex-col">
// // //                 <img
// // //                   src={list.image_url}
// // //                   alt="image_jewel"
// // //                   className="w-24 h-24 md:w-32 md:h-32 m-3 rounded-md border object-cover"
// // //                 />
// // //                 <div className="text-center md:text-left">
// // //                   <h1 className="text-lg md:text-xl font-semibold text-[#15303e]">
// // //                     {list.product_code}
// // //                   </h1>
// // //                   <h1>{list.article}</h1>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //             <div className="flex items-center gap-0  justify-center   text-sm">
// // //               <FaPlus
// // //                 onClick={() => handleAddToCart(list)}
// // //                 className="cursor-pointer active:text-yellow-600 border rounded-full p-1 text-base md:text-xl font-bold"
// // //               />
// // //               <input
// // //                 type="text"
// // //                 value={list.quantity}
// // //                 readOnly
// // //                 className="text-center w-5   font-semibold"
// // //               />
// // //               <FaMinus
// // //                 onClick={() => handleDecreaseQty(list)}
// // //                 className="cursor-pointer active:text-yellow-600 border rounded-full p-1 text-base md:text-xl font-bold"
// // //               />
// // //             </div>
// // //             <div className="text-lg md:text-xl font-bold text-[#15303e] font-Numbers">
// // //               {list.mrp} AED
// // //             </div>
// // //             <IoMdClose
// // //               onClick={() => handleRemoveCart(list)}
// // //               className="text-red-600 active:text-red-900 text-lg md:text-xl cursor-pointer"
// // //             />
// // //           </div>
// // //         ))}
// // //       </div>
// // //       <div className="w-full md:w-1/4 lg:w-[30%] mt-10 md:mt-10 justify-center items-center flex">
// // //         <div className="flex flex-col  justify-between w-72 h-72 rounded-xl font-Numbers p-5 border border-yellow-100 bg-yellow-50">
// // //           <h1 className="text-xl">Cart Total</h1>
// // //           <div>
// // //             <h1 className="flex justify-between">
// // //               Total Quantity:
// // //               <span>{totalQuantity}</span>
// // //             </h1>
// // //             <h1 className="flex justify-between">
// // //               Amount:
// // //               <span>{totalAmount}</span>
// // //             </h1>
// // //             <h1 className="flex justify-between">
// // //               Service Tax:
// // //               <span>5%</span>
// // //             </h1>
// // //             <h1 className="flex justify-between font-bold text-lg">
// // //               Cart Total:
// // //               <span>{totalAmount + totalAmount * (5 / 100)}</span>
// // //             </h1>
// // //           </div>{" "}
// // //           <div className="flex justify-center">
// // //             <Link to={"/PaymentMethods"}>
// // //               <button className="bg-black py-2 text-white px-10 rounded-lg w-full md:w-48">
// // //                 Proceed to Pay
// // //               </button>
// // //             </Link>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }
// // // export default CartItems;

// // import React from "react";
// // import { useDispatch, useSelector } from "react-redux";
// // import { FaPlus, FaMinus } from "react-icons/fa6";
// // import { IoMdClose } from "react-icons/io";
// // import {
// //   addToCart,
// //   clearCart,
// //   decreaseQuantity,
// //   removeItem
// // } from "../../utils/store/cartSlice";
// // import { Link } from "react-router-dom";

// // function CartItems() {
// //   const cartItems = useSelector((state) => state.cart.cartItems);
// //   const dispatch = useDispatch();

// //   const handleClearCart = () => {
// //     dispatch(clearCart());
// //   };

// //   const handleAddToCart = (product) => {
// //     dispatch(addToCart(product));
// //   };

// //   const handleRemoveCart = (product) => {
// //     dispatch(removeItem(product));
// //   };

// //   const handleDecreaseQty = (items) => {
// //     dispatch(decreaseQuantity(items));
// //   };

// //   let totalQuantity = 0;
// //   let totalAmount = 0;
// //   cartItems.forEach((jewel) => {
// //     totalQuantity += jewel.quantity;
// //     totalAmount += jewel.quantity * jewel.mrp;
// //   });

// //   // Function to send cart items to the payment API with Bearer Token
// //   const sendCartToPaymentAPI = async () => {
// //     if (cartItems.length > 0) {
// //       const payload = {
// //         items: cartItems.map(item => ({
// //           productId: item.product_id,
// //           quantity: item.quantity,
// //           price: item.mrp,
// //         }))
// //       };

// //       // const token  = "your_bearer_token_here"; // Replace with your actual token
// //       const token = sessionStorage.getItem("authToken"); // Get token from session storage

// //       try {
// //         const response = await fetch("https://api.dtopaz.com/api/payment/link", {
// //           method: "POST",
// //           headers: {
// //             "Content-Type": "application/json",
// //             "Authorization": `Bearer ${token}` // Add Bearer token in the header
// //           },
// //           body: JSON.stringify(payload),
// //         });

// //         if (!response.ok) {
// //           throw new Error("Failed to create payment link.");
// //         }

// //         const data = await response.json();
// //         console.log(data)
// //         // Assuming the API returns the payment link
// //         if (data.paymentLink) {
// //           // Redirect to the payment link
// //           window.location.href = data.paymentLink;
// //         }
// //       } catch (error) {
// //         console.error("Error sending cart to payment API:", error);
// //       }
// //     }
// //   };

// //   return (
// //     <div
// //       className="flex flex-col md:justify-center md:flex-row items-center md:items-start
// //      md:px-16 lg:px-32 md:gap-10 py-10"
// //     >
// //       <div className="w-full md:w-3/4 lg:w-[70%] border rounded-xl my-10 bg-blue-50">
// //         <div className="flex justify-between items-center p-5">
// //           <h1 className="font-Numbers font-semibold text-xl md:text-2xl">
// //             Cart
// //           </h1>
// //           <h1
// //             onClick={handleClearCart}
// //             className="text-sm md:text-base capitalize flex gap-1 font-semibold font-Numbers cursor-pointer text-red-600 active:text-red-900"
// //           >
// //             <IoMdClose className="text-lg" /> clear cart
// //           </h1>
// //         </div>
// //         {cartItems.map((list) => (
// //           <div
// //             key={list.product_id}
// //             className="border rounded-lg m-5 flex flex-col md:flex-row items-center justify-between gap-5 p-4 md:p-6 bg-white"
// //           >
// //             <div className="flex flex-col md:flex-row items-center w-full md:w-auto">
// //               <div className="flex justify-center items-center flex-col">
// //                 <img
// //                   src={list.image_url}
// //                   alt="image_jewel"
// //                   className="w-24 h-24 md:w-32 md:h-32 m-3 rounded-md border object-cover"
// //                 />
// //                 <div className="text-center md:text-left">
// //                   <h1 className="text-lg md:text-xl font-semibold text-[#15303e]">
// //                     {list.product_code}
// //                   </h1>
// //                   <h1>{list.article}</h1>
// //                 </div>
// //               </div>
// //             </div>
// //             <div className="flex items-center gap-0 justify-center text-sm">
// //               <FaPlus
// //                 onClick={() => handleAddToCart(list)}
// //                 className="cursor-pointer active:text-yellow-600 border rounded-full p-1 text-base md:text-xl font-bold"
// //               />
// //               <input
// //                 type="text"
// //                 value={list.quantity}
// //                 readOnly
// //                 className="text-center w-5 font-semibold"
// //               />
// //               <FaMinus
// //                 onClick={() => handleDecreaseQty(list)}
// //                 className="cursor-pointer active:text-yellow-600 border rounded-full p-1 text-base md:text-xl font-bold"
// //               />
// //             </div>
// //             <div className="text-lg md:text-xl font-bold text-[#15303e] font-Numbers">
// //               {list.mrp} AED
// //             </div>
// //             <IoMdClose
// //               onClick={() => handleRemoveCart(list)}
// //               className="text-red-600 active:text-red-900 text-lg md:text-xl cursor-pointer"
// //             />
// //           </div>
// //         ))}
// //       </div>
// //       <div className="w-full md:w-1/4 lg:w-[30%] mt-10 md:mt-10 justify-center items-center flex">
// //         <div className="flex flex-col justify-between w-72 h-72 rounded-xl font-Numbers p-5 border border-yellow-100 bg-yellow-50">
// //           <h1 className="text-xl">Cart Total</h1>
// //           <div>
// //             <h1 className="flex justify-between">
// //               Total Quantity:
// //               <span>{totalQuantity}</span>
// //             </h1>
// //             <h1 className="flex justify-between">
// //               Amount:
// //               <span>{totalAmount}</span>
// //             </h1>
// //             <h1 className="flex justify-between">
// //               Service Tax:
// //               <span>5%</span>
// //             </h1>
// //             <h1 className="flex justify-between font-bold text-lg">
// //               Cart Total:
// //               <span>{totalAmount + totalAmount * (5 / 100)}</span>
// //             </h1>
// //           </div>
// //           <div className="flex justify-center">
// //             <button
// //               className="bg-black py-2 text-white px-10 rounded-lg w-full md:w-48"
// //               onClick={sendCartToPaymentAPI} // Trigger the API call to send cart to payment
// //             >
// //               Proceed to Pay
// //             </button>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default CartItems;

// // import React from "react";
// // import { useDispatch, useSelector } from "react-redux";
// // import { FaPlus, FaMinus } from "react-icons/fa6";
// // import { IoMdClose } from "react-icons/io";
// // import {
// //   addToCart,
// //   clearCart,
// //   decreaseQuantity,
// //   removeItem
// // } from "../../utils/store/cartSlice";
// // import { Link } from "react-router-dom";

// // function CartItems() {
// //   const cartItems = useSelector((state) => state.cart.cartItems);
// //   const dispatch = useDispatch();

// //   const handleClearCart = () => {
// //     dispatch(clearCart());
// //   };

// //   const handleAddToCart = (product) => {
// //     dispatch(addToCart(product));
// //   };

// //   const handleRemoveCart = (product) => {
// //     dispatch(removeItem(product));
// //   };

// //   const handleDecreaseQty = (items) => {
// //     dispatch(decreaseQuantity(items));
// //   };

// //   let totalQuantity = 0;
// //   let totalAmount = 0;
// //   cartItems.forEach((jewel) => {
// //     totalQuantity += jewel.quantity;
// //     totalAmount += jewel.quantity * jewel.mrp;
// //   });

// //   // Function to send cart items to the payment API with Bearer Token
// //   const sendCartToPaymentAPI = async () => {
// //     if (cartItems.length > 0) {
// //       const payload = {
// //         items: cartItems.map(item => ({
// //           productId: item.product_id,
// //           quantity: item.quantity,
// //           // price: item.mrp ,
// //         }))
// //       };

// //       const token = sessionStorage.getItem("authToken"); // Get token from session storage

// //       try {
// //         const response = await fetch("https://api.dtopaz.com/api/payment/link", {
// //           method: "POST",
// //           headers: {
// //             "Content-Type": "application/json",
// //             "Authorization": `Bearer ${token}` // Add Bearer token in the header
// //           },
// //           body: JSON.stringify(payload),
// //         });

// //         if (!response.ok) {
// //           throw new Error("Failed to create payment link.");
// //         }

// //         const data = await response.json();
// //         // Assuming the API returns the payment link
// //         if (data.paymentLink) {
// //           // Redirect to the payment link
// //           window.location.href = data.paymentLink;
// //         }
// //       } catch (error) {
// //         console.error("Error sending cart to payment API:", error);
// //       }
// //     }
// //   };

// //   return (
// //     <div className="flex flex-col md:justify-center md:flex-row items-center md:items-start md:px-16 lg:px-32 md:gap-10 py-10">
// //       <div className="w-full md:w-3/4 lg:w-[70%] border rounded-xl my-10 bg-blue-50">
// //         <div className="flex justify-between items-center p-5">
// //           <h1 className="font-Numbers font-semibold text-xl md:text-2xl">Cart</h1>
// //           <h1
// //             onClick={handleClearCart}
// //             className="text-sm md:text-base capitalize flex gap-1 font-semibold font-Numbers cursor-pointer text-red-600 active:text-red-900"
// //           >
// //             <IoMdClose className="text-lg" /> Clear Cart
// //           </h1>
// //         </div>

// //         {cartItems.map((list) => (
// //           <div
// //             key={list.product_id}
// //             className="border rounded-lg m-5 flex flex-col md:flex-row items-center justify-between gap-5 p-4 md:p-6 bg-white"
// //           >
// //             <div className="flex flex-col md:flex-row items-center w-full md:w-auto">
// //               <div className="flex justify-center items-center flex-col">
// //                 <img
// //                   src={list.image_url}
// //                   alt="product_image"
// //                   className="w-24 h-24 md:w-32 md:h-32 m-3 rounded-md border object-cover"
// //                 />
// //                 <div className="text-center md:text-left">
// //                   <h1 className="text-lg md:text-xl font-semibold text-[#15303e]">
// //                     {list.product_code}
// //                   </h1>
// //                   <h1>{list.article}</h1>
// //                 </div>
// //               </div>
// //             </div>

// //             <div className="flex items-center gap-0 justify-center text-sm">
// //               <FaPlus
// //                 onClick={() => handleAddToCart(list)}
// //                 className="cursor-pointer active:text-yellow-600 border rounded-full p-1 text-base md:text-xl font-bold"
// //               />
// //               <input
// //                 type="text"
// //                 value={list.quantity}
// //                 readOnly
// //                 className="text-center w-5 font-semibold"
// //               />
// //               <FaMinus
// //                 onClick={() => handleDecreaseQty(list)}
// //                 className="cursor-pointer active:text-yellow-600 border rounded-full p-1 text-base md:text-xl font-bold"
// //               />
// //             </div>

// //             <div className="text-lg md:text-xl font-bold text-[#15303e] font-Numbers">
// //               {list.mrp} AED
// //             </div>

// //             <IoMdClose
// //               onClick={() => handleRemoveCart(list)}
// //               className="text-red-600 active:text-red-900 text-lg md:text-xl cursor-pointer"
// //             />
// //           </div>
// //         ))}
// //       </div>

// //       <div className="w-full md:w-1/4 lg:w-[30%] mt-10 md:mt-10 justify-center items-center flex">
// //         <div className="flex flex-col justify-between w-72 h-72 rounded-xl font-Numbers p-5 border border-yellow-100 bg-yellow-50">
// //           <h1 className="text-xl">Cart Total</h1>
// //           <div>
// //             <h1 className="flex justify-between">
// //               Total Quantity: <span>{totalQuantity}</span>
// //             </h1>
// //             <h1 className="flex justify-between">
// //               Amount: <span>{totalAmount}</span>
// //             </h1>
// //             <h1 className="flex justify-between">
// //               Service Tax: <span>5%</span>
// //             </h1>
// //             <h1 className="flex justify-between font-bold text-lg">
// //               Cart Total: <span>{totalAmount + totalAmount * (5 / 100)}</span>
// //             </h1>
// //           </div>

// //           <div className="flex justify-center">
// //             <Link to="/PaymentMethods">
// //               <button
// //                 onClick={sendCartToPaymentAPI}
// //                 className="bg-black py-2 text-white px-10 rounded-lg w-full md:w-48"
// //               >
// //                 Proceed to Pay
// //               </button>
// //             </Link>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default CartItems;

// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { FaPlus, FaMinus } from "react-icons/fa6";
// import { IoMdClose } from "react-icons/io";
// import {
//   addToCart,
//   clearCart,
//   decreaseQuantity,
//   removeItem
// } from "../../utils/store/cartSlice";
// import { Link } from "react-router-dom";

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

//   let totalQuantity = 0;
//   let totalAmount = 0;
//   cartItems.forEach((jewel) => {
//     totalQuantity += jewel.quantity;
//     totalAmount += jewel.quantity * jewel.mrp;
//   });

//   // Function to send cart items to the payment API with Bearer Token
//   const sendCartToPaymentAPI = async () => {
//     if (cartItems.length > 0) {
//       const payload = {
//         items: cartItems.map(item => ({
//           item_code: item.product_code, // Make sure `product_code` is correct as per the API docs
//           quantity: item.quantity,
//           // Add any other fields that the API might need, such as price
//         })),
//       };

//       console.log("Sending Payload: ", JSON.stringify(payload)); // Log payload for debugging

//       const token = sessionStorage.getItem("authToken"); // Get the token from session storage

//       if (!token) {
//         console.error("No token found!"); // If token is missing, log an error
//         return;
//       }

//       try {
//         const response = await fetch("https://api.dtopaz.com/api/payment/link", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             "Authorization": `Bearer ${token}`, // Add Bearer token in the header
//           },
//           body: JSON.stringify(payload), // Send the payload as a string
//         });

//         if (!response.ok) {
//           const errorData = await response.json();
//           console.error("Error Response: ", errorData); // Log detailed error from the API
//           throw new Error("Failed to create payment link.");
//         }

//         const data = await response.json();
//         console.log("Response Data: ", data); // Log the response from the API

//         if (data.paymentLink) {
//           window.location.href = data.paymentLink; // Redirect to the payment link
//         } else {
//           console.error("No payment link returned");
//         }
//       } catch (error) {
//         console.error("Error sending cart to payment API:", error); // Log any unexpected error
//       }
//     }
//   };

//   return (
//     <div className="flex flex-col md:justify-center md:flex-row items-center md:items-start md:px-16 lg:px-32 md:gap-10 py-10">
//       <div className="w-full md:w-3/4 lg:w-[70%] border rounded-xl my-10 bg-blue-50">
//         <div className="flex justify-between items-center p-5">
//           <h1 className="font-Numbers font-semibold text-xl md:text-2xl">Cart</h1>
//           <h1
//             onClick={handleClearCart}
//             className="text-sm md:text-base capitalize flex gap-1 font-semibold font-Numbers cursor-pointer text-red-600 active:text-red-900"
//           >
//             <IoMdClose className="text-lg" /> Clear Cart
//           </h1>
//         </div>

//         {cartItems.map((list) => (
//           <div
//             key={list.product_id}
//             className="border rounded-lg m-5 flex flex-col md:flex-row items-center justify-between gap-5 p-4 md:p-6 bg-white"
//           >
//             <div className="flex flex-col md:flex-row items-center w-full md:w-auto">
//               <div className="flex justify-center items-center flex-col">
//                 <img
//                   src={list.image_url}
//                   alt="product_image"
//                   className="w-24 h-24 md:w-32 md:h-32 m-3 rounded-md border object-cover"
//                 />
//                 <div className="text-center md:text-left">
//                   <h1 className="text-lg md:text-xl font-semibold text-[#15303e]">
//                     {list.product_code}
//                   </h1>
//                   <h1>{list.article}</h1>
//                 </div>
//               </div>
//             </div>

//             <div className="flex items-center gap-0 justify-center text-sm">
//               <FaPlus
//                 onClick={() => handleAddToCart(list)}
//                 className="cursor-pointer active:text-yellow-600 border rounded-full p-1 text-base md:text-xl font-bold"
//               />
//               <input
//                 type="text"
//                 value={list.quantity}
//                 readOnly
//                 className="text-center w-5 font-semibold"
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

//       <div className="w-full md:w-1/4 lg:w-[30%] mt-10 md:mt-10 justify-center items-center flex">
//         <div className="flex flex-col justify-between w-72 h-72 rounded-xl font-Numbers p-5 border border-yellow-100 bg-yellow-50">
//           <h1 className="text-xl">Cart Total</h1>
//           <div>
//             <h1 className="flex justify-between">
//               Total Quantity: <span>{totalQuantity}</span>
//             </h1>
//             <h1 className="flex justify-between">
//               Amount: <span>{totalAmount}</span>
//             </h1>
//             <h1 className="flex justify-between">
//               Service Tax: <span>5%</span>
//             </h1>
//             <h1 className="flex justify-between font-bold text-lg">
//               Cart Total: <span>{totalAmount + totalAmount * (5 / 100)}</span>
//             </h1>
//           </div>

//           <div className="flex justify-center">
//             <button
//               onClick={sendCartToPaymentAPI}
//               className="bg-black py-2 text-white px-10 rounded-lg w-full md:w-48"
//             >
//               Proceed to Pay
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CartItems;
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import {
  addToCart,
  clearCart,
  decreaseQuantity,
  removeItem
} from "../../utils/store/cartSlice";
import { Link } from "react-router-dom";

function CartItems() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const [paymentMethods, setPaymentMethods] = useState([]); // State to hold available payment methods
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(""); // State to hold the selected payment method

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

  // Function to fetch available payment methods from API
  async function fetchPaymentMethods() {
    const data = await fetch("https://api.dtopaz.com/api/paymentmethods");
    const json = await data.json();
    console.log(json);
    setPaymentMethods(json);
  }

  // Function to send cart items to the payment API with Bearer Token
  const sendCartToPaymentAPI = async () => {
    if (!selectedPaymentMethod) {
      console.error("No payment method selected");
      return;
    }

    console.log(cartItems);
    if (cartItems.length > 0) {
      const payload = {
        payment_method_id: selectedPaymentMethod, // Use the selected payment method
        invoice_items: cartItems.map((item) => ({
          item_code: item.product_code, // Use the correct field for item code
          quantity: item.quantity
        }))
      };

      const token = sessionStorage.getItem("authToken"); // Get token from session storage

      try {
        const response = await fetch(
          "https://api.dtopaz.com/api/payment/link",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}` // Add Bearer token in the header
            },
            body: JSON.stringify(payload)
          }
        );

        if (!response.ok) {
          throw new Error("Failed to create payment link.");
        }

        const data = await response.json();
        console.log(data.data.invoice_url)
        // Assuming the API returns the payment link
        if (data.data.invoice_url) {
          // Redirect to the payment link
          window.location.href = data.data.invoice_url;
        }
      } catch (error) {
        console.error("Error sending cart to payment API:", error);
      }
    }
  };

  // Fetch payment methods when the component mounts
  useEffect(() => {
    fetchPaymentMethods();
  }, []);

  return (
    <div className="flex flex-col md:justify-center md:flex-row items-center md:items-start md:px-16 lg:px-32 md:gap-10 py-10">
      <div className="w-full md:w-3/4 lg:w-[70%] border rounded-xl my-10 bg-blue-50">
        <div className="flex justify-between items-center p-5">
          <h1 className="font-Numbers font-semibold text-xl md:text-2xl">
            Cart
          </h1>
          <h1
            onClick={handleClearCart}
            className="text-sm md:text-base capitalize flex gap-1 font-semibold font-Numbers cursor-pointer text-red-600 active:text-red-900"
          >
            <IoMdClose className="text-lg" /> Clear Cart
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
                  alt="product_image"
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

            <div className="flex items-center gap-0 justify-center text-sm">
              <FaPlus
                onClick={() => handleAddToCart(list)}
                className="cursor-pointer active:text-yellow-600 border rounded-full p-1 text-base md:text-xl font-bold"
              />
              <input
                type="text"
                value={list.quantity}
                readOnly
                className="text-center w-5 font-semibold"
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
        <div className="flex flex-col justify-between w-72 h-72 rounded-xl font-Numbers p-5 border border-yellow-100 bg-yellow-50">
          <h1 className="text-xl">Cart Total</h1>
          <div>
            <h1 className="flex justify-between">
              Total Quantity: <span>{totalQuantity}</span>
            </h1>
            <h1 className="flex justify-between">
              Amount: <span>{totalAmount}</span>
            </h1>
            <h1 className="flex justify-between">
              Service Tax: <span>5%</span>
            </h1>
            <h1 className="flex justify-between font-bold text-lg">
              Cart Total: <span>{totalAmount + totalAmount * (5 / 100)}</span>
            </h1>
          </div>

          {/* Payment Method Selection */}
          <div className="mt-5">
            <h2 className="font-semibold">Select Payment Method:</h2>
            <select
              onChange={(e) => setSelectedPaymentMethod(e.target.value)}
              value={selectedPaymentMethod}
              className="w-full p-2 border rounded-md"
            >
              <option value="">-- Select Method --</option>
              {paymentMethods.length > 0 ? (
                paymentMethods.map((method) => (
                  <option key={method.id} value={method.payment_method_id}>
                    {method.method_name_en}
                    {/* {method.payment_method_id} */}
                  </option>
                ))
              ) : (
                <option disabled>No Payment Methods Available</option>
              )}
            </select>
          </div>

          {/* Proceed to Pay Button */}
          <div className="flex justify-center mt-5">
            <button
              onClick={sendCartToPaymentAPI}
              className="bg-black py-2 text-white px-10 rounded-lg w-full md:w-48"
            >
              Proceed to Pay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItems;
