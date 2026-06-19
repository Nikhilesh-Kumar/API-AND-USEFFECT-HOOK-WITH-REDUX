import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { IoCartOutline } from "react-icons/io5";


function Navbar() {
    const {items} = useSelector((state)=> state.cart);
    const itemsCount = items.length
  return (
    <div>
      <div className="border-b border-b-neutral-200 shadow-md py-3 px-10 flex justify-between items-center">
        <Link to="/" className="font-semibold text-md">{/* API's and UseEffect */}SHOP CART</Link>

        <div className="flex items-center gap-4 mr-30 ">
          {/* <Link to="/">Home</Link> */}
          <Link to='/cart'>Cart - {itemsCount}</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
