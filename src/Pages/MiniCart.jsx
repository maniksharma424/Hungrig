import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import store from "../Utilities/store";
import CartItem from "./CartItem";

const MiniCart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  let cartTotal = 0;
  let totalitems = 0;

  return (
    <div className="mini-Checkout-Box sticky ml-[115px] z-[1] top-[340px]    w-[300px] bg-white h-fit p-3 border-[1px] border-slate-100 shadow-md rounded-md">
      <div className="Restaurant-info w-[full] px-4  flex justify-start items-center  ">
        <p className="text-[30px] font-[900]">Cart</p>
      </div>
      <div></div>
      <p className="w-full px-4 text-[15px]">
        {cartItems.map((item) => {
          totalitems += item.qty;
        })}
        {totalitems > 1 ? <p>{totalitems} Items</p> : <p>{totalitems} Item</p>}
      </p>
      {cartItems.map((item) => {
        cartTotal += item?.dish?.price * item?.qty;
      })}{" "}
      <div className="billing-info  w-full px-4">
        <ul>
          {cartItems?.map((item, index) => {
            return (
              <li key={index}>
                <CartItem cartItem={item} />
              </li>
            );
          })}
        </ul>
        <div className="bill-details my-4">
          <p className="flex justify-between my-1 text-[#535665] font-thin text-[13px]">
            <span>
              <p className="text-[16px] font-[700] ">Subtotal</p>
            </span>
            <span className="text-[16px] font-[700]">₹{cartTotal / 100}</span>
          </p>
        </div>
        <Link to="/cart">
          <button className=" w-full bg-[#60b246] rounded-md text-white py-2">
            Checkout
          </button>
        </Link>
      </div>
    </div>
  );
};
export default MiniCart;
