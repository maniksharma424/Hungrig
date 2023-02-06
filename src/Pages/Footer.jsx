import React from 'react';
import { states } from '../Utilities/constants';


const Footer = () => (

    <div className="container text-[13px] bg-black text-white">
      <p className='p-1'>&copy; {new Date().getFullYear()} Food Villa</p>
      <p className='p-1'>
        Built with <span role="img" aria-label="love">❤️</span>Manik Sharma 
      </p>
      {/* <p className='p-1'>We Deliver To</p>
      <p className='p-1'>

      {states.join(`   |    `)}
      </p> */}
    </div>

);

export default Footer;
