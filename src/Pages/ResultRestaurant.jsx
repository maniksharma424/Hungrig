import React from "react";
import { IMAGE_URL } from "../Utilities/constants";

const ResultRestaurant = ({ Restaurant }) => {
  return (
    <div className="Search-Result-Restaurant? pl-2 rounded-md my-9 mb-24 flex flex-wrap justify-start items-center relative right-[115px]  p-1 bg-white w-[385px] h-[150px] border-[1px] ">
      <div className="Search-Result-Restaurant?-Image w-[100px]">
        <img
          className="Image bg-no-repeat bg-contain bg-center relative top-[10px] h-[90px] w-[90px] rounded-md"
          src={IMAGE_URL + Restaurant?.cloudinaryImageId}
        />
        <div className=" bg-white border-opacity-50 border-[1px] text-[8px]  font-[900] w-7/12 h-fit p-0.5  text-[#ed5e0e] rounded-md shadow-md relative left-[13px] bottom-[5px]">
          {Restaurant?.aggregatedDiscountInfo.header}
        </div>
      </div>
      <div className="Search-Result-Restaurant?-info  flex flex-col overflow-hidden  flex-wrap w-[250px] h-[100px] ">
        <p className="text-[15px] font-[700] text-[#3e4152]">
          {Restaurant?.name}
        </p>
        <p>
          <span className="text-[12px] font-[300] text-[#686b78]">
            {Restaurant?.avgRating >= 4 ? (
              <span className="Rating text-white pr-1 pl-1  text-[10px] py-[3px] px-[2px] p-0.5 decoration-slate-50  bg-green-600">
                <i className="fa-regular fa-star fa-small"></i>{" "}
                {Restaurant?.avgRating}
              </span>
            ) : Restaurant?.avgRating > 2.8 ? (
              <span className="Rating text-white pr-1 pl-1  p-0.5 text-[10px] py-[3px] px-[2px] bg-[#db7c38]">
                <i className="fa-regular fa-star fa-small"></i>{" "}
                {Restaurant?.avgRating}
              </span>
            ) : (
              <span className="Rating text-slate-400 text-[10px] py-[3px] px-[2px] ">
                <i className="fa-regular fa-star fa-small"></i>{" "}
                {Restaurant?.avgRating}
              </span>
            )}
          </span>
          {"  "}
          <span className=" text-[12px] font-[500] text-[#686b78]">
            {Restaurant?.sla?.deliveryTime} Min
          </span>{" "}
          <span className="text-[12px] font-[500] text-[#686b78]">
            {Restaurant?.costForTwoMessage}
          </span>
        </p>
        <p>
          {Restaurant?.cuisines.map((cuisine, index) => {
            return (
              <span
                className="text-[12px] text-[#686b78] px-[2px] font-[100]"
                key={index}
              >
                {cuisine},
              </span>
            );
          })}
        </p>
      </div>
    </div>
  );
};

export default ResultRestaurant;
