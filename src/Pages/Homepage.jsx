import React, { useContext } from "react";
import Body from "./Body";
import { useState } from "react";
import { ResturantContext } from "../Contexts/ContextResturant";
import Carousel from "./Carousel";
import useRestaurant from "../customHooks/useRestaurant";



import HomPageShimmer from "./HomPageShimmer";
import { getMoreRestaurant } from "../Utilities/helpers";
import { locationContext } from "../Utilities/MyApp";

export const Homepage = () => {
  const [restaurants, showRestaurants] = useState([]);
  const [showRestaurant, setShowRestaurant] = useState(15);
  const cordinates = useContext(locationContext)

  useRestaurant(restaurants, showRestaurants);

  typeof restaurants === "undefined"
    ? null
    : (window.onscroll = () => {
        console.log("scrolled");
        getMoreRestaurant(
          restaurants,
          showRestaurants,
          showRestaurant,
          setShowRestaurant,
          cordinates
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
