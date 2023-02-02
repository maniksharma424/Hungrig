import { useState, useEffect } from "react";
import CartItem from "./CartItem";
import { IMAGE_URL } from "../Utilities/constants";

export const CheckOutBox = () => {
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

  if (cartItems?.length <= 0) return <p>nithing in cart</p>;
  else
    return (
      <div className="Checkout-Box rounded-sm  w-[1100px] bg-white h-fit">
        <div className="Restaurant-info w-[full] h-[100px] px-4 pt-4 flex justify-start items-center  ">
          <div className="image">
            <img
              className="Image rounded-md bg-no-repeat bg-center bg-contain h-[80px] w-[80px]"
              src={IMAGE_URL + cartItems[0]?.restaurant?.cloudinaryImageId}
            />
          </div>
          <div className="Restaurant-Info ml-4">
            <p className="text-[18px] font-[900px] text-[#3e4152]">
              {cartItems[0]?.restaurant?.name}
            </p>

            <p className="text-[12px] font-[100px]">
              {cartItems[0]?.restaurant?.locality}
            </p>
          </div>
        </div>
        <div className="billing-info  w-full p-4">
          <ul>
            {cartItems?.map((item, index) => {
              return (
                <li key={index}>
                  <CartItem updateParent={handleUpdate} cartItem={item} />
                </li>
              );
            })}
          </ul>
          <div className="w-full h-[60px]    my-4 p-4 bg-[#f9f9f9] flex justify-start items-center">
            <span className="text-[20px] relative  right-2">❝</span>
            <input
              placeholder="Any suggstions we will pass it on to the restaurant..."
              className="suggestion w-10/12 bg-[#f9f9f9]"
              type="text"
            />
          </div>

          <div className="no-contact-delivery border-[#535665] border-[.5px] p-3 flex justify-start items-start ">
            <input type="checkbox" />
            <div className="no-contact-info ml-3">
              <p className=" text-[#3e4152] font-[600] text-[14px]">
                Opt in for No-contact Delivery
              </p>
              <span className=" text-[13px] m-0 p-0 text-[#535665]">
                Unwell, or avoiding contact? Please select no-contact delivery.
                Partner will safely place the order outside your door (not for
                COD)
              </span>
            </div>
          </div>
          <div className="bill-details my-4">
            <h1>Bill details</h1>
            <p className="flex justify-between my-1 text-[#535665] font-thin text-[13px]">
              <span>
                Item Total
                {cartItems.map((item) => {
                  cartTotal += item?.dish?.price * item?.qty;
                })}{" "}
              </span>
              <span>{cartTotal / 100}</span>
            </p>
            <p className="flex justify-between my-1 font-thin">
              <span className="text-[#535665] text-[13px]">
                Delivery Partner Fee
              </span>
              <span className=" text-[#60b246] font-thin text-[13px]">
                FREE
              </span>
            </p>
            <hr />
            <p className="flex justify-between my-3 text-[#535665] text-[14px] font-thin">
              <span>Govt Taxes And Charges</span>
              <span>₹35.7</span>
            </p>
            <hr className="border-black border-[.5px] " />
            <p className="flex justify-between mt-3 font-[600] text-[13px] ">
              <span>To Pay</span>
              <span>{cartTotal / 100 + 35.7}</span>
            </p>
          </div>
        </div>
      </div>
    );
};
