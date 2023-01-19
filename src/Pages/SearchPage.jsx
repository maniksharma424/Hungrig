import { useState,useEffect } from "react"
import { getSearchedResturants,getQueryData } from "../Utilities/utils"
import SuggestedResturantCard from "./SuggestedResturantCard"
import SearchResultResturantCard from "./SearchResultResturantCard"
import SimilarRestaurnts from "./SimilarRestaurnts"

const SearchPage = ()=>{
    const [searchText,setSearchText]= useState('')
    const[suggestedResturants,setSuggestedResturants] = useState([])
    const[searchResturantResult,setSearchResturantResult] = useState([])
    
    return(
        <>
        <h1>i am search page</h1>
            <div className="Resturant-Search-Page">
                <input value={searchText} placeholder='search for resturants and food' onChange={(e)=>{
                    setSearchText(e.target.value)
                    setSearchResturantResult([])

                    getSearchedResturants(e.target.value,setSuggestedResturants)
                }} />
                <button onClick={()=>{setSearchText('')
                        setSuggestedResturants([])
                }}>x</button>
            </div>

            { searchText === '' ?
            (<h1>popular cuisines</h1>):
            (searchResturantResult?.length <=0 ?
                (<div className="Suggsted-Resturants">
                        <ul>
                            {suggestedResturants?.map((item,index)=>
                                <li 
                                onClick={()=>{getQueryData(item?.text,item?.metadata,setSearchResturantResult)}}
                                    key={index}>
                                    {<SuggestedResturantCard foodItem={item}/>}
                                </li>
                            )}
                        </ul>
                </div>
                )
            :
            (
                <div className="Searched-Resturant-Dishes">
                    <h1>results</h1>
                    <ul>
                        {searchResturantResult?.DISH ?
                        (searchResturantResult.DISH.cards.map((dish,index)=>{return <li key={index}><SearchResultResturantCard Dish={dish}/></li>})):
                        (
                        <ul className="Searched-Restaurant">
                            <li>{<SearchResultResturantCard 
                            Restaurant={searchResturantResult?.RESTAURANT?.cards[0]}/>}</li>
                            <ul className="Similar-Restaurants">
                                {searchResturantResult?.RESTAURANT?.cards[1]?.card?.card?.restaurants.map((restaurant,index)=>{return <li key={index}><SimilarRestaurnts Restaurant={restaurant}/></li>})}
                            </ul>
                        </ul>
                            
                        )
                        }
                    </ul>
                </div>
            )
            )
            }
            
        </>
    )
}
export default SearchPage




