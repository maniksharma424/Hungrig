import { useState } from "react";
import { addToCart, decrement } from "../Utilities/helpers";

const CartItem = ({ cartItem, updateParent }) => {
  const [count, setCount] = useState(cartItem?.qty);

  return (
    <div className="Item-info flex justify-between h-fit  items-center  mt-3">
      <div className="name w-1/2  ">
        <span className="text-[14px] text-[#282c3f]">
          {cartItem?.dish?.name}
        </span>
        <p className="text-[10px] after:text-[10px]  after:font-[900] after:ml-[3px] after:text-[#fc8019] after:content-['>']">
          Customize
        </p>
      </div>
      <div className="btns flex  w-1/5 border-[#d4d5d9] border-[.5px]">
        <button
          className=" w-1/3 text-[20px] text-[#bebfc5]"
          onClick={() => {
            location.reload();
            setCount((n) => n - 1);
            decrement(cartItem);
            updateParent();
          }}
        >
          -
        </button>
        <div className="w-1/3 text-[#60b246] text-[12px] flex justify-center items-center ">
          {cartItem.qty}
        </div>
        <button
          className="w-1/3 text-[20px] text-[#60b246]"
          onClick={() => {
            location.reload();
            setCount((n) => n + 1);
            addToCart({
              dish: cartItem?.dish,
              restaurant: cartItem?.restaurant,
              qty: cartItem?.qty + 1,
            });
            updateParent();
          }}
        >
          +
        </button>
      </div>
      <div className="price w-1/5 flex justify-end  ">
        <p className="text-[#535665] text-[13px]">
          ₹{(cartItem?.dish?.price / 100) * cartItem?.qty}
        </p>
      </div>
    </div>
  );
};

export default CartItem;
// review
