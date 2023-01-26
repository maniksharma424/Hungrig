// get searchpage data / search resturants amd dishes data

import { useState } from "react";

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

// add item to cart
// export const addToCart = (Item) => {
//   const[cart,setCart] = useState([])
 
//   // alreday items in cart
//   if (localStorage.getItem("cartItems")) {
//     setCart(JSON.parse(localStorage.getItem("cartItems")));
//     // are items from same restaurants
//     if (cart[0]?.restaurant?.id === Item?.restaurant?.id) {        
//     // if same item added again
//           //inc val
//       if(cart.filter(item=>item?.info?.id === Item.info.id))
//       {
        
//          setCart(cart.filter(item=>item.info.id !== Item.info.id))
//           setCart(...cart,{"info":Item?.info,"retaurant":Item?.restaurant,"value":Item?.value+1})
//           localStorage.clear();
//           localStorage.setItem("cartItems", JSON.stringify(cart));
//         }
//         // different item from same restaurant
//         else{
//           // cart?.push(Item);
//           setCart(...cart,Item)
//           localStorage.clear();
//           localStorage.setItem("cartItems", JSON.stringify(cart));
//         }
//     }
//     // items from different restaurants
//     else {
//       //start fresh cart
//       console.log(Item.restaurant.id);
//       if (window.confirm("Start a fresh cart")) {
//         localStorage.clear();
//         localStorage.setItem("cartItems", JSON.stringify([Item]));
//       } else {
//         return null;
//       }
//     }
//   }
//   //empty cart add item
//   else {
    
//     // cart.push(Item);
//     setCart(Item)
//     localStorage.setItem("cartItems", JSON.stringify(cart));
//   }
// };

//-------------------------------------------------------------------------------
//
