import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Cart() {
    const {items} = useSelector((state)=>state.cart)
  return (
    <div>
      <div className="w-200 mx-auto mt-10">
        <h1 className='font-semibold'>Cart</h1>
        {
            items.map((item)=>(
                <div className='mt-10 border rounded-lg p-5 mb-10'>
                    <div className="flex gap-4 items-center">
                        <img className='h-32 w-32 object-contain mx-auto' src={item.image} alt="" />
                        <div>
                            <h2 className='text-lg font-medium'>{item.title}</h2>
                            <p className='text-xs text-neutral-700 line-clamp-2'>{item.description}</p>
                            <p className='font-semibold text-lg'>Rs {Math.floor((item.price)*80)}</p>
                            <button className="bg-black text-white px-3 py-2 rounded-full hover:cursor-pointer mt-3">Remove from Cart</button>
                        </div>
                    </div>
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default Cart
