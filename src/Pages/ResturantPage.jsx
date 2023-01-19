import { useLocation } from "react-router-dom"
import "../CSS/ResturantPage.css"
import { useState,useEffect } from "react"
import { getResturantMenu,handleFilterMenuItems,handleCategoryMenu,handleFilterVegItems } from "../Utilities/utils"
import ResturantMenuItemCard from "./ResturantMenuItemCard"
let keyCount = 1
const ResturantPage = ()=>{
    const[resturantData,setResturantData] = useState([])
    const[menu,setMenu] = useState([])
    const[filteredMenu,setFilteredMenu] = useState(resturantData)
    const[searchText,setSearchText] = useState('')
    const[isVeg,setIsVeg] = useState(false)
    const location= useLocation()
    const resturantID = location.state.id

    useEffect(() => {
        const controller = new AbortController()

        const signal = controller.signal

        getResturantMenu(signal,resturantID,setResturantData,setMenu,setFilteredMenu)

        return () => controller.abort()
    },[])

    return(
        <div className="Resturant-Page">
            <div className="Resturant-banner">
                    <div className="Resturant-Image" style={{"backgroundImage":`url(https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${resturantData?.cloudinaryImageId})`,"width": "300px"}}></div>
                    <div className="Resturant-Info">
                        <p>{resturantData?.name}</p>
                         {resturantData?.cuisines?.map((item,index)=>{return <span key={index}>{item} ,</span>})}
                        <p>{resturantData?.locality}</p>
                        <span>
                            <p >{resturantData?.avgRating}</p>
                            <p >{resturantData?.sla?.slaString}</p>
                            <p >{resturantData?.costForTwoMsg}</p>
                        </span>
                    </div>
                    <div className="Resturant-Offers">
                        {resturantData?.offerMeta?.map((item,index)=>{return <p key={index}>{item.header}</p>})}
                    </div>
            </div>
                <div className="Resturant-Page-Input-Field">
                    <input value={searchText} placeholder='Search for Dishes...'
                    onChange={(e)=>{ setSearchText(e.target.value)
                        handleFilterMenuItems(e.target.value,menu,setFilteredMenu)}}
                    type='text'/>
                    <label >Veg Only
                    <input value={isVeg} onChange={
                        (e)=>{setIsVeg(e.target.value)
                        handleFilterVegItems(e.target.checked,menu,setFilteredMenu)
                        }} type='checkbox'/>
                    </label>
                </div>
            <div className="Resturant-Menu-Body">
                <div className="Resturant-Categories">
                        {resturantData?.menu?.widgets?.map(item=>
                        item.type === "category" ? <button key={item.id} onClick={(e)=>{
                        handleCategoryMenu(e.nativeEvent.path[0].innerText,menu,setFilteredMenu)
                            }}>{item.name}</button>:null)}
                </div>
                <div className="Resturant-Menu-Items">
                        {filteredMenu.map(item=><ResturantMenuItemCard key={item.id}
                         foodItem={item} RestaurantData={resturantData}/>)}
                </div>
            </div>

        </div>
    )
}
export default ResturantPage