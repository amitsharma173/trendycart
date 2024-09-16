import React from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div  >
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
<div>
  <img src={assets.logo} alt="" className='mb-5 w-32 ' />
  <p className='w-full md:w-2/3 text-gray-600'>
  Stay connected with us! Follow our social media for the latest updates, explore our customer support for any assistance, and review our policies to shop with confidence. © 2024 TrendyCart. All rights reserved.
  </p>
</div>
<div >
  <p className='text-x1 font-medium mb-5'>COMPANY</p>
  <ul className='flex flex-col gap-1 text-orange-600'>
  <NavLink to='/' className='flex flex-col i  gap-1'>
 <p>HOME</p>
 <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
  </NavLink>

  
  <NavLink to='/collection' className='flex flex-col   gap-1'>
 <p>COLLECTION</p>
 <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
  </NavLink>
 
  <NavLink to='/about' className='flex flex-col  gap-1'>
 <p>ABOUT</p>
 <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
  </NavLink>
  <NavLink to='/contact' className='flex flex-col   gap-1'>
 <p>CONTACT</p>
 <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
  </NavLink>

    {/* <li>HOME</li>
    <li>ABOUT US</li>
    <li>DELIVERY</li>
    <li>PRIVACY POLICY</li> */}

  </ul>
</div>

<div>
  <p className='text-xl font-medium mb-5'> GET IN TOUCH</p>
  <ul className='flex flex-col gap-1 text-gray-600'>
    <li> +91-94636-12925</li>
    <li>info@trendycart.com</li>
  </ul>
</div>

      </div>
      <div>
        <hr />
        <p className='py-5 text-sm text-center'>
          CopyRight 2024@ trendycart.com All Rights Reseverds.
        </p>
      </div>
    </div>
  )
}

export default Footer