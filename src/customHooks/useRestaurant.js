import { useState, useEffect, useContext } from "react";
import { locationContext } from "../Utilities/MyApp";
import { ShimmerThumbnail } from "react-shimmer-effects";

const useRestaurant = (Resturants, setRestaurants,ab) => {
  const cordinates = useContext(locationContext);
  
  useEffect(() => {
    
    window.addEventListener('scroll',ab)
    const controller = new AbortController();
    const signal = controller.signal;
    getResturants(signal, setRestaurants);

    return () => {controller.abort()
      console.log('homepage removed');
    window.removeEventListener('scroll',ab)
    }
  }, [cordinates]);

  const getResturants = async (signal, setRestaurants) => {
    console.log(cordinates);

    const resturantDataSwiggy = await fetch(
      `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${cordinates.latitude}&lng=${cordinates.longitude}&page_type=DESKTOP_SEE_ALL_LISTING`,
      signal
    )
      .then((res) => res.json())
      .catch((err) => console.log(err));

    setRestaurants([...resturantDataSwiggy?.data?.cards,...Array(12).fill(<ShimmerThumbnail height={200} width={250}/>)]);
  };
  return Resturants;
};
export default useRestaurant;
