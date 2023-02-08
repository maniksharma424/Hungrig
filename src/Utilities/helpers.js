

// get more Restaurants on scroll
export const getRestaurants = (
  restaurants,
  setResturants,
  showRestaurant,
  setshowRestaurant,
  cordinates

) => {

  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 600) {
    console.log("on bottom");
    setshowRestaurant((n) => n + 16);

    const getResturants = async () => {
      const fetchResturants = await fetch(
        `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${cordinates.latitude}&lng=${cordinates.longitude}&offset=${showRestaurant}&sortBy=RELEVANCE&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING`
      )
        .then((res) => res.json())
        .catch((err) => console.log(err));

      const moreResturants = await fetchResturants?.data?.cards;
      if (moreResturants) {
        setResturants([...restaurants, ...moreResturants]);
        console.log(moreResturants);
      } else return null;
    };
    getResturants();
  } else null;
};

export const getMoreRestaurant = throttle(getRestaurants, 500);
function throttle(cb, delay) {
  let wait = false;
  let storedArgs = null;

  function checkStoredArgs() {
    if (storedArgs == null) {
      wait = false;
    } else {
      cb(...storedArgs);
      storedArgs = null;
      setTimeout(checkStoredArgs, delay);
    }
  }

  return (...args) => {
    if (wait) {
      storedArgs = args;
      return;
    }

    cb(...args);
    wait = true;
    setTimeout(checkStoredArgs, delay);
  };
}

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
