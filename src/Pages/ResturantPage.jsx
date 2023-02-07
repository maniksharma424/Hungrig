import { useLocation } from "react-router-dom";
import { useState } from "react";
import RestaurantPageBanner from "./RestaurantPageBanner";
import RestaurantPageSearchbox from "./RestaurantPageSearchbox";
import useRestaurantPage from "../customHooks/useRestaurantPage";
import RestaurantPageBody from "./RestaurantPageBody";
import RestaurantPageShimmer from "./RestaurantPageShimmer";

const ResturantPage = () => {
  const [menu, setMenu] = useState([]);
  const [filteredMenu, setFilteredMenu] = useState([]);

  const location = useLocation();
  const resturantID = location.state.id;
  const resturantData = useRestaurantPage(
    resturantID,
    setMenu,
    setFilteredMenu
  );

  if (resturantData <= 0) return <RestaurantPageShimmer />;
  else
    return (
      <div className="Resturant-Page">
        <RestaurantPageBanner resturantData={resturantData} />

        <RestaurantPageSearchbox
          menu={menu}
          setFilteredMenu={setFilteredMenu}
        />

        <RestaurantPageBody
          resturantData={resturantData}
          menu={menu}
          filteredMenu={filteredMenu}
          setFilteredMenu={setFilteredMenu}
        />
      </div>
    );
};
export default ResturantPage;
