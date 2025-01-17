import React, { useContext, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import { useState } from 'react';
import ProductItem from './ProductItem';
 

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
const [latestProducts, setLatestProducts] = useState([]);

useEffect(()=>{
  setLatestProducts(products.slice(0,9));
},[])
 
  
  return (
    <div className='my-10'>
<div className='text-center py-8 text-3xl'>
 <Title text1={'LATEST'} text2={'COLLECTIONS'} />
 <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
 Discover our Latest Collection, featuring the newest trends and must-have items of the season. Handpicked for quality and style, these pieces are perfect for updating your wardrobe or finding that special item. Shop now and stay ahead of the fashion curve!

 </p>
</div>

{/* Rendering Products */}
<div className=' items-center grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 gap-4 gap-y-6 '>
{
  latestProducts.map((item,index)=>(
    <ProductItem  key={index} id={item._id} image={item.image} name={item.name} price={item.price }/>
  ))
}


</div>

    </div>
  )
}

export default LatestCollection