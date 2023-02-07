import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
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
  console.log(address);
  return (
    <>
      <div className="Header sticky top-0  bg-white z-10 pt-3 pb-2  px-[130px] w-full flex justify-between items-center shadow-xl">
        <div className="header-logo w-2/3  flex items-center ">
          <Link to="/homePage">
            <img
              className="logo w-[110px] h-[60px]"
              src="https://1000logos.net/wp-content/uploads/2021/05/Swiggy-logo.png"
              alt=" logo"
            />
          </Link>
          <div className="address text-[10px]">
          {address ? <p>Delivering to {address?.display_name}</p>:<p>Allow location </p>}
          </div>
          
        </div>
        <div className="Header-Links w-1/3 flex  justify-around">
          
          <Link to="/searchpage">
            <i class="fa-solid fa-magnifying-glass"></i> Search
          </Link>
          <Link to="/aboutUs">AboutUs</Link>
          
          <Link to="/cart">
            <div>
              <i class="fa-sharp fa-solid fa-cart-shopping fa-xl"></i>
              <div className="cart-length rounded-[10px] bottom-10 right-[165px] bg-white h-5 w-5 m-0 pt-[2px] pl-[6px] font-[700]  absolute text-[10px]  border-[#fc8019] border-[1px] text-[#fc8019] ">
                {cartLength}
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};
export default Header;
