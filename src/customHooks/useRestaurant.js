import { useState, useEffect, useContext } from "react";
import { locationContext } from "../Utilities/MyApp";
import { ShimmerThumbnail } from "react-shimmer-effects";
// import { getMoreRestaurant } from "../Utilities/helpers";

const useRestaurant = (resturants, setRestaurants) => {
  const [offset, setOffset] = useState(31);
  const [flag, setflag] = useState(true);

  console.log("userestaurant called");
  console.log(offset);

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

  const removeListener = () => {
    console.log("sliced");
    window.onscroll = null;
    const newArray = resturants.slice(0, -12);
    setRestaurants(newArray);
    setflag(false);
  };

  const usegetRestaurants = (
    setRestaurants,
    offset,
    setOffset,
    cordinates,
    removeListener
  ) => {
    if (
      window.innerHeight + window.scrollY >=
      document.body.offsetHeight - 600
    ) {
      console.log("on bottom");
      console.log(cordinates);
      console.log(offset);

      const getResturants = async () => {
        // this is updating branch in master branch cordinates are added to fetch request
        const fetchResturants = await fetch(
          `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${cordinates?.latitude}&lng=${cordinates?.longitude}&offset=${offset}&sortBy=RELEVANCE&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING`
        )
          .then((res) => res.json())
          .catch((err) => console.log(err));

        const moreResturants = await fetchResturants?.data?.cards;
        if (moreResturants) {
          setRestaurants((prevItems) => [
            ...prevItems.slice(0, prevItems.length - 12),
            ...moreResturants,
            ...prevItems.slice(prevItems.length - 12),
          ]);
          setOffset(offset + 16);
          console.log("setting states");

          console.log(moreResturants);
        } else {
          removeListener();
        }
      };
      getResturants();
    } else null;
  };

  const getMoreRestaurant = throttle(usegetRestaurants, 1000);
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
  const setEvenlistener = () => {
    if ((offset >= 31) & (flag === true)) {
      window.onscroll = () => {
        console.log("scrolled");

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

  const getResturants = async (signal, setRestaurants) => {
    const resturantDataSwiggy = await fetch(
      `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${cordinates.latitude}&lng=${cordinates.longitude}&offset=15&sortBy=RELEVANCE&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING`,
      signal
    )
      .then((res) => res.json())
      .catch((err) => console.log(err));

    setRestaurants([
      ...resturantDataSwiggy?.data?.cards,
      ...Array(12).fill(<ShimmerThumbnail height={200} width={250} />),
    ]);
  };
};

export default useRestaurant;
