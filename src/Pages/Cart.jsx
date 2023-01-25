import CartItemCard from "./CartItemCard";
import { useState, useEffect } from "react";
import CartItem from "./CartItem"


export const Cart = () => {
  const[cartItems,setCartItems] = useState(()=>{return JSON.parse(localStorage.getItem('cartItems'))})
 

  useEffect(() => {
 setCartItems(JSON.parse(localStorage.getItem('cartItems')))
 
}, [])
  

  return (
    <div className="cart border-[1px] border-black w-full flex justify-start items-center bg-gray-100 h-[750px]">
      <div className="Checkout-Box border-black border-[1px] w-[400px] bg-white h-[500px]">
        <ul className="Cart-Items ">
          {cartItems.map((item,index)=>{return <li key={item?.info?.id}><CartItem cartItem={item}/></li>})}
        </ul>
      </div>
    </div>
  );
};
