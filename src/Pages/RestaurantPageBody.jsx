import React from "react";
import { handleCategoryMenu } from "../Utilities/utils";
import ResturantMenuItemCard from "./ResturantMenuItemCard";
import MiniCart from "./MiniCart";
import { EMPTY_CART_IMG} from "../Utilities/constants";

const RestaurantPageBody = ({
  resturantData,
  menu,
  filteredMenu,
  setFilteredMenu,
}) => {
  return (
    <div className="Resturant-Menu-Body w-11/12    justify-start flex">
      <div className="Resturant-Categories  w-[410px] overflow-scroll  sticky top-[310px] z-10 pr-2   h-fit flex flex-col">
        {resturantData?.menu?.widgets?.map((item) =>
          item.type === "category" ? (
            <button
              className=" flex justify-end p-2  hover:text-[#fc8019] active:text-[#fc8019]"
              key={item.id}
              onClick={() => {
                handleCategoryMenu(item.name, menu, setFilteredMenu);
              }}
            >
              <span>{item.name}</span>
            </button>
          ) : null
        )}
      </div>
      <div className="Resturant-Menu-Items border-[black] border-l-[1px]   ">
        {filteredMenu.map((item) => (
          <ResturantMenuItemCard
            key={item.id}
            foodItem={item}
            RestaurantData={resturantData}
          />
        ))}
      </div>
      <div className="mini-cart">
        {JSON.parse(localStorage.getItem("orders")) ? (
          <MiniCart />
        ) : (
          <div className="mini-Checkout-Box sticky ml-[115px] z-50 top-[340px]    w-[300px] bg-white h-fit p-3 ">
            <p className="w-full px-4 text-[25px] font-[700] text-[#7e808c]">
              Cart Empty
            </p>
            <img
              className="w-full px-4 h-[250px] bg-center bg-contain bg-no-repeat"
              src={EMPTY_CART_IMG}
              alt=""
              srcset=""
            />
            <p className="w-full text-[#7e808c] px-4">
              Good food is always cooking! Go ahead, order some yummy items from
              the menu.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RestaurantPageBody;
