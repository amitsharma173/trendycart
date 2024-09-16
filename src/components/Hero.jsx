import React from 'react';
import Slider from "react-slick";
import { assets } from '../assets/assets';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
  // Slider settings
  const sliderSettings = {
    dots: false,           // Show dots navigation
    infinite: true,       // Infinite looping
    speed: 300,           // Transition speed in milliseconds
    slidesToShow: 1,      // Number of slides to show
    slidesToScroll: 1,    // Number of slides to scroll
    autoplay: true,       // Enable autoplay
    autoplaySpeed: 3000,  // Time between slides in milliseconds
    arrows: false,        // Disable navigation arrows
  };

  return (
    <div className='w-full flex flex-col sm:flex-row border border-gray-400'>
      {/* Hero left side */}
      <div className='w-full sm:w-1/2 flex items-center justify-center bg-orange-200 py-10 sm:py-40'>
        <div className='text-[#252da0]'>
          <div className='flex items-center gap-2'>
            <p className='w-8 md:w-11 h-[6px] bg-[#578818]'></p>
            <p className='font-medium text-sm md:text-base'>Our Best Sellers</p>
          </div>
          <h1 className='prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed'>Latest Arrivals</h1>
          <div className='flex items-center gap-2'>
            <p className='font-semibold text-sm md:text-base'>SHOP NOW</p>
            <p className='w-8 md:w-11 h-[6px] bg-[#578818]'></p>
          </div>
        </div>
      </div>

      {/* Hero right side */}
      <div className='w-full sm:w-1/2'>
        <div className='h-full'>
          <Slider {...sliderSettings}>
            {/* Replace with your actual image URLs */}
            <div>
              <img className='w-full h-full object-cover' src={assets.hero_img} alt="" />
            </div>
            <div>
              <img className='w-full h-full object-cover' src={assets.hero_img2} alt="" />
            </div>
            <div>
              <img className='w-full h-full object-cover' src={assets.hero_img3} alt="" />
            </div>
            <div>
              <img className='w-full h-full object-cover' src={assets.hero_img4} alt="" />
            </div>
            <div>
              <img className='w-full h-full object-cover' src={assets.hero_img5} alt="" />
            </div>
            <div>
              <img className='w-full h-full object-cover' src={assets.hero_img6} alt="" />
            </div>
            <div>
              <img className='w-full h-full object-cover' src={assets.hero_img7} alt="" />
            </div>
            <div>
              <img className='w-full h-full object-cover' src={assets.hero_img8} alt="" />
            </div>
            <div>
              <img className='w-full h-full object-cover' src={assets.hero_img9} alt="" />
            </div>
            <div>
              <img className='w-full h-full object-cover' src={assets.hero_img10} alt="" />
            </div>
            <div>
              <img className='w-full h-full object-cover' src={assets.hero_img11} alt="" />
            </div>
            {/* Add more slides as needed */}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Hero;
