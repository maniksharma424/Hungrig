 import { Link } from "react-router-dom";
import { ERROR_IMG } from "../Utilities/constants";
const Error = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-[700px]">
      <img
        className="bg-centre bg-contain bg-no-repeat w-[340px] h-[260px]"
        src={ERROR_IMG}
      />
      <div className="w-[430] flex flex-col justify-center items-center">
        <p className="text-[#282c3f] text-[32px] mt-2 ">Page Not Found</p>
        <p className="text-[#93959f] text-[16px]">
          Uh-oh! Looks like the page you are trying to access, doesn't
        </p>
        <p className="text-[#93959f] text-[16px]">
          exist. Please start afresh.
        </p>
      </div>
      <Link to="/homePage">
        <button className=" px-3 py-2 mt-4 rounded-sm text-white bg-[#fc8019] border-none">
          Go Home
        </button>
      </Link>
    </div>
  );
};

export default Error;
