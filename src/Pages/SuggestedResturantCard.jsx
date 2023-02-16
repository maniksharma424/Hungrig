import { Link } from "react-router-dom";
import { IMAGE_URL } from "../Utilities/constants";


const SuggestedResturantCard = ({ foodItem }) => {
  return (
    <>
    <Link state={{item:foodItem}} to='/searchResults' >
      <div className="Suggsted-Item hover:cursor-pointer flex justify-start items-center px-5  my-[15px] ">
        <div className="Suggested-Item-Image ">
          <img
            className="w-[65px] h-[60px] rounded-md bg-contain bg-no-repeat bg-center"
            src={IMAGE_URL+ foodItem?.cloudinaryId}
            />
        </div>
        <div className="Suggested-Item-Info ml-5 ">
          <p className="text-[15px]">{foodItem?.text}</p>
          <p className="text-[10px] decoration-[#cacfe9]">
            {foodItem?.type.toLowerCase()}
          </p>
        </div>
      </div>
            </Link>
    </>
  );
};
export default SuggestedResturantCard;
// review
