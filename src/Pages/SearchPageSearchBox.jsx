import React, { useEffect, useRef } from "react";
import { getSearchedResturants } from "../Utilities/utils";

const SearchPageSearchBox = ({
  searchText,
  setSearchText,
  setSuggestedResturants,
}) => {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <>
      <input
        ref={inputRef}
        className="Search-Input w-full h-[50px] text-[20px] border-[1px] p-7"
        value={searchText}
        placeholder="search for resturants and food ... "
        onChange={(e) => {
          setSearchText(e.target.value);

          setSuggestedResturants
            ? getSearchedResturants(e.target.value, setSuggestedResturants)
            : null;
        }}
      />
      <button
        className="relative left-[670px] decoration-[#cacfe9] bottom-[40px] text-slate-500"
        onClick={() => {
          setSearchText("");
          setSuggestedResturants ? setSuggestedResturants([]) : null;
        }}
      >
        <i class="fa-solid fa-xmark fa-2xl"></i>
      </button>
    </>
  );
};

export default SearchPageSearchBox;
// review
