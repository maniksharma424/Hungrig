import { useState, useEffect } from "react";
const useRestaurantPage = (resturantID, setMenu, setFilteredMenu) => {
  const [resturantData, setResturantData] = useState([]);

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
      `https://www.swiggy.com/dapi/menu/v4/full?lat=32.6938264&lng=74.9062622&menuId=${resturantID}`,
      signal
    )
      .then((res) => res.json())
      .catch((err) => console.log(err));
    setResturantData(response?.data);

    setMenu(Object.values(response?.data?.menu?.items));
    setFilteredMenu(Object.values(response?.data?.menu?.items));
    console.log(response.data);
  };
  return resturantData;
};
export default useRestaurantPage;
