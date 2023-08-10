import { Link } from "react-router-dom";
import { IMAGE_URL } from "../Utilities/constants";
import { useState } from "react";
import { AiTwotoneStar } from "react-icons/ai";
import { ShimmerThumbnail } from "react-shimmer-effects";
// for review

export const RestaurantCard = ({ restaurant }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  if (restaurant?.name)
    return (
      <>
        <li className=" restaurant-Card  w-1/4 h-fit px-2  py-2  mb-3 mt-4 hover:shadow-xl hover:border-slate-500 hover:border-[.5px] hover:border-solid">
          <Link state={{ id: restaurant?.id }} to="/restaurant-page">
            <img
              className="h-0 w-0 rounded-md"
              src={IMAGE_URL + restaurant?.cloudinaryImageId}
              onLoad={() => {
                setIsLoaded(true);
              }}
            />

            <div className="restaurant-Image">
              {isLoaded ? (
                <img
                  className="h-3/5 w-full bg-center bg-no-repeat bg-contain rounded-md"
                  src={IMAGE_URL + restaurant?.cloudinaryImageId}
                />
              ) : (
                <div className=" h-32 w-[210px] bg-[#e9ebe7]" />
              )}
            </div>

            <div className="restaurant-data flex flex-col justify-start content-evenly ">
              <p className="Restaurnat-Name p-0 pb-0 text-md  font-[600]">
                {restaurant?.name}
              </p>

              <div className="restaurant-Cuisines  text-xs  text-[#535665]  w-full overflow-clip  ">
                {restaurant?.cuisines?.join(",")}
              </div>

              <div className="rating text-xs flex items-center  text-[#535665]  w-[200px] overflow-clip ">
                {restaurant?.avgRating ? (
                  <p className="flex items-center ">
                    <span className="bg-green-500 p-[1.5px] mr-1 rounded-xl text-white">
                      <AiTwotoneStar />
                    </span>

                    {restaurant?.avgRating}
                  </p>
                ) : (
                  <span>{restaurant?.avgRatingString}</span>
                )}
              </div>

              <div className="area text-xs flex items-center  text-[#535665]  w-[200px] overflow-clip ">
                {restaurant?.areaName}
              </div>

              <div className="coupon p-1 text-[20px]  text-white  font-[800] flex items-center relative bottom-28     overflow-hidden">
                <p>
                  {restaurant?.aggregatedDiscountInfoV3?.header && (
                    <span>{restaurant?.aggregatedDiscountInfoV3?.header}</span>
                  )}

                  {restaurant?.aggregatedDiscountInfoV3?.subHeader && (
                    <span>
                      {restaurant?.aggregatedDiscountInfoV3?.subHeader}
                    </span>
                  )}
                </p>
              </div>
            </div>
          </Link>
        </li>
      </>
    );
  else
    return Array(1).fill(
      <li className=" restaurant-Card ">
        <ShimmerThumbnail height={180} width={260} className={"rounded-md mt-6 mx-4"}/>
      </li>
    );
};
