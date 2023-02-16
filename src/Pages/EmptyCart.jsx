import { Link } from 'react-router-dom'

const EmptyCart = () => {
  return (
    <div className='empty-cart w-full  h-[700px] bg-white flex flex-col justify-center items-center'>
        <img className=' bg-center bg-contain bg-no-repeat w-[270px] h-[276px]' src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0" alt="Empty Cart" />
            <p className='text-[16px] font-[900] my-3'>Your cart is empty</p>
            <p className='text-[12px] text-[#7e808c] '>You can go to home page to view more restaurants</p>
            <Link to='/homePage'>
            <button className='border-none p-2 text-[13px] bg-[#fc8019] my-3 text-white font-[700] rounded-sm'>SEE RESTAURANTS NEAR YOU</button>
            </Link>

    </div>
  )
}

export default EmptyCart
// review
