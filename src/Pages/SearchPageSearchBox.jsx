import React from 'react'
import { getSearchedResturants } from '../Utilities/utils';


const SearchPageSearchBox = ({searchText,setSearchText,setSearchResturantResult,setSuggestedResturants}) => {
    
  return (
    <>
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
    </>
  )
}

export default SearchPageSearchBox