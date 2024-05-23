import React from "react";
import Layout from "../Layout/Layout";
import { useSelector } from "react-redux";
import EmptyCart from "../Layout/EmptyCart";
import CartItems from "../Layout/CartItems";

function Cart() {
  
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <Layout>{cartItems.length === 0 ? <EmptyCart /> : <CartItems />}</Layout>
  );
}

export default Cart;
