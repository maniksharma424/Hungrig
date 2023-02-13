import {useState } from "react"
import Body from "./Body";

import { ResturantContext } from "../Contexts/ContextResturant";
import Carousel from "./Carousel";
import useRestaurant from "../customHooks/useRestaurant";

import HomPageShimmer from "./HomPageShimmer";



export const Homepage = () => {
  const [restaurants, setRestaurants] = useState([]);

  


  useRestaurant(restaurants, setRestaurants);
 

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