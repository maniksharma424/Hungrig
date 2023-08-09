import { useState } from "react";
import Body from "./Body";
import Carousel from "./Carousel";
import useRestaurant from "../customHooks/useRestaurant";
import HomPageShimmer from "./HomPageShimmer";

export const Homepage = () => {
  const [restaurants, setRestaurants] = useState([]);

  useRestaurant(restaurants, setRestaurants);
  console.log(restaurants);

  if (restaurants?.length <= 0)
    return <HomPageShimmer />;
  else
    return (
      <div className="Homepage">
        <Carousel />
        <Body Restaurants={restaurants} />
      </div>
    );
};
