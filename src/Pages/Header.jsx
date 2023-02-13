import { Link } from "react-router-dom";
import { useState } from "react";
import { useAddress } from "../customHooks/useAddress";

const Header = () => {
  const [cartLength] = useState(() => {
    let length = 0;
    JSON.parse(localStorage.getItem("orders"))?.map(
      (item) => (length += item.qty)
    );
    return length;
  });

  const address = useAddress();

  return (
    <>
      <div className="Header sticky top-0  bg-white z-10 pt-3 pb-2  px-[130px] w-full flex justify-between items-center shadow-xl">
        <div className="header-logo w-2/3  flex items-center ">
          <Link to="/homePage">
            <img
              className="logo w-[90px] h-[50px]"
              src="https://1000logos.net/wp-content/uploads/2021/05/Swiggy-logo.png"
              alt=" logo"
            />
          </Link>
          <div className="address">
            {address?.display_name ? (
              <span className="text-[11px] font-[900]">📍 {address?.address?.suburb} <span className="text-[9px] font-[100]">{address?.address?.city} ,<span>{address?.address?.country}</span></span></span>
            ) : (
              <p className="text-[10px] font-[100]">Fetching Location ... </p>
            )}
          </div>
        </div>
        <div className="Header-Links w-1/3 flex text-[13px]  justify-around">
          <Link to="/searchpage">
            <i className="fa-solid fa-magnifying-glass"></i> Search
          </Link>
          <Link to="/aboutUs">AboutUs</Link>

          <Link to="/cart">
            <div>
              <i className="fa-sharp fa-solid fa-cart-shopping fa-xl"></i>

              {cartLength === 0 ? null : (
                <div className="cart-length rounded-[10px] bottom-10 right-[165px] bg-white h-5 w-5 m-0 pt-[2px] pl-[6px] font-[700]  absolute text-[10px]  border-[#fc8019] border-[1px] text-[#fc8019] ">
                  {cartLength}
                </div> 
              )}
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};
export default Header;
