import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../Utilities/cartSlice";

const CartItem = ({ cartItem }) => {
  const dispatch = useDispatch();

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
            dispatch(removeItem(cartItem));
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
            dispatch(
              addItem({
                dish: cartItem?.dish,
                restaurant: cartItem?.restaurant,
                qty: cartItem?.qty + 1,
              })
            );
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
