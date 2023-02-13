import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FAST_DEL_IMG,
  LANDING_PAGE_IMG,
  MIN_ORDER_IMG,
  SERVICES_IMG_CLASSNAME,
  TRACK_ORDER_IMG,
} from "../Utilities/constants";
import {locationContext } from "../Utilities/MyApp";
const TEXTS = ["Hungry", "Cooking Gone Wrong", "Movie marathon", "Game night",'Unexpected Guests'];

const LandingPage = () => {
  const [text, setText] = useState("Unexpected Guests");
  const location = useContext(locationContext);
  useEffect(() => {
    let timer = 0;
    let i = 0;
   timer =  setInterval(() => {
      setText(TEXTS[i])
      i>= 4 ? i = 0:i++
    }, 2000);

return ()=> clearInterval(timer)
  }, []);

  return (
    <div className="LandingPage w-full">
      <div className="upper-box flex  ">
        <div className="locationBox w-[850px] h-[550px] ">
          <div className="flex flex-col p-12 w-10/12 h-full">
            <p className="text-[40px] font-[900] mt-10">{text} ? </p>
            <p className="text-[24px] text-[#686b78] ">
              Order food from your favourite restaurant near you
            </p>
            <div className="btn flex my-10  ">
              <button
                onClick={() => {
                  location.latitude ?alert(`kindly explore restaurants`):alert('allow access to location')
                }}
                className="w-[170px] p-3 h-[50px]  text-[#686b78] 
              border-[#686b78] border-[1px] mr-10 "
              >
                📍 Locate Me
              </button>
              {!location.latitude ? (
                <button
                  onClick={() => {
                    alert("allow location to see restaurant near you");
                  }}
                  className="w-[170px] p-3 h-[50px] bg-[#f5a666] text-white"
                >
                  Find Food
                </button>
              ) : (
                <Link to="/homePage">
                  <button className="w-[170px] p-3 h-[50px]  font-[900]  bg-[#fc8019] text-white">
                    Find Food
                  </button>
                </Link>
              )}
            </div>
            <p className="text-[19px] text-[#6f6f73]">
              Popular cities in india
            </p>
            <p className="text-[21px] font-[500]  text-[#757578] my-3">
              Ahmedabad Bangalore Chennai Jammu Delhi Gurgaon Hyderabad Kolkata
              Mumbai Pune and more
            </p>
          </div>
        </div>
        <div className="img-1 w-[650] h-[550px]">
          <img
            className="w-full h-full bg-center bg-contain bg-no-repeat"
            src={LANDING_PAGE_IMG}
            alt="image"
          />
        </div>
      </div>

      <div className="img-2-box w-full h-[450px] px-36 py-16 flex justify-between items-start bg-[#5C4033] ">
        <div className={SERVICES_IMG_CLASSNAME}>
          <img
            className="h-[199px] w-[115px] bg-center bg-contain bg-no-repeat"
            src={MIN_ORDER_IMG}
            alt="image"
          />
          <p className="text-[20px] font-[900] text-white">No minimum order</p>
          <p className="text-[#e0cbc1] text-[15px]">
            Order in for yourself or for the group,
          </p>
          <p className="text-[#e0cbc1] text-[15px]">
            with no restrictions on order value
          </p>
        </div>
        <div className={SERVICES_IMG_CLASSNAME}>
          <img
            className="h-[199px] w-[115px] bg-center bg-contain bg-no-repeat"
            src={TRACK_ORDER_IMG}
            alt="image"
          />
          <p className="text-[20px] font-[900] text-white">
            Live Order Tracking
          </p>
          <p className="text-[#e0cbc1] text-[15px]">
            Know where your order is at all times,
          </p>
          <p className="text-[#e0cbc1] text-[15px]">
            from the restaurant to your doorstep
          </p>
        </div>
        <div className={SERVICES_IMG_CLASSNAME}>
          <img
            className="h-[199px] w-[115px] bg-center bg-contain bg-no-repeat"
            src={FAST_DEL_IMG}
            alt="image"
          />
          <p className="text-[20px] font-[900] text-white">
            Lightning-Fast Delivery
          </p>
          <p className="text-[#e0cbc1] text-[15px]">
            Experience Swiggy's superfast delivery
          </p>
          <p className="text-[#e0cbc1] text-[15px]">
            for food delivered fresh and on time
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
