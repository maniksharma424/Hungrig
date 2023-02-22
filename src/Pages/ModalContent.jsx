import React, { useState } from "react";

const ModalContent = ({ onClose }) => {

  return (
    <div className=" rounded-md w-[350px] h-fit border-[1px] border-gray shadow-2xl absolute bottom-[300px] left-[550px]  bg-white flex flex-col justify-centre items-end">
      <div className="info px-5 pt-5 w-full text-[14px]">
      Enable Chrome CORS to access the website by adding a plugin/Extension or starting the browser with web security turned off.
      </div>
    <div className="flex justify-around">
        <button  className=" px-3 py-2 mt-4 m-6 rounded-sm text-white bg-[#fc8019] border-none"onClick={onClose}>Close</button>
    </div>

    </div>
  );
};

export default ModalContent;
