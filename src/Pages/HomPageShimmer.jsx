import React from "react";
import { ShimmerThumbnail } from "react-shimmer-effects";
import {  ShimmerSimpleGallery } from "react-shimmer-effects";

const HomPageShimmer = () => {
  return (
    <div className="Home-Shimmer h-fit">
      <div className="carousel   bg-[#171a29] flex justify-evenly items-center w-full p-12 px-32">
        <ShimmerThumbnail height={256} width={256} />
        <ShimmerThumbnail height={256} width={256} />
        <ShimmerThumbnail height={256} width={256} />
        <ShimmerThumbnail height={256} width={256} />
      </div>
      <div
        id="Available-Resturants-window"
        className="Available-Resturants  w-full flex  justify-center items-center"
      >
        <div className="shiimer-body  w-[1200px] px-6 py-28">
          <ShimmerSimpleGallery card imageHeight={150} caption />
        </div>
      </div>
    </div>
  );
};

export default HomPageShimmer;
