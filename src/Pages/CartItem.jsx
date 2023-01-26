import React, { useState } from "react";

const CartItem = ({ cartItem, increment, decrement }) => {
  const [count, setCount] = useState(cartItem?.qty);
  console.log(cartItem);
  return (
    <div className="Item-info flex justify-around items-center border-black border-[1px] mt-3">
      <p className="text-[14px]">{cartItem?.dish?.name}</p>

      
      <button
        onClick={() => {
          setCount((n) => n - 1);
          decrement(cartItem);
        }}
      >
        -
      </button>
      {count}
      <button
        onClick={() => {
          setCount((n) => n + 1);
          increment({
            dish: cartItem?.dish,
            restaurant: cartItem?.restaurant,
            qty: cartItem?.qty + 1,
            
          });
        }}
      >
        +
      </button>

      <p>₹{(cartItem?.dish?.price / 100) * cartItem?.qty}</p>
    </div>
  );
};

export default CartItem;
