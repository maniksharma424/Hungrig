import React from 'react'
import { Popular_Cuisines } from "../Utilities/constants";

const PopularCuisines = () => {
  return (
    <>
    <h1 className="text-[25px] font-[900] my-[50px] ml-[20px]">
      Popular Cuisines
    </h1>
    <div className="popular-Cuisines flex justify-evenly">
      {Popular_Cuisines?.map((cuisine, index) => {
        return (
          <img
            key={index}
            className="cuisines-image w-[65px] h-[80px] rounded-md"
            src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/${cuisine.imageId}`}
          />
        );
      })}
    </div>
  </>
  )
}

export default PopularCuisines