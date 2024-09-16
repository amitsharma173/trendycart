import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom';

const ProductItem = ({id,image,name,price}) => {
  const {currency} = useContext(ShopContext);
  
  return (
    <Link className='text-gray-700 cursor-pointer' to={`/product/${id}`}>

      <div className='overflow-hidden'> 
<img className='hover:scale-110 transition ease-in-out rounded-x1 border-spacing-1 border-cyan-600' src={image[0]} alt="" />
      </div>
    <p className='pt-3 pb-1 text-sm text-black text-center'>{name}</p>
    <p className='text-sm font-medium text-orange-600 text-center'>{currency}{price}</p>
    </Link>
  )
}

export default ProductItem