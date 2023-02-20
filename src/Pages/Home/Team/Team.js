import React from "react";
import img1 from '../../../assets/images/team/1.jpg';
import img2 from '../../../assets/images/team/2.jpg';
import img3 from '../../../assets/images/team/3.jpg';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./Team.css";

// import required modules
import { Navigation } from "swiper";

const Team = () => {
  return (
    <div>
    <div className='text-center mb-4'>
               <p className="text-2xl font-bold text-orange-600 py-3">Team</p>
               <h2 className="lg:text-5xl md:text-4xl max-sm:text-3xl font-semibold py-3">Our Team Members</h2>
               <p className="max-sm:text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti nesciunt nemo <br /> sed dolores ullam necessitatibus id exercitationem repellendus veritatis iure?</p>
           </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        breakpoints={{
            0:{
                slidesPerView:1
            },
            520:{
                slidesPerView:2
            },
            950:{
                slidesPerView:3
            }
        }}
      >
        <SwiperSlide className="grid grid-rows gap-2 my-10">
            <div className="border  p-6 rounded-lg w-full">
                <img className="swiper_image rounded-lg" src={img1} alt="" />
                <div className="pt-6">
                    <h1 className="mt-2 font-bold">Car Engine Plug</h1>
                    <h3 className="my-2">Engine Expert</h3>
                    <span>Experience: 5 Years</span>
                </div>
            </div>
        </SwiperSlide>


        <SwiperSlide className="grid grid-rows gap-2 my-10">
            <div className="border p-6 rounded-lg w-full">
                <img className=" rounded-lg" src={img2} alt="" />
                <div className="pt-6">
                    <h1 className="mt-2 font-bold">Car Engine Plug</h1>
                    <h3 className="my-2">Engine Expert</h3>
                    <span>Experience: 5 Years</span>
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide className="grid grid-rows gap-2 my-10">
            <div className="border p-6 rounded-lg w-full">
                <img className=" rounded-lg" src={img3} alt="" />
                <div className="pt-6">
                    <h1 className="mt-2 font-bold">Car Engine Plug</h1>
                    <h3 className="my-2">Engine Expert</h3>
                    <span>Experience: 5 Years</span>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Team;
