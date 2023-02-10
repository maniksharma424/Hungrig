import { useEffect, useContext } from "react";
import { locationContext } from "../Utilities/MyApp";
import { ShimmerThumbnail } from "react-shimmer-effects";
import { getMoreRestaurant } from "../Utilities/helpers";

const useRestaurant = (
  Resturants,
  setRestaurants,
  showRestaurant,
  setShowRestaurant
) => {
  const cordinates = useContext(locationContext);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    getResturants(signal, setRestaurants);
    window.addEventListener("scroll",()=>{
      getMoreRestaurant(
        Resturants,
        setRestaurants,
        showRestaurant,
        setShowRestaurant,
        cordinates
      )}
    );

    return () => {
      controller.abort();
      window.removeEventListener('scroll',()=>{
        getMoreRestaurant()
      })
    };
  }, [cordinates]);

  const getResturants = async (signal, setRestaurants) => {
    console.log(cordinates);

    const resturantDataSwiggy = await fetch(
      `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${cordinates.latitude}&lng=${cordinates.longitude}&offset=15&sortBy=RELEVANCE&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING`,

      signal
    )
      .then((res) => res.json())
      .catch((err) => console.log(err));

    setRestaurants([
      ...resturantDataSwiggy?.data?.cards,
      ...Array(6).fill(<ShimmerThumbnail height={200} width={250} />),
    ]);
  };
  return Resturants;
};
export default useRestaurant;
