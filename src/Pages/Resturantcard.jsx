import "../CSS/ResturantsCards.css"
import {CartItems} from "./Cart.jsx"
import {Link} from 'react-router-dom'

let count = 0
let countTwo = -100;
export const ResturantCard = ({resturant}) => {

  return (
    <>
     <li key={count++} className=" Resturant-Card">
    <Link state={{"id":resturant?.data?.data?.id}} to="/RestaurantPage">
         <div className="Resturant-Image" style={{"backgroundImage":`url(https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${resturant?.data?.data?.cloudinaryImageId})`}}></div>
        <div className="Resturant-data">
        <p>{resturant?.data?.data.name}</p>
        <div className="Resturant-Cuisines">
          {resturant?.data?.data?.cuisines.map(item=><p key={countTwo++}>{item}</p>)}
          </div>
          <div className="Resturant-Delivery-Info">
        <span> <i className="fa-regular fa-star fa-small"></i> {resturant?.data?.data?.avgRating}</span>
        <span>{resturant?.data?.data?.sla?.deliveryTime} Min</span>
        <span>{resturant?.data?.data?.costForTwo}</span>
                </div>
                  
                 </div>
      </Link>
      </li>
    </>
  )
}
