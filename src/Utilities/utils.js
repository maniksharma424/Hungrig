
// get searchpage data / search resturants amd dishes data

const searchResturants = async (text, setState) => {
  const similarresturants = await fetch(
    `https://www.swiggy.com/dapi/restaurants/search/suggest?lat=32.681881&lng=74.906294&str=${text}&trackingId=null`
  )
    .then((res) => res.json())
    .catch((res) => console.log(res));
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
export const getSearchedResturants = debounce(searchResturants,500);

// get QueryData(DishName or Resturant Name) Across All resturants Ans Dishes
// export const getQueryData = async (query, metaData, setState) => {
//   const queryData =
//     await fetch(`https://www.swiggy.com/dapi/restaurants/search/v3?lat=32.681881&lng=74.906294&str=${query}&trackingId=null&submitAction=SUGGESTION&metaData=${metaData}
//   `)
//       .then((res) => res.json())
//       .then((res) => res?.data?.cards[1]?.groupedCard?.cardGroupMap)
//       .catch((err) => console.log(err));

//   console.log({ ...queryData });

//   setState({ ...queryData });
// };





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

// add item to cart
export const addToCart = (Item) => {
let cart = []
// alreday items in cart
if(localStorage.getItem('cartItems')){
  cart = JSON.parse(localStorage.getItem('cartItems'))
  cart.map(item=>{
    // are items from same restaurants
    if(item?.restaurant?.id === Item?.restaurant?.id){
    cart?.push(Item)
    localStorage.clear()
    localStorage.setItem('cartItems',JSON.stringify(cart))
  }
  // items from different restaurants
  else{
    if(window.confirm('Start a fresh cart')){
      localStorage.clear()
      let newCart =  []
      newCart?.push(Item)
      localStorage.setItem('cartItems',JSON.stringify(newCart))
    }
    else{
      return null
    }
  }})
}
//empty cart add item
else{
  cart.push(Item)
  localStorage.setItem('cartItems',JSON.stringify(cart))
}
};

// get Avg RAting
export const getAvgRating = ()=>{
  return(
    <>
    </>
  )
}