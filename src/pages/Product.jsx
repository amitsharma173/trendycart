import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { assets, products } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {
  const {productID} = useParams();
  const {prducts, currency, addToCart} = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('')
  const [size, setSize] = useState('')
  
  
  const fetchProductData = async ()=> {

    products.map((item)=>{
      if(item._id == productID){
        setProductData(item)
        setImage(item.image[0])
        return null;
      }
    } )
  }

useEffect(()=>{
  fetchProductData();
}, [productID])

  return productData ?  (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
     
     {/* --------------product data--------------  */}
      
      <div className='flex gap-12 sm:gap12 flex-col sm:flex-row'>

{/* --------------product images-------------- */}

<div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
  <div className='flex sm:flex-col overflow-auto sm:overflow-scroll justify-between  sm:justify-normal sm:w-[18.7%] w-full'>
   {
    productData.image.map((item, index)=> (
      <img onClick={() => setImage(item)} src={item} key={index} className='w-[20% ] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' alt="" />
    ))
   } 
  </div>

  <div className='w-full sm:w-[80%]'>
<img className='w-full h-auto' src= {image} alt="" />
  </div>

</div>

{/* .----------products info details */}

<div className='flex-1'>
  <h1 className='font-medium text-2x1 mt-2'>{productData.name}</h1>
  <div className='flex items-center gap-1 mt-2'>
     <img src={assets.star_icon} alt="" className="w-3 5" />
     <img src={assets.star_icon} alt="" className="w-3 5" />
     <img src={assets.star_icon} alt="" className="w-3 5" />
     <img src={assets.star_icon} alt="" className="w-3 5" />
     <img src={assets.star_dull_icon} alt="" className="w-3 5" />
  <p className='pl-2'>(122)</p>
  </div>
  <p className='mt-1 text-2x1 font-medium'>Price: {currency}{ productData.price}</p>
  <p className='mt-3 text-gray-800 md:w-4/5'>{productData.description}</p>
  <div className='flex flex-col gap-4 my-4'>
    <p>Select Size: </p>
    <div className='flex gap-2'>
      {productData.sizes.map((item, index)=> (
        <button onClick={()=>setSize(item)} className={`border py-2 px-4 bg-gray-100 ${item=== size ? 'border-orange-500': ''}`} key= {index}> {item} </button>
      ))}
    </div>
  </div>
 <button onClick={()=> addToCart(productData._id,size)} className='bg-orange-500 text-white px-8 py-3 text-sm active:bg-gray-700'>ADD TO CART</button>
<hr className='mt-8 sm:w-4/5'/>
<div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
  <p> 100% Original Product.</p>
  <p> Cash On Delivery Available on This Product</p>
  <p> Easy Return and Exchange Policy With in 7 Days</p>

</div>
</div>
      </div>

{/* ----------------Description and Review section  */}
<div className='mt-20'>
  <div className='flex '>
    <b className=' border px-5 py-3 text-sm'>Description</b>
    <p className=' border px-5 py-3 text-sm'>Reviews (122)</p>
  </div>
  <div className='flex flex-col gap-4 border px-6 text-sm text-gray-500'>

<p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci consequuntur laborum soluta quisquam rem libero itaque velit repellat aliquam quia, voluptas recusandae ea! Tempore sit odit minima, commodi ex rem?</p>
<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus ab impedit omnis! Consequuntur soluta asperiores libero cupiditate repudiandae ab beatae placeat fugit deserunt corporis eius minima, autem dolor corrupti voluptas?</p>
  </div>

</div>

{/* ------------- Display Related Products */}
 <RelatedProducts category={productData.category} subCategory= {productData.subCategory}/>

    </div>
  ) : 
  <div className='opactiy-0'>

  </div>
}

export default Product