// get more Restaurants on scroll
export const getMoreRestaurants = (
  restaurants,
  setResturants,
  showRestaurant,
  setshowRestaurant
) => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    setshowRestaurant((n) => n + 16);

    const getResturants = async () => {
      const fetchResturants = await fetch(
        `https://www.swiggy.com/dapi/restaurants/list/v5?lat=32.6938264&lng=74.9062622&offset=${showRestaurant}&sortBy=RELEVANCE&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING`
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

export const addToCart = (Dish) => {
  // is local storage empty || first order
console.log(Dish);
  if (localStorage.getItem("orders")) {
    let Orders = JSON.parse(localStorage.getItem("orders"));
    //are orders from same restaurant
    if (Orders[0]?.restaurant?.id === Dish?.restaurant?.id) {
      
      if (Orders.findIndex((item) => item.dish.id === Dish?.dish?.id) >= 0) {
        //inc qty of similar dish
        console.log('adding similar dish');
        let prevQty =Orders[Orders.findIndex((item) => item.dish.id === Dish?.dish?.id)].qty;
        let newOrder = Orders.filter((item) => item.dish.id != Dish?.dish?.id);
        newOrder.push({
          dish: Dish.dish,
          qty: prevQty + 1,
          restaurant: Dish.restaurant,
        });
        localStorage.clear();
        localStorage.setItem("orders", JSON.stringify(newOrder));
      } else {
        // similar rest diff dish
        console.log('similar rest diff dish');
        Orders.push(Dish);
        localStorage.clear();
        localStorage.setItem("orders", JSON.stringify(Orders));
      }
    } else {
      //ask to create new basket
      if (window.confirm("Start a fresh cart")) {
        console.log('created new basket');
        localStorage.clear();
        localStorage.setItem("orders", JSON.stringify([Dish]));
      } else {
        return null;
      }
    }
  } else {
    console.log('new Dish');
    localStorage.setItem("orders", JSON.stringify([Dish]));
  }
};

export const decrement = (updateItem) => {


  let prevQty = updateItem?.qty;
  console.log(updateItem?.qty);
  let CartItems = JSON.parse(localStorage.getItem("orders"));
  let newCartItems = CartItems.filter(
    (item) => item.dish.id != updateItem?.dish?.id
  );
  console.log(newCartItems);
  localStorage.clear();
  newCartItems.push({
    dish: updateItem.dish,
    qty: prevQty - 1,
    restaurant: updateItem.restaurant,
  });

  localStorage.setItem("orders", JSON.stringify(newCartItems));
};
