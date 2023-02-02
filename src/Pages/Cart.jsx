import React from 'react'
import { CheckOutBox } from './CheckOutBox'
const Cart = () => {
  return (
    <div className='cart bg-[#e9ecee] w-full h-fit flex-col flex justify-center items-center  py-14 px-10'>
        <CheckOutBox/>
        <div className="Place-Order w-[1125px]    p-4">
            <button className='w-full p-4 bg-[#60b246] rounded-sm text-white text-[20px]'>Place Order</button>
        </div>
    </div>
  )
}

export default Cart