import { useState } from "react";
import Body from "./Body";
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
        <Carousel />
        <Body Restaurants={restaurants} />
      </div>
    );
};
// review
