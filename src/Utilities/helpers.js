

// get more Restaurants on scroll
// const usegetRestaurants = (
//   setRestaurants,
//   offset,
//   setOffset,
//   cordinates,
//   removeListener,
// ) => {

//   if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 600) {
    
//     console.log("on bottom");
//     console.log(cordinates);
//   console.log(offset);
    

//     const getResturants = async () => {
//       // this is updating branch in master branch cordinates are added to fetch request
//       const fetchResturants = await fetch(
//         `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${cordinates?.latitude}&lng=${cordinates?.longitude}&offset=${offset}&sortBy=RELEVANCE&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING`
//       )
//         .then((res) => res.json())
//         .catch((err) => console.log(err));

//       const moreResturants = await fetchResturants?.data?.cards;
//       if (moreResturants) {
//        await  setRestaurants((prevItems) => [
//           ...prevItems.slice(0, prevItems.length - 12),
//           ...moreResturants,
//           ...prevItems.slice(prevItems.length - 12),
//         ]);
//        await  setOffset(offset+16);
//         console.log('setting states');
        
        
//         console.log(moreResturants);
//       } else {
            
//             removeListener()

//       }
//     };
//     getResturants();
//   } else null;
// };

// export const getMoreRestaurant = throttle(usegetRestaurants, 500);
// function throttle(fn, wait) {
//   let lastCall = 0;
//   return function (...args) {
//     const now = Date.now();
//     if (now - lastCall < wait) {
//       return;
//     }
//     lastCall = now;
//     fn(...args);
//   };
// }

// Add an item to cart

export const addToCart = (Dish) => {
  // is local storage empty || first order

  if (localStorage.getItem("orders")) {
    let Orders = JSON.parse(localStorage.getItem("orders"));
    //are orders from same restaurant
    if (Orders[0]?.restaurant?.id === Dish?.restaurant?.id) {
      if (Orders.findIndex((item) => item.dish.id === Dish?.dish?.id) >= 0) {
        //inc qty of similar dish

        let prevIndex = Orders.findIndex(
          (item) => item.dish.id === Dish?.dish?.id
        );
        let prevQty =
          Orders[Orders.findIndex((item) => item.dish.id === Dish?.dish?.id)]
            .qty;
        let newOrder = Orders.filter((item) => item.dish.id != Dish?.dish?.id);
        newOrder.splice(prevIndex, 0, {
          dish: Dish.dish,
          qty: prevQty + 1,
          restaurant: Dish.restaurant,
        });
        localStorage.clear();
        localStorage.setItem("orders", JSON.stringify(newOrder));
      } else {
        // similar rest diff dish
        console.log("similar rest diff dish");
        Orders.push(Dish);
        localStorage.clear();
        localStorage.setItem("orders", JSON.stringify(Orders));
      }
    } else {
      //ask to create new basket
      if (window.confirm("Start a fresh cart")) {
        localStorage.clear();
        localStorage.setItem("orders", JSON.stringify([Dish]));
      } else {
        return null;
      }
    }
  } else {
    localStorage.setItem("orders", JSON.stringify([Dish]));
  }
};

// Delete an item from Cart

export const decrement = (updateItem) => {
  let CartItems = JSON.parse(localStorage.getItem("orders"));
  let prevQty = updateItem?.qty;
  if (prevQty === 1) {
    let newCart = CartItems.filter(
      (item) => item.dish.id != updateItem?.dish?.id
    );
    if (newCart.length >= 1) {
      localStorage.clear();
      localStorage.setItem("orders", JSON.stringify(newCart));
    } else {
      localStorage.clear();
      console.log("local storage cleared");
    }
  } else {
    let prevIndex = CartItems.findIndex(
      (item) => item.dish.id === updateItem?.dish?.id
    );
    let newCartItems = CartItems.filter(
      (item) => item.dish.id != updateItem?.dish?.id
    );

    localStorage.clear();
    newCartItems.splice(prevIndex, 0, {
      dish: updateItem.dish,
      qty: prevQty - 1,
      restaurant: updateItem.restaurant,
    });

    localStorage.setItem("orders", JSON.stringify(newCartItems));
  }
};