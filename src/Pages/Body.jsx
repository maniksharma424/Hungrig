import "../CSS/ResturantsCards.css"
import{useState} from 'react'
import {useContext} from "react" 
import {ResturantContext} from "../Contexts/ContextResturant"
import {ResturantCard} from "./Resturantcard.jsx"
let i = 50
const Body = ({filterResturants})=>{
    const[searchText,setSearchText]  = useState('')
    const ResturantData = useContext(ResturantContext)

    return(
        <>
    <h1>All Resturants Near You</h1>

        <div id="Available-Resturants-window" className="Available-Resturants">
        <input placeholder="search for Resturants" value={searchText} onChange={(e)=>{
            setSearchText(e.target.value)
            filterResturants(e.target.value)}}/>
            <ul>
                {ResturantData?.map(resturant=>{
                        return(<ResturantCard key={i++} resturant={resturant}/>)
                    })
                }
            </ul>
        </div>
        </>
    )
}

export default Body