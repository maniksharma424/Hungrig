import { IMAGE_URL } from "../Utilities/constants";
import { addToCart } from "../Utilities/utils";
const ResturantMenuItemCard = ({ foodItem, RestaurantData }) => {

  return (
    <div className="Food-Item-Card flex justify-between items-center h-fit w-[450px] relative left-[50px]  m-[20px] border-b-[1px] border-slate-500 border-opacity-50">
      <div className="Food-Item-Info  relative bottom-[20px]  w-2/3 h-1/3">
        {foodItem?.isVeg === 1 ? (
          <p className="text-[15px]">
            {foodItem?.name}{" "}
            <span className="text-green-600">
              <i class="fa-sharp fa-solid fa-leaf"></i>
            </span>
          </p>
        ) : (
          <p className="text-[15px]">
            {foodItem?.name} 
            <span className="text-red-600">
              {'  '}<i class="fa-solid fa-egg"></i>
            </span>
          </p>
        )}
        <p className="text-[15px]">₹ {foodItem?.price <=0 ? 100:foodItem?.price/100}</p>
        <p className="text-[12px] text-[#535665]">{foodItem?.description}</p>
      </div>
      <div className="Food-Item">
        <div
          className="Food-Item-Image" >
          <img className="rounded-[6px] w-[100px] h-[90px]  bg-center bg-contain bg-no-repeat" src={IMAGE_URL+ foodItem?.cloudinaryImageId}/>
        </div>
        <div className="Food-Add-Btn">
          <button
            className=" bg-white border-opacity-50 border-[1px] border-slate-500 p-1 px-4 text-green-600 shadow-xl relative left-[14px] bottom-[20px]"
            onClick={() => {
              console.log("added...");
              addToCart({
                info: foodItem,
                restaurant: RestaurantData
              });
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
