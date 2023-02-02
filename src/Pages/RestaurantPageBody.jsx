import React from 'react'
import { handleCategoryMenu } from '../Utilities/utils';
import ResturantMenuItemCard from "./ResturantMenuItemCard";

const RestaurantPageBody = ({resturantData,menu,filteredMenu,setFilteredMenu}) => {
  return (
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
  )
}

export default RestaurantPageBody