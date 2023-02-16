import { useState } from 'react';
import { handleFilterMenuItems,handleFilterVegItems } from '../Utilities/utils';

const RestaurantPageSearchbox = ({menu,setFilteredMenu}) => {
    const [searchText, setSearchText] = useState("");
    const [isVeg, setIsVeg] = useState(false);

  return (
    <div className="Resturant-Page-Input-Field sticky    w-[530px] z-30 top-[255px] left-[405px] bottom-[32px] flex justify-between p-2 text-[white]">
    <label className="bg-white p-4 px-8 flex justify-start items-center shadow-xl text-[black]  ">
      <i class="fa-solid fa-magnifying-glass fa-lg relative right-[10px]"></i>

      <input
        className="  bg-[white] w-[260px]"
        value={searchText}
        placeholder="Search for Dishes..."
        onChange={(e) => {
          setSearchText(e.target.value);
          handleFilterMenuItems(e.target.value, menu, setFilteredMenu);
        }}
        type="text"
      />
    </label>
    <label className="bg-white flex justify-center items-center text-black p-2 px-4 shadow-xl">
      Veg Only
      <input
        className="m-2 w-[20px] h-[20px]"
        value={isVeg}
        onChange={(e) => {
          setIsVeg(e.target.value);
          handleFilterVegItems(e.target.checked, menu, setFilteredMenu);
        }}
        type="checkbox"
      />
    </label>
  </div>
  )
}

export default RestaurantPageSearchbox
// review
