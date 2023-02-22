import { useState, useEffect, useContext } from "react";
import { locationContext } from "../MyApp";
export const useSearchResult = (item) => {
  const cordinates = useContext(locationContext)
  const [searchResturantResult, setSearchResturantResult] = useState([]);

  useEffect(() => {
    getQueryData(item?.text, item?.metadata, setSearchResturantResult);
  }, []);


  // seacrh for restaurants,dishes

  const getQueryData = async (query, metaData, setState) => {
    const queryData =
      await fetch(`https://www.swiggy.com/dapi/restaurants/search/v3?lat=${cordinates.latitude}&lng=${cordinates.longitude}&str=${query}&trackingId=null&submitAction=SUGGESTION&metaData=${metaData}
        `)
        .then((res) => res.json())
        .then((res) => res?.data?.cards[1]?.groupedCard?.cardGroupMap)
        .catch((err) => {
          throw new Error("Something Went Wrong");
        });

    setState({ ...queryData });
  };
  return searchResturantResult;
};
