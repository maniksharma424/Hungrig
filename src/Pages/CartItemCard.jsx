import React from "react";

const CartItemCard = ({ item }) => {
  return (
    <div className="Cart-Item-Card">
      <p>{item?.info?.name}</p>
      {item?.restaurant?.name ? (
        <p>{item?.restaurant?.name}</p>
      ) : (
        <p>{item?.restaurant?.info?.name}</p>
      )}
      <p>Qty:</p>
    </div>
  );
};
 
export default CartItemCard; 
