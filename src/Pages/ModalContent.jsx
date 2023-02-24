import React, { useState } from "react";

const ModalContent = ({ onClose }) => {

  return (
    <div className=" rounded-md sm:w-[350px] sm:h-fit border-[1px] border-gray shadow-2xl absolute bottom-[300px] w-[250px] h-fit p-3 sm:p-0 sm:left-[550px] left-[50px] bg-white flex flex-col justify-centre items-end">
      <div className="info sm:px-5 sm:pt-5  w-full sm:text-[14px] text-[9px]">
      Enable Chrome CORS to access the website by adding a plugin/Extension or starting the browser with web security turned off.

      </div>
    <div className="flex justify-around">
        <button  className=" sm:px-3 sm:py-2 sm:mt-4 sm:m-6 rounded-sm text-white bg-[#fc8019] sm:text-[15px] text-[10px] font-[300] py-1 px-1 border-none"onClick={onClose}>Close</button>
    </div>

    </div>
  );
};

export default ModalContent;
