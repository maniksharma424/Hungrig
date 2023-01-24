import React from 'react'

const CartItem = ({cartItem}) => {
  return (
    <div className='Cart-Item w-[full] h-[150px] border-black border-[1px] p-4'>
        <div className="Restaurant-info flex justify-start items-center  ">
            <div className="image">
            <img
              className="Image rounded-md bg-no-repeat bg-center bg-contain h-[80px] w-[80px]"
              src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${cartItem?.restaurant?.cloudinaryImageId}`}
            />
            </div>
            <div className="Restaurant-Info ml-4">
            <p className='text-[18px] font-[900px] text-[#3e4152]'>{cartItem?.restaurant?.name}</p>
               
                
                <p className='text-[12px] font-[100px]'>{cartItem?.restaurant?.locality}</p>
            </div>

        </div>
        <div className="Item-info flex justify-around items-center border-black border-[1px] mt-3">
            <p className='text-[14px]'>{cartItem?.info?.name}</p>
            <button>- {'1'} +</button>
            <p>₹{cartItem?.info?.price/100}</p>
        </div>

    </div>
  )
}

export default CartItem