import React from "react";

import { Link } from "react-router-dom";

import ResultDish from "./ResultDish";
import ResultRestaurant from "./ResultRestaurant";

const SearchResultResturantCard = ({ Dish, Restaurant }) => {
  if (Dish)
    return (
      <Link
        state={{ id: Dish?.card?.card?.restaurant?.info?.id }}
        to="/restaurantPage"
      >
        <ResultDish Dish={Dish?.card?.card} />
      </Link>
    );
  if (Restaurant)
    return (
      <Link
        state={{ id: Restaurant?.card?.card?.info?.id }}
        to="/restaurantPage"
      >
        <ResultRestaurant Restaurant={Restaurant?.card?.card?.info} />
      </Link>
    );
  else return null;
};

export default SearchResultResturantCard;
