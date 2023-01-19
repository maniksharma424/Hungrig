import "../CSS/ResturantMenuItemCard.css";
import { CartItems } from "./Cart";
import { addToCart } from "../Utilities/utils";
const ResturantMenuItemCard = ({ foodItem, RestaurantData }) => {
  // console.log(RestaurantData,foodItem);

  return (
    <div className="Food-Item-Card">
      <div className="Food-Item-Info">
        <p>{foodItem?.name}</p>
        <p>{foodItem?.price}</p>
        <p>{foodItem?.description}</p>
      </div>
      <div className="Food-Item">
        <div
          className="Food-Item-Image"
          style={{
            backgroundImage: `url(https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/${foodItem?.cloudinaryImageId})`,
            width: "100px",
            height: "100px",
          }}
        ></div>
        <div className="Food-Add-Btn">
          <button
            onClick={() => {
              console.log("added...");
              addToCart(CartItems, {
                info: foodItem,
                restaurant: RestaurantData,
              });
              // CartItems.push({"info":foodItem,"restaurant":RestaurantData})
            }}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};
export default ResturantMenuItemCard;
