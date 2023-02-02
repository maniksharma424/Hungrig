import { Link } from "react-router-dom";
const Header = () => {
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
            <i class="fa-sharp fa-solid fa-cart-shopping fa-xl"></i>
          </Link>
        </div>
      </div>
    </>
  );
};
export default Header;
