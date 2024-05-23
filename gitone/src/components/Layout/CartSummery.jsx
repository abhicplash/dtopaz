import React from "react";
import { useSelector } from "react-redux";

function CartSummery() {
  const cartItems = useSelector((store) => store.cart.cartItems);
  let totalQuantity = 0;
  let totalAmount = 0;
  cartItems.forEach((jewel) => {
    totalQuantity += jewel.quantity;
    totalAmount += jewel.quantity * jewel.mrp;
  });
  return (
    <div
      className="flex flex-col justify-between w-72 h-72 rounded-xl font-Numbers p-5 border
    border-yellow-100  bg-yellow-50"
    >
      <h1 className="text-xl">Cart Total</h1>
      <div>
        <h1 className="flex justify-between">
          Total Quantity:<span>{totalQuantity}</span>
        </h1>
        <h1 className="flex justify-between">
          Amount:<span>{totalAmount}</span>
        </h1>
        <h1 className="flex justify-between">
          Service Tax:<span>5%</span>
        </h1>
        <h1 className="flex justify-between font-bold text-lg">
          Cart Total:<span>{totalAmount - totalAmount * (5 / 100)}</span>
        </h1>
      </div>
      <div>
        <button className="bg-black py-2 text-white px-10 rounded-lg">
          Continue to Checkout
        </button>
      </div>
    </div>
  );
}

export default CartSummery;
