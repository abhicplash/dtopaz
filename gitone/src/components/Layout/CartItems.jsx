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
  function handleDecreaseQty(items) {
    dispatch(decreaseQuantity(items));
  }

  return (
    <div className="flex md:flex-row flex-col items-center md:items-start md:px-32 gap-5 py-10 ">
      <div className="md:w-[70%] w-80 border   rounded-xl my-10 bg-blue-50">
        <div className="flex justify-between items-center p-5">
          <h1 className="  font-Numbers font-semibol text-2xl">Cart</h1>
          <h1
            onClick={() => {
              handleClearCart();
            }}
            className="text-sm capitalize flex gap-1 
            font-semibold font-Numbers cursor-pointer
             text-red-600 active:text-red-900"
          >
            <IoMdClose className="text-lg" /> clear cart
          </h1>
        </div>
        {console.log(cartItems)}
        {cartItems.map((list) => {
          return (
            <div>
              <div
                key={list.product_id}
                className="border rounded-lg m-5 flex md:flex-row flex-col md:gap-0 gap-5  items-center 
                justify-between px-1 pr-2 py-5 bg-white "
              >
                <div className="flex md:flex-row flex-col items-center">
                  <img
                    src={list.image_url}
                    alt="image_jewel"
                    className="w-32 h-32 m-3 rounded-md border"
                  />
                  <div className="font-Numbers md:text-start text-center">
                    <h1 className="text-xl font-semibold text-[#15303e]">
                      {list.product_code}
                    </h1>
                    <h1>{list.article}</h1>
                  </div>
                </div>
                <div className="flex items-center text-sm">
                  <FaPlus
                    onClick={() => {
                      handleAddToCart(list);
                    }}
                    className="cursor-pointer active:text-yellow-600 border rounded-full p-1 text-xl font-bold"
                  />
                  <input
                    type="text"
                    value={list.quantity}
                    className=" text-center w-8"
                  />
                  <FaMinus
                    onClick={() => handleDecreaseQty(list)}
                    className="cursor-pointer active:text-yellow-600 border rounded-full p-1 text-xl font-bold"
                  />
                </div>
                <div>
                  <h1 className="text-lg font-bold text-[#15303e] font-Numbers">{list.mrp} AED</h1>
                </div>
                <IoMdClose
                  onClick={() => {
                    handleRemoveCart(list);
                  }}
                  className="text-red-600 active:text-red-900 text-xl"
                />
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-10">
        <CartSummery />
      </div>
    </div>
  );
}

export default CartItems;
