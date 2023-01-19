export const CartItems = []
import {useState,useRef} from "react"

export const Cart = ()=>{
    // fetch('https://www.swiggy.com/dapi/restaurants/search/v3?lat=32.681881&lng=74.906294&str=Dum%20Safar%20Biryani&trackingId=null&submitAction=SUGGESTION&queryUniqueId=2a1b04e7-d024-9775-4434-410cedc94951&metaData=%7B%22type%22%3A%22RESTAURANT%22%2C%22data%22%3A%7B%22parentId%22%3A351013%2C%22primaryRestaurantId%22%3A629414%2C%22cloudinaryId%22%3A%22vbo5silcc7ofyvudoind%22%2C%22brandId%22%3A351013%2C%22dishFamilyId%22%3A%22846613%22%2C%22enabled_flag%22%3A1%7D%2C%22businessCategory%22%3A%22SWIGGY_FOOD%22%2C%22displayLabel%22%3A%22Restaurant%22%7D').then(res=>res.json()).then(res=>console.log(res))
    return (
        <>
       <p>hiii am cart</p>
        </>
    )
}