import React from "react";
import SuggestedResturantCard from "./SuggestedResturantCard";
import { ShimmerCategoryList } from "react-shimmer-effects";
const SuggestionResults = ({
  suggestedResturants,
  // ,setSearchResturantResult
}) => {
  if (suggestedResturants?.length <= 0)
    return <ShimmerCategoryList title items={6} categoryStyle="STYLE_TWO" />;
  else
    return (
      <div className="Suggestions">
        <ul>
          {suggestedResturants?.map((item, index) => (
            <li key={index}>
              <SuggestedResturantCard foodItem={item} />
            </li>
          ))}
        </ul>
      </div>
    );
};

export default SuggestionResults;
