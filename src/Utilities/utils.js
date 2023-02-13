// get searchpage data / search resturants amd dishes data



const searchResturants = async (text, setState) => {
  const similarresturants = await fetch(
    `https://www.swiggy.com/dapi/restaurants/search/suggest?lat=32.681881&lng=74.906294&str=${text}&trackingId=null`
  )
    .then((res) => res.json())
    .catch((res) => {throw new Error('Something Went Wrong')});
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
export const handleFilterMenuItems = (DishName, state, setState) => {
  setState(
    state.filter((resturant) => {
      if (resturant.name.toLowerCase().includes(DishName.toLowerCase()))
        return resturant;

      if (DishName === "") return state;
      else return null;
    })
  );
};

// filter Menu By Category
export const handleCategoryMenu = (categoryName, state, setState) => {
  setState(state.filter((item) => item.category === categoryName));
};

// filter Veg Menu Items
export const handleFilterVegItems = (isVeg, state, setState) => {
  isVeg ? setState(state.filter((item) => item.isVeg >= 1)) : setState(state);
};

//-------------------------------------------------------------------------------
//

