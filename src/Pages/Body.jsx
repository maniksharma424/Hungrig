import { useState } from "react";
import { useContext } from "react";
import { ResturantContext } from "../Contexts/ContextResturant";
import { ResturantCard } from "./Resturantcard.jsx";

const Body = () => {
  const ResturantData = useContext(ResturantContext);
  return (
    <div
      id="Available-Resturants-window"
      className="Available-Resturants  w-full flex  justify-center items-center"
    >
      <ul className="Restaurant-container px-16 flex flex-wrap justify-between border-none w-[90%] mt-[45px] ">
        {ResturantData?.map((resturant, index) => {
          return <ResturantCard key={index} resturant={resturant} />;
        })}
      </ul>
    </div>
  );
};

export default Body;
