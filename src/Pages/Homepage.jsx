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
  const [restaurants, setRestaurants] = useState([]);
  const [offSet, setOffSet] = useState(31);
  const cordinates = useContext(locationContext)


  
  const ab = ()=>{
    console.log("scrolled");
    getMoreRestaurant(
      setRestaurants,
      offSet,
      setOffSet,
      cordinates
      )}
    useRestaurant(restaurants, setRestaurants,ab);
  //  window.addEventListener('scroll',ab)



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
