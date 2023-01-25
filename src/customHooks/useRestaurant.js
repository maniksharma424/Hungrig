import { useState, useEffect } from "react";
const useRestaurant = (Resturants,setRestaurants) => {
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    getResturants(signal, setRestaurants);

    return () => controller.abort();
    
  }, []);

  const getResturants = async (signal, setRestaurants) => {
    const resturantDataSwiggy = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=32.6938264&lng=74.9062622&offset=15&sortBy=RELEVANCE&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING',
      signal
    ).catch((err) => console.log(err));

     const resturantDataJson = await resturantDataSwiggy?.json().catch(err=>console.log(err))
    setRestaurants(resturantDataJson?.data?.cards);
  };
  return Resturants
};
export default useRestaurant;