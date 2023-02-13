
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";


const MiniCart = () => {
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    getCartItems(setCartItems);
  }, []);
  const getCartItems = (setState) => {
    if (JSON.parse(localStorage.getItem("orders"))) {
      setState(JSON.parse(localStorage.getItem("orders")));
    } else setCartItems([]);
  };
  const handleUpdate = () => {
    getCartItems(setCartItems);
  };
  let cartTotal = 0;
  let totalitems = 0;

    return (
      <div className="mini-Checkout-Box sticky ml-[115px] z-[1] top-[340px]    w-[300px] bg-white h-fit p-3">
        <div className="Restaurant-info w-[full] px-4  flex justify-start items-center  ">
          <p className="text-[30px] font-[900]">Cart</p>
        </div>
        <div></div>
        <p className="w-full px-4 text-[15px]">
          {cartItems.map((item) => {
            totalitems += item.qty;
          })}
          {totalitems>1 ? <p>{totalitems} Items</p>:<p>{totalitems} Item</p>}
        </p>
        {cartItems.map((item) => {
          cartTotal += item?.dish?.price * item?.qty;
        })}{" "}
        <div className="billing-info  w-full px-4">
          <ul >
            {cartItems?.map((item, index) => {
              return (
                <li key={index}>
                  <button className=" p-0 m-0 w-[230px]" onClick={()=>location.reload()}>
                  <CartItem updateParent={handleUpdate} cartItem={item} />
                  </button>
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
          <Link to='/cart'>
          <button className=" w-full bg-[#60b246] text-white py-2">
            Checkout
          </button>
          </Link>
        </div>
      </div>
    );
};
export default MiniCart;
