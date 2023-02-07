import React, { useEffect, useState,useContext } from "react";
import { Link } from "react-router-dom";
import { locationContext } from "./LocationProvider";

const LandingPage = () => {
//   const [location, setlocation] = useState({});
//   const getLocation = () => {
//     navigator.geolocation.getCurrentPosition(
//       (pos) => setlocation(pos.coords),
//       (err) => console.log(err)
//     );
//   };
//   useEffect(() => {
//     getLocation();
//   }, []);

//   console.log(location);
//   console.log(Object.keys(location).length);
const location = useContext(locationContext)


  return (
    <div className="container ">
      <div className="header w-full h-24 bg-white">
        <p className="text-[25px] text-orange-500 absolute top-0 z-50">
          Swiggy
        </p>
      </div>
      <div className="locationBox">
        <button
          onClick={() => {
            getLocation();
          }}
          className="w-[200px] p-3 h-[50px] border-black border-[1px]"
        >
          Locate Me
        </button>
        {JSON.stringify(location) === JSON.stringify({}) === 0 ? (
          <button className="w-[200px] p-3 h-[50px] border-black border-[1px]">
            Find Food
          </button>
        ) : (
          <Link to="/homePage">
            <button className="w-[200px] p-3 h-[50px] border-black border-[1px]">
              Find Food
            </button>
          </Link>
        )}
      </div>
      <div className="img-1"></div>
      <div className="img-2-box"></div>
    </div>
  );
};

export default LandingPage;
