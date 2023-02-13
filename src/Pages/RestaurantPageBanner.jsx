import { IMAGE_URL } from '../Utilities/constants';


const RestaurantPageBanner = ({resturantData}) => {

   return (
    <div className="Resturant-banner sticky top-0 z-20  bg-[#171a29] px-12 py-12 h-245  ">
      <div className='flex justify-around items-center px-16'>

      
        <div className="Resturant-Image">
          <img className='w-[230px] h-[135px] bg-centre bg-contain bg-no-repeat' src={IMAGE_URL+resturantData?.cloudinaryImageId}/>
        </div>
        <div className="Resturant-Info relative h-[145px] flex flex-col justify-between right-[60px] text-white ">
          <p className=" text-[25px]">{resturantData?.name}</p>
          {resturantData?.cuisines?.map((item, index) => {
            return (
              <span className="text-[13px] text-[#686b78]" key={index}>
                {item}{" "}
              </span>
            );
          })}
          <p className="text-[13px] text-[#686b78]">
            {resturantData?.locality}
          </p>
          <ul className="flex   justify-start items-center w-[350px] h-[60px]">
            {resturantData?.avgRating >= 2.5 ? (
              <li className="mr-11 px-2 text-[18px] relative  right-[5px]">
                {" "}
                <i className="fa-regular fa-star fa-small"></i>{" "}
                {resturantData?.avgRating}
                <p className="text-[10px] text-[#686b78]">Rating</p>
              </li>
            ) : (
              <li className="mr-11 px-2">
                <p>
                  <i className="fa-regular fa-star fa-small"></i>
                </p>
                <p className="text-xs text-[#686b78]"> --too few Rating-</p>
              </li>
            )}

            <li className="mr-11 px-2">
              <p>{resturantData?.sla?.deliveryTime} Mins</p>
              <p className="text-[10px] text-[#686b78]">Delivery Time</p>
            </li>
            <li className="mr-11 px-2">
              ₹ {resturantData?.costForTwo/100}
              <p className="text-[10px] text-[#686b78]">Cost for two</p>
            </li>
          </ul>
        </div>
        <div className="Resturant-Offers  text-[white]">
          <fieldset className="border-[1px] w-[340px] h-[145px]">
            <legend className="text-[18px] p-2">OFFERS</legend>
            {resturantData?.aggregatedDiscountInfoV2?.descriptionList?.map(
              (item, index) => {
                return (
                  <p className="p-1 px-2 text-[14px]" key={index}>
                    <i class="fa-solid fa-tags fa-lg"></i> {item.meta}
                  </p>
                );
              }
            )}
          </fieldset>
        </div>
        </div>
      </div>
  )
}

export default RestaurantPageBanner