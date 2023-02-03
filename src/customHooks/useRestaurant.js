import { useState, useEffect } from "react";
const useRestaurant = (Resturants, setRestaurants) => {
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    navigator.geolocation.getCurrentPosition((cordinates) => {
      getResturants(signal, setRestaurants, cordinates);
    });

    return () => controller.abort();
  }, []);

  const getResturants = async (signal, setRestaurants, cordinates) => {
    console.log(cordinates);

    const resturantDataSwiggy = await fetch(
      `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${cordinates.coords.latitude}&lng=${cordinates.coords.longitude}&offset=15&sortBy=RELEVANCE&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING`,
      signal
    ).catch((err) => console.log(err));

    const resturantDataJson = await resturantDataSwiggy
      ?.json()
      .catch((err) => console.log(err));
    setRestaurants(resturantDataJson?.data?.cards);
  };
  return Resturants;
};
export default useRestaurant;
