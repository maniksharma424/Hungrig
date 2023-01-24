import React from "react";

import { Link } from "react-router-dom";

import { addToCart } from "../Utilities/utils";

const SearchResultResturantCard = ({ Dish, Restaurant }) => {
  if (Dish)
    return (
      <div className="Search-Result-Dish-Card bg-white w-[300px] p-2 m-4 rounded-lg h-[200px]  flex hover:cursor-pointer  justify-evenly ">
        <div className="Search-Result-Dish-Info overflow-hidden  w-[200px]    ">
          <p className="text-[11px] font-[800] text-[#686b78] ">
            By {Dish?.card?.card?.restaurant?.info?.name}
          </p>
          <p>
            <span>
              {" "}
              {Dish?.card?.card?.restaurant?.info?.avgRating >= 4 ? (
                <span className="Rating text-white pr-1 pl-1  text-[10px] py-[3px] px-[2px] p-0.5 decoration-slate-50  bg-green-600">
                  <i className="fa-regular fa-star fa-small"></i>{" "}
                  {Dish?.card?.card?.restaurant?.info?.avgRating}
                </span>
              ) : Dish?.card?.card?.restaurant?.info?.avgRating > 2.8 ? (
                <span className="Rating text-white pr-1 pl-1  p-0.5 text-[10px] py-[3px] px-[2px] bg-[#db7c38]">
                  <i className="fa-regular fa-star fa-small"></i>{" "}
                  {Dish?.card?.card?.restaurant?.info?.avgRating}
                </span>
              ) : (
                <span className="Rating text-slate-400 text-[10px] py-[3px] px-[2px] ">
                  <i className="fa-regular fa-star fa-small"></i>{" "}
                  {Dish?.card?.card?.restaurant?.info?.avgRating}
                </span>
              )}
            </span>{" "}
            <span className="text-[9px]">
              {Dish?.card?.card?.restaurant?.info?.sla?.deliveryTime} Min
            </span>
          </p>
          <p></p>
          <p className="text-[14px] font-[700]">
            {Dish?.card?.card?.info?.name}
          </p>
          <p className="text-[12px] font-[500]">
            ₹ {Dish?.card?.card?.info?.price / 100}
          </p>
          <p className="text-[10px] py-[3px] px-[2px]">{Dish?.card?.card?.info?.description}</p>
        </div>
        <div className="Search-Result-Dish-Add-Cart relative top-8">
          <div className="Search-Result-Dish">
            <img
              className="Image rounded-md bg-no-repeat bg-center bg-contain h-[80px] w-[80px]"
              src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${Dish?.card?.card?.info?.imageId}`}
            />
          </div>
          <button
            className=" bg-white border-opacity-50 border-[1px] border-slate-500 p-1 px-4 text-green-600 shadow-md relative left-[14px] bottom-[15px]"
            onClick={() => {
              console.log("Added..");
              addToCart( {
                info: Dish?.card?.card?.info,
                restaurant: Dish?.card?.card?.restaurant?.info,
              });
            }}
          >
            Add
          </button>
        </div>
      </div>
    );
  if (Restaurant)
    return (
      <Link
        state={{ id: Restaurant?.card?.card?.info?.id }}
        to="/restaurantPage"
      >
       
          <div className="Search-Result-Restaurant pl-2 rounded-md my-9 mb-24 flex flex-wrap justify-start items-center  p-1 bg-white w-[390px] h-[150px] border-[1px] ">
            <div className="Search-Result-Restaurant-Image w-[100px]">
              <img
                className="Image bg-no-repeat bg-contain bg-center relative top-[10px] h-[90px] w-[90px] rounded-md"
                src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${Restaurant?.card?.card?.info?.cloudinaryImageId}`}
              />
              <p  className=" bg-white border-opacity-50 border-[1px] text-[12px]  font-[900] w-[55px] py-[2px] px-[4px]  text-[#ed5e0e] rounded-md shadow-md relative left-[17px] bottom-[5px]">
                {Restaurant?.card?.card?.info?.aggregatedDiscountInfo.header}
              </p>
            </div>
            <div className="Search-Result-Restaurant-info  flex flex-col overflow-hidden  flex-wrap w-[250px] h-[100px] ">
            <p className="text-[15px] font-[700] text-[#3e4152]">{Restaurant?.card?.card?.info?.name}</p>
            <p>
              <span className="text-[12px] font-[300] text-[#686b78]">{Restaurant?.card?.card?.info?.avgRating >= 4 ? (
                <span className="Rating text-white pr-1 pl-1  text-[10px] py-[3px] px-[2px] p-0.5 decoration-slate-50  bg-green-600">
                  <i className="fa-regular fa-star fa-small"></i>{" "}
                  {Restaurant?.card?.card?.info?.avgRating}
                </span>
              ) : Restaurant?.card?.card?.info?.avgRating > 2.8 ? (
                <span className="Rating text-white pr-1 pl-1  p-0.5 text-[10px] py-[3px] px-[2px] bg-[#db7c38]">
                  <i className="fa-regular fa-star fa-small"></i>{" "}
                  {Restaurant?.card?.card?.info?.avgRating}
                </span>
              ) : (
                <span className="Rating text-slate-400 text-[10px] py-[3px] px-[2px] ">
                  <i className="fa-regular fa-star fa-small"></i>{" "}
                  {Restaurant?.card?.card?.info?.avgRating}
                </span>
              )}</span>{'  '}
              <span className=" text-[12px] font-[500] text-[#686b78]">{Restaurant?.card?.card?.info?.sla?.deliveryTime}{' '} Min</span>{' '}
              <span className="text-[12px] font-[500] text-[#686b78]" >{Restaurant?.card?.card?.info?.costForTwoMessage}</span>
            </p>
            <p>
              {Restaurant?.card?.card?.info?.cuisines.map((cuisine, index) => {
                return <span className="text-[12px] text-[#686b78] px-[2px] font-[100]" key={index}>{cuisine},</span>;
              })}
            </p>
          </div>
          </div>
         

      </Link>
    );
  else return null;
};

export default SearchResultResturantCard;
