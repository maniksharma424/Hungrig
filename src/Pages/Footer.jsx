import React from 'react';
import { CITY_NAMES } from '../Utilities/constants';
 

const Footer = () => (
<div className="footer w-full bg-black p-10 ">

    <div className="container pl-20 pr-16 w-full text-[13px] text-white">
      <div className="city-names">
        <p className='text-[20px] ml-2'>We deliver to</p>
        <ul className='w-full h-[300px] flex flex-wrap flex-col '>
          {CITY_NAMES.map((city,index)=> {return <li className='text-[#d6d6da] text-[15px] p-2' key={index}>{city}</li>})}

        </ul>
      </div>
          <hr className='bg-white mb-5' />
      <span className='p-1 ml-[450px]'>&copy; {new Date().getFullYear()} Swiggy</span>
      <span className='p-1'>
        Built with <span role="img" aria-label="love"> ❤️ </span>by Manik Sharma 
      </span>
      

    </div>

    </div>
);

export default Footer;
