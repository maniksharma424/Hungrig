
//Get Resturants
export const getResturants = async (offSet,signal,setAllResturants,setFilteredResturant) =>{
  const resturantDataSwiggy = await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=32.6938264&lng=74.9062622&offset=${offSet}&sortBy=RELEVANCE&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING`,signal).catch(err=>console.log(err))

  const resturantDataJson = await resturantDataSwiggy?.json()

  setAllResturants(resturantDataJson?.data?.cards)

  setFilteredResturant(resturantDataJson?.data?.cards)
}





// get searchpage data / search resturants amd dishes data

const searchResturants  =  async (text,setState)=>{
const similarresturants = await fetch(`https://www.swiggy.com/dapi/restaurants/search/suggest?lat=32.681881&lng=74.906294&str=${text}&trackingId=null`).then(res=>res.json()).catch(res=>console.log(res))
setState(similarresturants?.data?.suggestions)
}
const debounce = (callback,delay)=>{
  let timer

  return (...args)=>{
    clearTimeout(timer)
   timer =  setTimeout(()=>{
      callback(...args)
    },delay)
  }
}
export const getSearchedResturants = debounce(searchResturants,500)





// get QueryData(DishName or Resturant Name) Across All resturants Ans Dishes
export const getQueryData = async(query,metaData,setState)=>{
   

  const queryData = await fetch(`https://www.swiggy.com/dapi/restaurants/search/v3?lat=32.681881&lng=74.906294&str=${query}&trackingId=null&submitAction=SUGGESTION&metaData=${metaData}
  `).then(res=>res.json()).then(res=>res?.data?.cards[1]?.groupedCard?.cardGroupMap).catch(err=>console.log(err))


   console.log({...queryData});

   setState({...queryData})

}




// Get More Resturants On Scroll
   export  const getMoreResturants = (offSet,setOffSet,allresturants,setAllResturants,filteredResturant,setFilteredResturant)=>{
          setOffSet(n=>n+16)
              const getResturants = async()=>{
                const fetchResturants = await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=32.6938264&lng=74.9062622&offset=${offSet}&sortBy=RELEVANCE&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING`).then(res=>res.json()).catch(err=>console.log(err))
  
                  const moreResturants = await fetchResturants.data.cards
                  if(moreResturants){
                    setAllResturants([...allresturants,...moreResturants])
                    setFilteredResturant([...filteredResturant,...moreResturants])
                  }
                  else return null
              }
              getResturants()
        
      };




//get Menu of Resturant->ResturantPageData
export const getResturantMenu = async (signal,resturantID,setResturantData,setMenu,setFilteredMenu)=>{
  const response = await fetch(`https://www.swiggy.com/dapi/menu/v4/full?lat=32.6938264&lng=74.9062622&menuId=${resturantID}`,signal).then(res=>res.json()).catch(err=>console.log(err))
  setResturantData(response.data)

  setMenu(Object.values(response.data.menu.items))
  setFilteredMenu(Object.values(response.data.menu.items))
  console.log(response.data);

}



//handle SearchResult for menuItems in resturantPage
export const handleFilterMenuItems = (DishName,state,setState)=>{
  setState(state.filter(resturant=>{

    if (resturant.name.toLowerCase().includes(DishName.toLowerCase())) return resturant
    
    if (DishName === '') return state
    
    else return null
    }))

}



// filter Menu By Category
export const  handleCategoryMenu = (categoryName,state,setState)=>{
    setState(state.filter(item=>item.category === categoryName))
}




// filter Veg Menu Items
export const handleFilterVegItems = (isVeg,state,setState)=>{
      isVeg ?(setState(state.filter(item=>item.isVeg>=1))):setState(state)
}
      


// add item to cart 
export const addToCart = (Cart,Item)=>{
  let cartItems = []
  if(JSON.parse(localStorage.getItem('cartItems'))){
     cartItems = JSON.parse(localStorage.getItem('cartItems'))
     cartItems.map(cartItem=>{
      (cartItem.restaurant.id === Item.restaurant.id) ?
      Cart.push(Item):
      alert('you want to add items from another restaurant')
      })
    }
else {
  Cart.push(Item)
}
  localStorage.setItem("cartItems",JSON.stringify(Cart))

}