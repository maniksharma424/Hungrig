
import { useContext } from "react";
import { ResturantContext } from "../Contexts/ContextResturant";
import { RestaurantCard } from "./Resturantcard";

const Body = ()=> {
  const ResturantData = useContext(ResturantContext);
  return (
    <div
      id="Available-Resturants-window"
      className="Available-Resturants  w-full flex  justify-center items-center"
    >
      <ul className="Restaurant-container px-16 flex flex-wrap justify-between border-none w-[90%] mt-[45px] ">
        {ResturantData?.map((restaurant, index) => {
          return <RestaurantCard key={index} restaurant={restaurant?.data?.data} />;   
        })}
      </ul>
    </div>
  );
};

export default Body;
