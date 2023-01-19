import React, { useEffect } from 'react'
import Body from "./Body"
import { handleFilterResturants,getResturants,getMoreResturants } from '../Utilities/utils'
import { useState } from "react"
import { ResturantContext } from '../Contexts/ContextResturant'

export const Homepage = () => {

    const [allresturants,setAllResturants] = useState([])
    const[filteredResturant,setFilteredResturant] = useState(allresturants)
    const[offSet,setOffSet] = useState(15)

    useEffect(()=>{
      const controller = new AbortController()
      const signal = controller.signal
      getResturants(offSet,signal,setAllResturants,setFilteredResturant)

      return () => controller.abort()
      },[])
      
      window.onscroll = function() {
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      getMoreResturants(offSet,setOffSet,allresturants,setAllResturants,filteredResturant,setFilteredResturant)
        }
      };

      const filterResturants = (searchInput)=>{
      handleFilterResturants(searchInput,allresturants,setFilteredResturant)
      }


     return (
          <>
          <ResturantContext.Provider value={filteredResturant}>
          <Body filterResturants={filterResturants} />
          </ResturantContext.Provider>
          </>
     )
}
