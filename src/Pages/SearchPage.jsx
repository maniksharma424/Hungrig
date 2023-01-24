import { useState, useEffect } from "react";
import { getSearchedResturants, getQueryData } from "../Utilities/utils";
import SuggestedResturantCard from "./SuggestedResturantCard";
import SearchResultResturantCard from "./SearchResultResturantCard";
import SimilarRestaurnts from "./SimilarRestaurnts";
import { Popular_Cuisines } from "../Utilities/constants";

const SearchPage = () => {
  const [searchText, setSearchText] = useState("");
  const [suggestedResturants, setSuggestedResturants] = useState([]);
  const [searchResturantResult, setSearchResturantResult] = useState([]);

  return (
    <div className="Resturant-Search-Page  min-h-[700px] max-h-fit flex justify-center w-full">
      <div className="Resturant-Search-Page-Body w-[700px] mt-[50px] ">
        <input
          className="Search-Input w-full h-[50px] text-[20px] border-[1px] p-7"
          value={searchText}
          placeholder="search for resturants and food ... "
          onChange={(e) => {
            setSearchText(e.target.value);
            setSearchResturantResult([]);

            getSearchedResturants(e.target.value, setSuggestedResturants);
          }}
        />
        <button
          className="relative left-[670px] decoration-[#cacfe9] bottom-[40px] text-slate-500"
          onClick={() => {
            setSearchText("");
            setSuggestedResturants([]);
          }}
        >
          <i class="fa-solid fa-xmark fa-2xl"></i>
        </button>
        {searchText === "" ? (
          <>
            <h1 className="text-[25px] font-[900] my-[50px] ml-[20px]">
              Popular Cuisines
            </h1>
            <div className="popular-Cuisines flex justify-evenly">
              {Popular_Cuisines?.map((cuisine, index) => {
                return (
                  <img
                    key={index}
                    className="cuisines-image w-[65px] h-[80px] rounded-md"
                    src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/${cuisine.imageId}`}
                  />
                );
              })}
            </div>
          </>
        ) : searchResturantResult?.length <= 0 ? (
          <div className="Suggestions">
            <ul>
              {suggestedResturants?.map((item, index) => (
                <li
                  onClick={() => {
                    getQueryData(
                      item?.text,
                      item?.metadata,
                      setSearchResturantResult
                    );
                  }}
                  key={index}
                >
                  {<SuggestedResturantCard foodItem={item} />}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="Searched-Resturant-Dishes  bg-gray-100 ">
            <ul className=" searched-Dish flex  justify-evenly m-2  flex-wrap ">
              {searchResturantResult?.DISH ? (
                searchResturantResult.DISH.cards.map((dish, index) => {
                  return (
                    <li key={index}>
                      <SearchResultResturantCard Dish={dish} />
                    </li>
                  )
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
                        <h1 className="absolute top-[470px] text-[20px] font-[700] text-[#3e4152] left-[410px]">More Results Like This </h1>
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
        )}
      </div>
    </div>
  );
};
export default SearchPage;
