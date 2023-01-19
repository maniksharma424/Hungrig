import CartItemCard from "./CartItemCard" 
import {useState,useRef} from "react"

export const CartItems = []
export const Cart = ()=>{
    const cartItems = JSON.parse(localStorage.getItem("cartItems"))
    
    console.log(cartItems);

    return (
        <>
        <h1>Cart</h1>
        <ul>
        {cartItems?.map((item,index)=>{return <li key={index}><CartItemCard  item={item}/></li>})}
        </ul>
        <h5>chckout details ....</h5>
        </>
    )
}