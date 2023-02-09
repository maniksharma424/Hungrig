import React from "react";
import Body from "./Body";
import { useState } from "react";
import { ResturantContext } from "../Contexts/ContextResturant";
import Carousel from "./Carousel";
import useRestaurant from "../customHooks/useRestaurant";



import HomPageShimmer from "./HomPageShimmer";
import { getMoreRestaurant } from "../Utilities/helpers";

export const Homepage = () => {
  const [restaurants, showRestaurants] = useState([]);
  const [showRestaurant, setShowRestaurant] = useState(15);

  useRestaurant(restaurants, showRestaurants);

  typeof restaurants === "undefined"
    ? null
    : (window.onscroll = () => {
        console.log("scrolled");
        getMoreRestaurant(
          restaurants,
          showRestaurants,
          showRestaurant,
          setShowRestaurant
        );
      });

  if (restaurants?.length <= 0 || typeof restaurants === "undefined")
    return <HomPageShimmer />;
  else
    return (
      <div className="Homepage">
        <ResturantContext.Provider value={restaurants}>
          <Carousel />
          <Body />
          
        </ResturantContext.Provider>
      </div>
    );
};
