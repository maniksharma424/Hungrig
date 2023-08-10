// get searchpage data / search resturants amd dishes data

const searchResturants = async (text, setState,lat,lon) => {
  const similarresturants = await fetch(
    `https://www.swiggy.com/dapi/restaurants/search/suggest?lat=${lat}&lng=${lon}&str=${text}&trackingId=null`
  )
    .then((res) => res.json())
    .catch((res) => {
      throw new Error("Something Went Wrong");
    });
  setState(similarresturants?.data?.suggestions);
};
const debounce = (callback, delay) => {
  let timer;

  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback(...args);
    }, delay);
  };
};
export const getSearchedResturants = debounce(searchResturants, 500);

//-------------------------------------------------------------------------------
//

//handle SearchResult for menuItems in resturantPage
export const handleFilterMenuItems = (DishName, state, Category, setState) => {
  // setState(
  //   state.filter((resturant) => {
  //     if (resturant.name.toLowerCase().includes(DishName.toLowerCase()))
  //       return resturant;

  //     if (DishName === "") return state;
  //     else return null;
  //   })
  // );
  const currentCategoryMenu = state.find(
    (item) => item?.card?.card?.title === Category
  );
  console.log(currentCategoryMenu);


  // currentCategoryMenu?.card?.card.itemCards ?
  //  setState(
  //       currentCategoryMenu?.card?.card.itemCards?.filter((item) =>
  //         item?.card?.info?.name?.toLowerCase().includes(DishName.toLowerCase())
  //       )
  //     )
  //   : setState(
  //     currentCategoryMenu?.card?.card.categories?.map((item) =>
  //     item?.itemCards?.map((item) => (
  //       item?.card?.info?.name?.toLowerCase().includes(DishName.toLowerCase()
  //     ))


       setState(
        currentCategoryMenu?.card?.card.itemCards?.filter((item) =>
          item?.card?.info?.name?.toLowerCase().includes(DishName.toLowerCase())
        )
      )
      


      
      }

// filter Menu By Category
export const handleCategoryMenu = (categoryName, state, setState) => {
  setState(state.find((item) => item?.card?.card?.title === categoryName));
};

// filter Veg Menu Items
export const handleFilterVegItems = (isVeg, state, setState) => {
  isVeg ? setState(state.filter((item) => item.isVeg >= 1)) : setState(state);
};

//-------------------------------------------------------------------------------
//
