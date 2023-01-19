import React from 'react'
import { Link } from 'react-router-dom'

const SimilarRestaurnts = ({Restaurant}) => {
    
  return (
    <Link to="/RestaurantPage" state={{"id":Restaurant?.info?.id}}>
     <div className="Search-Result-Restaurant-Card">
                            <div className="Search-Result-Restaurant">
                              <div className="Search-Result-Restaurant-Image" style={{"backgroundImage":`url(https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${Restaurant?.info?.cloudinaryImageId})`,"height":"150px","width":"150px"}}></div>
                                <p>{Restaurant?.info?.aggregatedDiscountInfo.header}</p>
                            </div>
                            <div className="Search-Result-Restaurant-info">
                            <p>{Restaurant?.info?.name}</p>
                            <p><span>{Restaurant?.info?.avgRating}</span><span>{Restaurant?.info?.sla?.deliveryTime}</span><span>{Restaurant?.info?.costForTwoMessage}</span></p>
                            <p>{Restaurant?.info?.cuisines.map((cuisine,index)=>{return <span key={index}>{cuisine},</span>})}</p>
                            </div>
                        </div>
    </Link>
  )
}

export default SimilarRestaurnts