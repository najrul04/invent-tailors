import React from 'react';
import svg from '../../../assets/icons/quote.svg';
import img2 from "../../../assets/images/testimonial/Black_colour.jpg";
import '../Products/Ratings.css';
import './Testimonial.css';

// import Swiper core and required modules
import { Navigation } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import Ratings from '../Products/Ratings';

const data = [

  {

      avatar: img2,
      name: 'Abul Hossain',
      title: 'Businessman',
      review: 'I was extremely impressed with the service I received. The staff were friendly, knowledgeable and efficient. They went above and beyond to ensure my needs were met. I highly recommend this service to anyone in need.',
      "rating": "4.5",

  },

  {

      avatar: img2,
      name: 'Ashik',
      title: 'Businessman',
      review: 'I recently received excellent service from Invent Tailors and Fabrics. The staff was knowledgeable, friendly, and went above and beyond to ensure that I was satisfied with my purchase. I highly recommend this company for their quality products and outstanding customer service.',
      "rating": "5.0",

  },

  {

      avatar: img2,
      name: 'Anik',
      title: 'Businessman',
      review: 'I recently ordered some customized clothing from this company and was blown away by the quality of the workmanship. The attention to detail was impressive, and the clothes fit me perfectly. I highly recommend this service to anyone looking for bespoke clothing options.',
      "rating": "4.5",

  },

  {

      avatar: img2,
      name: 'Dorpon',
      title: 'CEO',
      review: "I had an excellent experience with this company's customized clothing service. They were able to bring my vision to life and create a stunning suit that fit me like a glove. The team was responsive, professional, and accommodating throughout the entire process. I would definitely use their services again.",
      "rating": "4.3"

  }

]
const Testimonial = () => {
    return (
        <div className='pt-10'>
        <div className='text-center mb-4'>
        <p className="text-2xl font-bold text-blue-500">Testimonial</p>
        <h2 className="lg:text-5xl md:text-4xl max-sm:text-3xl font-semibold pt-5">What Customer Says</h2>
        <p className='max-sm:text-sm pt-5 font-semibold'>We have been giving services successfully for 32 years.<br />Here is some of our most loyal customer reviews (More on the link below)</p>
    </div>

    <Swiper // install Swiper modules
      modules={[Navigation]}
      spaceBetween={40}
      slidesPerView={2}
      navigation
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      breakpoints={{
        0:{
            slidesPerView:1
        },
        520:{
            slidesPerView:2
        },
        950:{
            slidesPerView:2
        }
    }}
    >

      {

          data.map(({avatar, name, title, review, rating: ratings}, index) => {

            return(

              <SwiperSlide className='py-5' key={index} >

<div className='bg-base-100 shadow-xl border border-inherit p-12'>


<div>
  <div className=" flex flex-row">
  <div className='testimonial_image'>
  <img src={avatar} alt="Woman's Face"/>
  </div>
  
  <div className="text-center sm:text-left">
    <div>
      <p className="text-lg text-black font-semibold">
        {name}
      </p>
      <p className="text-slate-500 font-medium">
        {title}
      </p>
    </div>
   
  </div>
  <div className='testimonial_quote'>
  <img src={svg} alt="Woman's Face"/>
  </div>
  </div>
</div>


<div className='mt-4 text-left'>
<p>
    {review}
</p>
</div>
<div className="pt-2">
<Ratings ratings = {ratings} />
</div>
</div>

              {/* <div className="w-14">
    
                <img className=' rounded-full' src={avatar} alt="" />
                
              </div>
              
              <h5 className='client_name'>{name}</h5>
                <small className='client_review'>
    
                 {review}
    
                </small> */}
    
            </SwiperSlide>

            )

          })

      }
       
    </Swiper>

    </div>
    );
};

export default Testimonial;

/* 


    <Swiper className="swiper-container" style={{width:'50%', height:'100%'}}// install Swiper modules
      modules={[Navigation]}
      spaceBetween={40}
      slidesPerView={3}
      navigation
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}>

      {

          data.map(({avatar, name, title, review, rating: ratings}, index) => {

            return(

              <SwiperSlide className='py-5' key={index} >

{/* <div className='border p-12'>


<div>
  <div className=" flex flex-row">
  <div className='testimonial_image'>
  <img src={avatar} alt="Woman's Face"/>
  </div>
  
  <div className="text-center sm:text-left">
    <div>
      <p className="text-lg text-black font-semibold">
        {name}
      </p>
      <p className="text-slate-500 font-medium">
        {title}
      </p>
    </div>
   
  </div>
  <div className='testimonial_quote'>
  <img src={svg} alt="Woman's Face"/>
  </div>
  </div>
</div>


<div className='mt-4 text-left'>
<p>
    {review}
</p>
</div>\
<div className="pt-0.1">
<Ratings ratings = {ratings} />
</div>
</div> 


<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
    <a href="#">
        <img class="rounded-t-lg" src={avatar} alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
            <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>
    </div>
</div>


              {/* <div className="w-14">
    
                <img className=' rounded-full' src={avatar} alt="" />
                
              </div>
              
              <h5 className='client_name'>{name}</h5>
                <small className='client_review'>
    
                 {review}
    
                </small> 
    
            </SwiperSlide>

            )

          })

      }
       
    </Swiper>


*/
