import { useLocation } from "react-router-dom";
import { useState } from "react";
import RestaurantPageBanner from "./RestaurantPageBanner";

import useRestaurantPage from "../customHooks/useRestaurantPage";
import RestaurantPageBody from "./RestaurantPageBody";
import RestaurantPageShimmer from "./RestaurantPageShimmer";
import { useSelector } from "react-redux";
import RestaurantPageSearchbox from "./RestaurantPageSearchbox";
const ResturantPage = () => {
  const [menu, setMenu] = useState([]);
  const [filteredMenu, setFilteredMenu] = useState([]);
  scrollTo(0, 0);
  const location = useLocation();
  const resturantID = location.state.id;

  const { lat, lon } = useSelector((store) => store.location.address);
  const resturantData = useRestaurantPage(
    resturantID,
    setMenu,
    setFilteredMenu,
    lat,
    lon
  );

  console.log(resturantData);
  if (resturantData)
    return (
      <div className="Resturant-Page">
        <RestaurantPageBanner resturantData={resturantData} />

        <RestaurantPageSearchbox
          menu={menu}
          setFilteredMenu={setFilteredMenu}
          filterMenu={filteredMenu}
        />

        <RestaurantPageBody
          resturantData={resturantData}
          menu={menu}
          filteredMenu={filteredMenu}
          setFilteredMenu={setFilteredMenu}
        />
      </div>
    );
  else return <RestaurantPageShimmer />;
};
export default ResturantPage;
