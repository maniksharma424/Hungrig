import "../CSS/ResturantMenuItemCard.css";
import { CartItems } from "./Cart";
import { addToCart } from "../Utilities/utils";
const ResturantMenuItemCard = ({ foodItem, RestaurantData }) => {
  // console.log(RestaurantData,foodItem);

  return (
    <div className="Food-Item-Card flex justify-between items-center h-fit w-[400px] m-[20px] border-b-[1px] border-slate-500 border-opacity-50">
      <div className="Food-Item-Info  relative bottom-[20px]  w-2/3 h-1/3">
        {/* <p className="text-[15px]">{foodItem?.name}</p> */}
        {foodItem?.isVeg < 0 ? (
          <p className="text-[15px]">
            {foodItem?.name}{" "}
            <span className="text-green-600">
              <i class="fa-sharp fa-solid fa-leaf"></i>
              <i class="fa-solid fa-egg"></i>
            </span>
          </p>
        ) : (
          <p className="text-[15px]">
            {foodItem?.name}{" "}
            <span className="text-red-600">
              <i class="fa-solid fa-egg"></i>
            </span>
          </p>
        )}
        <p className="text-[15px]">₹ {foodItem?.price}</p>
        <p className="text-[12px] text-[#535665]">{foodItem?.description}</p>
      </div>
      <div className="Food-Item">
        <div
          className="Food-Item-Image bg-center bg-contain bg-no-repeat"
          style={{
            backgroundImage: `url(https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/${foodItem?.cloudinaryImageId})`,
            width: "100px",
            height: "100px",
          }}
        ></div>
        <div className="Food-Add-Btn">
          <button
            className=" bg-white border-opacity-50 border-[1px] border-slate-500 p-1 px-4 text-green-600 shadow-xl relative left-[14px] bottom-[20px]"
            onClick={() => {
              console.log("added...");
              addToCart(CartItems, {
                info: foodItem,
                restaurant: RestaurantData,
              });
              // CartItems.push({"info":foodItem,"restaurant":RestaurantData})
            }}
          >
            ADD
          </button>
        </div>
      </div>
    </div>
  );
};
export default ResturantMenuItemCard;
