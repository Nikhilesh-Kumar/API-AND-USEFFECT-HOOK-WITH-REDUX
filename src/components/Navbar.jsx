import React from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
  return (
    <div>
      <div className="border-b border-b-neutral-200 shadow-md py-3 px-10 flex justify-between">
        <Link to="/" className="font-semibold text-md">{/* API's and UseEffect */}SHOP CART</Link>

        <div className="flex gap-4 mr-30 ">
          <Link to="/">Home</Link>
          <Link to='details'>Details</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
