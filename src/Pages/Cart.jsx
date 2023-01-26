
import { useState, useEffect } from "react";
import CartItem from "./CartItem";
import { IMAGE_URL } from '../Utilities/constants'

export const Cart = () => {
  const [cartItems, setCartItems] = useState(() => {
    return JSON.parse(localStorage.getItem("cartItems"));
  });

  useEffect(() => {
    setCartItems(JSON.parse(localStorage.getItem("cartItems")));
  }, []);

  return (
    <div className="cart border-[1px] border-black w-full flex justify-start items-center bg-gray-100 h-[750px]">
      <div className="Checkout-Box border-black border-[1px] w-[400px] bg-white h-[500px]">
        <ul className="Cart-Items ">
          <div className="Cart-Item w-[full] h-[150px] border-black border-[1px] p-4">
            <div className="Restaurant-info flex justify-start items-center  ">
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
            {cartItems.map((item, index) => {
                return (
                  <li key={item?.info?.id}>
                    <CartItem cartItem={item} />
                  </li>
                );
              })}
          </div>
        </ul>
      </div>
    </div>
  );
};
