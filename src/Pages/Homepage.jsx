import { useState } from "react";
import Body from "./Body";
import Carousel from "./Carousel";
import useRestaurant from "../customHooks/useRestaurant";
import HomPageShimmer from "./HomPageShimmer";
import { useSelector } from "react-redux";

export const Homepage = () => {
  const [restaurants, setRestaurants] = useState([]);
const {lat,lon} = useSelector(store=>store.location.address)
console.log( lat,lon);
  useRestaurant(restaurants, setRestaurants,lat,lon);
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
