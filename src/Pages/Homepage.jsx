import React, { useEffect } from 'react'
import Header from "../Pages/Header"
import Body from "./Body"
import { useState } from "react"
import { ResturantContext } from '../Contexts/ContextResturant'
export const Homepage = () => {
    const [allresturants,setAllResturants] = useState([])
    const[filteredResturant,setFilteredResturant] = useState(allresturants)
    const[offSet,setOffSet] = useState(15)
    
    const getResturants = async (signal) =>{
        const resturantDataSwiggy = await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=32.6938264&lng=74.9062622&offset=${offSet}&sortBy=RELEVANCE&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING`,signal).catch(err=>console.log(err))

        const resturantDataJson = await resturantDataSwiggy.json()

        setAllResturants(resturantDataJson.data.cards)

        setFilteredResturant(resturantDataJson.data.cards)
    }

    useEffect(()=>{
      const controller = new AbortController()
      const signal = controller.signal
      getResturants(signal)


      return () => controller.abort()
    },[])
      

    //Searchfilter
    const handleFilterResturants = (Name) =>{

    setFilteredResturant(allresturants.filter(resturant=>{

    if (resturant.data.data.name.toLowerCase().includes(Name.toLowerCase())) return resturant
    
    if (Name === '') return allresturants
    
    else return null
    }))}
    // on bottom get more resturants
    window.onscroll = function() {
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        setOffSet(n=>n+16)
            const GettingMoreData = async()=>{
              const getMoreData = await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=32.6938264&lng=74.9062622&offset=${offSet}&sortBy=RELEVANCE&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING`).catch(err=>console.log(err))

                const getMoreDataJSON = await getMoreData.json()

                const originalData = getMoreDataJSON.data.cards
                if(getMoreDataJSON.data.cards){

                  console.log(originalData)
                  setAllResturants([...allresturants,...originalData])
                  setFilteredResturant([...filteredResturant,...originalData])
                }
                else return null
            }
            GettingMoreData()
      }
    };


  return (
    <>
    <ResturantContext.Provider value={filteredResturant}>
     <Body filterResturants={handleFilterResturants} />
    </ResturantContext.Provider>
    </>
  )
}
