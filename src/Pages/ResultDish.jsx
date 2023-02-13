import React from "react";

import { addToCart } from "../Utilities/helpers";
import { IMAGE_URL } from "../Utilities/constants";
import { useState } from "react";

const ResultDish = ({ Dish }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="Search-Result-Dish-Card bg-white w-[300px] p-2 m-4 rounded-lg h-[200px]  flex hover:cursor-pointer  justify-evenly ">
      <div className="Search-Result-Dish-Info overflow-hidden  w-[200px]    ">
        <p className="text-[11px] font-[800] text-[#686b78] ">
          By {Dish?.restaurant?.info?.name}
        </p>
        <p>
          <span>
            {" "}
            {Dish?.restaurant?.info?.avgRating >= 4 ? (
              <span className="Rating text-white pr-1 pl-1  text-[10px] py-[3px] px-[2px] p-0.5 decoration-slate-50  bg-green-600">
                <i className="fa-regular fa-star fa-small"></i>{" "}
                {Dish?.restaurant?.info?.avgRating}
              </span>
            ) : Dish?.restaurant?.info?.avgRating > 2.8 ? (
              <span className="Rating text-white pr-1 pl-1  p-0.5 text-[10px] py-[3px] px-[2px] bg-[#db7c38]">
                <i className="fa-regular fa-star fa-small"></i>{" "}
                {Dish?.restaurant?.info?.avgRating}
              </span>
            ) : (
              <span className="Rating text-slate-400 text-[10px] py-[3px] px-[2px] ">
                <i className="fa-regular fa-star fa-small"></i>{" "}
                {Dish?.restaurant?.info?.avgRating}
              </span>
            )}
          </span>{" "}
          <span className="text-[9px]">
            {Dish?.restaurant?.info?.sla?.deliveryTime} Min
          </span>
        </p>
        <p></p>
        <p className="text-[14px] font-[700]">{Dish?.info?.name}</p>
        <p className="text-[12px] font-[500]">₹ {Dish?.info?.price / 100}</p>
        <p className="text-[10px] py-[3px] px-[2px]">
          {Dish?.info?.description}
        </p>
      </div>
      <div className="Search-Result-Dish-Add-Cart relative top-8">
        <div className="Search-Result-Dish">
          <img
            onLoad={() => setIsLoaded(true)}
            className=" h-[0px] w-[0px]"
            src={IMAGE_URL + Dish?.info?.imageId}
          />
          {isLoaded ? (
            <img
              className="Image rounded-md bg-no-repeat bg-center bg-contain h-[80px] w-[80px]"
              src={IMAGE_URL + Dish?.info?.imageId}
            />
          ) : (
            <div
              className=" h-[80px] w-[80px] rounded-md bg-slate-200"
              src={IMAGE_URL + Dish?.info?.imageId}
            />
          )}
        </div>
        <button
          className=" bg-white border-opacity-50 border-[1px] border-slate-500 px-4 text-green-600 shadow-md relative left-[9px] bottom-[15px]"
          onClick={(e) => {
            e.preventDefault();
            console.log("hii");
            addToCart({
              dish: Dish?.info,
              restaurant: Dish?.restaurant?.info,
              qty: 1,
            });
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default ResultDish;
