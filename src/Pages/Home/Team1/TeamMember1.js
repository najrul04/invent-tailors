import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const TeamMember1 = ({team1}) => {
    const {name, title, img} = team1;
    return (
      <Swiper
      slidesPerView={1} 
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
    >
        <SwiperSlide className='border mx-10'>
        <div>
        <img src={img} alt="Burger" />
        <h3>{title}</h3>
        <p>{name}</p>
      </div> 
        </SwiperSlide>
      </Swiper>
    );
};

export default TeamMember1;