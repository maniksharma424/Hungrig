import "../CSS/ResturantsCards.css";
import { CartItems } from "./Cart.jsx";
import { Link } from "react-router-dom";

let count = 0;
let countTwo = -100;
export const ResturantCard = ({ resturant }) => {
  return (
    <>
      <li
        key={count++}
        className=" Resturant-Card w-72 h-80 border px-4  py-4 border-none mb-8 mt-4 hover:shadow-lg border-slate-500 hover:border-1 hover:border-solid"
      >
        <Link state={{ id: resturant?.data?.data?.id }} to="/RestaurantPage">
          <div
            className="Resturant-Image h-44 w-64 bg-center bg-no-repeat bg-contain"
            style={{
              backgroundImage: `url(https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${resturant?.data?.data?.cloudinaryImageId})`,
            }}
          ></div>
          <div className="Resturant-data flex flex-col justify-start content-evenly">
            <p className="Restaurnat-Name p-0 pb-0 text-lg">
              {resturant?.data?.data.name}
            </p>
            <div className="Resturant-Cuisines mr-3 p-0">
              {resturant?.data?.data?.cuisines?.map((item) => (
                <span
                  className="Cuisine pl-1 p-0 text-xs w-11/12 decoration-[#cacfe9]"
                  key={countTwo++}
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="Resturant-Delivery-Info flex justify-between w-60 items-center h-10">
              {resturant?.data?.data?.avgRating >= 4 ? (
                <span className="Rating text-white pr-1 pl-1  text-xs p-0.5 decoration-slate-50  bg-green-600">
                  <i className="fa-regular fa-star fa-small"></i>{" "}
                  {resturant?.data?.data?.avgRating}
                </span>
              ) : resturant?.data?.data?.avgRating > 2.8 ? (
                <span className="Rating text-white pr-1 pl-1  p-0.5 text-xs bg-[#db7c38]">
                  <i className="fa-regular fa-star fa-small"></i>{" "}
                  {resturant?.data?.data?.avgRating}
                </span>
              ) : (
                <span className="Rating text-slate-400 text-xs ">
                  <i className="fa-regular fa-star fa-small"></i>{" "}
                  {resturant?.data?.data?.avgRating}
                </span>
              )}
              <span className="Time text-[13px] text-[#535665] ">
                {resturant?.data?.data?.sla?.deliveryTime} Min
              </span>
              <span className="Cost-two text-[#535665] text-xs">
                {resturant?.data?.data?.costForTwoString}
              </span>
            </div>
            <hr />
          </div>
        </Link>
      </li>
    </>
  );
};
