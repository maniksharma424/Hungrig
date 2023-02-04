import { Link } from "react-router-dom";
import { useState } from "react";
const Header = () => {
  const [cartLength, setCartLength] = useState(() => {
    return JSON.parse(localStorage.getItem("orders")).length;
  });
  return (
    <>
      <div className="Header sticky top-0  bg-white z-10 pt-3 pb-2  px-[130px] w-full flex justify-between items-center shadow-xl">
        <div className="header-logo">
          <Link to="/">
            <img
              className="logo w-[110px] h-[60px]"
              src="https://1000logos.net/wp-content/uploads/2021/05/Swiggy-logo.png"
              alt=" logo"
            />
          </Link>
        </div>
        <div className="Header-Links w-1/3 flex  justify-around">
          <Link to="/searchpage">
            <i class="fa-solid fa-magnifying-glass"></i> Search
          </Link>
          <Link to="/login">Login</Link>
          <Link to="/cart">
            <div>
              <i class="fa-sharp fa-solid fa-cart-shopping fa-xl"></i>
              <div className="cart-length border-black border-[1px] p-2">
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
