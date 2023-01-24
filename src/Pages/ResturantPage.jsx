import { useLocation } from "react-router-dom";

import { useState, useEffect } from "react";
import {
  getResturantMenu,
  handleFilterMenuItems,
  handleCategoryMenu,
  handleFilterVegItems,
} from "../Utilities/utils";
import ResturantMenuItemCard from "./ResturantMenuItemCard";
let keyCount = 1;
const ResturantPage = () => {
  const [resturantData, setResturantData] = useState([]);
  const [menu, setMenu] = useState([]);
  const [filteredMenu, setFilteredMenu] = useState(resturantData);
  const [searchText, setSearchText] = useState("");
  const [isVeg, setIsVeg] = useState(false);
  const location = useLocation();
  const resturantID = location.state.id;

  useEffect(() => {
    const controller = new AbortController();

    const signal = controller.signal;

    getResturantMenu(
      signal,
      resturantID,
      setResturantData,
      setMenu,
      setFilteredMenu
    );

    return () => controller.abort();
  }, []);

  return (
    <div className="Resturant-Page">
      <div className="Resturant-banner sticky top-0 z-20  bg-[#171a29] px-12 py-12 h-245 flex justify-around items-center ">
        <div
          className="Resturant-Image w-[254px] h-[165px] bg-centre bg-contain bg-no-repeat"
          style={{
            backgroundImage: `url(https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${resturantData?.cloudinaryImageId})`,
          }}
        ></div>
        <div className="Resturant-Info relative h-[165px] flex flex-col justify-between right-[60px] text-white ">
          <p className=" text-[25px]">{resturantData?.name}</p>
          {resturantData?.cuisines?.map((item, index) => {
            return (
              <span className="text-[13px] text-[#686b78]" key={index}>
                {item}{" "}
              </span>
            );
          })}
          <p className="text-[13px] text-[#686b78]">
            {resturantData?.locality}
          </p>
          <ul className="flex   justify-start items-center w-[350px] h-[60px]">
            {resturantData?.avgRating >= 2.5 ? (
              <li className="mr-11 px-2 text-[18px] relative  right-[5px]">
                {" "}
                <i className="fa-regular fa-star fa-small"></i>{" "}
                {resturantData?.avgRating}
                <p className="text-[10px] text-[#686b78]">Rating</p>
              </li>
            ) : (
              <li className="mr-11 px-2">
                <p>
                  <i className="fa-regular fa-star fa-small"></i>
                </p>
                <p className="text-xs text-[#686b78]"> --too few Rating-</p>
              </li>
            )}

            <li className="mr-11 px-2">
              <p>{resturantData?.sla?.deliveryTime} Mins</p>
              <p className="text-[10px] text-[#686b78]">Delivery Time</p>
            </li>
            <li className="mr-11 px-2">
              ₹ {resturantData?.costForTwo/100}
              <p className="text-[10px] text-[#686b78]">Cost for two</p>
            </li>
          </ul>
        </div>
        <div className="Resturant-Offers  text-[white]">
          <fieldset className="border-[1px] w-[400px] h-[200px]">
            <legend className="text-[18px] p-2">OFFERS</legend>
            {resturantData?.aggregatedDiscountInfoV2?.descriptionList?.map(
              (item, index) => {
                return (
                  <p className="p-4" key={index}>
                    <i class="fa-solid fa-tags fa-lg"></i> {item.meta}
                  </p>
                );
              }
            )}
          </fieldset>
        </div>
      </div>
      <div className="Resturant-Page-Input-Field sticky    w-[530px] z-30 top-[255px] left-[405px] bottom-[32px] flex justify-between p-2 text-[white]">
        <label className="bg-white p-4 px-8 flex justify-start items-center shadow-xl text-[black]  ">
          <i class="fa-solid fa-magnifying-glass fa-lg relative right-[10px]"></i>

          <input
            className="  bg-[white] w-[260px]"
            value={searchText}
            placeholder="Search for Dishes..."
            onChange={(e) => {
              setSearchText(e.target.value);
              handleFilterMenuItems(e.target.value, menu, setFilteredMenu);
            }}
            type="text"
          />
        </label>
        <label className="bg-white flex justify-center items-center text-black p-2 px-4 shadow-xl">
          Veg Only
          <input
            className="m-2 w-[20px] h-[20px]"
            value={isVeg}
            onChange={(e) => {
              setIsVeg(e.target.value);
              handleFilterVegItems(e.target.checked, menu, setFilteredMenu);
            }}
            type="checkbox"
          />
        </label>
      </div>
      <div className="Resturant-Menu-Body w-11/12    justify-evenly flex">
        <div className="Resturant-Categories  sticky top-[310px] z-40 pr-16   h-fit flex flex-col">
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
        <div className="Resturant-Menu-Items border-[black] border-l-[1px]  relative right-[240px] ">
          {filteredMenu.map((item) => (
            <ResturantMenuItemCard
              key={item.id}
              foodItem={item}
              RestaurantData={resturantData}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default ResturantPage;
