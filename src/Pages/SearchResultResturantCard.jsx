import React from 'react'
import "../CSS/SearchResultResturantAndDishCard.css"


const SearchResultResturantCard = ({Dish,Restaurant}) => {
  


if (Dish) return (  
                    <div className='Search-Result-Dish-Card'>
                        <div className="Search-Result-Dish-Info">
                          <p>by {Dish?.card?.card?.restaurant?.info?.name}</p>
                          <p><span>{Dish?.card?.card?.restaurant?.info?.avgRating}</span>  <span>{Dish?.card?.card?.restaurant?.info?.sla?.deliveryTime} Min</span></p>
                          <p></p>
                          <p>{Dish?.card?.card?.info?.name}</p>
                          <p>₹{Dish?.card?.card?.info?.price}</p>
                          <p>{Dish?.card?.card?.info?.description}</p>
                        </div>
                        <div className="Search-Result-Dish-Add-Cart">
                          <div className="Search-Result-Dish-Image" style={{"backgroundImage":`url(https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${Dish?.card?.card?.info?.imageId})`,"height":"150px","width":"150px"}}>
                          </div>
                          <button>Add</button>
                        </div>
                    </div>
                        
                  )
if(Restaurant) return (
                        <div className="Search-Result-Restaurant-Card">
                            <div className="Search-Result-Restaurant">
                              <div className="Search-Result-Restaurant-Image" style={{"backgroundImage":`url(https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${Restaurant?.card?.card?.info?.cloudinaryImageId})`,"height":"150px","width":"150px"}}></div>
                                <p>{Restaurant?.card?.card?.info?.aggregatedDiscountInfo.header}</p>
                            </div>
                            <div className="Search-Result-Restaurant-info">
                            <p>{Restaurant?.card?.card?.info?.name}</p>
                            <p><span>{Restaurant?.card?.card?.info?.avgRating}</span><span>{Restaurant?.card?.card?.info?.sla?.deliveryTime}</span><span>{Restaurant?.card?.card?.info?.costForTwoMessage}</span></p>
                            <p>{Restaurant?.card?.card?.info?.cuisines.map((cuisine,index)=>{return <span key={index}>{cuisine},</span>})}</p>
                            </div>
                        </div>

                      )
else return null


    
  
}

export default SearchResultResturantCard