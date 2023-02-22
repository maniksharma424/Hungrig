import { useState, useEffect, useContext } from "react";
import { locationContext } from "../MyApp";
const useRestaurantPage = (resturantID, setMenu, setFilteredMenu) => {
  const [resturantData, setResturantData] = useState([]);
  const cordinates = useContext(locationContext);
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
  }, []);

  const getResturantMenu = async (
    signal,
    resturantID,
    setResturantData,
    setMenu,
    setFilteredMenu
  ) => {
    const response = await fetch(
      `https://www.swiggy.com/dapi/menu/v4/full?$lat=${cordinates?.latitude}&lng=${cordinates?.longitude}&menuId=${resturantID}`,
      signal
    )
      .then((res) => res.json())
      .catch((err) => {throw new Error('Something Went Wrong')});
    setResturantData(response?.data);

    setMenu(Object.values(response?.data?.menu?.items));
    setFilteredMenu(Object.values(response?.data?.menu?.items));

  };
  return resturantData;
};
export default useRestaurantPage;
