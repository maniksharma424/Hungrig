// get more Restaurants on scroll
export const getMoreRestaurants = (
  restaurants,
  setResturants,
  showRestaurant,
  setshowRestaurant
) => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    setshowRestaurant((n) => n + 16);

    const getResturants = async () => {
      const fetchResturants = await fetch(
        `https://www.swiggy.com/dapi/restaurants/list/v5?lat=32.6938264&lng=74.9062622&offset=${showRestaurant}&sortBy=RELEVANCE&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING`
      )
        .then((res) => res.json())
        .catch((err) => console.log(err))

      const moreResturants = await fetchResturants?.data?.cards;
      if (moreResturants) {
        setResturants([...restaurants, ...moreResturants]);
        console.log(moreResturants);
      } else return null;
    };
    getResturants();
  } else null;
};

//