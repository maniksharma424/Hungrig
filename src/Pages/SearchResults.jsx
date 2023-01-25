import React from "react";
import SimilarRestaurnts from "./SimilarRestaurnts";
import SearchResultResturantCard from "./SearchResultResturantCard";
import { ShimmerCategoryItem } from "react-shimmer-effects";

const SearchResults = ({ searchResturantResult }) => {

  if(searchResturantResult?.DISH?.cards?.length <=0 ) return <ShimmerCategoryItem />
 else return (
    <div className="Searched-Resturant-Dishes  bg-gray-100 ">
      <ul className=" searched-Dish flex  justify-evenly m-2  flex-wrap ">
        {searchResturantResult?.DISH ? (
          searchResturantResult.DISH.cards.map((dish, index) => {
            return (
              <li key={index}>
                <SearchResultResturantCard Dish={dish} />
              </li>
            );
          })
        ) : (
          <>
            <li>
              {
                <SearchResultResturantCard
                  Restaurant={searchResturantResult?.RESTAURANT?.cards[0]}
                />
              }
            </li>
            <h1 className="absolute top-[470px] text-[20px] font-[700] text-[#3e4152] left-[410px]">
              More Results Like This{" "}
            </h1>
            {searchResturantResult?.RESTAURANT?.cards[1]?.card?.card?.restaurants.map(
              (restaurant, index) => {
                return (
                  <li key={index}>
                    <SimilarRestaurnts Restaurant={restaurant} />
                  </li>
                );
              }
            )}
          </>
        )}
      </ul>
    </div>
  );
};

export default SearchResults;
