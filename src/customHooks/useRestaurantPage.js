import { useState, useEffect, useContext } from "react";
import { locationContext } from "../MyApp";
const useRestaurantPage = (resturantID, setMenu, setFilteredMenu) => {
  const [resturantData, setResturantData] = useState([]);
  const cordinates = useContext(locationContext);
  console.log(cordinates);
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    getResturantMenu(
      signal,
      resturantID,
      setResturantData,
      setMenu,
      setFilteredMenu
    );

    return () => controller.abort();
  }, [cordinates]);

  const getResturantMenu = async (
    signal,
    resturantID,
    setResturantData,
    setMenu,
    setFilteredMenu
  ) => {
    const response = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${cordinates?.latitude}&lng=${cordinates?.longitude}&restaurantId=${resturantID}&submitAction=ENTER`,
      signal
    )
      .then((res) => res.json())
      .catch((err) => {
        throw new Error("Something Went Wrong");
      });
    setResturantData(response?.data?.cards[0]?.card?.card?.info);
    console.log(
      response?.data?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR.cards
    );

    // setMenu(Object.values(response?.data?.menu?.items));
    // setFilteredMenu(Object.values(response?.data?.menu?.items));
    setFilteredMenu(
      response?.data?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR.cards
    );
  };
  return resturantData;
};
export default useRestaurantPage;
