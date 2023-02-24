import React from 'react';
import { CITY_NAMES } from '../Utilities/constants';
 

const Footer = () => (
<div className="footer sm:w-full bg-black sm:p-10 w-[400px] p-3 ">

    <div className="container sm:pl-20 sm:pr-16 sm:w-full sm:text-[13px] text-white text-[8px]">
      <div className="city-names">
        <p className='sm:text-[20px] text-[12px]  ml-2'>We deliver to</p>
        <ul className='sm:w-full w-[400px] h-[300px] flex flex-wrap flex-col '>
          {CITY_NAMES.map((city,index)=> {return <li className='text-[#d6d6da] sm:text-[15px] text-[7px] p-2' key={index}>{city}</li>})}

        </ul>
      </div>
          <hr className='bg-white mb-5' />
      <span className='p-1 sm:ml-[450px] ml-[80px]'>&copy; {new Date().getFullYear()} Hungrig</span>
      <span className='p-1'>
        Built with <span role="img" aria-label="love"> ❤️ </span>by Manik Sharma 
      </span>
      

    </div>

    </div>
);

export default Footer;
