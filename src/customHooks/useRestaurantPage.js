import { useState, useEffect, useContext } from "react";
import { locationContext } from "../MyApp";
const useRestaurantPage = (resturantID, setMenu, setFilteredMenu) => {
  const [resturantData, setResturantData] = useState(null);
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
      console.log(response);
    setResturantData(response?.data?.cards[0]?.card?.card?.info);
    const length = response?.data?.cards.length
    console.log(
      response?.data?.cards[length-1]?.groupedCard?.cardGroupMap?.REGULAR.cards
    );


      console.log(length);
    setMenu(
      response?.data?.cards[length-1]?.groupedCard?.cardGroupMap?.REGULAR.cards
    );
    // setFilteredMenu(
    //   response?.data?.cards[length-1]?.groupedCard?.cardGroupMap?.REGULAR.cards.find(item=>item?.card?.card.title === "Recommended")
    // );
    setFilteredMenu(
      response?.data?.cards[length-1]?.groupedCard?.cardGroupMap?.REGULAR.cards[1]
    );
   
  };
  return resturantData;
};
export default useRestaurantPage;
