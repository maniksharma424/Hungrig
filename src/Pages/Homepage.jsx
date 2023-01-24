import React, { useEffect } from "react";
import Body from "./Body";
import {
  handleFilterResturants,
  getResturants,
  getMoreResturants,
} from "../Utilities/utils";
import { useState } from "react";
import { ResturantContext } from "../Contexts/ContextResturant";
import Carousel from "./Carousel";

export const Homepage = () => {
  // const [allresturants, setAllResturants] = useState([]);
  const [filteredResturant, setFilteredResturant] = useState([]);
  const [offSet, setOffSet] = useState(15);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    getResturants(
      offSet,
      signal,
      // setAllResturants,
      setFilteredResturant
    );

    return () => {
      controller.abort();
      console.log("left homepage");
    };
  }, []);

  window.onscroll = function () {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      console.log("get more data");
      getMoreResturants(
        offSet,
        setOffSet,
        // allresturants,
        // setAllResturants,
        filteredResturant,
        setFilteredResturant
      );
    } else {
      console.log("not on bottom");
    }
  };
  return (
    <div className="Homepage">
      <ResturantContext.Provider value={filteredResturant}>
        <Carousel />
        <Body/>
      </ResturantContext.Provider>
    </div>
  );
};
