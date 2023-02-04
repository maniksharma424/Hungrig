import { Link } from "react-router-dom";
import { IMAGE_URL } from "../Utilities/constants";

export const RestaurantCard = ({ restaurant }) => {
  return (
    <>
      <li className=" restaurant-Card  w-72 h-80 border px-4  py-4 border-none mb-8 mt-4 hover:shadow-xl border-slate-500 hover:border-[.5px] hover:border-solid">
        <Link state={{ id: restaurant?.id }} to="/restaurant-page">
          <div className="restaurant-Image">
            <img
              className="h-44 w-64 bg-center bg-no-repeat bg-contain"
              src={IMAGE_URL + restaurant?.cloudinaryImageId}
            />
          </div>
          <div className="restaurant-data flex flex-col justify-start content-evenly">
            <p className="Restaurnat-Name p-0 pb-0 text-lg text-[#3e4152]">
              {restaurant.name}
            </p>
            <div className="restaurant-Cuisines mr-3 p-0">
              <p className="pl-1 p-0 text-xs w-11/12 text-[#535665]">
                {restaurant?.cuisines?.join(",")}
                </p>
            </div>
            <div className="restaurant-Delivery-Info flex justify-between w-[256px] items-center h-10">
              {restaurant?.avgRating >= 4 ? (
                <span className="Rating text-white pr-1 pl-1 text-xs p-0.5 decoration-slate-50  bg-green-600">
                  <i className="fa-regular fa-star fa-small"></i>{" "}
                  {restaurant?.avgRating}
                </span>
              ) : restaurant?.avgRating > 2.8 ? (
                <span className="Rating text-white pr-1 pl-1 p-0.5 text-xs bg-[#db7c38]">
                  <i className="fa-regular fa-star fa-small"></i>{" "}
                  {restaurant?.avgRating}
                </span>
              ) : (
                <span className="Rating text-slate-400 text-xs ">
                  <i className="fa-regular fa-star fa-small"></i>{" "}
                  {restaurant?.avgRating}
                </span>
              )}
              <span className="Time text-[13px] text-[#535665] ">
                {restaurant?.sla?.deliveryTime} Min
              </span>
              <span className="Cost-two text-[#535665] text-xs">
                {restaurant?.costForTwoString}
              </span>
            </div>
            <hr />
          </div>
        </Link>
      </li>
    </>
  );
};
