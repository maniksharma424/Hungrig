import "../CSS/ResturantsCards.css";
import { useState } from "react";
import { useContext } from "react";
import { ResturantContext } from "../Contexts/ContextResturant";
import { ResturantCard } from "./Resturantcard.jsx";
import { Link } from "react-router-dom";
import Sort from "./Sort";
let i = 50;
const Body = ({ filterResturants, availableRestaurants }) => {
  const [searchText, setSearchText] = useState("");
  const ResturantData = useContext(ResturantContext);
  return (
    <>
      <Sort availableRestaurants={availableRestaurants} />

      <div
        id="Available-Resturants-window"
        className="Available-Resturants  w-full flex justify-center items-center"
      >
        <ul className="Restaurant-container px-16 flex flex-wrap justify-between border-none w-10/12 ">
          {ResturantData?.map((resturant) => {
            return <ResturantCard key={i++} resturant={resturant} />;
          })}
        </ul>
      </div>
    </>
  );
};

export default Body;
