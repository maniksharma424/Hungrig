import { useState} from "react";
import PopularCuisines from "./PopularCuisines";
import SuggestionResults from "./SuggestionResults";
import SearchPageSearchBox from "./SearchPageSearchBox";
import SearchResults from "./SearchResults";

const SearchPage = () => {
  const [searchText, setSearchText] = useState("");
  const [suggestedResturants, setSuggestedResturants] = useState([]);
  const [searchResturantResult, setSearchResturantResult] = useState([]);

  return (
    <div className="Resturant-Search-Page  min-h-[700px] max-h-fit flex justify-center w-full">
      <div className="Resturant-Search-Page-Body w-[700px] mt-[50px] ">
        <SearchPageSearchBox
        searchText={searchText}
        setSearchText={setSearchText}
          setSearchResturantResult={setSearchResturantResult}
          setSuggestedResturants={setSuggestedResturants}
        />
        {searchText === "" ? (
          <PopularCuisines />
        ) : 
        searchResturantResult?.length <= 0 ? (
        <SuggestionResults
        suggestedResturants={suggestedResturants}
        setSearchResturantResult={setSearchResturantResult}
        />
        ) : (
          <SearchResults searchResturantResult={searchResturantResult}/>
        )
      }
      </div>
    </div>
  );
};
export default SearchPage;
