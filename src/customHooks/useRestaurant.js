import { useState, useEffect, useContext } from "react";
import { locationContext } from "../MyApp";
import { ShimmerThumbnail } from "react-shimmer-effects";

const useRestaurant = (resturants, setRestaurants) => {
  const [offset, setOffset] = useState(31);
  const [flag, setflag] = useState(true);

  const cordinates = useContext(locationContext);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    getResturants(signal, setRestaurants);

    return () => {
      controller.abort();
      window.onscroll = null;
    };
  }, [cordinates]);

  // getting Restaurants on homepage didMount
  const getResturants = async (signal, setRestaurants) => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const resturantDataSwiggy =  fetch(
          `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${pos?.coords?.latitude}&lng=${pos?.coords?.longitude}&offset=15&sortBy=RELEVANCE&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING`,
          signal
        )
          .then((res) => res.json())
          .catch((err) => {
            throw new Error("Something Went Wrong");
          });
    
        console.log(
          resturantDataSwiggy?.data?.cards[3]
        );
        setRestaurants([
          ...resturantDataSwiggy?.data?.cards[3],
          ...Array(12).fill(<ShimmerThumbnail height={200} width={250} />),
        ]);
      },
      (err) => {
        throw new Error("allow location to see rest near u");
      }
    );

    






    
  };

  // remove scroll listener on changing page
  const removeListener = () => {
    window.onscroll = null;
    const newArray = resturants.slice(0, -12);
    setRestaurants(newArray);
    setflag(false);
  };

  // fetch more restaurants on scroll
  const fetchMoreRestaurants = (
    setRestaurants,
    offset,
    setOffset,
    cordinates,
    removeListener
  ) => {
    if (
      window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 1200 &&
      window.innerHeight + window.scrollY < document.body.offsetHeight
    ) {
      const getResturants = async () => {
        const fetchResturants = await fetch(
          `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${
            cordinates?.latitude
          }&lng=${
            cordinates?.longitude
          }&offset=${"COVCELQ4KID4v7i0g7XUBDCnEzgD"}&sortBy=RELEVANCE&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING`
        )
          .then((res) => res.json())
          .catch((err) => {
            throw new Error("Something Went Wrong");
          });

        const moreResturants = await fetchResturants?.data?.cards[3]?.card?.card
          ?.gridElements?.infoWithStyle?.restaurants;

        if (moreResturants) {
          setRestaurants((prevItems) => [
            ...prevItems.slice(0, prevItems.length - 12),
            ...moreResturants,
            ...prevItems.slice(prevItems.length - 12),
          ]);
          setOffset(offset + 16);
        } else {
          removeListener();
        }
      };
      getResturants();
    } else null;
  };

  // throttled fetch more Restaurants
  const getMoreRestaurant = throttle(fetchMoreRestaurants, 1000);
  function throttle(fn, wait) {
    let lastCall = 0;
    return function (...args) {
      const now = Date.now();
      if (now - lastCall < wait) {
        return;
      }
      lastCall = now;
      fn(...args);
    };
  }

  // setting event listener only on component did mount
  const setEvenlistener = () => {
    if ((offset >= 31) & (flag === true)) {
      window.onscroll = () => {
        getMoreRestaurant(
          setRestaurants,
          offset,
          setOffset,
          cordinates,
          removeListener
        );
      };
    } else {
      return;
    }
  };
  setEvenlistener();
};

export default useRestaurant;
