import React from 'react'
import { Link } from 'react-router-dom'

function Card({title,img,desc,price,id}) {
  return (
    <Link to={`/details/${id}`}>
      <div className='w-[250px] border border-gray-200 p-2 hover:cursor-pointer'>
        <img className='h-32 w-32 object-contain mx-auto' src={img} alt="" />
        <h1 className='truncate'>{title}</h1>
        <p>Rs {Math.floor(price*80)}</p>
      </div>
    </Link>
  )
}

export default Card
