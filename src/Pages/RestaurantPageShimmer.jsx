import React from "react";
import {ShimmerThumbnail,ShimmerButton,ShimmerBadge,ShimmerSectionHeader,ShimmerPostItem,
} from "react-shimmer-effects";

const RestaurantPageShimmer = () => {
  return (
    <div className="Resturant-Page">
      <div className="Resturant-banner sticky top-0 z-20  bg-[#171a29] px-12 py-12 h-245 flex justify-around items-center ">
        <ShimmerThumbnail height={165} width={254} rounded />;
        <div className="info relative right-[150px] w-[300px] h-[165px]">
          <ShimmerSectionHeader />
          <div className="info-details flex">
            <ShimmerButton size="sm" />;
            <ShimmerButton size="sm" />;
            <ShimmerButton size="sm" />
          </div>
        </div>
        <div className="offer h-[165px] w-[300px] flex flex-col">
          <ShimmerBadge width={240} />;
          <ShimmerBadge width={240} />;
          <ShimmerBadge width={240} />;
        </div>
      </div>
      <div className=" flex w-[700px] justify-between relative left-[220px] ">
        <div className="widgets relative top-[50px] ">
          {Array(12)
            .fill(1)
            .map((item, index) => (
              <ShimmerBadge key={index} width={140} />
            ))}
        </div>
        <div className="body relative   top-[50px] w-[500px] h-[700px]">
          {Array(4)
            .fill(1)
            .map((item, index) => (
              <ShimmerPostItem
                key={index}
                card
                title
                cta
                imageType="thumbnail"
                imageWidth={80}
                imageHeight={80}
                contentCenter
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantPageShimmer;
