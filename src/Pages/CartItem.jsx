import React, { useState } from 'react'

const CartItem = ({cartItem}) => {
  const[count,setCount] = useState()
  return (
   
        <div className="Item-info flex justify-around items-center border-black border-[1px] mt-3">
            <p className='text-[14px]'>{cartItem?.info?.name}</p>
            <button>- {'1'} +</button>
            <p>₹{cartItem?.info?.price/100}</p>
        </div>

    
  )
}

export default CartItem