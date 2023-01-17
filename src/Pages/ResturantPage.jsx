import { useLocation } from "react-router-dom"
import { useState,useEffect } from "react"
const ResturantPage = ()=>{

    const location= useLocation()
    const resturantID = location.state.id
    const getResturantMenu = async (signal)=>{
        const menu = await fetch(`https://www.swiggy.com/dapi/menu/v4/full?lat=32.6938264&lng=74.9062622&menuId=${resturantID}`,signal)
        const menuJson = await menu.json()
        console.log(menuJson);
    }
    useEffect(() => {
        const controller = new AbortController()
        const signal = controller.signal
        getResturantMenu(signal)

        return () => controller.abort()

    },[])

    return(
        <>
        <h1>I am resturant Page</h1>
        </>
    )
}
export default ResturantPage