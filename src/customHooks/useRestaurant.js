import { useState, useEffect, useContext } from "react";

import { ShimmerThumbnail } from "react-shimmer-effects";

const useRestaurant = (resturants, setRestaurants, lat, lon) => {
  const [offset, setOffset] = useState(31);
  const [flag, setflag] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    getResturants(signal, setRestaurants);

    return () => {
      controller.abort();
      window.onscroll = null;
    };
  }, [lat, lon]);

  // getting Restaurants on homepage didMount
  const getResturants = async (signal, setRestaurants) => {
    const resturantDataSwiggy = await fetch(
      `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${lon}&offset=15&sortBy=RELEVANCE&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING`,
      signal
    )
      .then((res) => res.json())
      .catch((err) => {
        throw new Error("Something Went Wrong");
      });

    console.log(
      resturantDataSwiggy?.data?.cards[5]?.card?.card?.gridElements
        ?.infoWithStyle?.restaurants
    );
    setRestaurants([
      ...resturantDataSwiggy?.data?.cards[5]?.card?.card?.gridElements
        ?.infoWithStyle?.restaurants,
      ...Array(12).fill(<ShimmerThumbnail height={200} width={250} />),
    ]);
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
    lat,
    lon,
    removeListener
  ) => {
    if (
      window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 1200 &&
      window.innerHeight + window.scrollY < document.body.offsetHeight
    ) {
      const getResturants = async () => {
        const fetchResturants = await fetch(
          `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${lon}&offset=${"COVCELQ4KID4v7i0g7XUBDCnEzgD"}&sortBy=RELEVANCE&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING`
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
          lat,
          lon,
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
