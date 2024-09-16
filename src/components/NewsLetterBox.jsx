import React from 'react'

const NewsLetterBox = () => {

const onSubmitHandler = (event)=>{
event.preventDefault();
}

  return (
    <div className='text-center'>
      <p className='text-2xl font-medium text-orange-500 mt-3 '>Subscribe Now & Get 20% off</p>
      <p className='text-black mt-3'>
      Subscribe to our newsletter and be the first to know about exclusive offers, new arrivals, and special promotions. Join our community and never miss an update on the latest trends!"
      </p>
      <form  onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
        <input type="email"  placeholder='Enter Your Email' className='w-full sm:flex-1 outline-none' required/>
        <button type='submit' className='bg-orange-400 text-white text-xs px-10 py-4 font-semibold'>  SUBSCRIBE </button>
      </form>
      
    </div>
  ) 
}

export default NewsLetterBox