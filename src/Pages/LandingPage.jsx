import React, { useContext, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import {
  FAST_DEL_IMG,
  LANDING_PAGE_IMG,
  MIN_ORDER_IMG,
  SERVICES_IMG_CLASSNAME,
  TRACK_ORDER_IMG,
} from "../Utilities/constants";
import { locationContext } from "../MyApp";
import ModalContent from "./ModalContent";
import { TEXTS, STYLE } from "../Utilities/constants";

const LandingPage = () => {
  const [text, setText] = useState("Unexpected Guests");
  const [showModal, setShowModal] = useState(true);
  const [pageStyle, setPageStyle] = useState(STYLE.modalOn);
  const location = useContext(locationContext);

  useEffect(() => {
    let timer = 0;
    let i = 0;
    timer = setInterval(() => {
      setText(TEXTS[i]);
      i >= 4 ? (i = 0) : i++;
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={pageStyle}>
      <div className="upper-box flex w-[400px] sm:w-full  ">
        <div className="locationBox sm:w-[850px] sm:h-[550px] w-[200px] ">
          <div className="flex flex-col p-12 sm:w-10/12 sm:h-full w-[200px] h-[250px]">
            <p className="sm:text-[40px] text-[9px]  font-[900] sm:mt-10">{text} ? </p>
            <p className="sm:text-[24px] text-[7px] text-[#686b78] ">
              Order food from your favourite restaurant near you
            </p>
            <div className="btn flex sm:my-10 my-2  ">
              <button
                onClick={() => {
                  location.latitude
                    ? alert(`kindly explore restaurants`)
                    : alert("allow access to location");
                }}
                className="sm:w-[170px] sm:h-[50px] sm:text-[15px] text-[4px] w-[40px]  sm:p-3 p-1 h-[20px] sm:mt-0 mt-[6px]  text-[#686b78] 
              border-[#686b78] border-[1px] sm:mr-10 "
              >
                📍 Locate Me
              </button>
              {!location.latitude ? (
                <button
                  onClick={() => {
                    alert("allow location to see restaurant near you");
                  }}
                  className="sm:w-[170px] sm:h-[50px] sm:text-[15px] w-[40px] text-[5px] ml-2 sm:p-3 h-[20px] p-1 font-[300] sm:font-[900]  bg-[#fc8019] text-white"
                >
                  Find Food
                </button>
              ) : (
                <Link to="/homePage">
                  <button className="sm:w-[170px] sm:h-[50px] sm:text-[15px] w-[40px] ml-2 text-[5px] sm:p-3 h-[20px] p-1 font-[300] sm:font-[900]  bg-[#fc8019] text-white">
                    Find Food
                  </button>
                </Link>
              )}
            </div>
            <p className="sm:text-[19px] text-[9px] text-[#6f6f73]">
              Popular cities in india
            </p>
            <p className="sm:text-[21px] text-[5px] font-[500]  text-[#757578] my-3">
              Ahmedabad Bangalore Chennai Jammu Delhi Gurgaon Hyderabad Kolkata
              Mumbai Pune and more
            </p>
          </div>
        </div>
        <div className="img-1 sm:w-[650] sm:h-[550px] w-[200px] h-[250px]">
          <img
            className="w-full h-full bg-center bg-contain bg-no-repeat"
            src={LANDING_PAGE_IMG}
            alt="image"
          />
        </div>
      </div>
      {showModal &&
        createPortal(
          <ModalContent
            onClose={() => {
              setShowModal(false);
              setPageStyle(STYLE.modalOff);
            }}
          />,
          document.body
        )}
      <div className="img-2-box sm:w-full sm:h-[450px] w-[400px] h-[170px] sm:px-36 sm:py-16 sm:flex sm:justify-between sm:items-start flex justify-around bg-[#5C4033] ">
        <div className={SERVICES_IMG_CLASSNAME}>
          <img
            className="sm:h-[199px] sm:w-[115px] w-[50px] h-[80px] bg-center bg-contain bg-no-repeat"
            src={MIN_ORDER_IMG}
            alt="image"
          />
          <p className="sm:text-[20px] sm:font-[900] text-[8px] font-[300] text-white">No minimum order</p>
          <p className="text-[#e0cbc1] sm:text-[15px] text-[5px]">
            Order in for yourself or for the group,
          </p>
          <p className="text-[#e0cbc1] sm:text-[15px] text-[6px]">
            with no restrictions on order value
          </p>
        </div>
        <div className={SERVICES_IMG_CLASSNAME}>
          <img
            className="h-[80px] w-[50px] bg-center bg-contain bg-no-repeat sm:w-[115px] sm:h-[199px]"
            src={TRACK_ORDER_IMG}
            alt="image"
          />
          <p className="sm:text-[20px] sm:font-[900] text-[8px] font-[300] text-white">
            Live Order Tracking
          </p>
          <p className="text-[#e0cbc1] sm:text-[15px] text-[5px]">
            Know where your order is at all times,
          </p>
          <p className="text-[#e0cbc1] sm:text-[15px] text-[5px]">
            from the restaurant to your doorstep
          </p>
        </div>
        <div className={SERVICES_IMG_CLASSNAME}>
          <img
            className="sm:h-[199px] sm:w-[115px] h-[80px] w-[50px] bg-center bg-contain bg-no-repeat"
            src={FAST_DEL_IMG}
            alt="image"
          />
          <p className="sm:text-[20px] sm:font-[900] text-[8px] font-[300] text-white">
            Lightning-Fast Delivery
          </p>
          <p className="text-[#e0cbc1] sm:text-[15px] text-[5px]">
            Experience Swiggy's superfast delivery
          </p>
          <p className="text-[#e0cbc1] sm:text-[15px] text-[5px]">
            for food delivered fresh and on time
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
