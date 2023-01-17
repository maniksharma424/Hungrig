export const CartItems = []
import {useState,useRef} from "react"

export const Cart = ()=>{
const [counter ,setCounter] = useState(1)
const elementRef = useRef(counter)
fetch(' https://www.swiggy.com/dapi/restaurants/list/v5?lat=32.6938264&lng=74.9062622&offset=143&sortBy=RELEVANCE&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING').then(data=>data.json()).then(data=>console.log(data.data.cards))
console.log("Cart-re-rendered")
// console.log(elementRef.current)
    return (
        <>
       <p>hiii am cart</p>
        </>
    )
}