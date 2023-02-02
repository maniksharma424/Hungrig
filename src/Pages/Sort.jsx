import React from "react";

const Sort = ({ availableRestaurants }) => {
  return (
    <div className="Sort flex w-full p-8 px-36 pb-0">
      <p className="toatl-Restaurants font-[600] text-[27px] decoration-[#282c3f]">
        {`${availableRestaurants?.totalSize} restaurants`}{" "}
      </p>
    </div>
  );
};

export default Sort;
