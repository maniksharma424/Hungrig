import { Link } from "react-router-dom";
import { useAddress } from "../customHooks/useAddress";
import { useSelector } from "react-redux";

const Header = () => {
  const address = useAddress();
  const cartItems = useSelector((store) => store?.cart?.items);
  let totalItems = 0;
  cartItems?.map((item) => {
    totalItems += item.qty;
  });

  return (
    <>
      <div className="Header sticky top-0  bg-white z-10 pt-3 pb-1  px-[130px] w-full flex justify-between items-center shadow-xl">
        <div className="header-logo w-2/3  flex items-center ">
          <Link to="/homePage">
            <div className="logo w-[100px] h-[60px] bg-no-repeat bg-contain bg-center bg-[url('/src/asset/logo.jpeg')]"></div>
          </Link>
          <div className="address">
            {address?.display_name ? (
              <span className="text-[11px] font-[900]">
                📍 {address?.address?.suburb}{" "}
                <span className="text-[9px] font-[100]">
                  {address?.address?.city} ,
                  <span>{address?.address?.country}</span>
                </span>
              </span>
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
          {totalItems > 0 ? (
            <div className="rounded-[10px] bottom-9 right-[165px] bg-white h-5 w-5 m-0 pt-[2px] pl-[6px] font-[700]  absolute text-[10px]  border-[#fc8019] border-[1px] text-[#fc8019] ">
              {totalItems}
            </div>
          ) : null}
          <Link to="/cart">
            <div>
              <i className="fa-sharp fa-solid fa-cart-shopping fa-xl"></i>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};
export default Header;
