import React from 'react';
import svg from '../../../assets/icons/quote.svg';
import img4 from '../../../assets/images/banner/1.jpg';
import img2 from "../../../assets/images/team/2.jpg";
import img3 from "../../../assets/images/team/3.jpg";
import img1 from "../../../assets/images/testimonial/2.jpg";
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

      avatar: img1,
      name: 'Christian Bale',
      title: 'CEO',
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur atque aut dolorem officiis quae mollitia! Doloremque quibusdam assumenda repellat inventore sed voluptatibus autem est ut cumque nesciunt, quod ducimus recusandae2222222222222222222.',
      "rating": "4.3",

  },

  {

      avatar: img2,
      name: 'Christian Bale',
      title: 'CEO',
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur atque aut dolorem officiis quae mollitia! Doloremque quibusdam assumenda repellat inventore sed voluptatibus autem est ut cumque nesciunt, quod ducimus recusandae2222222222222222222.',
      "rating": "4.3",

  },

  {

      avatar: img3,
      name: 'Christian Bale',
      title: 'CEO',
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur atque aut dolorem officiis quae mollitia! Doloremque quibusdam assumenda repellat inventore sed voluptatibus autem est ut cumque nesciunt, quod ducimus recusandae2222222222222222222.',
      "rating": "4.3",

  },

  {

      avatar: img4,
      name: 'Christian Bale',
      title: 'CEO',
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur atque aut dolorem officiis quae mollitia! Doloremque quibusdam assumenda repellat inventore sed voluptatibus autem est ut cumque nesciunt, quod ducimus recusandae2222222222222222222.',
      "rating": "4.3",

  },

  {

      avatar: svg
     
  }

]
const Testimonial = () => {
    return (
        <div>
        <div className='text-center mb-4'>
        <p className="text-2xl font-bold text-orange-600 py-3">Testimonial</p>
        <h2 className="text-5xl font-semibold py-3">What Customer Says</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti nesciunt nemo <br /> sed dolores ullam necessitatibus id exercitationem repellendus veritatis iure?</p>
    </div>

    <Swiper // install Swiper modules
      modules={[Navigation]}
      spaceBetween={40}
      slidesPerView={2}
      navigation
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}>

      {

          data.map(({avatar, name, title, review, rating: ratings}, index) => {

            return(

              <SwiperSlide className='py-5' key={index} >

<div className='border p-12'>


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
