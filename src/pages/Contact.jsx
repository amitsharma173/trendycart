import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t '>
        <Title text1={'CONTACT'} text2={'US'} />
      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img src={assets.contact_img} className='w-full md:max-w-[480px]' alt="" />
        <div className='flex flex-col justify-center items-center gap-6'>
          <p className='font-semibold text-xl text-gray-600'> Our Store</p>
          <p  className='text-gray-700'> 100 W Hillcrest Dr<br/> San Marcos, <br/>Texas-78666<br/> United States </p>
          <p className='text-gray-700'>Tel : +91-94636-12925 <br/> Email: info@trendycart.com</p>
          <p className=' font-semibold text-xl text-gray-700'> Careers at TrendyCart </p>
          <p className='text-gray-700'> Lear More About Our Team and Job Opening </p>
       <button className='border border-orange-600 px-8 py-4 text-sm hover:bg-orange-600 hover:text-white transition-all duration-500 rounded-full'>Explore Jobs</button>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  )
}

export default Contact