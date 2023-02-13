import { useState,useEffect } from "react";
export const useSearchResult = (item)=>{
    const [searchResturantResult, setSearchResturantResult] = useState([]);



    useEffect(() => {
        getQueryData(item?.text, item?.metadata, setSearchResturantResult);
      }, []);



      const getQueryData = async (query, metaData, setState) => {
        const queryData =
          await fetch(`https://www.swiggy.com/dapi/restaurants/search/v3?lat=32.681881&lng=74.906294&str=${query}&trackingId=null&submitAction=SUGGESTION&metaData=${metaData}
        `)
            .then((res) => res.json())
            .then((res) => res?.data?.cards[1]?.groupedCard?.cardGroupMap)
            .catch((err) => {throw new Error('Something Went Wrong')});
      
        setState({ ...queryData });
      };
      return searchResturantResult
}