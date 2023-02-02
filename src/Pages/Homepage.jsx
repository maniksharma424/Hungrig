import React, { useEffect, useRef } from "react";
import Body from "./Body";
import { useState } from "react";
import { ResturantContext } from "../Contexts/ContextResturant";
import Carousel from "./Carousel";
import useRestaurant from "../customHooks/useRestaurant";
import { getMoreRestaurants } from "../Utilities/helpers";
import { ShimmerSimpleGallery } from "react-shimmer-effects";
import HomPageShimmer from "./HomPageShimmer";

export const Homepage = () => {
  const [resturants, setResturants] = useState([]);
  const [showRestaurant, setShowRestaurant] = useState(15); 
  useRestaurant(resturants, setResturants);
  window.onscroll = () => {
    getMoreRestaurants(
      resturants,
      setResturants,
      showRestaurant,
      setShowRestaurant
    );
  };

  if (resturants.length <= 0) return <HomPageShimmer />;
  else
    return (
      <div className="Homepage">
        <ResturantContext.Provider value={resturants}>
          <Carousel />
          <Body />
        </ResturantContext.Provider>
      </div>
    );
};
