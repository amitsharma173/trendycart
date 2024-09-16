import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>

<div className='text-2xl text-center pt-8 border-t'>
  <Title text1={'ABOUT'} text2={'US'} />

  </div>      

<div className='my-10 flex flex-col md:flex-row gap-16'>
  <img className='w-full md:max-w-[450px]' src={assets.logo} alt="" />
  <div className='flex flex-col text-justify gap-6 md:w-2/4 text-gray-600'>
  <p>Welcome to TrendyCart, your ultimate destination for the latest and most stylish fashion pieces. At TrendyCart, we believe that fashion should be accessible, exciting, and ever-evolving. Our carefully curated collections bring you the trendiest outfits and accessories, helping you express your unique style with ease.</p>
  <p>Whether you're looking for casual wear, statement pieces, or elegant evening attire, we’ve got something for every occasion. Our team is passionate about fashion and dedicated to keeping you ahead of the curve by constantly updating our inventory with the newest trends from around the globe.</p>
  <p>At TrendyCart, we’re committed to delivering high-quality products at affordable prices, with a seamless shopping experience that puts our customers first. From the moment you browse to the time your order arrives, we make sure every step is smooth, secure, and satisfying.</p>

  <b className='text-gray-800'>Our Mission</b>
  <p>At TrendyCart, our mission is to make fashion accessible, affordable, and exciting for everyone. We strive to deliver the latest trends with high quality and exceptional service, empowering our customers to express their unique style with confidence. Through innovation and a passion for fashion, we aim to create a shopping experience that’s as seamless and enjoyable as possible.</p>

  </div>
</div>
<div className='text-xl py-4'>
  <Title text1={'WHY'} text2={'CHOOSE US'}/>

</div>
<div className='flex fl ex-col md:flex-row text-sm mb-1'>
  <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
    <b> Quality Assurance</b>
    <p>We take pride in offering products that meet the highest standards of quality. Our team meticulously selects every item to ensure it meets our quality promise—giving you durable, stylish, and comfortable fashion.</p>
  </div>
  
  <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
    <b> Customer Satisfaction</b>
    <p className='text-gray-800'>Our customers are at the heart of everything we do. We offer responsive support and a hassle-free return policy to make sure you're satisfied with every purchase.</p>
  </div>
   
</div>
<div className='flex fl ex-col md:flex-row text-sm mb-20'>
  
  
  <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
    <b>Fast and Reliable Shipping</b>
    <p className='text-gray-800'>We know you want your items quickly, which is why we offer fast and reliable shipping options to get your products to you as soon as possible.</p>
  </div>
  <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
    <b>Secure Shopping</b>
    <p className='text-gray-800'>We prioritize your security, ensuring that all transactions are safe, encrypted, and protected.</p>
  </div>
</div>
<NewsLetterBox />
    </div>
  )
}

export default About