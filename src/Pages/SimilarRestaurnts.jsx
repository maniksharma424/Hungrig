import React from 'react'
import { Link } from 'react-router-dom'

const SimilarRestaurnts = ({Restaurant}) => {
    
  return (
    <Link to="/RestaurantPage" state={{"id":Restaurant?.info?.id}}>
     
     <div className="Search-Result-Restaurant-Card  border-[1px] w-[300px] h-[150px] flex justify-around items-center p-2 my-2 rounded-md bg-white overflow-hidden">
                            <div className="Search-Result-Restaurant">
                              <div className="Search-Result-Restaurant-Image w-[100px] ">
                                <img className='h-[80px] w-[80px] bg-contain bg-center bg-no-repeat rounded-md' src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${Restaurant?.info?.cloudinaryImageId}`} />
                              </div>
                                <p className=" bg-white border-opacity-50 border-[1px] text-[12px] font-[900] w-[55px]  px-[4px]  text-[#ed5e0e] rounded-md shadow-md relative left-[10px] bottom-[15px]">{Restaurant?.info?.aggregatedDiscountInfo.header}</p>
                            </div>
                            <div className="Search-Result-Restaurant-info w-[180px]">
                            <p className="text-[15px] font-[600] text-[#3e4152]">{Restaurant?.info?.name}</p>
                            <span className='text-[12px]'>{Restaurant?.info?.avgRating >= 4 ? (
                <span className="Rating text-white pr- pl-1 py-[3px]  text-[10px] px-[2px] p-0.5 decoration-slate-50  bg-green-600">
                  <i className="fa-regular fa-star fa-small"></i>{" "}
                  {Restaurant?.info?.avgRating}
                </span>
              ) : Restaurant?.info?.avgRating > 2.4 ? (
                <span className="Rating py-[3px] text-white pr-1 pl-1  p-0.5 text-[10px] px-[2px] bg-[#db7c38]">
                  <i className="fa-regular fa-star fa-small"></i>{" "}
                  {Restaurant?.info?.avgRating}
                </span>
              ) : (
                <span className="Rating py-[3px] text-slate-400 text-[10px] px-[2px] ">
                  <i className="fa-regular fa-star fa-small"></i>{" "}
                  {Restaurant?.info?.avgRating}
                </span>
              )}</span>{' '}
                            <span className=" text-[12px] font-[500] text-[#686b78]">{Restaurant?.info?.sla?.deliveryTime} Min{' '}</span>
                            <span>{Restaurant?.info?.costForTwoMessage}</span>
                            <p>
                            {Restaurant?.info?.cuisines.map((cuisine,index)=>{return <span className="text-[12px] text-[#686b78] font-[100]"key={index}>{cuisine},</span>})}</p>
                            </div>
                        </div>
    </Link>
  )
}

export default SimilarRestaurnts