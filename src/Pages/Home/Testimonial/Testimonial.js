import React from 'react';
import svg from '../../../assets/icons/quote.svg';
import img4 from '../../../assets/images/banner/1.jpg';
import img2 from "../../../assets/images/team/2.jpg";
import img3 from "../../../assets/images/team/3.jpg";
import img1 from "../../../assets/images/testimonial/2.jpg";
import './Testimonial.css';

// import Swiper core and required modules
import { Navigation } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const data = [

  {

      avatar: img1,
      name: 'Christian Bale',
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur atque aut dolorem officiis quae mollitia! Doloremque quibusdam assumenda repellat inventore sed voluptatibus autem est ut cumque nesciunt, quod ducimus recusandae1111111111111111.'

  },

  {

      avatar: img2,
      name: 'Christian Bale',
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur atque aut dolorem officiis quae mollitia! Doloremque quibusdam assumenda repellat inventore sed voluptatibus autem est ut cumque nesciunt, quod ducimus recusandae2222222222222222222.'

  },

  {

      avatar: img3,
      name: 'Christian Bale',
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur atque aut dolorem officiis quae mollitia! Doloremque quibusdam assumenda repellat inventore sed voluptatibus autem est ut cumque nesciunt, quod ducimus recusandae33333333333333333333.'

  },

  {

      avatar: img4,
      name: 'Christian Bale',
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur atque aut dolorem officiis quae mollitia! Doloremque quibusdam assumenda repellat inventore sed voluptatibus autem est ut cumque nesciunt, quod ducimus recusandae444444444444.'

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

    <Swiper className="container testimonials_container" // install Swiper modules
      modules={[Navigation]}
      spaceBetween={40}
      slidesPerView={2}
      navigation
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}>

      {

          data.map(({avatar, name, review}, index) => {

            return(

              <SwiperSlide key={index} >

<div className='border p-12'>


<div>
  <div className=" flex flex-row">
  <div className='testimonial_image'>
  <img src={avatar} alt="Woman's Face"/>
  </div>
  
  <div className="text-center sm:text-left">
    <div>
      <p className="text-lg text-black font-semibold">
        Erin Lindford
      </p>
      <p className="text-slate-500 font-medium">
        Product Engineer
      </p>
    </div>
   
  </div>
  <div className='testimonial_quote'>
  <img src={svg} alt="Woman's Face"/>
  </div>
  </div>
</div>


<div className='mt-4 text-left'>
<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat non voluptatem soluta. Cumque dolor adipisci amet totam. Quis, quisquam earum! Tempore laudantium perspiciatis natus corporis officia reiciendis deleniti nihil est voluptatum omnis ea, praesentium porro vitae, rem ullam sit atque laborum asperiores labore! Natus nulla doloribus cumque amet, eos optio voluptatem fuga quas animi cupiditate iste laborum culpa voluptate explicabo!</p>
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

