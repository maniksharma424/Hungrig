import { useState } from "react";
import { Popular_Cuisines } from "../Utilities/constants";
import SuggestionResults from "./SuggestionResults";
import SearchPageSearchBox from "./SearchPageSearchBox";

const SearchPage = () => {
  const [searchText, setSearchText] = useState("");
  const [suggestedResturants, setSuggestedResturants] = useState([]);

  return (
    <div className="Resturant-Search-Page  min-h-[700px] max-h-fit flex justify-center w-full">
      <div className="Resturant-Search-Page-Body w-[700px] mt-[50px] ">
        <SearchPageSearchBox
          searchText={searchText}
          setSearchText={setSearchText}
          setSuggestedResturants={setSuggestedResturants}
        />
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
        ) : (
          <SuggestionResults suggestedResturants={suggestedResturants} />
        )}
      </div>
    </div>
  );
};
export default SearchPage;
