
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