import React from "react";
import { ShimmerThumbnail } from "react-shimmer-effects";
import {  ShimmerSimpleGallery } from "react-shimmer-effects";

const HomPageShimmer = () => {
  return (
    <>
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
        <div className="shiimer-body w-11/12 relative left-[20px] top-[100px]">
          <ShimmerSimpleGallery card imageHeight={200} caption />
        </div>
      </div>
    </>
  );
};

export default HomPageShimmer;
