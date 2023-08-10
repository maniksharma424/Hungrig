import { IMAGE_URL } from "../Utilities/constants";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../Utilities/cartSlice";
const ResturantMenuItemCard = ({ foodItem, RestaurantData }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const dispatch = useDispatch();

  return (
    <div className="Food-Item-Card flex justify-between items-center h-fit w-[450px] relative   m-[20px] border-b-[1px] border-slate-500 border-opacity-50">
      <div className="Food-Item-Info  relative bottom-[20px]  w-2/3 h-1/3">
        {foodItem?.isVeg === 1 ? (
          <p className="text-[15px]">
            {foodItem?.name}{" "}
            <span className="text-green-600">
              <i class="fa-sharp fa-solid fa-leaf"></i>
            </span>
          </p>
        ) : (
          <p className="text-[15px]">
            {foodItem?.name}
            <span className="text-red-600">
              {"  "}
              <i class="fa-solid fa-egg"></i>
            </span>
          </p>
        )}
        {
          foodItem?.price ? 
          <p className="text-[15px]">
          ₹ {foodItem?.price <= 0 ? 100 : foodItem?.price / 100}
        </p>: 
        <p className="text-[15px]">
        ₹ {foodItem?.defaultPrice <= 0 ? 100 : foodItem?.defaultPrice / 100}
      </p>
        }
        <p className="text-[12px] text-[#535665]">{foodItem?.description}</p>
      </div>
      <div className="Food-Item">
        <div className="Food-Item-Image">
          <img
            className="h-0 w-0"
            src={IMAGE_URL + foodItem?.imageId}
            onLoad={() => {
              setIsLoaded(true);
            }}
          />
          {isLoaded ? (
            <img
              className="rounded-lg w-[100px] h-[90px]  bg-center bg-contain bg-no-repeat"
              src={IMAGE_URL + foodItem?.imageId}
            />
          ) : (
            <div className="rounded-lg w-[100px] h-[90px] border-none bg-[#e8e9e6" />
          )}
        </div>
        <div className="Food-Add-Btn">
          <button
            className=" bg-white border-opacity-50 border-[1px] border-slate-500 p-1 px-4 text-green-600 shadow-xl relative left-[14px] bottom-[20px]"
            onClick={() => {
              dispatch(
                addItem({
                  dish: foodItem,
                  restaurant: RestaurantData,
                  qty: 1,
                })
              );
            }}
          >
            ADD
          </button>
        </div>
      </div>
    </div>
  );
};
export default ResturantMenuItemCard;
