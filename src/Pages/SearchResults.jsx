import SimilarRestaurnts from "./SimilarRestaurnts";
import SearchResultResturantCard from "./SearchResultResturantCard";
import { ShimmerPostItem } from "react-shimmer-effects";
import { useLocation } from "react-router-dom";

import { useState } from "react";

import { Navigate } from "react-router-dom";
import { useSearchResult } from "../customHooks/useSearchResult";
import SearchPageSearchBox from "./SearchPageSearchBox";
const SearchResults = () => {
  const location = useLocation();
  const item = location?.state?.item;
  const [searchText, setSearchText] = useState(item?.text);

  const searchResturantResult = useSearchResult(item);

  if (searchText === "") return <Navigate to="/searchpage" />;
  else
    return (
      <div className="Resturant-Search-Page  min-h-[700px] max-h-fit flex justify-center w-full">
        <div className="Resturant-Search-Page-Body w-[700px] mt-[50px] ">
          <SearchPageSearchBox
            searchText={searchText}
            setSearchText={setSearchText}
          />

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
              ) : searchResturantResult?.RESTAURANT ? (
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
              ) : (
                <div className="p-[10px] flex flex-wrap justify-around absolute w-[700px] items-center top-[200px]">
                  {Array(5)
                    .fill(1)
                    .map((val, index) => (
                      <li className="w-[300px] h-[300px] mb-4">
                        <ShimmerPostItem
                          key={index}
                          card
                          title
                          cta
                          imageType="thumbnail"
                          imageWidth={50}
                          imageHeight={50}
                          contentCenter
                        />
                      </li>
                    ))}
                </div>
              )}
            </ul>
          </div>
        </div>
      </div>
    );
};

export default SearchResults;
